"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/travel", label: "Travel" },
  { href: "/registry", label: "Registry" },
  { href: "/gallery", label: "Gallery" },
  { href: "/things-to-do", label: "Things To Do" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-sand/80 backdrop-blur-md border-b border-med/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-cursive text-3xl font-medium tracking-wide text-med transition-opacity hover:opacity-80">
          Ethan & Artemis
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium tracking-wider uppercase transition-colors hover:text-aegean",
                pathname === link.href ? "text-aegean" : "text-med/80"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/rsvp" className="px-6 py-2.5 bg-med text-sand rounded-none text-sm font-semibold tracking-wider uppercase hover:bg-aegean transition-all shadow-md hover:shadow-lg">
            RSVP
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-med" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-sand/95 backdrop-blur-xl border-t border-med/10 shadow-xl py-12 flex flex-col items-center gap-6 h-[100dvh] pb-32">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "text-lg font-medium tracking-widest uppercase transition-colors hover:text-aegean",
                pathname === link.href ? "text-aegean" : "text-med"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/rsvp" 
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-3 bg-med text-sand text-lg font-semibold tracking-wider uppercase hover:bg-aegean transition-all"
          >
            RSVP
          </Link>
        </div>
      )}
    </nav>
  );
}
