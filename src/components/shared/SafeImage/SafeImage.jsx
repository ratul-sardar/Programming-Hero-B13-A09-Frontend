"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

function isValidSrc(src) {
  if (!src || typeof src !== "string") return false;
  try {
    new URL(src);
    return true;
  } catch {
    return src.startsWith("/");
  }
}

export default function SafeImage({ src, alt, ...props }) {
  const [hasError, setHasError] = useState(false);
  const valid = useMemo(() => isValidSrc(src), [src]);

  if (!valid || hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground p-4">
        {alt}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
