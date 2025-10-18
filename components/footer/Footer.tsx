"use client";

import { Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  return (
    <footer
      className={
        pathname === "/sessionProfile"
          ? "mt-0 w-full bg-gradient-to-br from-[#0a0a0f] to-[#121228] text-white py-4"
          : "mt-0 w-full bg-transparent border-t rounded-sm border-white/70 text-white py-4"
      }
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
            <Image
              alt="logo"
              width={50}
              height={50}
              src="/images/thumbnail.png"
              className="rounded-md"
            ></Image>
          </div>
          <span className="font-semibold text-sm sm:text-base">izle</span>
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/aykublut/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/aykublut/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/aykublut"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="mt-2 text-center text-xs text-gray-500">
        © {year} izle. All rights reserved.
      </div>
    </footer>
  );
}
