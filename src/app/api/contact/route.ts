import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Contact API: missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_TO_EMAIL");
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
    });
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();

    const { name, email, company, message, website, submittedAt } = body;

    if (website) {
      return new Response(JSON.stringify({ error: "Spam detected" }), {
        status: 400,
      });
    }

    const now = Date.now();
    const startedAt = Number(submittedAt);
    const fillTime = now - startedAt;

    if (!startedAt || Number.isNaN(startedAt) || fillTime < 3000) {
      return new Response(JSON.stringify({ error: "Spam detected" }), {
        status: 400,
      });
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
      });
    }

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeCompany = String(company || "").trim();
    const safeMessage = String(message).trim();

    await resend.emails.send({
      from: `Website Contact <${fromEmail}>`,
      to: toEmail,
      subject: `New contact from ${safeName}`,
      replyTo: `${safeName} <${safeEmail}>`,
      html: `
        <div style="background:#f6f6f7;padding:32px 16px;font-family:Arial,sans-serif;color:#111827;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
            <div style="padding:24px 24px 16px 24px;border-bottom:1px solid #e5e7eb;">
              <p style="margin:0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;">
                New Website Contact
              </p>
              <h1 style="margin:8px 0 0 0;font-size:24px;line-height:1.2;color:#111827;">
                You received a new message
              </h1>
            </div>

            <div style="padding:24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:0 0 14px 0;">
                    <p style="margin:0 0 4px 0;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;">
                      Name
                    </p>
                    <p style="margin:0;font-size:16px;color:#111827;">${escapeHtml(safeName)}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 0 14px 0;">
                    <p style="margin:0 0 4px 0;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;">
                      Email
                    </p>
                    <p style="margin:0;font-size:16px;color:#111827;">${escapeHtml(safeEmail)}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 0 14px 0;">
                    <p style="margin:0 0 4px 0;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;">
                      Company
                    </p>
                    <p style="margin:0;font-size:16px;color:#111827;">${escapeHtml(safeCompany || "-")}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:8px 0 0 0;">
                    <p style="margin:0 0 8px 0;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;">
                      Message
                    </p>
                    <div style="padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;font-size:16px;line-height:1.6;color:#111827;white-space:pre-wrap;">
                      ${escapeHtml(safeMessage)}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return new Response(JSON.stringify({ error: "Email failed" }), {
      status: 500,
    });
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
