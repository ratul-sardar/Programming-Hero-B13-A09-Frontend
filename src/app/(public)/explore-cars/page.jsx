import { getAllCars } from "@/api/getApi";

export default async function ExploreCars() {
  const allCars = await getAllCars();
  console.log(allCars);
  return "Hi, from explore cars secton";
}
