"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navlinks";
import LogOutButton from "@/components/LogOutButton";
import SideNavHead from "./SideBarHead";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="bg-white h-screen w-60  flex flex-col">
      <SideNavHead />
      <nav className="flex flex-col flex-1 p-4 space-y-1 overflow-y-auto">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex  duration-100 items-center gap-3 px-3 py-2 rounded-md text-sm font-normal transition-colors ${
                isActive
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              <link.icon className="w-5 h-5" />
              {link.title}
            </Link>
          );
        })}
      </nav>
      <div className="p-2 px-4 w-full border-t border-gray-200 flex flex-col">
        <LogOutButton />
      </div>
    </div>
  );
}
