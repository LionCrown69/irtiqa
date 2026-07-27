export function getShadowAuditEmailHtml(firstName: string, companyUrl: string, auditResults: any) {
  let findingsHtml = `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #ECEAE2;">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #BEBBB3; border-radius: 50%; font-size: 10px; font-weight: 700; color: #BEBBB3; text-align: center; line-height: 24px;">1</div></td>
              <td valign="top" style="padding-left: 12px;">
                <div style="font-size: 13px; font-weight: 600; color: #1A1A18; margin-bottom: 2px;">Market Positioning</div>
                <div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">We analyzed your core offer: <em>"${auditResults.primaryH1 || "Not Optimized"}"</em>. In its current state, this positioning is likely bleeding conversions. You need an aggressive, undeniable thesis to lower your Cost Per Acquisition (CPA) in a saturated market.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #ECEAE2;">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #BEBBB3; border-radius: 50%; font-size: 10px; font-weight: 700; color: #BEBBB3; text-align: center; line-height: 24px;">2</div></td>
              <td valign="top" style="padding-left: 12px;">
                <div style="font-size: 13px; font-weight: 600; color: #1A1A18; margin-bottom: 2px;">Operational Drag</div>
                <div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">We detected friction in your customer journey. When high-intent traffic experiences friction, they bounce. This directly inflates your ad spend and slashes your profit margins. True scale requires frictionless acquisition.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;

  if (!auditResults.hasAnalytics && !auditResults.hasPixel) {
    findingsHtml += `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #ECEAE2;">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #BEBBB3; border-radius: 50%; font-size: 10px; font-weight: 700; color: #BEBBB3; text-align: center; line-height: 24px;">3</div></td>
              <td valign="top" style="padding-left: 12px;">
                <div style="font-size: 13px; font-weight: 600; color: #1A1A18; margin-bottom: 2px;">Customer Data Blindspots</div>
                <div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">Your system isn't capturing buying behavior correctly. If you aren't feeding clean conversion data back to the algorithms, you are effectively burning cash and letting competitors buy your customers for cheaper.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
  } else {
    findingsHtml += `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #ECEAE2;">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #BEBBB3; border-radius: 50%; font-size: 10px; font-weight: 700; color: #BEBBB3; text-align: center; line-height: 24px;">3</div></td>
              <td valign="top" style="padding-left: 12px;">
                <div style="font-size: 13px; font-weight: 600; color: #1A1A18; margin-bottom: 2px;">Algorithm Inefficiencies</div>
                <div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">We detected baseline tracking, but we need to verify if your systems are passing back high-value conversion events. Weak data pipelines lead to skyrocketing acquisition costs.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
  }

  findingsHtml += `
      <tr>
        <td style="padding: 12px 0;">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #BEBBB3; border-radius: 50%; font-size: 10px; font-weight: 700; color: #BEBBB3; text-align: center; line-height: 24px;">4</div></td>
              <td valign="top" style="padding-left: 12px;">
                <div style="font-size: 13px; font-weight: 600; color: #1A1A18; margin-bottom: 2px;">Manual Bottlenecks</div>
                <div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">It is clear your team is relying heavily on manual labor to close the gap. Taking a company from millions to tens of millions requires autonomous systems that sell and fulfill while you sleep.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shadow Audit Complete — Irtiqa AI</title>
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
        
        <!-- Main Card (Curvy) -->
        <tr>
          <td>
            <div style="border-radius: 28px; overflow: hidden; border: 1px solid #ECEAE2; box-shadow: 0 4px 12px rgba(0,0,0,0.03); background-color: #ffffff;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff;">
                
              <!-- Hero -->
              <tr>
                <td style="background-color: #F4F3EE; padding: 32px 24px 28px 24px; border-bottom: 1px solid #ECEAE2; border-top-left-radius: 28px; border-top-right-radius: 28px;">
                  <table border="0" cellspacing="0" cellpadding="0" style="background-color: #f0ede8; border: 1px solid #BEBBB3; border-radius: 100px; margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 5px 12px 5px 9px; font-size: 10px; font-weight: 600; color: #6B6B67; text-transform: uppercase;">
                        <span style="display:inline-block; width:6px; height:6px; background-color:#1641F5; border-radius:50%; margin-right:6px;"></span> Preliminary Analysis
                      </td>
                    </tr>
                  </table>
                  <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #0C0C0B; line-height: 1.25; letter-spacing: -0.5px;">
                    We ran an analysis on <span style="color: #BEBBB3;">${companyUrl || "your business"}.</span>
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.7;">
                    Our growth team completed a preliminary scan of your digital footprint ahead of your upcoming session.
                  </p>
                </td>
              </tr>

              <!-- Body Content -->
              <tr>
                <td style="padding: 28px 24px 32px 24px;">
                  
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                    <tr>
                      <td style="border-left: 2px solid #BEBBB3; padding: 4px 0 4px 16px;">
                        <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.8; font-style: italic;">
                          Hey <strong style="font-weight: 600; color: #1A1A18; font-style: normal;">${firstName}</strong> — we found immediate bottlenecks that are likely leaking revenue right now. As your Growth Partner, our objective is to scale your valuation aggressively. Patching these leaks is step one.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #BEBBB3; margin-bottom: 12px;">Identified Revenue Leaks</div>
                  
                  <!-- Findings List -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                    ${findingsHtml}
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #ECEAE2; padding-top: 24px;">
                    <tr>
                      <td>
                        <p style="margin: 0 0 16px 0; font-size: 13px; color: #6B6B67; line-height: 1.8; font-style: italic;">We're going to break down exactly how to patch these leaks (and build a scalable growth system) during your session. Please have your current conversion metrics and customer acquisition costs ready.</p>
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
              
              </table>
            </div>
            
            <!-- Footer text -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
              <tr>
                <td align="center" style="padding: 24px; border-top: 1px solid #ECEAE2;">
                  <div style="font-size: 10px; color: #BEBBB3; line-height: 1.6;">
                  Irtiqa AI<br />
                  <a href="https://irtiqaaiagency.com" style="color: #BEBBB3; text-decoration: underline;">irtiqaaiagency.com</a>
                  </div>
                </td>
              </tr>
            </table>

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
