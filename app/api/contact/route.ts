import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"
export async function POST(request: Request) {

    const body = await request.json()
    const { name, phone, service, message } = body;
    if (!name || !phone || !message) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await prisma.contactLead.create({
        data: { name, phone, service, message },
    });
    
    // console.log("New contact lead:", { name, phone, service, message });

    return NextResponse.json({ success: true });


}