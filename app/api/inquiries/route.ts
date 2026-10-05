import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, phone, locality, service } = data;

    if (!name || !phone || !locality) {
      return NextResponse.json(
        { error: "Missing required fields (name, phone, locality)" },
        { status: 400 }
      );
    }

    // In Phase 1 without database credentials, log inquiry server-side
    // This is prepared for seamless forwarding to Convex or internal webhook
    console.log("=== NEW CREATORS AQUARIUM INQUIRY ===");
    console.log(`Customer : ${name}`);
    console.log(`Phone    : ${phone}`);
    console.log(`Locality : ${locality}`);
    console.log(`Service  : ${service}`);
    console.log(`Tank     : ${data.tankType || "N/A"} (${data.tankSize || "N/A"})`);
    console.log(`Photo    : ${data.photoName || "None"}`);
    console.log(`Notes    : ${data.notes || "None"}`);
    console.log("======================================");

    return NextResponse.json({
      success: true,
      message: "Inquiry registered successfully. Our team will contact you shortly.",
      inquiryId: `CA-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("Inquiry registration error:", error);
    return NextResponse.json(
      { error: "Internal server error registering inquiry" },
      { status: 500 }
    );
  }
}
