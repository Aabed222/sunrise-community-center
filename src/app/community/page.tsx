import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community",
  description: `Discover community spaces and campus plans at ${site.name} in Bakersfield.`,
};

const spaces = [
  {
    title: "Indoor recreation",
    body: "Plans for a multi-use gymnasium with indoor sports, fitness space, and year-round activities for youth and families.",
  },
  {
    title: "Outdoor fields & garden",
    body: "Outdoor soccer and open space for play, gatherings, and a community garden that connects neighbors to the land.",
  },
  {
    title: "Shared gathering",
    body: "Cafeteria and multipurpose areas designed for meals, meetings, celebrations, and programs that strengthen community bonds.",
  },
  {
    title: "Worship & reflection",
    body: "A campus vision that includes a musollah — a place for prayer and spiritual grounding alongside school and recreation.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus life"
        title="A community space for every season"
        description="We are creating an inviting campus where families can learn, play, pray, and grow together — serving Bakersfield and neighboring towns."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {spaces.map((s) => (
            <article key={s.title} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-stone-900">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-8 sm:p-10">
          <h2 className="font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">
            Serving greater Bakersfield
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-600">
            {site.name} welcomes families from across Kern County. Whether you are looking for a school
            community, volunteer opportunities, or a place to gather, we invite you to be part of what
            we are building on Jewetta Avenue.
          </p>
        </div>
      </Section>
    </>
  );
}
