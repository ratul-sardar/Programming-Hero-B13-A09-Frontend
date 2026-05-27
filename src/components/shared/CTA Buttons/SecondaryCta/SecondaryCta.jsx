import { Button } from "@heroui/react";
import Link from "next/link";

export default function SecondaryCta({
  link = `/`,
  children = "SecondaryCta!",
  className,
}) {
  return (
    <Link href={link}>
      <Button
        variant="outline"
        className={`rounded-(--radius) font-semibold ${className}`}
      >
        {children}
      </Button>
    </Link>
  );
}
