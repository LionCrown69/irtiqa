import { ConfirmationEmailProps } from './templates';

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

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FAFAF8; padding: 20px 0;">
  <tr>
    <td align="center">
      <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td>
      <![endif]-->
      
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; margin: 0 auto;">
        
        <!-- Sender Strip -->
        <tr>
          <td style="padding-bottom: 16px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" valign="middle">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="36" height="36" align="center" valign="middle" style="background-color: #0C0C0B; border-radius: 50%; color: #FAFAF8; font-size: 10px; font-weight: bold;">IA</td>
                      <td style="padding-left: 10px;">
                        <div style="font-size: 13px; font-weight: 600; color: #1A1A18; line-height: 1.2;">Irtiqa AI Agency</div>
                        <div style="font-size: 11px; color: #BEBBB3; line-height: 1.2;">office@irtiqaaiagency.com</div>
                      </td>
                    </tr>
                  </table>
                </td>
                <td align="right" valign="middle" style="font-size: 11px; color: #BEBBB3;">
                  ${props.emailDate}
                </td>
              </tr>
            </table>
          </td>
        </tr>

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
                        <span style="display:inline-block; width:6px; height:6px; background-color:#1641F5; border-radius:50%; margin-right:6px;"></span> Starts in 12 Hours
                      </td>
                    </tr>
                  </table>
                  <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #0C0C0B; line-height: 1.25; letter-spacing: -0.5px;">
                    See you tomorrow, <span style="color: #BEBBB3;">${props.firstName}.</span>
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.7;">
                    Your Revenue Audit is coming up. We're looking forward to diving straight into mapping out your infrastructure.
                  </p>
                </td>
              </tr>

              <!-- Body Content -->
              <tr>
                <td style="padding: 28px 24px 32px 24px;">
                  
                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #BEBBB3; margin-bottom: 12px;">Call Details</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F3EE; border: 1px solid #ECEAE2; border-radius: 16px; margin-bottom: 28px;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                          <tr>
                            <td width="40" valign="top">
                              <table width="40" height="40" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #BEBBB3; border-radius: 50%;">
                                <tr>
                                  <td align="center" valign="middle"><img src="https://img.icons8.com/ios/50/3a3a36/calendar--v1.png" width="18" height="18" alt="calendar" /></td>
                                </tr>
                              </table>
                            </td>
                            <td valign="top" style="padding-left: 12px;">
                              <div style="font-size: 16px; font-weight: 700; color: #0C0C0B; line-height: 1.2;">${props.meetingDate}</div>
                              <div style="font-size: 12px; color: #6B6B67; margin-top: 3px;">${props.meetingTime}<span style="display: inline-block; margin-left: 6px; background-color: #f0ede8; color: #6B6B67; font-size: 9px; font-weight: 600; padding: 2px 7px; border-radius: 100px;">${props.timezone}</span></div>
                            </td>
                          </tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #BEBBB3; border-radius: 12px;">
                          <tr>
                            <td width="30" align="center" valign="middle" style="padding: 10px 0 10px 14px;"><img src="https://img.icons8.com/ios/50/6b6861/link--v1.png" width="14" height="14" alt="link" /></td>
                            <td style="padding: 10px 14px 10px 10px;"><a href="${props.meetingLink}" style="font-size: 11px; color: #1A1A18; font-weight: 500; text-decoration: none;">${props.meetingLink}</a></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #BEBBB3; margin-bottom: 12px;">Optional Call Prep</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F3EE; border: 1px solid #ECEAE2; border-radius: 16px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 18px 20px;">
                        <table width="36" height="36" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #BEBBB3; border-radius: 50%; margin-bottom: 12px;"><tr><td align="center" valign="middle"><img src="https://img.icons8.com/ios/50/3a3a36/survey.png" width="16" height="16" alt="survey" /></td></tr></table>
                        <div style="font-size: 14px; font-weight: 700; color: #0C0C0B; margin-bottom: 6px;">Provide early context</div>
                        <div style="font-size: 12px; color: #6B6B67; line-height: 1.65; margin-bottom: 14px;">If you want to save time, you can drop some context into this quick diagnostic. If not, don't sweat it—we'll cover everything live on the call.</div>
                        <table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="border: 1px solid #BEBBB3; border-radius: 100px;"><a href="${props.surveyLink}" style="display: block; padding: 9px 18px; color: #1A1A18; font-size: 12px; font-weight: 600; text-decoration: none;">Share Details (Optional) &rarr;</a></td></tr></table>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #ECEAE2; padding-top: 24px;">
                    <tr>
                      <td>
                        <p style="margin: 0 0 16px 0; font-size: 13px; color: #6B6B67; line-height: 1.8; font-style: italic;">Looking forward to finding your revenue bottlenecks.</p>
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="38" height="38" align="center" valign="middle" style="background-color: #F4F3EE; border: 1px solid #BEBBB3; border-radius: 50%; font-size: 11px; font-weight: 700; color: #BEBBB3;">IA</td>
                            <td style="padding-left: 10px;"><div style="font-size: 13px; font-weight: 600; color: #1A1A18;">The Irtiqa Team</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding: 20px 24px; border-top: 1px solid #ECEAE2; background-color: #ffffff; border-bottom-left-radius: 28px; border-bottom-right-radius: 28px;">
                  <div style="font-size: 12px; font-weight: 700; color: #BEBBB3; letter-spacing: 0.3px; margin-bottom: 3px;">irtiqa</div>
                  <div style="font-size: 10px; color: #BEBBB3; margin-bottom: 12px;">Revenue infrastructure for serious businesses.</div>
                  <div style="font-size: 10px;">
                    <a href="${props.rescheduleLink}" style="color: #BEBBB3; text-decoration: none;">Reschedule</a>
                    <span style="color: #BEBBB3; margin: 0 6px;">&middot;</span>
                    <a href="${props.unsubscribeLink}" style="color: #BEBBB3; text-decoration: none;">Cancel</a>
                  </div>
                </td>
              </tr>

              </table>
            </div>
          </td>
        </tr>

      </table>
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
  <title>Starting Now: Your Revenue Audit</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
    body { margin: 0; padding: 0; background-color: #FAFAF8; font-family: 'Inter', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    table { border-collapse: separate; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; outline: none; text-decoration: none; }
    a { text-decoration: none; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #FAFAF8; font-family: 'Inter', Arial, sans-serif;">

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FAFAF8; padding: 20px 0;">
  <tr>
    <td align="center">
      <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td>
      <![endif]-->
      
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; margin: 0 auto;">
        
        <!-- Sender Strip -->
        <tr>
          <td style="padding-bottom: 16px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" valign="middle">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="36" height="36" align="center" valign="middle" style="background-color: #0C0C0B; border-radius: 50%; color: #FAFAF8; font-size: 10px; font-weight: bold;">IA</td>
                      <td style="padding-left: 10px;">
                        <div style="font-size: 13px; font-weight: 600; color: #1A1A18; line-height: 1.2;">Irtiqa AI Agency</div>
                        <div style="font-size: 11px; color: #BEBBB3; line-height: 1.2;">office@irtiqaaiagency.com</div>
                      </td>
                    </tr>
                  </table>
                </td>
                <td align="right" valign="middle" style="font-size: 11px; color: #BEBBB3;">
                  ${props.emailDate}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Main Card (Curvy) -->
        <tr>
          <td>
            <div style="border-radius: 28px; overflow: hidden; border: 1px solid #ECEAE2; box-shadow: 0 4px 12px rgba(0,0,0,0.03); background-color: #ffffff;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff;">
              
              <!-- Hero -->
              <tr>
                <td style="background-color: #F4F3EE; padding: 32px 24px 28px 24px; border-bottom: 1px solid #ECEAE2; border-top-left-radius: 28px; border-top-right-radius: 28px; text-align: center;">
                  <table border="0" cellspacing="0" cellpadding="0" align="center" style="background-color: #f0ede8; border: 1px solid #BEBBB3; border-radius: 100px; margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 5px 12px 5px 9px; font-size: 10px; font-weight: 600; color: #6B6B67; text-transform: uppercase;">
                        <span style="display:inline-block; width:6px; height:6px; background-color:#1641F5; border-radius:50%; margin-right:6px;"></span> Starting Now
                      </td>
                    </tr>
                  </table>
                  <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #0C0C0B; line-height: 1.25; letter-spacing: -0.5px;">
                    We're getting on, <span style="color: #BEBBB3;">${props.firstName}.</span>
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.7;">
                    The Irtiqa Team is in the room. Click the button below to join the call.
                  </p>
                </td>
              </tr>
              
              <!-- Body Content -->
              <tr>
                <td style="padding: 40px 32px; text-align: center;">
                  <!-- Massive Join Button -->
                  <table border="0" cellspacing="0" cellpadding="0" width="100%">
                    <tr>
                      <td align="center">
                        <a href="${props.meetingLink}" style="display: inline-block; background-color: #0C0C0B; color: #ffffff; font-size: 15px; font-weight: 700; text-decoration: none; padding: 18px 40px; border-radius: 100px; box-shadow: 0 4px 14px rgba(26,26,24,0.25);">
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
