export interface ConfirmationEmailProps {
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
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Revenue Audit is Confirmed — Irtiqa AI</title>
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
                        <span style="display:inline-block; width:6px; height:6px; background-color:#1641F5; border-radius:50%; margin-right:6px;"></span> Audit Secured
                      </td>
                    </tr>
                  </table>
                  <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #0C0C0B; line-height: 1.25; letter-spacing: -0.5px;">
                    Growth Audit Secured, <span style="color: #BEBBB3;">${props.firstName}.</span><br />Prepare for scale.
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.7;">
                    Your exclusive session is officially locked in. Our partners are preparing to map the exact operational bottlenecks currently capping your valuation.
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
                          Hey <strong style="font-weight: 600; color: #1A1A18; font-style: normal;">${props.firstName}</strong> — most businesses bleed revenue for months without ever realizing exactly where the leaks are in their acquisition pipeline. By securing this audit, you've just taken the single most important step toward scaling your top-line revenue. We will handle the heavy lifting from here.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #BEBBB3; margin-bottom: 12px;">Your Audit Call</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F3EE; border: 1px solid #ECEAE2; border-radius: 16px; margin-bottom: 14px;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                          <tr>
                            <td width="40" valign="top">
                              <table width="40" height="40" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #BEBBB3; border-radius: 50%;">
                                <tr>
                                  <td align="center" valign="middle" style="font-size:16px;">🗓️</td>
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
                            <td width="30" align="center" valign="middle" style="padding: 10px 0 10px 14px; font-size: 12px;">🔗</td>
                            <td style="padding: 10px 14px 10px 10px;"><a href="${props.meetingLink}" style="font-size: 11px; color: #1A1A18; font-weight: 500; text-decoration: none;">${props.meetingLink}</a></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Tear -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 20px 0;">
                    <tr>
                      <td width="20"><div style="width: 20px; height: 20px; background-color: #FAFAF8; border-radius: 50%; margin-left: -34px; border-right: 1px solid #ECEAE2;"></div></td>
                      <td style="border-top: 1.5px dashed #BEBBB3;">&nbsp;</td>
                      <td width="20"><div style="width: 20px; height: 20px; background-color: #FAFAF8; border-radius: 50%; margin-right: -34px; border-left: 1px solid #ECEAE2;"></div></td>
                    </tr>
                  </table>

                  <!-- Meta -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                    <tr>
                      <td width="48%" valign="top">
                        <div style="font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #BEBBB3; margin-bottom: 5px;">Company</div>
                        <div style="font-size: 14px; font-weight: 600; color: #1A1A18;">${props.companyName}</div>
                      </td>
                      <td width="4%" style="border-left: 1px solid #ECEAE2;"></td>
                      <td width="48%" valign="top" style="padding-left: 18px;">
                        <div style="font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #BEBBB3; margin-bottom: 5px;">Ref ID</div>
                        <div style="font-family: monospace; font-size: 11px; color: #BEBBB3;">${props.refId}</div>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #BEBBB3; margin-bottom: 12px;">On File</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F3EE; border: 1px solid #ECEAE2; border-radius: 16px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom: 1px solid #ECEAE2;">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #BEBBB3;">Contact</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #1A1A18;">${props.fullName}</td></tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom: 1px solid #ECEAE2;">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #BEBBB3;">Company</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #1A1A18;">${props.companyName}</td></tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #BEBBB3;">Website</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #1A1A18;"><a href="${props.companyWebsite}" style="color: #1A1A18; border-bottom: 1px solid #BEBBB3;">${props.companyWebsiteDisplay}</a></td></tr>
                        </table>
                        <div style="font-size: 12px; color: #6B6B67; line-height: 1.65; padding-top: 10px; margin-top: 6px; border-top: 1px solid #ECEAE2;">${props.companySummary}</div>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #BEBBB3; margin-bottom: 12px;">Before The Call</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F3EE; border: 1px solid #ECEAE2; border-radius: 16px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 18px 20px;">
                        <table width="36" height="36" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #BEBBB3; border-radius: 50%; margin-bottom: 12px;"><tr><td align="center" valign="middle" style="font-size: 14px;">📝</td></tr></table>
                        <div style="font-size: 14px; font-weight: 700; color: #0C0C0B; margin-bottom: 6px;">Gain an Unfair Advantage Before the Session</div>
                        <div style="font-size: 12px; color: #6B6B67; line-height: 1.65; margin-bottom: 14px;">Take exactly 3 minutes to drop us some context about ${props.companyName}'s current margins and sales cycle. Businesses that fill this out uncover significantly more revenue gaps during our live session. Don't skip this.</div>
                        <table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="border: 1px solid #BEBBB3; border-radius: 100px;"><a href="${props.surveyLink}" style="display: block; padding: 9px 18px; color: #1A1A18; font-size: 12px; font-weight: 600; text-decoration: none;">Secure Your Advantage &rarr;</a></td></tr></table>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #BEBBB3; margin-bottom: 12px;">What We'll Cover</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #ECEAE2;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #BEBBB3; border-radius: 50%; font-size: 10px; font-weight: 700; color: #BEBBB3; text-align: center; line-height: 24px;">1</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #1A1A18; margin-bottom: 2px;">Diagnose the Bleed</div><div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">We pinpoint exactly where your leads, follow-ups, and operational systems are leaking capital.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #ECEAE2;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #BEBBB3; border-radius: 50%; font-size: 10px; font-weight: 700; color: #BEBBB3; text-align: center; line-height: 24px;">2</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #1A1A18; margin-bottom: 2px;">Prioritize the Quick Wins</div><div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">A ruthless priority breakdown showing you which AI systems will drive immediate cash flow.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #BEBBB3; border-radius: 50%; font-size: 10px; font-weight: 700; color: #BEBBB3; text-align: center; line-height: 24px;">3</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #1A1A18; margin-bottom: 2px;">Hand over the Blueprint</div><div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">You leave with a concrete architectural roadmap to scale your revenue, whether we work together or not.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F3EE; border: 1px solid #ECEAE2; border-left: 2px solid #6B6B67; border-radius: 12px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 14px 16px;">
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="16" valign="top" style="font-size: 14px;">ℹ️</td>
                            <td style="padding-left: 12px; font-size: 12px; color: #6B6B67; line-height: 1.65;"><strong style="color: #1A1A18; font-weight: 600;">One thing before the call —</strong> have a rough sense of your monthly leads and where your biggest bottleneck is. That's it. We handle everything else.</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Curvy CTA -->
                  <table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin-bottom: 12px;">
                    <tr><td align="center" style="background-color: #0C0C0B; border-radius: 100px;"><a href="${props.meetingLink}" style="display: block; padding: 14px 20px; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none;">Join Your Revenue Audit &rarr;</a></td></tr>
                  </table>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px; border-top: 1px solid #ECEAE2; padding-top: 20px;">
                    <tr>
                      <td align="center">
                        <div style="font-size: 11px; color: #BEBBB3; margin-bottom: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Manage Your Booking</div>
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center">
                              <a href="${props.rescheduleLink}" style="display: inline-block; padding: 10px 24px; border: 1px solid #BEBBB3; border-radius: 100px; color: #1A1A18; font-size: 11px; font-weight: 600; text-decoration: none; background-color: #FAFAF8;">Reschedule Time</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #ECEAE2; padding-top: 24px;">
                    <tr>
                      <td>
                        <p style="margin: 0 0 16px 0; font-size: 13px; color: #6B6B67; line-height: 1.8; font-style: italic;">Get ready, ${props.firstName}. This one conversation is going to fundamentally shift how your business operates.</p>
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

              <!-- Footer -->
              <tr>
                <td align="center" style="padding: 20px 24px; border-top: 1px solid #ECEAE2; background-color: #ffffff; border-bottom-left-radius: 28px; border-bottom-right-radius: 28px;">
                  <div style="font-size: 12px; font-weight: 700; color: #BEBBB3; letter-spacing: 0.3px; margin-bottom: 3px;">irtiqa</div>
                  <div style="font-size: 10px; color: #BEBBB3; margin-bottom: 12px;">Revenue infrastructure for serious businesses.</div>
                  <div style="font-size: 10px;">
                    <a href="https://irtiqaaiagency.com" style="color: #BEBBB3; text-decoration: none;">Website</a>
                    <span style="color: #BEBBB3; margin: 0 6px;">&middot;</span>
                    <a href="mailto:office@irtiqaaiagency.com" style="color: #BEBBB3; text-decoration: none;">Contact</a>
                    <span style="color: #BEBBB3; margin: 0 6px;">&middot;</span>
                    <a href="${props.rescheduleLink}" style="color: #BEBBB3; text-decoration: none;">Reschedule</a>
                  </div>
                </td>
              </tr>

              </table>
            </div>
          </td>
        </tr>
        
        <!-- Sent to -->
        <tr>
          <td align="center" style="padding-top: 16px; font-size: 10px; color: #BEBBB3;">
            Invite sent to <a href="mailto:${props.clientEmail}" style="color: #6B6B67; text-decoration: none;">${props.clientEmail}</a>
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

export function getConfirmationEmailHtmlDark(props: ConfirmationEmailProps) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Revenue Audit is Confirmed — Irtiqa AI</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
    body { margin: 0; padding: 0; background-color: #0c0c0b; font-family: 'Inter', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    table { border-collapse: separate; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
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
        
        <!-- Main Card -->
        <tr>
          <td>
            <div style="border-radius: 28px; overflow: hidden; border: 1px solid #222220; background-color: #0c0c0b;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0c0c0b;">
                
              <!-- Hero -->
              <tr>
                <td style="background-color: #0c0c0b; padding: 32px 24px 28px 24px; border-bottom: 1px solid #1c1c1a; border-top-left-radius: 28px; border-top-right-radius: 28px;">
                  <table border="0" cellspacing="0" cellpadding="0" style="background-color: rgba(240, 237, 232, 0.06); border: 1px solid rgba(240, 237, 232, 0.1); border-radius: 100px; margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 5px 12px 5px 9px; font-size: 10px; font-weight: 600; color: rgba(240, 237, 232, 0.6); text-transform: uppercase;">
                        <span style="display:inline-block; width:6px; height:6px; background-color:#6ee7b7; border-radius:50%; margin-right:6px;"></span> Audit Secured
                      </td>
                    </tr>
                  </table>
                  <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #f0ede8; line-height: 1.25; letter-spacing: -0.5px;">
                    Audit Secured, <span style="color: #a8a8a0;">${props.firstName}.</span><br />Prepare for impact.
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.7;">
                    Your exclusive slot is officially locked in. We are about to map out the exact revenue bottlenecks holding back your growth.
                  </p>
                </td>
              </tr>

              <!-- Body Content -->
              <tr>
                <td style="padding: 28px 24px 32px 24px;">
                  
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                    <tr>
                      <td style="border-left: 2px solid #2a2a28; padding: 4px 0 4px 16px;">
                        <p style="margin: 0; font-size: 13px; color: #6B6B67; line-height: 1.8; font-style: italic;">
                          Hey <strong style="font-weight: 600; color: #c8c4bc; font-style: normal;">${props.firstName}</strong> — most businesses bleed revenue for months without ever realizing exactly where the leaks are. By securing this audit, you've just taken the single most important step toward scaling your operations. We will handle the heavy lifting from here.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 12px;">Your Audit Call</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #111110; border: 1px solid #222220; border-radius: 16px; margin-bottom: 14px;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                          <tr>
                            <td width="40" valign="top">
                              <table width="40" height="40" border="0" cellspacing="0" cellpadding="0" style="background-color: #191918; border: 1px solid #2a2a28; border-radius: 50%;">
                                <tr>
                                  <td align="center" valign="middle" style="font-size: 16px;">🗓️</td>
                                </tr>
                              </table>
                            </td>
                            <td valign="top" style="padding-left: 12px;">
                              <div style="font-size: 16px; font-weight: 700; color: #f0ede8; line-height: 1.2;">${props.meetingDate}</div>
                              <div style="font-size: 12px; color: #6B6B67; margin-top: 3px;">${props.meetingTime}<span style="display: inline-block; margin-left: 6px; background-color: #1c1c1a; color: #BEBBB3; font-size: 9px; font-weight: 600; padding: 2px 7px; border-radius: 100px;">${props.timezone}</span></div>
                            </td>
                          </tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #191918; border: 1px solid #2a2a28; border-radius: 12px;">
                          <tr>
                            <td width="30" align="center" valign="middle" style="padding: 10px 0 10px 14px; font-size: 12px;">🔗</td>
                            <td style="padding: 10px 14px 10px 10px;"><a href="${props.meetingLink}" style="font-size: 11px; color: #a8a8a0; font-weight: 500; text-decoration: none;">${props.meetingLink}</a></td>
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
                        <div style="font-size: 14px; font-weight: 600; color: #c8c4bc;">${props.companyName}</div>
                      </td>
                      <td width="4%" style="border-left: 1px solid #1c1c1a;"></td>
                      <td width="48%" valign="top" style="padding-left: 18px;">
                        <div style="font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 5px;">Ref ID</div>
                        <div style="font-family: monospace; font-size: 11px; color: #6B6B67;">${props.refId}</div>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 12px;">On File</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #111110; border: 1px solid #222220; border-radius: 16px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom: 1px solid #0C0C0B;">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #6B6B67;">Contact</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #c8c4bc;">${props.fullName}</td></tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom: 1px solid #0C0C0B;">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #6B6B67;">Company</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #c8c4bc;">${props.companyName}</td></tr>
                        </table>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr><td style="padding: 10px 0; font-size: 11px; color: #6B6B67;">Website</td><td align="right" style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #c8c4bc;"><a href="${props.companyWebsite}" style="color: #c8c4bc; border-bottom: 1px solid #2a2a28;">${props.companyWebsiteDisplay}</a></td></tr>
                        </table>
                        <div style="font-size: 12px; color: #6B6B67; line-height: 1.65; padding-top: 10px; margin-top: 6px; border-top: 1px solid #0C0C0B;">${props.companySummary}</div>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 12px;">Before The Call</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #111110; border: 1px solid #2a2a28; border-radius: 16px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 18px 20px;">
                        <table width="36" height="36" border="0" cellspacing="0" cellpadding="0" style="background-color: #191918; border: 1px solid #2a2a28; border-radius: 50%; margin-bottom: 12px;"><tr><td align="center" valign="middle" style="font-size: 14px;">📝</td></tr></table>
                        <div style="font-size: 14px; font-weight: 700; color: #f0ede8; margin-bottom: 6px;">Gain an Unfair Advantage Before the Call</div>
                        <div style="font-size: 12px; color: #6B6B67; line-height: 1.65; margin-bottom: 14px;">Take exactly 3 minutes to drop us some context about ${props.companyName}. It's optional, but businesses that fill this out uncover significantly more revenue gaps during our live session. Don't skip this.</div>
                        <table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="border: 1px solid #3d3d3a; border-radius: 100px;"><a href="${props.surveyLink}" style="display: block; padding: 9px 18px; color: #c8c4bc; font-size: 12px; font-weight: 600; text-decoration: none;">Secure Your Advantage &rarr;</a></td></tr></table>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #3d3d3a; margin-bottom: 12px;">What We'll Cover</div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #0C0C0B;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #2a2a28; border-radius: 50%; font-size: 10px; font-weight: 700; color: #6B6B67; text-align: center; line-height: 24px;">1</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #c8c4bc; margin-bottom: 2px;">Diagnose the Bleed</div><div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">We pinpoint exactly where your leads, follow-ups, and operational systems are leaking capital.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #0C0C0B;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #2a2a28; border-radius: 50%; font-size: 10px; font-weight: 700; color: #6B6B67; text-align: center; line-height: 24px;">2</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #c8c4bc; margin-bottom: 2px;">Prioritize the Quick Wins</div><div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">A ruthless priority breakdown showing you which AI systems will drive immediate cash flow.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0;">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td width="24" valign="top"><div style="width: 24px; height: 24px; border: 1px solid #2a2a28; border-radius: 50%; font-size: 10px; font-weight: 700; color: #6B6B67; text-align: center; line-height: 24px;">3</div></td>
                            <td valign="top" style="padding-left: 12px;"><div style="font-size: 13px; font-weight: 600; color: #c8c4bc; margin-bottom: 2px;">Hand over the Blueprint</div><div style="font-size: 11px; color: #6B6B67; line-height: 1.6;">You leave with a concrete architectural roadmap to scale your revenue, whether we work together or not.</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #111110; border: 1px solid #2a2a28; border-left: 2px solid #6B6B67; border-radius: 12px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 14px 16px;">
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="16" valign="top" style="font-size: 14px;">ℹ️</td>
                            <td style="padding-left: 12px; font-size: 12px; color: #6B6B67; line-height: 1.65;"><strong style="color: #BEBBB3; font-weight: 600;">One thing before the call —</strong> have a rough sense of your monthly leads and where your biggest bottleneck is. That's it. We handle everything else.</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin-bottom: 12px;">
                    <tr><td align="center" style="background-color: #f0ede8; border-radius: 100px;"><a href="${props.meetingLink}" style="display: block; padding: 14px 20px; color: #0c0c0b; font-size: 13px; font-weight: 700; text-decoration: none;">Join Your Revenue Audit &rarr;</a></td></tr>
                  </table>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px; border-top: 1px solid #1c1c1a; padding-top: 20px;">
                    <tr>
                      <td align="center">
                        <div style="font-size: 11px; color: #6B6B67; margin-bottom: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Manage Your Booking</div>
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center">
                              <a href="${props.rescheduleLink}" style="display: inline-block; padding: 10px 24px; border: 1px solid #3d3d3a; border-radius: 100px; color: #c8c4bc; font-size: 11px; font-weight: 600; text-decoration: none; background-color: #111110;">Reschedule Time</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #1c1c1a; padding-top: 24px;">
                    <tr>
                      <td>
                        <p style="margin: 0 0 16px 0; font-size: 13px; color: #6B6B67; line-height: 1.8; font-style: italic;">Get ready, ${props.firstName}. This one conversation is going to fundamentally shift how your business operates.</p>
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="38" height="38" align="center" valign="middle" style="background-color: #111110; border: 1px solid #2a2a28; border-radius: 50%; font-size: 11px; font-weight: 700; color: #6B6B67;">IA</td>
                            <td style="padding-left: 10px;"><div style="font-size: 13px; font-weight: 600; color: #c8c4bc;">Irtiqa Growth Partners</div></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td align="center" style="padding: 20px 24px; border-top: 1px solid #1c1c1a; background-color: #0c0c0b; border-bottom-left-radius: 28px; border-bottom-right-radius: 28px;">
                  <div style="font-size: 12px; font-weight: 700; color: #3d3d3a; letter-spacing: 0.3px; margin-bottom: 3px;">irtiqa</div>
                  <div style="font-size: 10px; color: #3d3d3a; margin-bottom: 12px;">Revenue infrastructure for serious businesses.</div>
                  <div style="font-size: 10px;">
                    <a href="https://irtiqaaiagency.com" style="color: #3d3d3a; text-decoration: none;">Website</a>
                    <span style="color: #1c1c1a; margin: 0 6px;">&middot;</span>
                    <a href="mailto:office@irtiqaaiagency.com" style="color: #3d3d3a; text-decoration: none;">Contact</a>
                    <span style="color: #1c1c1a; margin: 0 6px;">&middot;</span>
                    <a href="${props.rescheduleLink}" style="color: #3d3d3a; text-decoration: none;">Reschedule</a>
                  </div>
                </td>
              </tr>

              </table>
            </div>
          </td>
        </tr>
        
        <!-- Sent to -->
        <tr>
          <td align="center" style="padding-top: 16px; font-size: 10px; color: #3d3d3a;">
            Invite sent to <a href="mailto:${props.clientEmail}" style="color: #6B6B67; text-decoration: none;">${props.clientEmail}</a>
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
