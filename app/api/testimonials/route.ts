import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { quote, serviceSlug, location, rating } = body;

  if (!quote || !serviceSlug || !location || !rating) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Invalid rating" }, { status: 400 });
  }

  try {
    await prisma.testimonial.create({
      data: { quote, serviceSlug, location, rating },
      // status defaults to PENDING automatically, per the schema
    });
  } catch (error) {
    console.error("Failed to save testimonial:", error);
    return NextResponse.json(
      { error: "Unable to submit your review right now. Please try again shortly." },
      { status: 503 }
    );
  }

  return NextResponse.json({ success: true });
}