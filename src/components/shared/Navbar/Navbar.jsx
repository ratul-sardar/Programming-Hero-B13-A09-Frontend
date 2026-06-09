"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import avatar from "@/assets/user.png";
import PrimaryCta from "../CTA Buttons/PrimaryCTA/PrimaryCta";
import SecondaryCta from "../CTA Buttons/SecondaryCta/SecondaryCta";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Explore Cars", href: "/explore-cars" },
  { label: "Add Car", href: "/add-cars" },
  { label: "My Bookings", href: "/my-bookings" },
];

export function Navbar() {
  // State for the mobile navbar
  const [open, setOpen] = useState(false);
  // Toggle Profile Dropdown
  const [showProfile, setShowProfile] = useState(false);

  const { data: session } = authClient.useSession();

  // TO check if the profile image exsist
  let profileImage = avatar;
  if (session)
    if (session.user.image && !session?.user?.image == "")
      profileImage = session.user.image;

  console.log(session);
  // console.log(session.user.name);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="cssContainer p-0 flex h-16 items-center justify-between md:h-20">
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-sans text-xl font-black tracking-tight text-foreground"
        >
          Drive<span className="text-accent">Fleet</span>
        </Link>

        {/* NavLinks*/}
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

        {/* Cta*/}
        <div className="hidden relative text-sm font-semibold items-center gap-3 lg:flex">
          {/* if session exist and if session user have image url then it will show that image*/}
          {session ? (
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Image src={profileImage} width={40} height={40} alt="hi"></Image>
              <p>{session?.user?.name}</p>
            </button>
          ) : (
            <CtaButtons />
          )}

          {/* Profile details modal*/}
          {showProfile && (
            <div className="absolute top-[172%] right-[2%] bg-white p-4 rounded-[--field-radius] flex flex-col gap-2 ">
              <UserInfo session={session}></UserInfo>
            </div>
          )}
        </div>

        {/* Mobile Nav Toggle Button*/}
        <button
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Navbar*/}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="cssContainer p-0 flex flex-col gap-1 py-4">
            {/* Mobile navlinks*/}
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

            {/* Cta*/}
            <div className="mt-2 flex gap-3 pt-2">
              {session ? <p>{session?.user?.name}</p> : <CtaButtons />}
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
      <SecondaryCta link={`/login`} className={``}>
        Login
      </SecondaryCta>
      <PrimaryCta link={`/sign-up`} className={``}>
        Sign Up
      </PrimaryCta>
    </>
  );
}

// The user function will show the user info if logged in.
function UserInfo({ session }) {
  return (
    <>
      {/* {session?.user?.name}*/}
      <Link href={`/add-cars`} className="hover:text-accent">
        Add Car
      </Link>
      <Link href={`/my-bookings`} className="hover:text-accent">
        My Bookings
      </Link>
      <Link href={`/`} className="hover:text-accent">
        My Added Cars
      </Link>
      <Link href={`/`} className="hover:text-accent">
        Logout
      </Link>
    </>
  );
}
