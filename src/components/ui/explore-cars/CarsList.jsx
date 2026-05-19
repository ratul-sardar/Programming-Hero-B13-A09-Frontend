"use client";

import { CarSearchFilter } from "@/components/CarSearchFilter";
import { use, useState } from "react";

export default function CarsList() {
  const [searchValue, setsearchValue] = useState("");
  // const allCars = use();

  return (
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
  );
}
