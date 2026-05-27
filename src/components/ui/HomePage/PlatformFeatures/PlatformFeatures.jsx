import {
  CalendarCheck,
  ShieldCheck,
  Radar,
  MapPin,
  LayoutDashboard,
  CarFront,
} from "lucide-react";

const items = [
  {
    icon: CalendarCheck,
    title: "Instant Booking",
    desc: "Reserve vehicles instantly with real-time availability updates.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Protected transactions and secure booking management for every user.",
  },
  {
    icon: Radar,
    title: "Live Availability",
    desc: "Browse updated vehicle availability across multiple pickup locations.",
  },
  {
    icon: MapPin,
    title: "Flexible Pickup",
    desc: "Choose pickup points and schedules that fit your travel plans.",
  },
  {
    icon: LayoutDashboard,
    title: "Booking Dashboard",
    desc: "Manage bookings, rental history, and saved vehicles from one place.",
  },
  {
    icon: CarFront,
    title: "Verified Vehicles",
    desc: "Every listed vehicle is verified and regularly maintained for safety and performance.",
  },
];

export function PlatformFeatures() {
  return (
    <section id="features" className=" border-b border-border">
      <div className="cssContainer">
        <div className="max-w-3xl">
          <p className="text-accent! font-semibold!">Platform Features</p>
          <h2 className="section-title mt-4">
            Everything You Need In One Modern Platform
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div
              key={f.title}
              className="group rounded-(--radius) border border-border bg-white p-7 transition-transform hover:-translate-y-1"
            >
              <f.icon className="size-6 text-accent" />
              <h3 className="card-title mt-5 text-foreground">{f.title}</h3>
              <p className="mt-2 text-base/6! leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
