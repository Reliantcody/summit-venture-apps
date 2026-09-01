import type { Project } from "@/lib/projects";

const statusColors: Record<Project["status"], string> = {
  live: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  beta: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  building: "bg-zinc-500/15 text-zinc-500",
};

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  beta: "Beta",
  building: "Building",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl">{project.icon}</span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{project.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
        Open
        <svg
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      <div className="truncate text-xs text-zinc-400">{project.url.replace("https://", "")}</div>
    </a>
  );
}
