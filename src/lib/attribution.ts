/**
 * IRTIQA Attribution and Traceability System
 * Captures Partner Referral IDs (?ref=PARTNERID) and UTM parameters.
 * Persists in first-party cookie (30-day window) and local storage for setter-to-closer attribution.
 */

export interface AttributionData {
  partnerRef: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  landingPage: string | null;
  referrer: string | null;
  timestamp: string;
}

const COOKIE_NAME = 'irtiqa_ref_id';
const STORAGE_KEY = 'irtiqa_attribution_data';
const COOKIE_DAYS = 30;

export function initializeAttribution(): AttributionData {
  if (typeof window === 'undefined') {
    return {
      partnerRef: null,
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
      utmTerm: null,
      utmContent: null,
      landingPage: null,
      referrer: null,
      timestamp: new Date().toISOString()
    };
  }

  const urlParams = new URLSearchParams(window.location.search);
  const paramRef = urlParams.get('ref') || urlParams.get('partner') || urlParams.get('partner_id');
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');
  const utmTerm = urlParams.get('utm_term');
  const utmContent = urlParams.get('utm_content');

  // Check existing cookie
  const existingCookieRef = getCookie(COOKIE_NAME);
  const activeRef = paramRef || existingCookieRef || null;

  if (activeRef) {
    setCookie(COOKIE_NAME, activeRef, COOKIE_DAYS);
  }

  // Load existing or assemble new attribution packet
  let existingData: Partial<AttributionData> = {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) existingData = JSON.parse(raw);
  } catch (e) {
    // Ignore storage parse issues
  }

  const attribution: AttributionData = {
    partnerRef: activeRef,
    utmSource: utmSource || existingData.utmSource || null,
    utmMedium: utmMedium || existingData.utmMedium || null,
    utmCampaign: utmCampaign || existingData.utmCampaign || null,
    utmTerm: utmTerm || existingData.utmTerm || null,
    utmContent: utmContent || existingData.utmContent || null,
    landingPage: existingData.landingPage || window.location.pathname,
    referrer: existingData.referrer || document.referrer || 'direct',
    timestamp: existingData.timestamp || new Date().toISOString()
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch (e) {
    // LocalStorage quota or privacy restrictions
  }

  return attribution;
}

export function getAttribution(): AttributionData {
  if (typeof window === 'undefined') {
    return initializeAttribution();
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const cookieRef = getCookie(COOKIE_NAME);
      if (cookieRef && !parsed.partnerRef) {
        parsed.partnerRef = cookieRef;
      }
      return parsed;
    }
  } catch (e) {
    // Fall back to runtime init
  }

  return initializeAttribution();
}

function setCookie(name: string, value: string, days: number): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : null;
}
