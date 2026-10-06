import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const DEFAULT_NOTIFICATION_EMAIL =
  process.env.NOTIFICATION_EMAIL || "24.sam2000@gmail.com";
const PRIMARY_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Creators Aquarium <contact@creatorsaquarium.com>";
const FALLBACK_FROM_EMAIL = "Creators Aquarium <onboarding@resend.dev>";
const REPLY_TO_EMAIL = "contact@creatorsaquarium.com";

const resend = new Resend(RESEND_API_KEY);

export interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  locality: string;
  service?: string;
  mode?: "setup" | "maintenance";
  tankSize?: string;
  aquariumType?: string;
  tankType?: string;
  existingTankStatus?: string;
  needCabinet?: string;
  setupStyle?: string;
  budgetRange?: string;
  tankCondition?: string;
  serviceCadence?: string;
  notes?: string;
  source?: string;
}

function buildHtmlTemplate(data: InquiryPayload, isFallbackNotice = false): string {
  const cleanPhone = data.phone.replace(/[^0-9]/g, "");
  const waPhone = cleanPhone.startsWith("91") ? cleanPhone : `91${cleanPhone}`;
  const waReplyUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(
    `Hi ${data.name}, thank you for reaching out to Creators Aquarium regarding your inquiry in ${data.locality}.`
  )}`;

  const details: [string, string | undefined][] = [
    ["Customer Name", data.name],
    ["WhatsApp / Phone", data.phone],
    ["Email", data.email || "Not provided"],
    ["Bengaluru Locality", data.locality],
    ["Service / Mode", data.service || (data.mode === "setup" ? "New Aquarium Setup Consultation" : "Maintenance")],
    ["Tank Size", data.tankSize],
    ["Aquarium Type", data.aquariumType || data.tankType],
    ["Existing Tank Status", data.existingTankStatus],
    ["Cabinet Needed", data.needCabinet],
    ["Preferred Scape Style", data.setupStyle],
    ["Budget Guidance", data.budgetRange],
    ["Current Condition", data.tankCondition],
    ["Cadence / Frequency", data.serviceCadence],
    ["Customer Notes", data.notes],
    ["Inquiry Source", data.source || "Website Form"],
    ["Timestamp (IST)", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })],
  ];

  const rowsHtml = details
    .filter(([, val]) => Boolean(val))
    .map(
      ([label, val]) => `
      <tr>
        <td style="padding: 10px 14px; font-size: 12px; color: #8F9489; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #1C201C; width: 35%; font-weight: 600;">
          ${label}
        </td>
        <td style="padding: 10px 14px; font-size: 14px; color: #F4F4EF; border-bottom: 1px solid #1C201C; font-weight: 500;">
          ${val}
        </td>
      </tr>`
    )
    .join("");

  const fallbackBanner = isFallbackNotice
    ? `
    <div style="background-color: #1A1A12; border: 1px solid #786C20; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; font-size: 12px; color: #E8D98C; line-height: 1.5;">
      <strong>Domain Setup Note:</strong> This alert was delivered via the Resend onboarding sandbox. To have outbound emails send natively from <code>contact@creatorsaquarium.com</code>, verify <code>creatorsaquarium.com</code> in your <a href="https://resend.com/domains" style="color: #8BCF32; text-decoration: underline;">Resend Domains</a> dashboard.
    </div>`
    : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Inquiry - Creators Aquarium</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #050605; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F4F4EF;">
  <div style="max-width: 620px; margin: 0 auto; background-color: #0E110E; border: 1px solid #242924; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
    
    <!-- Header -->
    <div style="background: linear-gradient(180deg, #151A15 0%, #0E110E 100%); padding: 28px 24px 20px; border-bottom: 1px solid #242924;">
      <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.15em; color: #8BCF32; text-transform: uppercase; margin-bottom: 6px;">
        CREATORS AQUARIUM · NEW INQUIRY ALERT
      </div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #F4F4EF; letter-spacing: -0.01em;">
        ${data.name} · ${data.locality}
      </h1>
      <p style="margin: 6px 0 0; font-size: 13px; color: #A3A69F;">
        ${data.service || (data.mode === "setup" ? "New Turnkey Setup Consultation" : "Aquarium Maintenance")} · ${data.tankSize || "Custom Size"}
      </p>
    </div>

    <!-- Content Body -->
    <div style="padding: 24px;">
      ${fallbackBanner}

      <!-- Action Buttons -->
      <div style="margin-bottom: 24px; display: flex; gap: 12px;">
        <a href="${waReplyUrl}" style="display: inline-block; background-color: #8BCF32; color: #050505; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; text-align: center; margin-right: 10px;">
          💬 Reply via WhatsApp
        </a>
        <a href="tel:${cleanPhone}" style="display: inline-block; background-color: #171C17; color: #F4F4EF; border: 1px solid #2E362E; text-decoration: none; padding: 12px 18px; border-radius: 6px; font-weight: 600; font-size: 12px; text-align: center;">
          📞 Call Customer
        </a>
      </div>

      <!-- Detail Table -->
      <table style="width: 100%; border-collapse: collapse; background-color: #090B09; border-radius: 8px; overflow: hidden; border: 1px solid #1C201C;">
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <!-- Footer Note -->
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #1C201C; font-size: 11px; color: #70756D; line-height: 1.6;">
        <p style="margin: 0;">
          This inquiry was received from <a href="https://creatorsaquarium.com" style="color: #8BCF32; text-decoration: none;">creatorsaquarium.com</a>.
          Reply directly to this email to reach <strong>${REPLY_TO_EMAIL}</strong>.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function sendInquiryNotification(
  data: InquiryPayload
): Promise<{ success: boolean; id?: string; error?: string; usedFallback?: boolean }> {
  const subject = `[New Inquiry] ${data.name} · ${data.locality} (${data.service || (data.mode === "setup" ? "New Setup" : "Maintenance")})`;
  const toEmail = DEFAULT_NOTIFICATION_EMAIL;

  if (!RESEND_API_KEY) {
    console.warn("[Resend Warning] RESEND_API_KEY is not configured in environment variables.");
    return {
      success: false,
      error: "RESEND_API_KEY environment variable is not configured",
    };
  }

  try {
    // 1. Try sending from custom branded domain
    const primaryAttempt = await resend.emails.send({
      from: PRIMARY_FROM_EMAIL,
      to: toEmail,
      replyTo: REPLY_TO_EMAIL,
      subject: subject,
      html: buildHtmlTemplate(data, false),
    });

    if (!primaryAttempt.error) {
      return {
        success: true,
        id: primaryAttempt.data?.id,
        usedFallback: false,
      };
    }

    const errMsg = primaryAttempt.error.message || "";
    const isUnverifiedDomain =
      errMsg.includes("not verified") || primaryAttempt.error.name === "validation_error";

    // 2. If domain is pending verification, fall back to onboarding@resend.dev to ensure delivery
    if (isUnverifiedDomain) {
      console.warn(
        `[Resend Notice] Domain unverified on Resend. Falling back to sandbox sender: ${FALLBACK_FROM_EMAIL}`
      );
      const fallbackAttempt = await resend.emails.send({
        from: FALLBACK_FROM_EMAIL,
        to: toEmail,
        replyTo: REPLY_TO_EMAIL,
        subject: `[Creators Aquarium Alert] ${subject}`,
        html: buildHtmlTemplate(data, true),
      });

      if (!fallbackAttempt.error) {
        return {
          success: true,
          id: fallbackAttempt.data?.id,
          usedFallback: true,
        };
      }

      console.error("[Resend Error on Fallback]:", fallbackAttempt.error);
      return {
        success: false,
        error: fallbackAttempt.error.message,
      };
    }

    console.error("[Resend Error]:", primaryAttempt.error);
    return {
      success: false,
      error: primaryAttempt.error.message,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[Resend Unexpected Exception]:", message);
    return {
      success: false,
      error: message,
    };
  }
}
