import { getAllCars } from "@/api/getApi";
import ProductCard from "@/components/shared/Product Card/ProductCard";
import { FAQ } from "@/components/ui/HomePage/FAQ/FAQ";
import { HowItWorks } from "@/components/ui/HomePage/HowItWorks/HowItWorks";

export default async function ExploreCars() {
  const allCars = await getAllCars();
  return (
    <>
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
            <ProductCard cars={allCars}></ProductCard>
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQ />
    </>
  );
}
