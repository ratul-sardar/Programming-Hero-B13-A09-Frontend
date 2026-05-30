import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ cars }) {
  return (
    <>
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
              <Link
                href={`/explore-cars/${c._id}`}
                className="flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform hover:translate-x-0.5"
              >
                View Details <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
