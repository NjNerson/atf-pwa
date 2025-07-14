"use client";

import Link from "next/link";
import { navLinks } from "./navlinks";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-around py-2 items-center bg-white border-t border-gray-200 shadow-md h-16">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center text-gray-700 hover:text-primary-blue duration-100 ${
              isActive ? "bg-blue-400 text-white rounded-lg p-2" : ""
            }`}
          >
            <link.icon className="w-6 h-6" />
            <span className="text-xs hidden sm:block">{link.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
