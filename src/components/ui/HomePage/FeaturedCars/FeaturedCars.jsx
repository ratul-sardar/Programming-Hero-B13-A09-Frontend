import { getAllCars } from "@/api/getApi";
import PrimaryCta from "@/components/shared/CTA Buttons/PrimaryCTA/PrimaryCta";
import { ArrowUpRight, MapPin } from "lucide-react";

import Image from "next/image";

// {
// "_id": "6a0a7cda18390593347443df",
// "carName": "Honda Civic 2023",
// "dailyRentPrice": 45,
// "carType": "Sedan",
// "imageUrl": "https://images.unsplash.com/photo-1590362891990-f8ddb41d3a3f?w=500&q=80",
// "seatCapacity": 5,
// "pickupLocation": "Dhaka, Gulshan",
// "description": "A reliable and fuel-efficient sedan perfect for city driving. Features modern infotainment system, ABS, power steering, and air conditioning.",
// "availabilityStatus": true,
// "bookingCount": 12,
// "owner": "507f1f77bcf86cd799439011",
// "createdAt": "2024-01-15T00:00:00.000Z",
// "updatedAt": "2024-05-15T00:00:00.000Z"
// }

export async function FeaturedCars() {
  // Getting all the cars
  let cars = await getAllCars();
  // Limiting all the cars to max of 6
  cars = cars.splice(0, 6);

  return (
    <section id="cars" className="border-b border-border">
      <div className="cssContainer">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-accent! font-semibold!">Available Cars</p>
            <h2 className="section-title mt-4">
              Find The Perfect Ride For Every Journey
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Choose from a curated collection of modern, luxury, and
            performance-focused vehicles built for every occasion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((c) => (
            <article
              key={c._id}
              className="group flex flex-col overflow-hidden rounded-(--radius) border border-border bg-card transition-transform duration-300 "
            >
              <div className="aspect-4/3 overflow-hidden bg-muted">
                <Image
                  src={c.imageUrl}
                  alt={c.carName}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs! font-semibold! uppercase! tracking-widest! text-muted-foreground!">
                  {c.carType}
                </p>
                <h3 className="card-title mt-2 text-foreground">{c.carName}</h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="cardBadge">
                    <span className="">Seat Capacity:</span> {c.seatCapacity}{" "}
                    <span className="">Persons</span>
                  </li>
                  <li className="cardBadge">
                    <span className="">Booking Count:</span> {c.bookingCount}
                  </li>
                </ul>
                <p className="flex items-center gap-2 mt-4 text-xs! font-semibold! uppercase! tracking-widest! text-muted-foreground!">
                  <span className="">
                    <MapPin></MapPin>
                  </span>
                  <span className="">{c.pickupLocation}</span>
                </p>

                <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <span className="font-sans text-2xl font-black text-foreground">
                      $
                    </span>
                    <span className="font-sans text-2xl font-black text-foreground">
                      {c.dailyRentPrice}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      / day
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform hover:translate-x-0.5">
                    View Details <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="w-full flex items-center justify-center mt-8">
          <PrimaryCta link="/explore-cars" className={``}>
            See All Cars
          </PrimaryCta>
        </div>
      </div>
    </section>
  );
}
