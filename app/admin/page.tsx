import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getAccessKeySource } from "@/lib/access";
import { PROJECTS } from "@/lib/projects";
import { Card } from "@/components/ui/card";

export default async function AdminPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.role !== "owner") redirect("/");

  const source = await getAccessKeySource();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Admin</h1>

      <Card className="mt-8">
        <h2 className="font-semibold">Access key status</h2>
        <p className="mt-2 text-sm text-black/70">
          {source === "edge-config" && "Reading the shared access key from Vercel Edge Config."}
          {source === "env" &&
            "Reading the shared access key from the ACCESS_KEY environment variable (Edge Config not connected yet)."}
          {source === "unset" && "No access key is currently set — guest login will not work."}
        </p>
        <p className="mt-4 text-sm text-black/60">
          To rotate the key: open the Vercel dashboard → this project → Edge Config (or
          Environment Variables if not yet on Edge Config) → update the <code>accessKey</code>{" "}
          value → share the new key. Old key stops working for new logins immediately;
          already-signed-in guests stay in until their session cookie expires (~30 days).
        </p>
      </Card>

      <Card className="mt-6">
        <h2 className="font-semibold">Projects</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm">
          {PROJECTS.map((p) => (
            <li key={p.slug} className="flex items-center justify-between">
              <span>{p.name}</span>
              <span className="text-black/50">
                {p.status} · {p.url === "TODO_NEEDS_URL" ? "no URL set" : p.url}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
