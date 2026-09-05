import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: `Upcoming programs and community gatherings at ${site.name}.`,
};

const highlights = [
  {
    title: "Open house & school tours",
    body: "Meet teachers, tour classrooms, and learn about Sunrise Academy enrollment for Pre-K through grade 6.",
    tag: "School",
  },
  {
    title: "Community gatherings",
    body: "Seasonal programs, family nights, and celebrations that bring neighbors together on campus.",
    tag: "Community",
  },
  {
    title: "Volunteer days",
    body: "Help with campus improvements, events, and classroom support — every skill and hour makes a difference.",
    tag: "Service",
  },
  {
    title: "Fundraisers",
    body: "Join benefit dinners and campaigns that fund scholarships, facilities, and youth programs.",
    tag: "Giving",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Gather with us"
        title="Events that bring people together"
        description="From school open houses to community nights, events are how we welcome new families and strengthen bonds across Bakersfield."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((event) => (
            <article key={event.title} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-800">
                {event.tag}
              </span>
              <h2 className="mt-3 font-serif text-xl font-semibold text-stone-900">{event.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{event.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-dashed border-orange-200 bg-amber-50/50 p-8 text-center">
          <p className="font-medium text-stone-800">Want the latest schedule?</p>
          <p className="mt-2 text-sm text-stone-600">
            Call the organization line at {site.phones.org} or reach out through our contact form.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-700"
          >
            Contact us
          </Link>
        </div>
      </Section>
    </>
  );
}
