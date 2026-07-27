export async function performShadowAudit(websiteUrl: string) {
  const result = {
    hasPixel: false,
    hasAnalytics: false,
    hasClearCta: false,
    titleOptimized: false,
    siteTitle: "Unknown",
    primaryH1: "Unknown",
    scriptCount: 0,
    platform: "Custom Build",
    loadSpeedStatus: "Unknown"
  };

  try {
    let target = websiteUrl;
    if (!target.startsWith('http')) {
      target = `https://${target}`;
    }

    // Lightning fast HTTP request (timeout after 3 seconds so serverless doesn't hang)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    
    const res = await fetch(target, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) {
      result.loadSpeedStatus = "Failed or Blocked";
      return result;
    }

    const html = await res.text();
    const lowerHtml = html.toLowerCase();

    // 1. Pixel/Analytics Check
    if (lowerHtml.includes('gtag') || lowerHtml.includes('google-analytics') || lowerHtml.includes('ua-')) {
      result.hasAnalytics = true;
    }
    if (lowerHtml.includes('fbq') || lowerHtml.includes('facebook-pixel')) {
      result.hasPixel = true;
    }

    // 2. SEO & Positioning Extraction
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch && titleMatch[1]) {
      result.siteTitle = titleMatch[1].trim();
      result.titleOptimized = true;
    }
    
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match && h1Match[1]) {
      result.primaryH1 = h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().substring(0, 60);
      if (result.primaryH1.length === 60) result.primaryH1 += "...";
    }

    // 3. Infrastructure & Complexity Check
    const scriptMatches = html.match(/<script/g);
    result.scriptCount = scriptMatches ? scriptMatches.length : 0;
    
    if (lowerHtml.includes('wp-content') || lowerHtml.includes('wordpress')) result.platform = "WordPress";
    else if (lowerHtml.includes('shopify')) result.platform = "Shopify";
    else if (lowerHtml.includes('webflow')) result.platform = "Webflow";
    else if (lowerHtml.includes('wix')) result.platform = "Wix";
    else if (lowerHtml.includes('squarespace')) result.platform = "Squarespace";
    else if (lowerHtml.includes('nextjs') || lowerHtml.includes('__next')) result.platform = "Next.js";
    else if (lowerHtml.includes('react')) result.platform = "React/SPA";

    // 4. Funnel Check (Looking for strong CTAs)
    if (lowerHtml.includes('book') || lowerHtml.includes('schedule') || lowerHtml.includes('buy') || lowerHtml.includes('cart')) {
      result.hasClearCta = true;
    }

    result.loadSpeedStatus = "Analyzed";
    return result;

  } catch (error) {
    console.error("Shadow Audit Failed for:", websiteUrl, error);
    result.loadSpeedStatus = "Timeout / Protected";
    return result;
  }
}
