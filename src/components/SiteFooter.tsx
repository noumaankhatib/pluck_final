import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import TalkButton from "@/components/TalkButton";
import { d, f, mw, u } from "@/lib/ui";

export default function SiteFooter() {
  return (
    <ScrollReveal as="footer" className="footer">
      <div className="wrap" style={{ paddingTop: u(62) }}>
        <div className="footer-grid">
          <div className="sr sr--up" style={d(0)}>
            <Image src="/images/logo-footer.png" alt="Pluck.media" width={880} height={224} style={{ width: `max(${u(182)}, 150px)`, height: "auto", marginLeft: u(-5) }} />
            <p className="tagline f italic" style={f(26.5, 32, { marginTop: u(42) })}>
              We find the business you&apos;re missing.
            </p>
            <p className="f mw" style={f(20, 29.5, { marginTop: u(20), ...mw(540) })}>
              Pluck helps specialist and high-value B2B businesses find customers they&apos;re missing through commercial research, targeted digital campaigns and expert execution.
            </p>
          </div>
          <nav aria-label="Explore" className="sr sr--up" style={{ paddingTop: u(6), ...d(0.12) }}>
            <p className="f" style={f(18, 22, { color: "var(--copper-soft)" })}>Explore</p>
            <ul className="f" style={f(20, 24, { marginTop: u(24) })}>
              <li><Link href="/#how-we-find">How we work</Link></li>
              <li style={{ marginTop: u(19) }}><Link href="/#disciplines">Disciplines</Link></li>
              <li style={{ marginTop: u(19) }}><Link href="/#success">Our Work</Link></li>
              <li style={{ marginTop: u(19) }}><Link href="/#disciplines">About</Link></li>
            </ul>
          </nav>
          <div className="sr sr--up" style={{ paddingTop: u(6), ...d(0.24) }}>
            <p className="f" style={f(18, 22, { color: "var(--copper-soft)" })}>Start a conversation</p>
            <div style={{ marginTop: u(24) }}>
              <TalkButton light />
            </div>
          </div>
        </div>
        <div className="footer-bottom f" style={f(15, 18, { marginTop: u(60), paddingTop: u(30), paddingBottom: u(38) })}>
          <span className="sr" style={d(0.5)}>© 2026 Pluck.media</span>
          <span className="sr" style={d(0.6)}>Finding business others miss</span>
        </div>
      </div>
    </ScrollReveal>
  );
}
