import { getAllCars } from "@/api/getApi";

export default async function ExploreCars() {
  const allCars = await getAllCars();
  return (
    <>
      <section className="">
        <div className="cssContainer">
          {allCars.map((car) => (
            <p key={car._id} className="">
              {car.carName}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
