import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { LogoutButton } from "@/components/logout-button";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const tools = PROJECTS.filter((p) => p.category === "tools");
  const sites = PROJECTS.filter((p) => p.category === "sites");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏔️</span>
              <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Summit Venture
              </h1>
            </div>
            <p className="mt-1 text-sm text-zinc-500">
              {session.role === "owner" ? "Owner" : "Guest"} ·{" "}
              {session.role === "owner" && (
                <a href="/admin" className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100">
                  Admin
                </a>
              )}
            </p>
          </div>
          <LogoutButton />
        </div>

        {/* Tools */}
        <section className="mt-12">
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Tools
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Sites */}
        <section className="mt-12">
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Sites
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
