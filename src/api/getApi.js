export async function getAllCars() {
  const res = await fetch(``);
  const data = await res.json();

  return data;
}
