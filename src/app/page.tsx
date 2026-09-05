import Link from "next/link";
import Section from "@/components/Section";
import { site } from "@/lib/site";

const pillars = [
  {
    title: "Sunrise Academy",
    body: "An Islamic private school offering Pre-K, kindergarten, and grades 1–6 with a curriculum rooted in academic excellence and Islamic values.",
    href: "/academics",
    label: "Explore academics",
  },
  {
    title: "Community Life",
    body: "A growing campus designed for gatherings, youth activities, recreation, and programs that bring families together across greater Bakersfield.",
    href: "/community",
    label: "See community plans",
  },
  {
    title: "Faith & Service",
    body: "Building spaces for worship, education, and service so neighbors of all ages can grow together with dignity and belonging.",
    href: "/about",
    label: "Our mission",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,146,60,0.25),_transparent_55%)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
              Established {site.yearEstablished} · 501(c)(3)
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              A new dawn for faith, learning, and community
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
              {site.name} serves families across Bakersfield and surrounding communities through{" "}
              {site.school} and a developing campus for worship, education, and shared life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200 transition hover:from-orange-600 hover:to-amber-600"
              >
                Make a donation
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-orange-300 hover:bg-orange-50"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-orange-100 bg-white/70 p-8 shadow-xl shadow-orange-100/60 backdrop-blur">
            <p className="font-serif text-2xl font-semibold text-stone-900">Campus at a glance</p>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-amber-100 pb-3">
                <dt className="text-stone-500">School</dt>
                <dd className="text-right font-medium text-stone-800">{site.school} · Pre-K–K–6</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-amber-100 pb-3">
                <dt className="text-stone-500">Campus</dt>
                <dd className="text-right font-medium text-stone-800">{site.campus.line1}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-amber-100 pb-3">
                <dt className="text-stone-500">Service area</dt>
                <dd className="text-right font-medium text-stone-800">Greater Bakersfield & beyond</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Leadership</dt>
                <dd className="text-right font-medium text-stone-800">{site.president}, President</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">What we are building</h2>
          <p className="mt-3 text-stone-600">
            From classrooms to community spaces, every program grows from a simple commitment:
            children thrive when families and neighbors have a place to belong.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-amber-100 bg-white p-6 shadow-sm shadow-orange-50 transition hover:border-orange-200 hover:shadow-md"
            >
              <h3 className="font-serif text-xl font-semibold text-stone-900">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{item.body}</p>
              <Link href={item.href} className="mt-5 text-sm font-semibold text-orange-700 hover:text-orange-800">
                {item.label} →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-stone-900">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-white">Support the next generation</h2>
            <p className="mt-2 max-w-xl text-stone-300">
              Your gift helps classrooms, campus development, and community programs. As a 501(c)(3),
              donations are tax-deductible to the extent allowed by law.
            </p>
          </div>
          <Link
            href="/donate"
            className="inline-flex shrink-0 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 px-6 py-3 text-sm font-semibold text-stone-900 shadow-lg transition hover:from-orange-300 hover:to-amber-300"
          >
            Give today
          </Link>
        </div>
      </section>
    </>
  );
}
