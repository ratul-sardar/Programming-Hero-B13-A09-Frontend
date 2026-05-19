import { CarSearchFilter } from "@/components/CarSearchFilter";

export default function ExploreCars() {
  return (
    <>
      <section className="">
        <div className="cssContainer">
          <CarSearchFilter
            searchValue={searchValue}
            setsearchValue={setsearchValue}
          ></CarSearchFilter>
          {/* {allCars.map((car) => (
            <p key={car._id} className="">
              {car.carName}
            </p>
          ))}*/}
        </div>
      </section>
    </>
  );
}
