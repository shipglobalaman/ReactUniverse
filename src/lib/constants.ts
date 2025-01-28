import {
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2,
  Frame,
  Map,
  PieChart,
  LockKeyhole,
  Presentation,
  NotebookPen,
  User,
} from "lucide-react"
import { BuildingIcon as CityHall, CloudSun, Bus, Building, ShoppingCart, Newspaper, Calendar, Zap } from "lucide-react"

export function getRoleByRoleId(roleId: number) {
  switch (roleId) {
    case 1:
      return "Admin"
    case 2:
      return "Teacher"
    case 3:
      return "Student"
    default:
      return "Parent"
  }
}

export function getIconByRoleId(roleId: number) {
  switch (roleId) {
    case 1:
      return LockKeyhole
    case 2:
      return Presentation
    case 3:
      return NotebookPen
    default:
      return User
  }
}

// This is sample data.
export const navItems = [
  { name: "City Hall", href: "/city-hall", icon: CityHall },
  { name: "Weather Center", href: "/weather-center", icon: CloudSun },
  { name: "Transportation Hub", href: "/transportation-hub", icon: Bus },
  { name: "Central Office", href: "/central-office", icon: Building },
  { name: "Marketplace", href: "/marketplace", icon: ShoppingCart },
  { name: "Bulletin Board", href: "/bulletin-board", icon: Newspaper },
  { name: "Planning Department", href: "/planning-department", icon: Calendar },
  { name: "Power Grid", href: "/power-grid", icon: Zap },
]
export const menuItems = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/shadcn.jpg",
  },
  teams: [
    {
      role: 1,
      logo: LockKeyhole,
      name: "Playscool",
    },
    {
      role: 2,
      logo: Presentation,
      name: "Primary School",
    },
    {
      role: 3,
      logo: NotebookPen,
      name: "Secondary School",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Prepare",
          url: "playground",
        },
        {
          title: "Attempt",
          url: "/take-test",
        },
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Courses",
      url: "/courses",
      icon: Frame,
    },
    {
      name: "Tests",
      url: "/tests",
      icon: PieChart,
    },
    {
      name: "Reports",
      url: "/reports",
      icon: Map,
    },
  ],
}
