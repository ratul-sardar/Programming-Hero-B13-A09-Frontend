import { Button } from "@heroui/react";
import Link from "next/link";

export default function PrimaryCta({
  link = `/`,
  children = "PrimaryCta!",
  className,
}) {
  return (
    <Link href={link} className="">
      <Button
        className={`h-auto rounded-(--radius) font-semibold px-6 py-3.5 ${className}`}
      >
        {children}
      </Button>
    </Link>
  );
}
