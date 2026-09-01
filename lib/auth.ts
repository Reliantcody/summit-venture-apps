import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "sv_apps_session";
const secret = () =>
  new TextEncoder().encode(
    process.env.AUTH_SECRET ?? "summit-venture-apps-dev-secret-change-in-production"
  );

export type Role = "owner" | "guest";

export async function createSessionToken(role: Role): Promise<string> {
  return new SignJWT({ role })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("30d")
    .sign(secret());
}

export async function verifySessionToken(
  token: string
): Promise<{ role: Role } | null> {
  try {
    const { payload } = await jwtVerify(token, secret());
    return { role: payload.role as Role };
  } catch {
    return null;
  }
}

// Call from Server Components / Route Handlers
export async function getSession(): Promise<{ role: Role } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export const SESSION_COOKIE = COOKIE_NAME;
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days
