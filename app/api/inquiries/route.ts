import { NextResponse } from "next/server";
import { sendInquiryNotification, InquiryPayload } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const data: InquiryPayload = await request.json();

    const { name, phone, locality } = data;

    if (!name || !phone || !locality) {
      return NextResponse.json(
        { error: "Missing required fields (name, phone, locality)" },
        { status: 400 }
      );
    }

    // Server-side logging for operational audit
    console.log("=== NEW CREATORS AQUARIUM INQUIRY ===");
    console.log(`Customer : ${name}`);
    console.log(`Phone    : ${phone}`);
    console.log(`Email    : ${data.email || "N/A"}`);
    console.log(`Locality : ${locality}`);
    console.log(`Mode     : ${data.mode || "standard"}`);
    console.log(`Service  : ${data.service || "N/A"}`);
    console.log(`Tank     : ${data.tankSize || "N/A"} (${data.aquariumType || data.tankType || "N/A"})`);
    console.log(`Notes    : ${data.notes || "None"}`);
    console.log("======================================");

    // Send email notification via Resend
    const emailResult = await sendInquiryNotification(data);

    return NextResponse.json({
      success: true,
      message: "Inquiry registered successfully.",
      inquiryId: `CA-${Date.now().toString().slice(-6)}`,
      emailDelivered: emailResult.success,
      usedFallback: emailResult.usedFallback,
    });
  } catch (error) {
    console.error("Inquiry registration error:", error);
    return NextResponse.json(
      { error: "Internal server error registering inquiry" },
      { status: 500 }
    );
  }
}
