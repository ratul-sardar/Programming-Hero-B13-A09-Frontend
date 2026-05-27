import { Accordion } from "@heroui/react";

const faqs = [
  {
    q: "What documents are required to rent a vehicle?",
    a: "You'll need a valid driving license, a government-issued ID, and a valid payment method.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Yes. Bookings can be modified or canceled directly from your dashboard depending on the rental policy.",
  },
  {
    q: "Are all vehicles insured?",
    a: "Yes. All listed vehicles include basic insurance coverage for a secure rental experience.",
  },
  {
    q: "Is there a mileage limit?",
    a: "Mileage policies may vary depending on the vehicle category and rental package.",
  },
  {
    q: "Can I book a car for multiple days?",
    a: "Absolutely. You can select custom rental durations during the booking process.",
  },
];

export function FAQ() {
  return (
    <section className="border-b border-border">
      <div className="cssContainer grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-accent! font-semibold!">
            Frequently Asked Questions
          </p>
          <h2 className="section-title mt-4">Everything You Need To Know</h2>
        </div>

        <Accordion allowsMultipleExpanded className="w-full">
          {faqs.map((f, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="border-border"
            >
              <Accordion.Heading>
                <Accordion.Trigger className="text-left font-sans text-lg font-semibold hover:no-underline">
                  {f.q}
                  <Accordion.Indicator />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="text-base text-muted-foreground">
                  {f.a}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
