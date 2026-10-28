import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import LoopVideo, { type Tone } from "@/components/LoopVideo";
import ScrollReveal from "@/components/ScrollReveal";

/** Layout unit: exactly 1px at the 1440px reference width, proportional below it (see globals.css). */
const u = (n: number) => `calc(var(--u) * ${n})`;
/** Type size/line-height at the 1440px reference, in px. Applied through the `.f` class. */
/** Max width at the 1440px reference, in px (released when the layout stacks). Applied through `.mw`. */
const mw = (n: number): CSSProperties => ({ "--mw": n }) as CSSProperties;
const f = (fs: number, lh: number, extra: CSSProperties = {}): CSSProperties =>
  ({ "--fs": fs, "--lh": lh, ...extra }) as CSSProperties;

const nav = [
  { href: "#how-we-find", label: "How we work" },
  { href: "#success", label: "Work" },
  { href: "#disciplines", label: "About" },
];

const industries = [
  "Enterprise technology",
  "Specialist equipment",
  "Infrastructure",
  "Engineering",
  "Scientific and medical equipment",
  "High-value services",
];

const team = [
  {
    name: "Michael Simkin",
    role: "Commercial strategy, positioning & customer understanding",
    bio: "Michael works with businesses to understand their market, their customers, what makes them valuable and where commercial opportunities may lie.",
    img: "/images/team-michael.webp",
  },
  {
    name: "Junaid Kazi",
    role: "Paid search & performance",
    bio: "Junaid identifies how prospective customers search and builds tightly targeted campaigns designed to reach them at the right moment.",
    img: "/images/team-junaid.webp",
  },
  {
    name: "Noumaan Khatib",
    role: "Search, technology & conversion",
    bio: "Noumaan brings more than ten years of experience across development, SEO and landing-page optimisation, connecting customer acquisition with the technology needed to turn interest into enquiries.",
    img: "/images/team-noumaan.webp",
  },
];

/** Footage colours sampled from each video (paper background, darkest linework); see LoopVideo. */
const HERO_TONE: Tone = { bg: [236, 232, 222], dark: [56, 54, 43] };
const BIRDS_TONE: Tone = { bg: [239, 235, 218], dark: [54, 73, 56] };

/** Staggered reveal delay for the intro section. */
const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

const CONTACT = "#contact";

function TalkButton({ light = false }: { light?: boolean }) {
  return (
    <a href={CONTACT} className={`btn${light ? " btn--light" : ""}`}>
      Talk to us
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header fade">
        <Link href="/" className="site-header__logo" aria-label="Pluck.media — home">
          <Image src="/images/logo-header.png" alt="Pluck.media — We find the business you're missing." width={2937} height={857} priority />
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="nav-link f" style={f(16, 24)}>
              {n.label}
            </a>
          ))}
          <TalkButton />
        </nav>
      </header>

      <main>
        {/* 1 — Hero */}
        <section className="wrap hero" aria-labelledby="hero-title">
          <div>
            <h1 id="hero-title" className="f" style={f(78, 82)}>
              <span className="hero-line reveal" style={{ "--d": "0.05s" } as CSSProperties}>There’s business</span>{" "}
              <span className="hero-line reveal" style={{ "--d": "0.17s" } as CSSProperties}>you’re missing.</span>
            </h1>
            <p className="f display copper reveal" style={f(63, 96, { marginTop: u(-5), "--d": "0.38s" } as CSSProperties)}>We’ll find it.</p>
            <div className="reveal" style={{ marginTop: u(13), "--d": "0.55s" } as CSSProperties}>
              <TalkButton />
            </div>
          </div>
          <div className="hero__media fade" style={{ "--d": "0.2s" } as CSSProperties}>
            <LoopVideo
              id="pluck-tone-hero"
              className="hero-frame"
              videoClassName="hero-video"
              src="/videos/hero-explorer.mp4"
              poster="/images/hero-explorer-poster.webp"
              still="/images/hero-explorer.webp"
              stillSize={[600, 400]}
              label="An explorer in a pith helmet scanning the long grass with binoculars"
              tone={HERO_TONE}
            />
          </div>
        </section>

        {/* 2 — Introduction */}
        <ScrollReveal className="wrap intro" aria-labelledby="intro-title">
          <div className="mw" style={mw(560)}>
            <p className="sr f" style={f(22, 32.3, d(0))}>
              If you sell a specialist, technical or high-value product, you probably don&apos;t need thousands of new leads.
            </p>
            <h2 id="intro-title" className="sr sr--up f" style={f(50, 55, { marginTop: u(31), ...d(0.14) })}>
              You need a relatively small number of the right customers.
            </h2>
            <p className="sr sr--up f" style={f(22, 32.3, { marginTop: u(22), ...d(0.28) })}>
              We examine your business, your market and how potential customers look for what you sell.
            </p>
            <p className="sr sr--up f" style={f(22, 32.3, { marginTop: u(18), ...d(0.42) })}>
              Then, where the opportunity makes commercial sense, we help you reach them.
            </p>
            <p className="sr sr--up f italic" style={f(22.4, 32, { marginTop: u(26), ...d(0.58) })}>
              We find the business you&apos;re missing.
            </p>
          </div>
          <div className="intro__media">
            <LoopVideo
              id="pluck-tone-birds"
              className="intro-frame"
              src="/videos/intro-birds.mp4"
              poster="/images/intro-birds-poster.webp"
              still="/images/intro-birds.webp"
              stillSize={[600, 403]}
              label="A flock of small birds, two of them copper-coloured with crests"
              tone={BIRDS_TONE}
            />
          </div>
        </ScrollReveal>

        {/* 3 — Why the right customers matter */}
        <ScrollReveal className="wrap leads" aria-labelledby="leads-title">
          <Image className="leads__img sr sr--up" style={d(0.05)} src="/images/scales.webp" alt="Balance scales weighing a green leaf against a copper feather" width={1469} height={1071} />
          <div className="leads__copy">
            <h2 id="leads-title" className="sr sr--up f" style={f(52.9, 58, d(0))}>
              You don’t just need more leads.
            </h2>
            <p className="sr sr--up f italic" style={f(39, 44, { marginTop: u(7), ...d(0.1) })}>
              You need the right ones.
            </p>
            <p className="sr sr--up f" style={f(23.2, 34, { marginTop: u(22), ...d(0.2) })}>
              For many B2B companies, one good customer can be worth a great deal.
            </p>
            <div style={{ marginTop: u(25) }}>
              <p className="sr sr--up f" style={f(21, 31, d(0.3))}>Much digital marketing is still built around volume.</p>
              <p className="sr sr--up f" style={f(21, 31, { marginTop: u(16), ...d(0.4) })}>More traffic. More impressions. More clicks. More leads.</p>
              <p className="sr sr--up f" style={f(21, 31, { marginTop: u(16), ...d(0.5) })}>Those numbers only matter if they eventually become business.</p>
              <p className="sr sr--up f" style={f(21, 31, { marginTop: u(16), ...d(0.6) })}>
                If your sales depend on valuable contracts, specialist equipment, enterprise technology or complex services, a handful of the right customers may be worth far more than hundreds of irrelevant enquiries.
              </p>
              <p className="sr sr--up f" style={f(21, 31, { marginTop: u(16), ...d(0.7) })}>The challenge is finding them. This is where we come in.</p>
            </div>
            <div className="sr sr--up" style={{ marginTop: u(27), ...d(0.8) }}>
              <TalkButton />
            </div>
          </div>
        </ScrollReveal>

        {/* 4 — How potential customers search */}
        <section className="wrap" style={{ marginTop: u(96) }} aria-labelledby="search-title">
          <h2 id="search-title" className="f" style={f(53, 59)}>
            The way potential customers search tells you what they need.
          </h2>
          <div className="two-col f" style={f(22, 32.3, { marginTop: u(28) })}>
            <div>
              <p>Some search for a particular product.</p>
              <p style={{ marginTop: u(19) }}>Others search for a specification, a supplier or a problem they need to solve.</p>
              <p style={{ marginTop: u(19) }}>The keywords and phrases they use leave clues.</p>
            </div>
            <div>
              <p>
                They tell us what people are looking for, where demand exists, what competitors are doing and where opportunities may have been left open.
              </p>
              <p style={{ marginTop: u(19) }}>
                Before we design any advertising campaign, we begin by asking where there is an opportunity worth pursuing.
              </p>
            </div>
          </div>
          <Image className="strip" src="/images/footprints.webp" alt="" width={1303} height={150} />
        </section>

        {/* 5 — How we find the business */}
        <section id="how-we-find" className="wrap" style={{ marginTop: u(64) }} aria-labelledby="find-title">
          <h2 id="find-title" className="f" style={f(56.4, 85)}>
            How we find the business
          </h2>
          <div className="steps" style={{ marginTop: u(25) }}>
            <div className="step">
              <h3 className="f" style={f(34, 52)}>1. Understand</h3>
              <Image className="step__img" src="/images/step-understand.webp" alt="" width={1254} height={1254} />
              <div className="step__body" style={{ marginTop: u(19) }}>
                <p className="f" style={f(20, 29.4)}>Before we think about advertising, we look at your business.</p>
                <ul className="bullets f" style={f(19, 28)}>
                  <li>What do you sell?</li>
                  <li>Who buys it?</li>
                  <li>Why do they choose you?</li>
                  <li>What is a new customer worth?</li>
                  <li>Where might there be room to grow?</li>
                </ul>
              </div>
            </div>
            <div className="step">
              <h3 className="f" style={f(34, 52)}>2. Find</h3>
              <Image className="step__img" src="/images/step-find.webp" alt="" width={1254} height={1254} />
              <div className="step__body" style={{ marginTop: u(19) }}>
                <p className="f" style={f(20, 29.4)}>Then we investigate the market.</p>
                <ul className="bullets f" style={f(19, 28)}>
                  <li>What are potential customers searching for?</li>
                  <li>Where are they searching?</li>
                  <li>How many people are searching?</li>
                  <li>Which searches suggest genuine buying interest?</li>
                  <li>Where are competitors strong?</li>
                  <li>Where might competitors be leaving opportunities open?</li>
                </ul>
              </div>
            </div>
            <div className="step">
              <h3 className="f" style={f(34, 52)}>3. Reach</h3>
              <Image className="step__img" src="/images/step-reach.webp" alt="" width={1254} height={1254} />
              <div className="step__body f" style={f(20, 29.4, { marginTop: u(19) })}>
                <p>When we find a worthwhile opportunity, we work out the best way to reach it.</p>
                <p>
                  Depending on the opportunity, that may include targeted search or social advertising, SEO, dedicated landing pages or other approaches designed to reach the right people.
                </p>
              </div>
            </div>
            <div className="step">
              <h3 className="f" style={f(34, 52)}>4. Learn</h3>
              <Image className="step__img" src="/images/step-learn.webp" alt="" width={1254} height={1254} />
              <div className="step__body f" style={f(20, 29.4, { marginTop: u(19) })}>
                <p>Then we follow what happens.</p>
                <p>Not simply who clicked.</p>
                <p>We want to know:</p>
                <ul className="bullets" style={{ marginTop: u(-3), fontSize: "0.95em" }}>
                  <li>Did they enquire?</li>
                  <li>Was the enquiry any good?</li>
                  <li>Did it become a quotation?</li>
                  <li>Did it become a customer?</li>
                  <li>Did it make money?</li>
                </ul>
                <p style={{ marginTop: u(24) }}>Then we do more of what works and less of what doesn&apos;t.</p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: u(35), marginBottom: u(83) }}>
            <TalkButton />
          </div>
        </section>

        {/* 6 — Server Factory case study */}
        <section id="success" className="success" aria-labelledby="success-title">
          <div className="wrap" style={{ paddingTop: u(70), paddingBottom: u(66) }}>
            <h2 id="success-title" className="f" style={f(62, 95)}>
              What does success look like?
            </h2>
            <p className="f" style={f(27.1, 33, { marginTop: u(2) })}>
              It isn&apos;t a dashboard full of green arrows. It&apos;s business.
            </p>
            <div className="two-col f" style={f(22, 32.4, { marginTop: u(38) })}>
              <p className="mw" style={mw(545)}>
                For Server Factory, a UK enterprise IT infrastructure company, the opportunity was to reach organisations actively searching for <span style={{ whiteSpace: "nowrap" }}>high-value</span> enterprise hardware.
              </p>
              <div>
                <p>The work went beyond simply running Google Ads.</p>
                <p style={{ marginTop: u(18) }}>
                  It included understanding the business and its customers, researching the market and competitors, identifying valuable searches, developing landing pages and continually learning from what happened.
                </p>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: u(23) }}>
              <div className="metric"><b className="f" style={f(56, 64)}>3</b><span className="f" style={f(22, 27)}>months</span></div>
              <div className="metric"><b className="f" style={f(56, 64)}>$15,000</b><span className="f" style={f(22, 27)}>media spend</span></div>
              <div className="metric"><b className="f" style={f(56, 64)}>100+</b><span className="f" style={f(22, 27)}>qualified leads</span></div>
              <div className="metric"><b className="f" style={f(56, 64)}>$4.7m</b><span className="f" style={f(22, 27)}>quoted</span></div>
              <div className="metric metric--accent"><b className="f" style={f(56, 64)}>$1.2m</b><span className="f" style={f(22, 27)}>in sales</span></div>
            </div>
            <div className="roi" style={{ marginTop: u(63) }}>
              <span className="roi__figure f display" style={f(126, 110)}>$80</span>
              <span className="roi__text f display" style={f(43.5, 51)}>in sales for every $1 of advertising spend</span>
              <a href="#" className="roi__link f" style={f(16, 20)}>
                Read the Server Factory case study
              </a>
            </div>
          </div>
        </section>

        {/* 7 — Business suitability */}
        <section className="wrap" style={{ paddingTop: u(90) }} aria-labelledby="fit-title">
          <div className="fit-grid">
            <div>
              <h2 id="fit-title" className="f mw" style={f(53, 59, mw(420))}>
                This approach isn&apos;t right for
                <span className="f italic" style={f(39, 48, { display: "block", marginTop: u(2) })}>every business.</span>
              </h2>
              <p className="f mw" style={f(22, 32.3, { marginTop: u(30), ...mw(430) })}>
                We work especially well with businesses selling things people think carefully about before they buy.
              </p>
            </div>
            <div>
              <p className="f" style={f(23, 28, { marginTop: u(-4) })}>It works particularly well when:</p>
              <ul className="bullets f" style={f(22, 32.4, { marginTop: u(29) })}>
                <li>one new customer is worth a significant amount to your business</li>
                <li style={{ marginTop: u(13) }}>potential customers actively search online for what you sell or the problems you solve</li>
                <li style={{ marginTop: u(13) }}>your product or service is specialist, technical or complex</li>
                <li style={{ marginTop: u(13) }}>quality matters more than lead volume</li>
                <li style={{ marginTop: u(13) }}>a sales conversation normally follows an enquiry</li>
                <li style={{ marginTop: u(13) }}>you suspect there are customers, markets or opportunities you&apos;re currently missing</li>
              </ul>
            </div>
          </div>
          <ul className="industries f" style={f(19.2, 23, { marginTop: u(66) })}>
            {industries.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        {/* 8 — Team */}
        <section id="disciplines" className="wrap" style={{ marginTop: u(107) }} aria-labelledby="team-title">
          <h2 id="team-title" className="f" style={f(56.1, 85)}>
            Three disciplines. One commercial objective.
          </h2>
          <p className="f" style={f(25.1, 30, { marginTop: u(11) })}>
            Finding new customers online requires more than knowing how to operate Google Ads.
          </p>
          <p className="f" style={f(22, 30, { marginTop: u(20) })}>
            We bring together three different ways of looking at the same problem.
          </p>
          <div className="team" style={{ marginTop: u(46) }}>
            {team.map((t) => (
              <article key={t.name}>
                <Image className="team__photo" src={t.img} alt={`${t.name}, against a sage-green studio backdrop`} width={435} height={543} />
                <h3 className="f" style={f(35, 53)}>{t.name}</h3>
                <p className="team__role f" style={f(20, 29.4)}>{t.role}</p>
                <p className={`team__bio f${t.name === "Junaid Kazi" ? " mw" : ""}`} style={f(20, 29.4, t.name === "Junaid Kazi" ? mw(360) : {})}>{t.bio}</p>
              </article>
            ))}
          </div>
          <p className="quote f display" style={f(32, 49, { marginTop: u(35) })}>
            Find the business you’re missing.
          </p>
        </section>

        {/* 9 — How we work / closing CTA */}
        <section id="contact" className="wrap" style={{ marginTop: u(81), paddingBottom: u(79) }} aria-labelledby="work-title">
          <div className="closing">
            <div className="mw" style={mw(620)}>
              <h2 id="work-title" className="f" style={f(54, 82)}>
                How we work
              </h2>
              <div className="f" style={f(22, 32.4, { marginTop: u(12) })}>
                <p>If you have a valuable product or service and suspect you&apos;re missing customers, we’ll be glad to talk.</p>
                <p style={{ marginTop: u(20) }}>
                  We&apos;ll start by discussing your business, your customers, what you&apos;re doing now and where there may be opportunities worth investigating.
                </p>
                <p style={{ marginTop: u(20) }}>
                  We won&apos;t begin by trying to sell you a package. And we won&apos;t pretend to know the answer before we&apos;ve looked.
                </p>
                <p style={{ marginTop: u(20) }}>Sometimes we may conclude that paid search isn&apos;t actually the right opportunity.</p>
                <p style={{ marginTop: u(20) }}>That&apos;s useful to know too.</p>
              </div>
            </div>
            <div className="closing__cta">
              <p className="f italic mw" style={f(45, 58, mw(420))}>
                Let&apos;s see what&apos;s out there.
              </p>
              <div style={{ marginTop: u(32) }}>
                <TalkButton />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 10 — Footer */}
      <footer className="footer">
        <div className="wrap" style={{ paddingTop: u(62) }}>
          <div className="footer-grid">
            <div>
              <Image src="/images/logo-footer.png" alt="Pluck.media" width={880} height={224} style={{ width: `max(${u(182)}, 150px)`, height: "auto", marginLeft: u(8) }} />
              <p className="tagline f italic" style={f(26.5, 32, { marginTop: u(42) })}>
                We find the business you&apos;re missing.
              </p>
              <p className="f mw" style={f(20, 29.5, { marginTop: u(20), ...mw(540) })}>
                Pluck helps specialist and high-value B2B businesses find customers they&apos;re missing through commercial research, targeted digital campaigns and expert execution.
              </p>
            </div>
            <nav aria-label="Explore" style={{ paddingTop: u(6) }}>
              <p className="f" style={f(18, 22, { color: "var(--copper-soft)" })}>Explore</p>
              <ul className="f" style={f(20, 24, { marginTop: u(24) })}>
                <li><a href="#how-we-find">How we work</a></li>
                <li style={{ marginTop: u(19) }}><a href="#disciplines">Disciplines</a></li>
                <li style={{ marginTop: u(19) }}><a href="#success">Our Work</a></li>
                <li style={{ marginTop: u(19) }}><a href="#disciplines">About</a></li>
              </ul>
            </nav>
            <div style={{ paddingTop: u(6) }}>
              <p className="f" style={f(18, 22, { color: "var(--copper-soft)" })}>Start a conversation</p>
              <div style={{ marginTop: u(24) }}>
                <TalkButton light />
              </div>
            </div>
          </div>
          <div className="footer-bottom f" style={f(15, 18, { marginTop: u(78), paddingTop: u(30), paddingBottom: u(38) })}>
            <span>© 2026 Pluck.media</span>
            <span>Finding business others miss</span>
          </div>
        </div>
      </footer>
    </>
  );
}
