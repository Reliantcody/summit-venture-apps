import { NextRequest, NextResponse } from "next/server";
import { verifyCredential } from "@/lib/access";
import { createSessionToken, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { password } = (await req.json()) as { password?: string };

    if (!password) {
      return NextResponse.json({ error: "Password is required" }, { status: 400 });
    }

    const role = await verifyCredential(password);
    if (!role) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    const token = await createSessionToken(role);
    const res = NextResponse.json({ success: true, role });
    res.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_MAX_AGE,
      path: "/",
    });
    return res;
  } catch (err) {
    console.error("Auth error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
