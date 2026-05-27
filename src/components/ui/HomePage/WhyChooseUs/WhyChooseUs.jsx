import { Sparkles, BadgeCheck, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium Vehicle Selection",
    desc: "Access carefully maintained luxury, electric, and performance vehicles from trusted automotive brands.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    desc: "No hidden charges, unexpected fees, or confusing policies. What you see is exactly what you pay.",
  },
  {
    icon: Zap,
    title: "Fast Booking Experience",
    desc: "Book your desired vehicle in minutes with a seamless and user-friendly rental process.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Our support team is available anytime to assist with bookings, modifications, or emergencies.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="section-pad border-b border-border">
      <div className="cssContainer">
        <div className="max-w-3xl">
          <p className="text-accent! font-semibold!">Why DriveFleet</p>
          <h2 className="section-title mt-4">
            Built Around Comfort, Speed &amp; Reliability
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We combine premium vehicles, transparent pricing, and exceptional
            service to create a modern car rental experience without the usual
            complications.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-(--radius) border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background p-8 transition-colors hover:bg-white"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-(--radius) bg-accent/10 text-accent">
                <f.icon className="size-5" />
              </div>
              <h3 className="card-title mt-6 text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
