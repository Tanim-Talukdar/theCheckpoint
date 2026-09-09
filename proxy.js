import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/adminAuth";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Admin login must always be accessible
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_session")?.value;

  // No login cookie → 404
  if (!token) {
    return new NextResponse("Not Found", {
      status: 404,
    });
  }

  // Verify JWT
  const admin = verifyAdminToken(token);

  // Invalid/expired/tampered token → 404
  if (!admin || admin.role !== "admin" || !admin.adminId) {
    const response = new NextResponse("Not Found", {
      status: 404,
    });

    response.cookies.delete("admin_session");

    return response;
  }

  // Valid admin → allow request
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};