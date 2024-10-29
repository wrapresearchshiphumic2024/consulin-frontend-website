import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export async function middleware(req: NextRequest) {
    const session = await auth();
    const { pathname } = req.nextUrl;


    // Halaman yang tidak perlu dicek untuk redirect (hindari loop)
    const isSignInPage = pathname === "/signin";
    const isSignUpPage = pathname === "/signup";
    const isSignUpPsychologPage = pathname === "/signup-psycholog";

    // Redirect ke /signin jika belum login dan mencoba akses halaman selain halaman pengecualian di atas
    if (!session?.user && !isSignInPage && !isSignUpPage && !isSignUpPsychologPage) {
        return NextResponse.redirect(new URL("/signin", req.url));
    }

    // Redirect ke dashboard sesuai role jika user sudah login dan mengakses halaman pengecualian di atas
    if (session?.user && (isSignInPage || isSignUpPage || isSignUpPsychologPage)) {
        if (session.user.role === "admin") {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        } else if (session.user.role === "patient") {
            return NextResponse.redirect(new URL("/dashboard-patient", req.url));
        } else if (session.user.role === "psychologist") {
            return NextResponse.redirect(new URL("/dashboard-psychologist", req.url));
        }
    }

    // Validasi akses sesuai role ke dashboard yang sesuai
    if (session?.user) {
        const role = session.user.role;

        // Admin hanya boleh mengakses /dashboard dan sub-rutenya
        if (role === "admin") {
            if (!(pathname === "/dashboard" || pathname.startsWith("/dashboard/"))) {
                return NextResponse.redirect(new URL("/dashboard", req.url));
            }
        }

        // Patient hanya boleh mengakses /dashboard-patient dan sub-rutenya
        if (role === "patient") {
            if (!(pathname === "/dashboard-patient" || pathname.startsWith("/dashboard-patient/"))) {
                return NextResponse.redirect(new URL("/dashboard-patient", req.url));
            }
        }

        // Psychologist hanya boleh mengakses /dashboard-psychologist dan sub-rutenya
        if (role === "psychologist") {
            if (!(pathname === "/dashboard-psychologist" || pathname.startsWith("/dashboard-psychologist/"))) {
                return NextResponse.redirect(new URL("/dashboard-psychologist", req.url));
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/signin",
        "/signup",
        "/signup-psycholog",
        "/dashboard/:path*",
        "/dashboard-patient/:path*",
        "/dashboard-psychologist/:path*"
    ],
    unstable_allowDynamic: [
        '/node_modules/stream-chat/dist/browser.es.js',
        '/node_modules/function-bind/**', // use a glob to allow anything in the function-bind 3rd party module
    ]
};
