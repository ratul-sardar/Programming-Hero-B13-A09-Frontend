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
        className={`h-auto rounded-(--radius) font-semibold px-6 py-3.5 ${className}`}
      >
        {children}
      </Button>
    </Link>
  );
}
