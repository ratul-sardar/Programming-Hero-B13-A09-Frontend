"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function updateCar(formData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  const form = Object.fromEntries(formData);
  const now = new Date().toISOString();

  const payload = {
    ...form,
    updatedAt: now,
  };

  console.log(payload);

  // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/add-cars`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });

  // const data = await res.json();
  // return data;
}
