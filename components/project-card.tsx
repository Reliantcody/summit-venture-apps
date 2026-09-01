import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{project.name}</h3>
          <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs capitalize text-black/60">
            {project.status}
          </span>
        </div>
        <p className="mt-2 text-sm text-black/70">{project.description}</p>
      </div>
      <div className="mt-4">
        <Button asChild variant="outline" size="sm">
          <Link href={`/${project.slug}`}>Enter</Link>
        </Button>
      </div>
    </Card>
  );
}
