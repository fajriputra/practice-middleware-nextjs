import { NextResponse } from "next/server";

export default function middleware(req) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/login")) {
    if (token) {
      const url = new URL("/dashboard", req.url);
      return NextResponse.redirect(url);
    }
  } else if (!token) {
    const url = new URL("/login", req.url);
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/login", "/about/:path*", "/dashboard/:path*"],
};
