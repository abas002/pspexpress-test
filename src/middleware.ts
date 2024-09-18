import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/admin/list", "/admin/settings"];

export function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const role = cookieStore.get("role");
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  if (isProtectedRoute) {
    if (!role) return NextResponse.redirect(new URL("/login", req.nextUrl));
    if (role.value === "user" && path.includes("settings")) {
      return NextResponse.redirect(new URL("/unathorized", req.nextUrl));
    }
  }

  const response = NextResponse.next();
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
