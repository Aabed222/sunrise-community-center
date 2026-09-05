import Link from "next/link";
import { formatAddress, navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-amber-100 bg-stone-900 text-stone-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl font-semibold text-white">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-400">
            A 501(c)(3) nonprofit building a campus for faith, learning, and community —
            home to {site.school}, an Islamic private school serving Pre-K through grade 6.
          </p>
          <p className="mt-4 text-sm text-amber-200/90">EIN {site.ein} · Established {site.yearEstablished}</p>
          <p className="mt-1 text-sm text-stone-400">President: {site.president}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-300">Explore</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-stone-300 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-300">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-stone-300">
            <li>
              <span className="block font-medium text-white">Campus</span>
              {formatAddress(site.campus)}
            </li>
            <li>
              <span className="block font-medium text-white">Mailing</span>
              {formatAddress(site.mailing)}
            </li>
            <li>
              <span className="block font-medium text-white">School</span>
              <a href={`tel:+16616167030`} className="hover:text-white">
                {site.phones.school}
              </a>
            </li>
            <li>
              <span className="block font-medium text-white">Organization</span>
              <a href={`tel:+16614960838`} className="hover:text-white">
                {site.phones.org}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Nonprofit 501(c)(3) · Tax-deductible donations welcome</p>
        </div>
      </div>
    </footer>
  );
}
