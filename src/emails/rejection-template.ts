export function getRejectionEmailHtml(firstName: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Application Status — Irtiqa AI</title>
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
                        <span style="display:inline-block; width:6px; height:6px; background-color:#888884; border-radius:50%; margin-right:6px;"></span> Application Status
                      </td>
                    </tr>
                  </table>
                  <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #0C0C0B; line-height: 1.25; letter-spacing: -0.5px;">
                    Application Status, <span style="color: #BEBBB3;">${firstName}.</span>
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.7;">
                    We have reviewed your operational data. At this time, we are unable to accept your application for a Growth Audit.
                  </p>
                </td>
              </tr>

              <!-- Body Content -->
              <tr>
                <td style="padding: 28px 24px 32px 24px;">
                  
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                    <tr>
                      <td style="border-left: 2px solid #BEBBB3; padding: 4px 0 4px 16px;">
                        <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.8;">
                          Irtiqa AI is designed exclusively for organizations with the fundamental traction required to rapidly scale. Our AI infrastructures are built to take proven, revenue-generating systems and exponentially multiply their throughput.
                        </p>
                        <p style="margin: 12px 0 0 0; font-size: 13px; color: #6B6B67; line-height: 1.8;">
                          Based on the baseline metrics provided, your immediate focus should be on establishing strong product-market fit and manual pipeline velocity, rather than deploying complex algorithmic scaling.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #BEBBB3; margin-bottom: 12px;">Your Next Steps</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F3EE; border: 1px solid #ECEAE2; border-radius: 16px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 18px 20px;">
                        <div style="font-size: 14px; font-weight: 700; color: #0C0C0B; margin-bottom: 6px;">The Irtiqa Network</div>
                        <div style="font-size: 12px; color: #6B6B67; line-height: 1.65; margin-bottom: 14px;">We have securely added your email to our private growth network. You will receive our internal breakdowns on how to build the initial operational traction required to eventually qualify for our infrastructure.</div>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #ECEAE2; padding-top: 24px;">
                    <tr>
                      <td>
                        <p style="margin: 0 0 16px 0; font-size: 13px; color: #6B6B67; line-height: 1.8; font-style: italic;">Keep building. We will be watching your progress.</p>
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
