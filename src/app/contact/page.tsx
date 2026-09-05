import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} and ${site.school} in Bakersfield, CA.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We would love to hear from you"
        title="Contact Sunrise"
        description="Reach us about enrollment, volunteering, donations, or campus visits. We serve families across greater Bakersfield."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-stone-900">Phones</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="block text-stone-500">School · {site.school}</span>
                  <a className="text-lg font-semibold text-orange-800 hover:underline" href="tel:+16616167030">
                    {site.phones.school}
                  </a>
                </li>
                <li>
                  <span className="block text-stone-500">Organization</span>
                  <a className="text-lg font-semibold text-orange-800 hover:underline" href="tel:+16614960838">
                    {site.phones.org}
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-stone-900">Addresses</h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-stone-500">Campus</dt>
                  <dd className="mt-1 text-stone-800">{formatAddress(site.campus)}</dd>
                </div>
                <div>
                  <dt className="font-medium text-stone-500">Mailing</dt>
                  <dd className="mt-1 text-stone-800">{formatAddress(site.mailing)}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50 p-6">
              <h2 className="font-serif text-xl font-semibold text-stone-900">Leadership</h2>
              <p className="mt-2 text-sm text-stone-600">
                {site.president}, President · {site.name} · EIN {site.ein}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-xl font-semibold text-stone-900">Send a message</h2>
            <p className="mt-2 text-sm text-stone-600">
              This form opens your email app with a pre-filled message to our team.
            </p>
            <form
              className="mt-6 space-y-4"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none ring-orange-300 focus:bg-white focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none ring-orange-300 focus:bg-white focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-stone-700">
                  Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none ring-orange-300 focus:bg-white focus:ring-2"
                  defaultValue="General inquiry"
                >
                  <option>General inquiry</option>
                  <option>Enrollment</option>
                  <option>Donation</option>
                  <option>Volunteering</option>
                  <option>Events</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none ring-orange-300 focus:bg-white focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="inline-flex rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-700"
              >
                Open email draft
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
