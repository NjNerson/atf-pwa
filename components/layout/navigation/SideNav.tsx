"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "./navlinks";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="bg-white h-screen w-60 shadow-lg flex flex-col">
      <Header />
      <nav className="flex flex-col flex-1 p-4 space-y-1 overflow-y-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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
    </div>
  );
}

const Header = () => (
  <div className="flex items-center gap-3 p-4 py-1.5 bg-blue-50 border-b border-blue-200">
    <Image
      src="/bg-login.jpeg"
      alt="Logo ATF"
      width={36}
      height={36}
      className="rounded-full object-cover w-9 h-9"
    />
    <h1 className="text-sm font-semibold text-blue-900 select-none">
      ATF Management
    </h1>
  </div>
);
