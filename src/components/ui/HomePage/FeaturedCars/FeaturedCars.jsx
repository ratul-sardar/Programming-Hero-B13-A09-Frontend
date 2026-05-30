import { getAllCars } from "@/api/getApi";
import PrimaryCta from "@/components/shared/CTA Buttons/PrimaryCTA/PrimaryCta";
import ProductCard from "@/components/shared/Product Card/ProductCard";
import { ArrowUpRight, MapPin } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

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
          <ProductCard cars={cars}></ProductCard>
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
