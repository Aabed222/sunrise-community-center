import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name}, a 501(c)(3) nonprofit in Bakersfield led by ${site.president}, home to ${site.school}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Building a lasting home for our community"
        description={`${site.name} was established in ${site.yearEstablished} to serve Muslim families and neighbors across greater Bakersfield with education, gathering spaces, and shared purpose.`}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-stone-900">Who we are</h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              {site.name} is a developing campus nonprofit dedicated to academic excellence rooted in
              Islamic values, wholesome community life, and service. Our school, {site.school}, offers
              Pre-K through grade 6 as an Islamic private school for families seeking a nurturing,
              faith-centered education.
            </p>
            <p className="mt-4 leading-relaxed text-stone-600">
              We aim to serve families not only in Bakersfield, but also in surrounding communities
              including Delano, Shafter, Arvin, Wasco, Taft, Buttonwillow, and beyond — creating one
              welcoming place for learning, worship, and connection.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50 p-8">
            <h3 className="font-serif text-xl font-semibold text-stone-900">Organization details</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-stone-500">Legal name</dt>
                <dd className="mt-1 text-stone-800">{site.name}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-500">Status</dt>
                <dd className="mt-1 text-stone-800">501(c)(3) nonprofit · EIN {site.ein}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-500">President</dt>
                <dd className="mt-1 text-stone-800">{site.president}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-500">Campus</dt>
                <dd className="mt-1 text-stone-800">{formatAddress(site.campus)}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-500">Mailing address</dt>
                <dd className="mt-1 text-stone-800">{formatAddress(site.mailing)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>
      <Section className="pt-0">
        <blockquote className="rounded-2xl border border-orange-100 bg-white p-8 shadow-sm sm:p-10">
          <p className="font-serif text-xl leading-relaxed text-stone-800 sm:text-2xl">
            “The goal of Sunrise Community Center is to establish a full-time Islamic School, a
            Musollah, and a Community Center all under one roof.”
          </p>
          <footer className="mt-4 text-sm font-semibold text-orange-800">— {site.president}, President</footer>
        </blockquote>
      </Section>
    </>
  );
}
