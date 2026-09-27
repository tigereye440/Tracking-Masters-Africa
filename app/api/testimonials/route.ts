import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { quote, serviceSlug, location, rating } = body;

        if (!quote || !serviceSlug || !location || !rating) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        if (rating < 1 || rating > 5) {
            return NextResponse.json({ error: "Invalid rating" }, { status: 400 });
        }

        await prisma.testimonial.create({
            data: { quote, serviceSlug, location, rating },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error)
        console.error("Failed to create testimonial:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}