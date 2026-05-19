export async function getAllCars(search = "", type = "") {
  const quary = new URLSearchParams();
  if (search) quary.append("search", search);
  if (type) quary.append("type", type);

  const res = await fetch(
    `${process.env.SERVER_URI}/explore-cars?${quary.toString()}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    },
  );
  const data = await res.json();

  return data;
}
