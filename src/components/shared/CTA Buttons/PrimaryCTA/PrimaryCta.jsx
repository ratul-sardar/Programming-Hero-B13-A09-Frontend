import { Button } from "@heroui/react";
import Link from "next/link";

export default function PrimaryCta({
  link = `/`,
  children = "PrimaryCta!",
  className,
}) {
  return (
    <Link href={link}>
      <Button className={`rounded-(--radius) font-semibold ${className}`}>
        {children}
      </Button>
    </Link>
  );
}
