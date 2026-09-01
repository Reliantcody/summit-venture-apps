import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { LogoutButton } from "@/components/logout-button";

export default async function LibraryPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Summit Venture Apps</h1>
          <p className="mt-1 text-sm text-black/60">
            Signed in as {session.role === "owner" ? "owner" : "guest"}.
            {session.role === "owner" && (
              <>
                {" "}
                <a href="/admin" className="underline">
                  Admin
                </a>
              </>
            )}
          </p>
        </div>
        <LogoutButton />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
