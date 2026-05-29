import { getCarData } from "@/api/getApi";
import PrimaryCta from "@/components/shared/CTA Buttons/PrimaryCTA/PrimaryCta";
import SecondaryCta from "@/components/shared/CTA Buttons/SecondaryCta/SecondaryCta";
import { FAQ } from "@/components/ui/HomePage/FAQ/FAQ";
import { HowItWorks } from "@/components/ui/HomePage/HowItWorks/HowItWorks";
import { ArrowLeft, Clock, MapPin, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// availabilityStatus : true
// bookingCount : 8
// carName : "Toyota Hiace Van"
// carType : "Van"
// createdAt : "2024-02-10T00:00:00.000Z"
// dailyRentPrice : 65
// description : "Spacious van ideal for family trips and group travel. Air conditioning, comfortable seating for 12 passengers, and ample luggage space."
// imageUrl : "https://images.unsplash.com/photo-1605559424843-9e4c3dec1806?w=500&q=80"
// owner : "507f1f77bcf86cd799439011"
// pickupLocation : "Dhaka, Dhanmondi"
// seatCapacity : 12
// updatedAt : "2024-05-10T00:00:00.000Z"
// _id : "6a0a7cda18390593347443e0"

export default async function CarsDetails({ params }) {
  const { id } = await params;

  const car = await getCarData(id);

  console.log(car);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="cssContainer flex items-center gap-2 py-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span>/</span>
          <Link href="/explore-cars" className="hover:text-accent">
            Cars
          </Link>
          <span>/</span>
          <span className="text-foreground">{car.carName}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="cssContainer grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-(--radius) border border-border bg-muted">
            <Image
              src={car.imageUrl}
              alt={car.imageUrl}
              width={1024}
              height={768}
              className="aspect-4/3 h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="font-semibold! uppercase! text-accent!">
              {car.carType}
            </p>
            <h1 className="section-title mt-4">{car.carName}</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {car.description}
            </p>

            <div className="mt-8 flex items-end gap-2 border-t border-border pt-6">
              <span className="font-sans text-5xl font-black text-foreground">
                ${car.dailyRentPrice}
              </span>
              <span className="pb-1 text-muted-foreground">/ day</span>
            </div>

            <p className={`mt-6 `}>
              Available for Booking :{" "}
              <span
                className={`${car.availabilityStatus ? "text-green-500!" : "text-red-500!"}`}
              >
                {car.availabilityStatus ? "Yes" : "No"}
              </span>
            </p>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta link="#" fullWidth={true}>
                Book This Car
              </PrimaryCta>

              <SecondaryCta link="/" fullWidth={true}>
                <ArrowLeft className="size-4" /> Back to fleet
              </SecondaryCta>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 text-accent" />
                <span className="text-foreground/80">
                  Booking count: {car.bookingCount}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-accent" />
                <span className="text-foreground/80">
                  Pick up from: {car.pickupLocation}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQ />
    </>
  );
}
