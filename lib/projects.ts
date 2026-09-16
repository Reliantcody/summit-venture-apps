export interface Project {
  slug: string;
  name: string;
  description: string;
  icon: string;
  status: "active" | "in-progress" | "early-stage";
  url: string;
  category: "tools" | "sites";
}

export const PROJECTS: Project[] = [
  {
    slug: "golf-pool",
    name: "Golf Pool",
    icon: "⛳",
    description: "Pick'em pool for golf's major tournaments. PIN-based login, no accounts needed.",
    status: "active",
    url: "https://golf.summitventure.io",
    category: "tools",
  },
  {
    slug: "group-scheduler",
    name: "Group Scheduler",
    icon: "📅",
    description: "Find times that work across a group. Share a link, collect availability, done.",
    status: "active",
    url: "https://schedule.summitventure.io",
    category: "tools",
  },
  {
    slug: "loan-tracker",
    name: "Loan Tracker",
    icon: "💰",
    description: "Track loans and leases across deals — balances, terms, and payment schedules.",
    status: "active",
    url: "https://loans.summitventure.io",
    category: "tools",
  },
  {
    slug: "asset-tracker",
    name: "Asset Tracker",
    icon: "🏗️",
    description: "Rental asset tracker for RMR properties — equipment, units, and maintenance.",
    status: "active",
    url: "https://assets.summitventure.io",
    category: "tools",
  },
  {
    slug: "travel-tracker",
    name: "Travel Tracker",
    icon: "✈️",
    description: "Trip planner and travel log — itineraries and past trips in one place.",
    status: "active",
    url: "https://travel.summitventure.io",
    category: "tools",
  },
  {
    slug: "komune",
    name: "Komune Meetups",
    icon: "🤝",
    description: "Komune community landing page and meetup signups for the Portland network.",
    status: "active",
    url: "https://komune.summitventure.io",
    category: "tools",
  },
  {
    slug: "summit-venture-site",
    name: "Summit Venture",
    icon: "🏔️",
    description: "Public marketing site — Summit Venture Solutions brand, services, and contact.",
    status: "active",
    url: "https://summitventure.io",
    category: "sites",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
