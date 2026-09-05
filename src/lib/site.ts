export const site = {
  name: "Sunrise Community Center",
  school: "Sunrise Academy",
  tagline: "Faith, Learning, and Community in Bakersfield",
  description:
    "Sunrise Community Center is a 501(c)(3) nonprofit serving Bakersfield with Sunrise Academy (Pre-K–K–6 Islamic private school), community programs, and events.",
  ein: "83-2069619",
  president: "Bassam Abed",
  yearEstablished: 2018,
  mailing: {
    line1: "1005 Stine Road",
    city: "Bakersfield",
    state: "CA",
    zip: "93309",
  },
  campus: {
    line1: "3212 Jewetta Ave",
    city: "Bakersfield",
    state: "CA",
    zip: "93312",
  },
  phones: {
    school: "(661) 616-7030",
    org: "(661) 496-0838",
  },
  email: "info@sunrise-community.org",
  url: "https://sunrise-community.org",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
] as const;

export function formatAddress(addr: { line1: string; city: string; state: string; zip: string }) {
  return `${addr.line1}, ${addr.city}, ${addr.state} ${addr.zip}`;
}
