const fs = require('fs');

function getLightTemplate() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Revenue Audit is Confirmed — Irtiqa AI</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
    body { margin: 0; padding: 0; background-color: #f9f8f6; font-family: 'Inter', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    table { border-collapse: collapse; }
    img { border: 0; outline: none; text-decoration: none; }
    a { text-decoration: none; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f9f8f6; font-family: 'Inter', Arial, sans-serif;">

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f8f6; padding: 20px 0;">
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
                      <td width="36" height="36" align="center" valign="middle" style="background-color: #1a1a18; border-radius: 50%; color: #f9f8f6; font-size: 10px; font-weight: bold;">IA</td>
                      <td style="padding-left: 10px;">
                        <div style="font-size: 13px; font-weight: 600; color: #3a3a36; line-height: 1.2;">Irtiqa AI Agency</div>
                        <div style="font-size: 11px; color: #8a8780; line-height: 1.2;">office@irtiqaaiagency.com</div>
                      </td>
                    </tr>
                  </table>
                </td>
                <td align="right" valign="middle" style="font-size: 11px; color: #8a8780;">
                  \${props.emailDate}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Main Card -->
        <tr>
          <td>
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #e8e4de; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              
              <!-- Hero -->
              <tr>
                <td style="background-color: #fbfaf8; padding: 32px 24px 28px 24px; border-bottom: 1px solid #e8e4de;">
                  <table border="0" cellspacing="0" cellpadding="0" style="background-color: #f0ede8; border: 1px solid #ddd8d0; border-radius: 20px; margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 5px 12px 5px 9px; font-size: 10px; font-weight: 600; color: #5a5753; text-transform: uppercase;">
                        <span style="display:inline-block; width:6px; height:6px; background-color:#10b981; border-radius:50%; margin-right:6px;"></span> Booking Confirmed
                      </td>
                    </tr>
                  </table>
                  <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #1a1a18; line-height: 1.25; letter-spacing: -0.5px;">
                    You're in, <span style="color: #8a8780;">\${props.firstName}.</span><br />Audit locked.
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #6b6861; line-height: 1.7;">
                    We've reserved your slot. Our team is already looking forward to mapping your revenue opportunity with you.
                  </p>
                </td>
              </tr>

              <!-- Body Content -->
              <tr>
                <td style="padding: 28px 24px 32px 24px;">
                  
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                    <tr>
                      <td style="border-left: 2px solid #ddd8d0; padding: 4px 0 4px 16px;">
                        <p style="margin: 0; font-size: 13px; color: #6b6861; line-height: 1.8; font-style: italic;">
                          Hey <strong style="font-weight: 600; color: #3a3a36; font-style: normal;">\${props.firstName}</strong> — most businesses sit on revenue leaks for months without ever knowing where they are. You've already done the hard part by showing up. We'll do the rest on the call.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #8a8780; margin-bottom: 12px;">Your Audit Call</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fbfaf8; border: 1px solid #e8e4de; border-radius: 12px; margin-bottom: 14px;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                          <tr>
                            <td width="40" valign="top">
                              <table width="40" height="40" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #ddd8d0; border-radius: 10px;">
                                <tr>
                                  <td align="center" valign="middle"><img src="https://img.icons8.com/ios/50/3a3a36/calendar--v1.png" width="18" height="18" style="display:block;" alt="calendar" /></td>
                                </tr>
                              </table>
                            </td>
                            <td valign="top" style="padding-left: 12px;">
                              <div style="font-size: 16px; font-weight: 700; color: #1a1a18; line-height: 1.2;">\${props.meetingDate}</div>
                              <div style="font-size: 12px; color: #6b6861; margin-top: 3px;">\${props.meetingTime}<span style="display: inline-block; margin-left: 6px; background-color: #f0ede8; color: #5a5753; font-size: 9px; font-weight: 600; padding: 2px 7px; border-radius: 10px;">\${props.timezone}</span></div>
                            </td>
                          </tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #ddd8d0; border-radius: 8px;">
                          <tr>
                            <td width="30" align="center" valign="middle" style="padding: 10px 0 10px 14px;"><img src="https://img.icons8.com/ios/50/6b6861/link--v1.png" width="14" height="14" style="display:block;" alt="link" /></td>
                            <td style="padding: 10px 14px 10px 10px;"><a href="\${props.meetingLink}" style="font-size: 11px; color: #3a3a36; font-weight: 500; text-decoration: none;">\${props.meetingLink}</a></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Tear -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 20px 0;">
                    <tr>
                      <td width="20"><div style="width: 20px; height: 20px; background-color: #f9f8f6; border-radius: 50%; margin-left: -34px; border-right: 1px solid #e8e4de;"></div></td>
                      <td style="border-top: 1.5px dashed #ddd8d0;">&nbsp;</td>
                      <td width="20"><div style="width: 20px; height: 20px; background-color: #f9f8f6; border-radius: 50%; margin-right: -34px; border-left: 1px solid #e8e4de;"></div></td>
                    </tr>
                  </table>

                  <!-- Meta -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                    <tr>
                      <td width="48%" valign="top">
                        <div style="font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #8a8780; margin-bottom: 5px;">Company</div>
                        <div style="font-size: 14px; font-weight: 600; color: #3a3a36;">\${props.companyName}</div>
                      </td>
                      <td width="4%" style="border-left: 1px solid #e8e4de;"></td>
                      <td width="48%" valign="top" style="padding-left: 18px;">
                        <div style="font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #8a8780; margin-bottom: 5px;">Ref ID</div>
                        <div style="font-family: monospace; font-size: 11px; color: #8a8780;">\${props.refId}</div>
                      </td>
                    </tr>
                  </table>

                  <!-- Barcode Fake -->
                  <div style="width: 100%; height: 20px; background: repeating-linear-gradient(90deg, #1a1a18 0, #1a1a18 2px, transparent 2px, transparent 5px, #1a1a18 5px, #1a1a18 6px, transparent 6px, transparent 10px); opacity: 0.15; margin-bottom: 24px;"></div>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #8a8780; margin-bottom: 12px;">On File</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fbfaf8; border: 1px solid #e8e4de; border-radius: 12px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom: 1px solid #e8e4de;">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #8a8780;">Contact</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #3a3a36;">\${props.fullName}</td></tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom: 1px solid #e8e4de;">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #8a8780;">Company</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #3a3a36;">\${props.companyName}</td></tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #8a8780;">Website</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #3a3a36;"><a href="\${props.companyWebsite}" style="color: #3a3a36; border-bottom: 1px solid #ddd8d0;">\${props.companyWebsiteDisplay}</a></td></tr>
                        </table>
                        <div style="font-size: 12px; color: #6b6861; line-height: 1.65; padding-top: 10px; margin-top: 6px; border-top: 1px solid #e8e4de;">\${props.companySummary}</div>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #8a8780; margin-bottom: 12px;">Before The Call</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fbfaf8; border: 1px solid #e8e4de; border-radius: 12px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 18px 20px;">
                        <table width="36" height="36" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #ddd8d0; border-radius: 10px; margin-bottom: 12px;"><tr><td align="center" valign="middle"><img src="https://img.icons8.com/ios/50/3a3a36/survey.png" width="16" height="16" alt="survey" /></td></tr></table>
                        <div style="font-size: 14px; font-weight: 700; color: #1a1a18; margin-bottom: 6px;">Help us prep for your audit</div>
                        <div style="font-size: 12px; color: #6b6861; line-height: 1.65; margin-bottom: 14px;">Take 3 minutes to share details about \${props.companyName} and drop any helpful files (pricing sheets, CRM exports, etc.) — optional, but it makes us more prepared.</div>
                        <table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="border: 1px solid #8a8780; border-radius: 8px;"><a href="\${props.surveyLink}" style="display: block; padding: 9px 16px; color: #3a3a36; font-size: 12px; font-weight: 600; text-decoration: none;">Share Details & Files &rarr;</a></td></tr></table>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #8a8780; margin-bottom: 12px;">What We'll Cover</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e8e4de;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #ddd8d0; border-radius: 50%; font-size: 10px; font-weight: 700; color: #8a8780; text-align: center; line-height: 24px;">1</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #3a3a36; margin-bottom: 2px;">Map your revenue gaps</div><div style="font-size: 11px; color: #6b6861; line-height: 1.6;">Where leads, follow-ups, or ops are losing you money — without jargon.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e8e4de;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #ddd8d0; border-radius: 50%; font-size: 10px; font-weight: 700; color: #8a8780; text-align: center; line-height: 24px;">2</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #3a3a36; margin-bottom: 2px;">Show you what's fixable first</div><div style="font-size: 11px; color: #6b6861; line-height: 1.6;">A clear priority list. Which systems drive maximum revenue impact.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #ddd8d0; border-radius: 50%; font-size: 10px; font-weight: 700; color: #8a8780; text-align: center; line-height: 24px;">3</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #3a3a36; margin-bottom: 2px;">You get a plan. No pressure.</div><div style="font-size: 11px; color: #6b6861; line-height: 1.6;">Concrete roadmap whether we work together or not.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fbfaf8; border: 1px solid #e8e4de; border-left: 2px solid #6b6861; border-radius: 8px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 14px 16px;">
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="16" valign="top"><img src="https://img.icons8.com/ios/50/6b6861/info--v1.png" width="16" height="16" alt="info" /></td>
                            <td style="padding-left: 12px; font-size: 12px; color: #6b6861; line-height: 1.65;"><strong style="color: #3a3a36; font-weight: 600;">One thing before the call —</strong> have a rough sense of your monthly leads and where your biggest bottleneck is. That's it. We handle everything else.</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin-bottom: 12px;">
                    <tr><td align="center" style="background-color: #1a1a18; border-radius: 10px;"><a href="\${props.meetingLink}" style="display: block; padding: 14px 20px; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none;">Join Your Revenue Audit &rarr;</a></td></tr>
                  </table>
                  <div style="text-align: center; font-size: 11px; color: #8a8780; margin-bottom: 28px;">Need to reschedule? <a href="\${props.rescheduleLink}" style="color: #6b6861; text-decoration: underline;">Click here</a> or reply to this email.</div>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #e8e4de; padding-top: 24px;">
                    <tr>
                      <td>
                        <p style="margin: 0 0 16px 0; font-size: 13px; color: #6b6861; line-height: 1.8; font-style: italic;">Looking forward to seeing you on the call, \${props.firstName}. This one conversation could change how your business operates.</p>
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="38" height="38" align="center" valign="middle" style="background-color: #fbfaf8; border: 1px solid #ddd8d0; border-radius: 50%; font-size: 11px; font-weight: 700; color: #8a8780;">IA</td>
                            <td style="padding-left: 10px;"><div style="font-size: 13px; font-weight: 600; color: #3a3a36;">The Irtiqa Team</div><div style="font-size: 11px; color: #8a8780;">Irtiqa AI Agency</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding: 20px 24px; border-top: 1px solid #e8e4de; background-color: #ffffff;">
                  <div style="font-size: 12px; font-weight: 700; color: #8a8780; letter-spacing: 0.3px; margin-bottom: 3px;">irtiqa</div>
                  <div style="font-size: 10px; color: #8a8780; margin-bottom: 12px;">Revenue infrastructure for serious businesses.</div>
                  <div style="font-size: 10px;">
                    <a href="https://irtiqaaiagency.com" style="color: #8a8780; text-decoration: none;">Website</a>
                    <span style="color: #ddd8d0; margin: 0 6px;">&middot;</span>
                    <a href="mailto:office@irtiqaaiagency.com" style="color: #8a8780; text-decoration: none;">Contact</a>
                    <span style="color: #ddd8d0; margin: 0 6px;">&middot;</span>
                    <a href="\${props.unsubscribeLink}" style="color: #8a8780; text-decoration: none;">Unsubscribe</a>
                  </div>
                </td>
              </tr>

            </table>
          </td>
        </tr>
        
        <!-- Sent to -->
        <tr>
          <td align="center" style="padding-top: 16px; font-size: 10px; color: #8a8780;">
            Invite sent to <a href="mailto:\${props.clientEmail}" style="color: #6b6861; text-decoration: none;">\${props.clientEmail}</a>
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

function getDarkTemplate() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Revenue Audit is Confirmed — Irtiqa AI</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
    body { margin: 0; padding: 0; background-color: #0c0c0b; font-family: 'Inter', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    table { border-collapse: collapse; }
    img { border: 0; outline: none; text-decoration: none; }
    a { text-decoration: none; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0c0c0b; font-family: 'Inter', Arial, sans-serif;">

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0c0c0b; padding: 20px 0;">
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
                      <td width="36" height="36" align="center" valign="middle" style="background-color: #f0ede8; border-radius: 50%; color: #0c0c0b; font-size: 10px; font-weight: bold;">IA</td>
                      <td style="padding-left: 10px;">
                        <div style="font-size: 13px; font-weight: 600; color: #c8c4bc; line-height: 1.2;">Irtiqa AI Agency</div>
                        <div style="font-size: 11px; color: #5a5753; line-height: 1.2;">office@irtiqaaiagency.com</div>
                      </td>
                    </tr>
                  </table>
                </td>
                <td align="right" valign="middle" style="font-size: 11px; color: #5a5753;">
                  \${props.emailDate}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Main Card -->
        <tr>
          <td>
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0c0c0b; border: 1px solid #222220; border-radius: 16px; overflow: hidden;">
              
              <!-- Hero -->
              <tr>
                <td style="background-color: #0c0c0b; padding: 32px 24px 28px 24px; border-bottom: 1px solid #1c1c1a;">
                  <table border="0" cellspacing="0" cellpadding="0" style="background-color: rgba(240, 237, 232, 0.06); border: 1px solid rgba(240, 237, 232, 0.1); border-radius: 20px; margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 5px 12px 5px 9px; font-size: 10px; font-weight: 600; color: rgba(240, 237, 232, 0.6); text-transform: uppercase;">
                        <span style="display:inline-block; width:6px; height:6px; background-color:#6ee7b7; border-radius:50%; margin-right:6px;"></span> Booking Confirmed
                      </td>
                    </tr>
                  </table>
                  <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #f0ede8; line-height: 1.25; letter-spacing: -0.5px;">
                    You're in, <span style="color: #a8a8a0;">\${props.firstName}.</span><br />Audit locked.
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #6b6861; line-height: 1.7;">
                    We've reserved your slot. Our team is already looking forward to mapping your revenue opportunity with you.
                  </p>
                </td>
              </tr>

              <!-- Body Content -->
              <tr>
                <td style="padding: 28px 24px 32px 24px;">
                  
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                    <tr>
                      <td style="border-left: 2px solid #2a2a28; padding: 4px 0 4px 16px;">
                        <p style="margin: 0; font-size: 13px; color: #6b6861; line-height: 1.8; font-style: italic;">
                          Hey <strong style="font-weight: 600; color: #c8c4bc; font-style: normal;">\${props.firstName}</strong> — most businesses sit on revenue leaks for months without ever knowing where they are. You've already done the hard part by showing up. We'll do the rest on the call.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 12px;">Your Audit Call</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #111110; border: 1px solid #222220; border-radius: 12px; margin-bottom: 14px;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                          <tr>
                            <td width="40" valign="top">
                              <table width="40" height="40" border="0" cellspacing="0" cellpadding="0" style="background-color: #191918; border: 1px solid #2a2a28; border-radius: 10px;">
                                <tr>
                                  <td align="center" valign="middle"><img src="https://img.icons8.com/ios/50/c8c4bc/calendar--v1.png" width="18" height="18" style="display:block;" alt="calendar" /></td>
                                </tr>
                              </table>
                            </td>
                            <td valign="top" style="padding-left: 12px;">
                              <div style="font-size: 16px; font-weight: 700; color: #f0ede8; line-height: 1.2;">\${props.meetingDate}</div>
                              <div style="font-size: 12px; color: #6b6861; margin-top: 3px;">\${props.meetingTime}<span style="display: inline-block; margin-left: 6px; background-color: #1c1c1a; color: #8a8780; font-size: 9px; font-weight: 600; padding: 2px 7px; border-radius: 10px;">\${props.timezone}</span></div>
                            </td>
                          </tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #191918; border: 1px solid #2a2a28; border-radius: 8px;">
                          <tr>
                            <td width="30" align="center" valign="middle" style="padding: 10px 0 10px 14px;"><img src="https://img.icons8.com/ios/50/6b6861/link--v1.png" width="14" height="14" style="display:block;" alt="link" /></td>
                            <td style="padding: 10px 14px 10px 10px;"><a href="\${props.meetingLink}" style="font-size: 11px; color: #a8a8a0; font-weight: 500; text-decoration: none;">\${props.meetingLink}</a></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Tear -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 20px 0;">
                    <tr>
                      <td width="20"><div style="width: 20px; height: 20px; background-color: #0c0c0b; border-radius: 50%; margin-left: -34px; border-right: 1px solid #222220;"></div></td>
                      <td style="border-top: 1.5px dashed #222220;">&nbsp;</td>
                      <td width="20"><div style="width: 20px; height: 20px; background-color: #0c0c0b; border-radius: 50%; margin-right: -34px; border-left: 1px solid #222220;"></div></td>
                    </tr>
                  </table>

                  <!-- Meta -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                    <tr>
                      <td width="48%" valign="top">
                        <div style="font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 5px;">Company</div>
                        <div style="font-size: 14px; font-weight: 600; color: #c8c4bc;">\${props.companyName}</div>
                      </td>
                      <td width="4%" style="border-left: 1px solid #1c1c1a;"></td>
                      <td width="48%" valign="top" style="padding-left: 18px;">
                        <div style="font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 5px;">Ref ID</div>
                        <div style="font-family: monospace; font-size: 11px; color: #6b6861;">\${props.refId}</div>
                      </td>
                    </tr>
                  </table>

                  <!-- Barcode Fake -->
                  <div style="width: 100%; height: 20px; background: repeating-linear-gradient(90deg, #f0ede8 0, #f0ede8 2px, transparent 2px, transparent 5px, #f0ede8 5px, #f0ede8 6px, transparent 6px, transparent 10px); opacity: 0.15; margin-bottom: 24px;"></div>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 12px;">On File</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #111110; border: 1px solid #222220; border-radius: 12px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom: 1px solid #1a1a18;">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #5a5753;">Contact</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #c8c4bc;">\${props.fullName}</td></tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom: 1px solid #1a1a18;">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #5a5753;">Company</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #c8c4bc;">\${props.companyName}</td></tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #5a5753;">Website</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #c8c4bc;"><a href="\${props.companyWebsite}" style="color: #c8c4bc; border-bottom: 1px solid #2a2a28;">\${props.companyWebsiteDisplay}</a></td></tr>
                        </table>
                        <div style="font-size: 12px; color: #6b6861; line-height: 1.65; padding-top: 10px; margin-top: 6px; border-top: 1px solid #1a1a18;">\${props.companySummary}</div>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 12px;">Before The Call</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #111110; border: 1px solid #2a2a28; border-radius: 12px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 18px 20px;">
                        <table width="36" height="36" border="0" cellspacing="0" cellpadding="0" style="background-color: #191918; border: 1px solid #2a2a28; border-radius: 10px; margin-bottom: 12px;"><tr><td align="center" valign="middle"><img src="https://img.icons8.com/ios/50/c8c4bc/survey.png" width="16" height="16" alt="survey" /></td></tr></table>
                        <div style="font-size: 14px; font-weight: 700; color: #f0ede8; margin-bottom: 6px;">Help us prep for your audit</div>
                        <div style="font-size: 12px; color: #6b6861; line-height: 1.65; margin-bottom: 14px;">Take 3 minutes to share details about \${props.companyName} and drop any helpful files (pricing sheets, CRM exports, etc.) — optional, but it makes us more prepared.</div>
                        <table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="border: 1px solid #3d3d3a; border-radius: 8px;"><a href="\${props.surveyLink}" style="display: block; padding: 9px 16px; color: #c8c4bc; font-size: 12px; font-weight: 600; text-decoration: none;">Share Details & Files &rarr;</a></td></tr></table>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 12px;">What We'll Cover</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #1a1a18;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #2a2a28; border-radius: 50%; font-size: 10px; font-weight: 700; color: #6b6861; text-align: center; line-height: 24px;">1</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #c8c4bc; margin-bottom: 2px;">Map your revenue gaps</div><div style="font-size: 11px; color: #5a5753; line-height: 1.6;">Where leads, follow-ups, or ops are losing you money — without jargon.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #1a1a18;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #2a2a28; border-radius: 50%; font-size: 10px; font-weight: 700; color: #6b6861; text-align: center; line-height: 24px;">2</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #c8c4bc; margin-bottom: 2px;">Show you what's fixable first</div><div style="font-size: 11px; color: #5a5753; line-height: 1.6;">A clear priority list. Which systems drive maximum revenue impact.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #2a2a28; border-radius: 50%; font-size: 10px; font-weight: 700; color: #6b6861; text-align: center; line-height: 24px;">3</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #c8c4bc; margin-bottom: 2px;">You get a plan. No pressure.</div><div style="font-size: 11px; color: #5a5753; line-height: 1.6;">Concrete roadmap whether we work together or not.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #111110; border: 1px solid #2a2a28; border-left: 2px solid #6b6861; border-radius: 8px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 14px 16px;">
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="16" valign="top"><img src="https://img.icons8.com/ios/50/6b6861/info--v1.png" width="16" height="16" alt="info" /></td>
                            <td style="padding-left: 12px; font-size: 12px; color: #6b6861; line-height: 1.65;"><strong style="color: #8a8780; font-weight: 600;">One thing before the call —</strong> have a rough sense of your monthly leads and where your biggest bottleneck is. That's it. We handle everything else.</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin-bottom: 12px;">
                    <tr><td align="center" style="background-color: #f0ede8; border-radius: 10px;"><a href="\${props.meetingLink}" style="display: block; padding: 14px 20px; color: #0c0c0b; font-size: 13px; font-weight: 700; text-decoration: none;">Join Your Revenue Audit &rarr;</a></td></tr>
                  </table>
                  <div style="text-align: center; font-size: 11px; color: #3d3d3a; margin-bottom: 28px;">Need to reschedule? <a href="\${props.rescheduleLink}" style="color: #6b6861; text-decoration: underline;">Click here</a> or reply to this email.</div>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #1c1c1a; padding-top: 24px;">
                    <tr>
                      <td>
                        <p style="margin: 0 0 16px 0; font-size: 13px; color: #6b6861; line-height: 1.8; font-style: italic;">Looking forward to seeing you on the call, \${props.firstName}. This one conversation could change how your business operates.</p>
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="38" height="38" align="center" valign="middle" style="background-color: #191918; border: 1px solid #2a2a28; border-radius: 50%; font-size: 11px; font-weight: 700; color: #8a8780;">IA</td>
                            <td style="padding-left: 10px;"><div style="font-size: 13px; font-weight: 600; color: #c8c4bc;">The Irtiqa Team</div><div style="font-size: 11px; color: #3d3d3a;">Irtiqa AI Agency</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding: 20px 24px; border-top: 1px solid #1a1a18; background-color: #0c0c0b;">
                  <div style="font-size: 12px; font-weight: 700; color: #3d3d3a; letter-spacing: 0.3px; margin-bottom: 3px;">irtiqa</div>
                  <div style="font-size: 10px; color: #2a2a28; margin-bottom: 12px;">Revenue infrastructure for serious businesses.</div>
                  <div style="font-size: 10px;">
                    <a href="https://irtiqaaiagency.com" style="color: #3d3d3a; text-decoration: none;">Website</a>
                    <span style="color: #222220; margin: 0 6px;">&middot;</span>
                    <a href="mailto:office@irtiqaaiagency.com" style="color: #3d3d3a; text-decoration: none;">Contact</a>
                    <span style="color: #222220; margin: 0 6px;">&middot;</span>
                    <a href="\${props.unsubscribeLink}" style="color: #3d3d3a; text-decoration: none;">Unsubscribe</a>
                  </div>
                </td>
              </tr>

            </table>
          </td>
        </tr>
        
        <!-- Sent to -->
        <tr>
          <td align="center" style="padding-top: 16px; font-size: 10px; color: #3d3d3a;">
            Invite sent to <a href="mailto:\${props.clientEmail}" style="color: #5a5753; text-decoration: none;">\${props.clientEmail}</a>
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

const finalFileContent = `export interface ConfirmationEmailProps {
  emailDate: string;
  firstName: string;
  meetingDate: string;
  meetingTime: string;
  timezone: string;
  meetingLink: string;
  companyName: string;
  refId: string;
  fullName: string;
  companyWebsite: string;
  companyWebsiteDisplay: string;
  companySummary: string;
  surveyLink: string;
  rescheduleLink: string;
  unsubscribeLink: string;
  clientEmail: string;
}

export function getConfirmationEmailHtmlLight(props: ConfirmationEmailProps) {
  return \`${getLightTemplate()}\`;
}

export function getConfirmationEmailHtmlDark(props: ConfirmationEmailProps) {
  return \`${getDarkTemplate()}\`;
}
`;

fs.writeFileSync('src/emails/templates.ts', finalFileContent);
console.log('Templates generated successfully!');
