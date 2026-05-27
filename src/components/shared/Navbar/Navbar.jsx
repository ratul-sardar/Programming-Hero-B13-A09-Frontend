"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import PrimaryCta from "../CTA Buttons/PrimaryCTA/PrimaryCta";
import SecondaryCta from "../CTA Buttons/SecondaryCta/SecondaryCta";
import Link from "next/link";

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
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="cssContainer p-0 flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-sans text-xl font-black tracking-tight text-foreground"
        >
          Drive<span className="text-accent">Fleet</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden text-sm font-semibold items-center gap-3 lg:flex">
          <CtaButtons />
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
          <div className="cssContainer p-0 flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-(--radius) px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3 pt-2">
              <CtaButtons />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function CtaButtons() {
  return (
    <>
      <SecondaryCta link={`/`} className={``}>
        Login
      </SecondaryCta>
      <PrimaryCta link={`/`} className={``}>
        Get Started!
      </PrimaryCta>
    </>
  );
}
