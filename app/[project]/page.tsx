import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { getProject, PROJECTS } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ project: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const { project: slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasRealUrl = project.url !== "TODO_NEEDS_URL";

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Link href="/" className="text-sm text-black/60 hover:text-black">
        ← Back to library
      </Link>

      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">{project.name}</h1>
        <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs capitalize text-black/60">
          {project.status}
        </span>
      </div>

      <p className="mt-4 text-black/70">{project.description}</p>

      <div className="mt-8">
        {hasRealUrl ? (
          <Button asChild>
            <a href={project.url} target="_blank" rel="noreferrer">
              Enter Demo
            </a>
          </Button>
        ) : (
          <Button disabled>Enter Demo (URL not set yet)</Button>
        )}
      </div>
    </div>
  );
}
