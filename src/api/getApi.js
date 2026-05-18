export async function getAllCars() {
  const res = await fetch(`${process.env.SERVER_URI}/explore-cars/`);
  const data = await res.json();

  return data;
}
