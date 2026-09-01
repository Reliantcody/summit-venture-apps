import { get } from "@vercel/edge-config";
import type { Role } from "@/lib/auth";

export async function verifyCredential(input: string): Promise<Role | null> {
  if (process.env.OWNER_PASSWORD && input === process.env.OWNER_PASSWORD) {
    return "owner";
  }

  let accessKey: string | undefined;
  try {
    accessKey = await get<string>("accessKey"); // Edge Config primary source
  } catch {
    // Edge Config not provisioned yet (local dev, or not connected) — fall through to env var
  }
  if (!accessKey) accessKey = process.env.ACCESS_KEY;

  if (accessKey && input === accessKey) return "guest";
  return null;
}

// Reports where the access key currently comes from, for the admin status page.
export async function getAccessKeySource(): Promise<"edge-config" | "env" | "unset"> {
  try {
    const fromEdgeConfig = await get<string>("accessKey");
    if (fromEdgeConfig) return "edge-config";
  } catch {
    // not provisioned
  }
  if (process.env.ACCESS_KEY) return "env";
  return "unset";
}
