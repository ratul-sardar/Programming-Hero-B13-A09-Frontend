const steps = [
  {
    n: "01",
    title: "Browse Vehicles",
    desc: "Explore premium vehicles by category, pricing, or availability.",
  },
  {
    n: "02",
    title: "Book Your Ride",
    desc: "Choose your rental duration, pickup location, and booking preferences.",
  },
  {
    n: "03",
    title: "Drive With Confidence",
    desc: "Pick up your vehicle and enjoy a smooth driving experience backed by dedicated support.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-border">
      <div className="cssContainer">
        <div className="max-w-3xl">
          <p className="text-accent! font-semibold!">How It Works</p>
          <h2 className="section-title mt-4">
            Rent Your Next Vehicle In 3 Simple Steps
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-(--radius) border border-border bg-border md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 md:p-10">
              <span className=" text-6xl font-black tracking-tighter text-accent md:text-7xl">
                {s.n}
              </span>
              <h3 className="card-title mt-6 text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
