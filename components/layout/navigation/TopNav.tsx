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
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 0) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      setVisible(true);

      if (timeoutId.current) clearTimeout(timeoutId.current);

      timeoutId.current = setTimeout(() => {
        if (window.scrollY > 50) setVisible(false);
      }, 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const handleGoBack = () => {
    if (canGoBack) router.back();
    else router.push("/");
  };

  return (
    <header
      className={`sticky top-0 z-20 bg-white flex items-center gap-4 px-4 py-1 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        // Optional: add shadow when visible for better UX
        boxShadow: visible ? "0 2px 4px rgba(0,0,0,0.01)" : "none",
      }}
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
