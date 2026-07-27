import { ConfirmationEmailProps } from './templates';

export function getAuthorityEmailHtml48hr(props: ConfirmationEmailProps, challenge?: string) {
  let caseStudyBody = "";
  
  const challengeHtml = challenge ? `
    <div style="background-color: #F4F3EE; border-left: 2px solid #BEBBB3; padding: 12px 16px; margin: 24px 0; border-radius: 0 8px 8px 0;">
      <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.6;">
        Since you mentioned your primary bottleneck is <strong style="color: #1A1A18; font-weight: 600;">"${challenge}"</strong>, this breakdown on how we plug revenue leaks and compress sales cycles will be highly relevant.
      </p>
    </div>
  ` : "";

  const c = (challenge || "").toLowerCase();

  if (c.includes("founder") || c.includes("operator") || c.includes("closing") || c.includes("delegation") || c.includes("too much to do")) {
    caseStudyBody = `
      ${challengeHtml}
      <p>Last quarter, we worked with a 7-figure firm stuck at $60k/mo because the founder couldn't clone himself. We built a custom autonomous pipeline that completely removed him from the top-of-funnel.</p>
      <p>By our call on ${props.meetingDate.split(',')[0]}, I will have a high-level map of how we can build this exact architecture for ${props.companyName}.</p>
    `;
  } else if (c.includes("lead") || c.includes("volume") || c.includes("pipeline") || c.includes("acquisition") || c.includes("inbound")) {
    caseStudyBody = `
      ${challengeHtml}
      <p>I noticed your primary bottleneck is lead volume. Getting consistent, high-intent meetings is the hardest part of scaling.</p>
      <p>Recently, we deployed an autonomous outreach architecture for a B2B firm that was relying entirely on referrals. Within 30 days, their outbound calendar was completely saturated.</p>
      <p>Before our call on ${props.meetingDate.split(',')[0]}, I am analyzing your current marketing stack to see exactly where we can plug this engine in for ${props.companyName}.</p>
    `;
  } else {
    caseStudyBody = `
      ${challengeHtml}
      <p>We are currently evaluating the baseline data for ${props.companyName}.</p>
      <p>We recently deployed a full-stack growth architecture for a partner that scaled their operations significantly without adding headcount, completely relying on smart system automation.</p>
      <p>I am mapping out how we can apply these exact operational levers to your business on ${props.meetingDate.split(',')[0]}.</p>
    `;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { font-family: 'Inter', Arial, sans-serif; background-color: #FAFAF8; color: #1A1A18; margin: 0; padding: 40px 20px; }
  .container { max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 32px; border: 1px solid #ECEAE2; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
  h2 { font-size: 18px; margin-top: 0; color: #0C0C0B; }
  p { font-size: 14px; line-height: 1.6; color: #4A4A46; }
  .box { background: #FAFAF8; border: 1px solid #ECEAE2; border-radius: 8px; padding: 16px; margin: 24px 0; }
  .btn { display: inline-block; background: #0C0C0B; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-top: 12px; }
  .footer { margin-top: 32px; border-top: 1px solid #ECEAE2; padding-top: 24px; text-align: center; }
  .footer p, .footer a { font-size: 12px; color: #888884; margin: 4px 0; text-decoration: none; }
</style>
</head>
<body>
  <div class="container">
    <h2>Private Breakdown: ${props.companyName}</h2>
    <p>Hi ${props.firstName},</p>
    ${caseStudyBody}
    
    <div class="box" style="margin-top: 32px;">
      <h3 style="font-size: 14px; margin-top: 0;">Pending Action Required</h3>
      <p style="font-size: 13px; margin-bottom: 0;">If you haven't already, please finalize your Pre-Audit Brief so our partners can finish their pipeline analysis before we speak.</p>
      <a href="https://irtiqaaiagency.com/brief/${props.refId}" class="btn" style="background: #EBE7D6; color: #0C0C0B !important;">Complete Your Brief &rarr;</a>
    </div>

    <p style="margin-top: 32px;">Talk soon,</p>
    <p><strong>Irtiqa Growth Partners</strong><br>Infrastructure & Architecture</p>

    <div class="footer">
      <p>Irtiqa AI</p>
      <p><a href="${props.unsubscribeLink}">Manage Notifications</a></p>
    </div>
  </div>
</body>
</html>
  `;
}

export function getReminderEmailHtml12hr(props: ConfirmationEmailProps) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>See you tomorrow: Your Revenue Audit — Irtiqa AI</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
    body { margin: 0; padding: 0; background-color: #FAFAF8; font-family: 'Inter', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    table { border-collapse: separate; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; outline: none; text-decoration: none; }
    a { text-decoration: none; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #FAFAF8; font-family: 'Inter', Arial, sans-serif;">

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FAFAF8; padding: 40px 0;">
  <tr>
    <td align="center">
      <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td>
      <![endif]-->
      
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; margin: 0 auto;">
        
        <tr>
          <td>
            <div style="border-radius: 28px; overflow: hidden; border: 1px solid #ECEAE2; box-shadow: 0 4px 12px rgba(0,0,0,0.03); background-color: #ffffff;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff;">
                
              <tr>
                <td style="background-color: #F4F3EE; padding: 32px 24px 28px 24px; border-bottom: 1px solid #ECEAE2; border-top-left-radius: 28px; border-top-right-radius: 28px;">
                  <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #0C0C0B; line-height: 1.25; letter-spacing: -0.5px;">
                    Tomorrow, <span style="color: #BEBBB3;">${props.firstName}.</span>
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.7;">
                    Your Growth Audit is locked in. We'll be mapping out your exact operational bottlenecks.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding: 28px 24px 32px 24px;">
                  
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FAFAF8; border: 1px solid #ECEAE2; border-left: 3px solid #1641F5; border-radius: 12px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 16px;">
                        <div style="font-size: 13px; font-weight: 700; color: #0C0C0B; margin-bottom: 4px;">Action Required</div>
                        <div style="font-size: 12px; color: #6B6B67; line-height: 1.6;">Please ensure you are at a desktop computer so we can review your funnel metrics together. If you still haven't submitted your Pre-Audit Brief, please do so now so our partners can finish their pipeline analysis before we speak.</div>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 16px 18px; border: 1px solid #ECEAE2; border-radius: 16px;">
                        <div style="font-size: 16px; font-weight: 700; color: #0C0C0B; line-height: 1.2;">${props.meetingDate}</div>
                        <div style="font-size: 12px; color: #6B6B67; margin-top: 3px;">${props.meetingTime} ${props.timezone}</div>
                        <div style="margin-top: 12px;">
                          <a href="${props.meetingLink}" style="color: #1641F5; font-size: 12px; font-weight: 600; text-decoration: underline;">Zoom Link</a>
                        </div>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #ECEAE2; padding-top: 24px;">
                    <tr>
                      <td>
                        <p style="margin: 0 0 16px 0; font-size: 13px; color: #6B6B67; line-height: 1.8; font-style: italic;">We'll see you in the boardroom.</p>
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="38" height="38" align="center" valign="middle" style="background-color: #F4F3EE; border: 1px solid #BEBBB3; border-radius: 50%; font-size: 11px; font-weight: 700; color: #BEBBB3;">IA</td>
                            <td style="padding-left: 10px;"><div style="font-size: 13px; font-weight: 600; color: #1A1A18;">Irtiqa Growth Partners</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>
              
              <tr>
                <td align="center" style="padding: 20px 24px; border-top: 1px solid #ECEAE2; background-color: #ffffff; border-bottom-left-radius: 28px; border-bottom-right-radius: 28px;">
                  <div style="font-size: 10px;">
                    <a href="${props.rescheduleLink}" style="color: #BEBBB3; text-decoration: none;">Reschedule</a>
                    <span style="color: #ECEAE2; margin: 0 6px;">|</span>
                    <a href="${props.unsubscribeLink}" style="color: #BEBBB3; text-decoration: none;">Unsubscribe</a>
                  </div>
                </td>
              </tr>

              </table>
            </div>
          </td>
        </tr>
      </table>
      
      <!--[if (gte mso 9)|(IE)]>
      </td></tr></table>
      <![endif]-->
      
    </td>
  </tr>
</table>

</body>
</html>`;
}

export function getReminderEmailHtml5min(props: ConfirmationEmailProps) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We are live: Your Revenue Audit</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
    body { margin: 0; padding: 0; background-color: #FAFAF8; font-family: 'Inter', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    table { border-collapse: separate; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; outline: none; text-decoration: none; }
    a { text-decoration: none; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #FAFAF8; font-family: 'Inter', Arial, sans-serif;">

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FAFAF8; padding: 40px 0;">
  <tr>
    <td align="center">
      
      <!--[if (gte mso 9)|(IE)]>
      <table width="500" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td>
      <![endif]-->
      
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 500px; width: 100%; margin: 0 auto;">
        
        <tr>
          <td>
            <div style="border-radius: 28px; overflow: hidden; border: 1px solid #ECEAE2; box-shadow: 0 4px 12px rgba(0,0,0,0.03); background-color: #ffffff;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff;">
                
              <tr>
                <td align="center" style="padding: 40px 32px;">
                  
                  <div style="width: 48px; height: 48px; background-color: #E2F5EA; border-radius: 50%; display: inline-block; margin-bottom: 20px; line-height: 48px;">
                    <span style="display:inline-block; width:12px; height:12px; background-color:#10B981; border-radius:50%;"></span>
                  </div>

                  <h1 style="margin: 0 0 12px 0; font-size: 24px; font-weight: 700; color: #0C0C0B; letter-spacing: -0.5px;">
                    We are live.
                  </h1>
                  
                  <p style="margin: 0 0 32px 0; font-size: 14px; color: #6B6B67; line-height: 1.6;">
                    Hey ${props.firstName}, we are opening the boardroom now. Click below to join the session and let's map out your scale.
                  </p>

                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="background-color: #1641F5; border-radius: 100px;">
                        <a href="${props.meetingLink}" style="display: block; padding: 14px 28px; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none;">
                          Join Meeting Room &rarr;
                        </a>
                      </td>
                    </tr>
                  </table>
                  
                  <div style="margin-top: 24px; font-size: 11px; color: #BEBBB3;">
                    Or paste this link into your browser:<br />
                    <a href="${props.meetingLink}" style="color: #1641F5; text-decoration: underline;">${props.meetingLink}</a>
                  </div>

                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td align="center" style="padding: 20px 24px; border-top: 1px solid #ECEAE2; background-color: #ffffff; border-bottom-left-radius: 28px; border-bottom-right-radius: 28px;">
                  <div style="font-size: 12px; font-weight: 700; color: #BEBBB3; letter-spacing: 0.3px; margin-bottom: 3px;">irtiqa</div>
                </td>
              </tr>

              </table>
            </div>
          </td>
        </tr>

      </table>
      
      <!--[if (gte mso 9)|(IE)]>
      </td></tr></table>
      <![endif]-->
      
    </td>
  </tr>
</table>

</body>
</html>`;
}
