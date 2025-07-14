"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "./navlinks";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { logOutUserAction } from "@/action/user/user";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="bg-white h-screen w-60  flex flex-col">
      <Header />
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

const LogOutButton = ({ className = "" }: { className?: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLogout = async () => {
    startTransition(async () => {
      const { errorMessage } = await logOutUserAction();
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success("Vous êtes déconnecté !");
        router.push("/login");
      }
    });
  };

  return (
    <button
      onClick={handleLogout}
      className={`flex gap-2 px-3 items-center justify-center mt-auto text-sm  py-1.5 text-red-500  rounded-md cursor-pointer hover:bg-red-100 transition-colors ${className}`}
    >
      {isPending ? (
        <Loader2 className="size-5 animate-spin" />
      ) : (
        <LogOut className="size-5" />
      )}

      <span>Déconnexion</span>
    </button>
  );
};
