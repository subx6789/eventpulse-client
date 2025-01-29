import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id, action } = await req.json();

  if (!id || !action) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  console.log(
    `Event ID: ${id} ${action === "approve" ? "approved" : "denied"}`
  );

  return NextResponse.json({ success: true });
}
