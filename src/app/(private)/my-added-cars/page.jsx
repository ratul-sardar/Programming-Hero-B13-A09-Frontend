import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function MyAddedCars() {
  // Getting the userId
  const { session } = await auth.api.getSession({ headers: await headers() });
  const userId = await session?.id;

  //Fetching the data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/my-added-cars?userId=${userId}`,
  );
  const myAddedCars = await res.json();

  console.log(myAddedCars);

  return (
    <>
      <h1 className="text-red-500">Hi, from your added cars page</h1>
    </>
  );
}
