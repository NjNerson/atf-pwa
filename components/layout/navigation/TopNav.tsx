"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { topNavName } from "./navlinks";
import { useState, useEffect, useRef } from "react";

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const title = topNavName[pathname] || "ATF Management";

  const [canGoBack, setCanGoBack] = useState(false);

  // Check if we can go back in history ,....prevent empty history
  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleGoBack = () => {
    if (canGoBack) router.back();
    else router.push("/");
  };

  return (
    <header
      className={`md:sticky shadow-md fixed w-full top-0 z-20 bg-white flex items-center gap-4 px-4 py-1 transition-transform duration-300
      `}
    >
      <button
        onClick={handleGoBack}
        aria-label="Go back"
        className="p-2 rounded hover:bg-gray-100 transition"
      >
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>
      <h1 className="text-md font-semibold text-gray-900 select-none">
        {title}
      </h1>
    </header>
  );
}
