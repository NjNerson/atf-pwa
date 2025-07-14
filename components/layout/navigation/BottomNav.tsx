"use client";

import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { navLinks } from "./navlinks";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-around not-even:pb-2 items-center bg-white border-t border-gray-200 shadow-md h-16">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center text-gray-700 hover:text-primary-blue ${
              isActive ? "bg-blue-400 text-white rounded-lg p-2" : ""
            }`}
          >
            <link.icon className="w-6 h-6" />
          </Link>
        );
      })}
    </nav>
  );
}
