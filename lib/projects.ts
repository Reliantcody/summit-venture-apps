export interface Project {
  slug: string;
  name: string;
  description: string;
  status: "live" | "building" | "beta";
  url: string;
}

// Descriptions based on each app's actual functionality. URLs point to real live
// deployments where known; travel-tracker and bryce-charity aren't deployed yet.
export const PROJECTS: Project[] = [
  {
    slug: "golf-pool",
    name: "Golf Pool",
    description: "A private pick'em pool for golf's major tournaments — PIN-based login, no accounts to manage.",
    status: "live",
    url: "https://golf-pool-tawny.vercel.app",
  },
  {
    slug: "group-scheduler",
    name: "Group Scheduler",
    description: "A lightweight tool for coordinating schedules and finding times that work across a group.",
    status: "live",
    url: "https://group-scheduler-lemon.vercel.app",
  },
  {
    slug: "summit-finance",
    name: "Summit Finance",
    description: "A personal finance dashboard for tracking spending, budgets, and net worth.",
    status: "live",
    url: "https://summit-finance.vercel.app",
  },
  {
    slug: "travel-tracker",
    name: "Travel Tracker",
    description: "A trip planner and travel log for keeping itineraries and past trips in one place.",
    status: "building",
    url: "TODO_NEEDS_URL",
  },
  {
    slug: "bryce-charity",
    name: "Ride-Along Donations",
    description: "A donation and fundraising platform built for a charity ride-along event.",
    status: "building",
    url: "TODO_NEEDS_URL",
  },
  {
    slug: "application-tracker",
    name: "Application Tracker",
    description: "A tool for tracking job applications, statuses, and follow-ups end to end.",
    status: "live",
    url: "https://application-tracker-three-sepia.vercel.app",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
