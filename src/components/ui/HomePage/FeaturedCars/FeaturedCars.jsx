import { ArrowUpRight } from "lucide-react";

import Image from "next/image";

const cars = [
  {
    name: "BMW M4 Competition",
    category: "Luxury Coupe",
    price: "$180",

    specs: ["Automatic", "4 Seats", "Twin Turbo", "GPS Included"],
  },
  {
    name: "Tesla Model S Plaid",
    category: "Electric Sedan",
    price: "$220",
    specs: ["Electric", "Autopilot", "5 Seats", "Premium Interior"],
  },
  {
    name: "Range Rover Sport",
    category: "Luxury SUV",
    price: "$260",
    specs: ["AWD", "7 Seats", "Panoramic Roof", "Premium Sound"],
  },
  {
    name: "Mercedes-Benz C300",
    category: "Executive Sedan",
    price: "$150",
    specs: ["Automatic", "Leather Seats", "GPS", "Fuel Efficient"],
  },
  {
    name: "Porsche 911 Carrera",
    category: "Sports Car",
    price: "$350",
    specs: ["Sport Mode", "Premium Audio", "Convertible", "Turbocharged"],
  },
  {
    name: "Toyota Land Cruiser",
    category: "Adventure SUV",
    price: "$170",
    specs: ["Off-Road Ready", "7 Seats", "AWD", "Large Cargo Space"],
  },
];

export function FeaturedCars() {
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
              key={c.name}
              className="group flex flex-col overflow-hidden rounded-(--radius) border border-border bg-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-4/3 overflow-hidden bg-muted">
                {/* <Image
                  src={c.image}
                  alt={c.name}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />*/}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {c.category}
                </p>
                <h3 className="card-title mt-2 text-foreground">{c.name}</h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.specs.map((s) => (
                    <li
                      key={s}
                      className="rounded-(--radius) border border-border px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <span className="font-sans text-2xl font-black text-foreground">
                      {c.price}
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
      </div>
    </section>
  );
}
