import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, service, message } = body;

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await prisma.contactLead.create({
      data: { name, phone, service, message },
    });
  } catch (error) {
    console.error("Failed to save contact lead:", error);
    return NextResponse.json(
      { error: "Unable to save your message right now. Please try again shortly." },
      { status: 503 }
    );
  }

  return NextResponse.json({ success: true });
}