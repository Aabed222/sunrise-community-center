type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-amber-100 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-amber-200/60 to-orange-300/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">{description}</p>
      </div>
    </section>
  );
}
