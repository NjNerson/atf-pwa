import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  console.log("MIDDLEWARE WORKING...");

  //   const supabase = createServerClient(
  //     process.env.SUPABASE_URL!,
  //     process.env.SUPABASE_ANON_KEY!,
  //     {
  //       cookies: {
  //         getAll() {
  //           return request.cookies.getAll();
  //         },
  //         setAll(cookiesToSet) {
  //           cookiesToSet.forEach(({ name, value }) =>
  //             request.cookies.set(name, value)
  //           );
  //           supabaseResponse = NextResponse.next({
  //             request,
  //           });
  //           cookiesToSet.forEach(({ name, value, options }) =>
  //             supabaseResponse.cookies.set(name, value, options)
  //           );
  //         },
  //       },
  //     }
  //   );

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();

  //   if (
  //     !user &&
  //     !request.nextUrl.pathname.startsWith("/login")
  //     // && !request.nextUrl.pathname.startsWith("/auth")
  //   ) {
  //     // no user, potentially respond by redirecting the user to the login page
  //     const url = request.nextUrl.clone();
  //     url.pathname = "/login";
  //     return NextResponse.redirect(url);
  //   }

  return supabaseResponse;
}
