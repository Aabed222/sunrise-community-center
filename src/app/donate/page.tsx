import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description: `Support ${site.name}, a 501(c)(3) nonprofit (EIN ${site.ein}) serving Bakersfield families.`,
};

const impacts = [
  {
    title: "Scholarships & classroom support",
    body: "Help students access learning materials and a nurturing Islamic education regardless of family income.",
  },
  {
    title: "Campus development",
    body: "Invest in facilities for school, recreation, worship, and community gathering on our Bakersfield campus.",
  },
  {
    title: "Programs for families",
    body: "Fund events, youth activities, and outreach that strengthen belonging across Kern County.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Give with confidence"
        title="Your generosity builds tomorrow’s community"
        description={`${site.name} is a 501(c)(3) nonprofit. Donations are tax-deductible to the extent allowed by law. EIN ${site.ein}.`}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {impacts.map((item) => (
            <article key={item.title} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-stone-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-8 text-white shadow-lg shadow-orange-200 sm:p-10">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Ready to give?</h2>
            <p className="mt-3 text-orange-50">
              Contact us to arrange a donation by mail or to discuss major gifts, sponsorships, and
              in-kind support. We are happy to provide a receipt for your records.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-orange-800 hover:bg-amber-50"
            >
              Contact to donate
            </Link>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-stone-900">Mail a gift</h2>
            <p className="mt-3 text-sm text-stone-600">Please make checks payable to {site.name}.</p>
            <address className="mt-4 not-italic text-stone-800">
              {site.name}
              <br />
              {site.mailing.line1}
              <br />
              {site.mailing.city}, {site.mailing.state} {site.mailing.zip}
            </address>
            <dl className="mt-6 space-y-2 text-sm text-stone-600">
              <div className="flex justify-between gap-4 border-t border-amber-100 pt-3">
                <dt>EIN</dt>
                <dd className="font-medium text-stone-900">{site.ein}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-amber-100 pt-3">
                <dt>Organization phone</dt>
                <dd className="font-medium text-stone-900">{site.phones.org}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-amber-100 pt-3">
                <dt>Campus</dt>
                <dd className="text-right font-medium text-stone-900">{formatAddress(site.campus)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>
    </>
  );
}
