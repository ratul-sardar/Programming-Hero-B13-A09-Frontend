"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Explore Cars", href: "#cars" },
  { label: "Luxury Collection", href: "#cars" },
  { label: "Deals", href: "#features" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#footer" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="site-container flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          className="font-sans text-xl font-black tracking-tight text-foreground"
        >
          Drive<span className="text-primary">Fleet</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="text-sm font-semibold text-foreground transition-opacity hover:opacity-70">
            Login
          </button>
          <button className="rounded-[var(--radius)] bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Get Started
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="site-container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-[var(--radius)] px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3 pt-2">
              <button className="flex-1 rounded-[var(--radius)] border border-border px-4 py-2.5 text-sm font-semibold">
                Login
              </button>
              <button className="flex-1 rounded-[var(--radius)] bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
