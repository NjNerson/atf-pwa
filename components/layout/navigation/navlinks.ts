// app/constants/navlinks.ts
import { Home, UserCircle, Settings, Users, Trophy } from "lucide-react";

export const navLinks = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Membres",
    href: "/members",
    icon: Users,
  },
  {
    title: "Compétitions",
    href: "/competitions",
    icon: Trophy,
  },
  {
    title: "Profil",
    href: "/profile",
    icon: UserCircle,
  },
  {
    title: "Paramètres",
    href: "/settings",
    icon: Settings,
  },
];

export const topNavName: Record<string, string> = {
  "/": "Dashboard",
  "/profile": "Profil",
  "/members": "Membres",
  "/settings": "Paramètres",
  "/competitions": "Compétitions",
};
