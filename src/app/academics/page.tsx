import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academics",
  description: `${site.school} is an Islamic private school in Bakersfield offering Pre-K, kindergarten, and grades 1–6.`,
};

const grades = [
  { name: "Pre-K", detail: "Early childhood foundation with play, language, and Islamic manners." },
  { name: "Kindergarten", detail: "Literacy, numeracy, and social-emotional growth in a caring classroom." },
  { name: "Grades 1–6", detail: "Core academics with Islamic studies, character education, and community values." },
];

const subjects = [
  "Mathematics",
  "Science",
  "Language arts",
  "Social studies",
  "Islamic studies & Qur’anic values",
  "Character & community",
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow={site.school}
        title="Islamic private education, Pre-K through grade 6"
        description={`${site.school} is committed to an accredited-minded education that meets California standards while nurturing faith, character, and a love of learning.`}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {grades.map((g) => (
            <article key={g.name} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-stone-900">{g.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{g.detail}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-stone-900">What students learn</h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              We promote Islamic values based on the Qur’an alongside a strong academic core. Families
              can expect a supportive environment where every child is encouraged to grow intellectually,
              spiritually, and socially.
            </p>
            <p className="mt-4 leading-relaxed text-stone-600">
              Our approach emphasizes high expectations with compassion — so students leave prepared for
              the next stage of schooling and for life in their communities.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-700"
            >
              Ask about enrollment
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {subjects.map((s) => (
              <li
                key={s}
                className="rounded-xl border border-orange-100 bg-gradient-to-br from-amber-50 to-white px-4 py-3 text-sm font-medium text-stone-800"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="rounded-2xl bg-stone-900 px-8 py-10 text-center sm:px-12">
          <p className="font-serif text-2xl text-white sm:text-3xl">Our children are the future</p>
          <p className="mx-auto mt-3 max-w-2xl text-stone-300">
            We work to provide learning materials, assessment, and support so families of every income
            level can pursue a high-quality, values-centered education for their children.
          </p>
          <p className="mt-6 text-sm text-amber-200">School phone: {site.phones.school}</p>
        </div>
      </Section>
    </>
  );
}
