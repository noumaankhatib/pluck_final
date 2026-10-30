import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import TalkButton from "@/components/TalkButton";
import { f } from "@/lib/ui";

/** Root-relative anchors, so the same header works on the homepage and on inner pages. */
const nav = [
  { href: "/#how-we-find", label: "How we work" },
  { href: "/#success", label: "Work" },
  { href: "/#disciplines", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="site-header fade">
      <Link href="/" className="site-header__logo" aria-label="Pluck.media — home">
        <Image src="/images/logo-header.png" alt="Pluck.media — We find the business you're missing." width={2937} height={857} priority />
      </Link>
      <nav className="site-header__nav" aria-label="Primary">
        {nav.map((n) => (
          <Link key={n.label} href={n.href} className="nav-link f" style={f(16, 24)}>
            {n.label}
          </Link>
        ))}
        <TalkButton />
      </nav>
      <MobileMenu items={nav} />
    </header>
  );
}
