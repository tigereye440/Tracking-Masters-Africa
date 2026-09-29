import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
    const authHeader = request.headers.get("authorization")

    if (authHeader) {
        const encoded = authHeader.split(" ")[1];
        const decoded = Buffer.from(encoded, "base64").toString();
        const [username, password] = decoded.split(".")

        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            return NextResponse.next();
        }

        return new NextResponse("Authentication required", {
            status: 401,
            headers: { "WWW_Authenticate": 'Basic realm="Admin'}
        });
    }
}


export const config = {
    matcher: "/admin/:path*",
}


