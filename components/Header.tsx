"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import pi from "../public/pi.png";
import Github from "@/components/GitHub";

export default function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-50 ${
        !top && "bg-white shadow-lg backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="mr-4 flex-shrink-0 flex items-center">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <div className="flex items-center">
                <Image className="h-10 w-auto" src={pi} alt="pi" />
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-2xl font-bold text-transparent ml-2">
                  .mov
                </span>
              </div>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow flex-wrap items-center justify-end">
              <li>
                <Link
                  href="https://github.com/Teakowa/3.14159.mov"
                  className="flex items-center justify-center rounded border-none bg-gray-900 p-4 py-2 text-sm text-gray-200 shadow-sm transition-colors hover:bg-gray-800"
                >
                  <Github />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
