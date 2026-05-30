import PrimaryCta from "@/components/shared/CTA Buttons/PrimaryCTA/PrimaryCta";
import SecondaryCta from "@/components/shared/CTA Buttons/SecondaryCta/SecondaryCta";

export function CTASection() {
  return (
    <section className="border-b border-border">
      <div className="cssContainer">
        <div className="rounded-(--radius) bg-foreground px-8 py-16 text-background md:px-16 md:py-24">
          <p className=" font-semibold! uppercase! tracking-widest! text-accent!">
            Ready To Get Started?
          </p>
          <h2 className="section-title mt-4 max-w-3xl text-background!">
            Your Next Journey <span className="text-accent">Starts Here</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base text-background/70! md:text-lg">
            Explore premium vehicles, book instantly, and experience a smarter
            way to rent cars with DriveFleet.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PrimaryCta link="/explore-cars" className={``}>
              Explore Cars
            </PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
}
