// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth"; // adjust if your NextAuth config path is different

const protectedRoutes = ["/"]; // Example: pages that require auth

export async function middleware(request: NextRequest) {
  const session = await auth(); // Uses NextAuth's auth helper

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  const isAuthPage = request.nextUrl.pathname.startsWith("/login");

  if (!session?.user && isProtected) {
    // Redirect unauthenticated users trying to access protected pages
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session?.user && isAuthPage) {
    // Redirect authenticated users trying to access login page
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
