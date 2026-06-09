"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { BsGoogle } from "react-icons/bs";

export default function GoogleLogin() {
  return (
    <Button
      variant="outline"
      className={`text-accent w-full`}
      onClick={async () => {
        const data = await authClient.signIn.social({
          provider: "google",
        });
      }}
    >
      <BsGoogle /> Google
    </Button>
  );
}
