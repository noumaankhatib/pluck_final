import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import LoopVideo, { type Tone } from "@/components/LoopVideo";
import ScrollReveal from "@/components/ScrollReveal";
import Step from "@/components/StepCard";
import CountUp from "@/components/CountUp";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TalkButton from "@/components/TalkButton";
import { d, f, mw, u } from "@/lib/ui";

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

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* 1 — Hero */}
        <section className="wrap hero" aria-labelledby="hero-title">
          <div>
            <h1 id="hero-title" className="f" style={f(78, 82)}>
              <span className="hero-line reveal" style={{ "--d": "0.05s" } as CSSProperties}>There’s business</span>{" "}
              <span className="hero-line reveal" style={{ "--d": "0.17s" } as CSSProperties}>you’re missing.</span>
            </h1>
            <p className="f display copper reveal" style={f(63, 96, { marginTop: u(-5), "--d": "0.42s" } as CSSProperties)}>We’ll find it.</p>
            <div className="reveal" style={{ marginTop: u(13), "--d": "0.55s" } as CSSProperties}>
              <TalkButton />
            </div>
          </div>
          <div className="hero__media reveal" style={{ "--d": "0.3s" } as CSSProperties}>
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
            <h2 id="intro-title" className="sr sr--up f" style={f(50, 55, { marginTop: u(24), ...d(0.14) })}>
              You need a relatively small number of the right customers.
            </h2>
            <p className="sr sr--up f" style={f(22, 32.3, { marginTop: u(18), ...d(0.28) })}>
              We examine your business, your market and how potential customers look for what you sell.
            </p>
            <p className="sr sr--up f" style={f(22, 32.3, { marginTop: u(18), ...d(0.4) })}>
              Then, where the opportunity makes commercial sense, we help you reach them.
            </p>
            <p className="sr sr--up f italic" style={f(22.4, 32, { marginTop: u(20), ...d(0.52) })}>
              We find the business you&apos;re missing.
            </p>
          </div>
          <div className="intro__media sr sr--up" style={d(0.36)}>
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
            <p className="sr sr--up f" style={f(23.2, 34, { marginTop: u(18), ...d(0.2) })}>
              For many B2B companies, one good customer can be worth a great deal.
            </p>
            <div style={{ marginTop: u(18) }}>
              <p className="sr sr--up f" style={f(21, 31, d(0.3))}>Much digital marketing is still built around volume.</p>
              <p className="sr sr--up f" style={f(21, 31, { marginTop: u(12), ...d(0.4) })}>More traffic. More impressions. More clicks. More leads.</p>
              <p className="sr sr--up f" style={f(21, 31, { marginTop: u(12), ...d(0.5) })}>Those numbers only matter if they eventually become business.</p>
              <p className="sr sr--up f" style={f(21, 31, { marginTop: u(12), ...d(0.6) })}>
                If your sales depend on valuable contracts, specialist equipment, enterprise technology or complex services, a handful of the right customers may be worth far more than hundreds of irrelevant enquiries.
              </p>
              <p className="sr sr--up f" style={f(21, 31, { marginTop: u(12), ...d(0.7) })}>The challenge is finding them. This is where we come in.</p>
            </div>
            <div className="sr sr--up" style={{ marginTop: u(24), ...d(0.8) }}>
              <TalkButton />
            </div>
          </div>
        </ScrollReveal>

        {/* 4 — How potential customers search */}
        <ScrollReveal className="wrap" style={{ marginTop: u(80) }} aria-labelledby="search-title">
          <h2 id="search-title" className="sr sr--up f" style={f(53, 59, d(0))}>
            The way potential customers search tells you what they need.
          </h2>
          <div className="two-col f" style={f(22, 32.3, { marginTop: u(22) })}>
            <div className="sr sr--up" style={d(0.14)}>
              <p>Some search for a particular product.</p>
              <p style={{ marginTop: u(14) }}>Others search for a specification, a supplier or a problem they need to solve.</p>
              <p style={{ marginTop: u(14) }}>The keywords and phrases they use leave clues.</p>
            </div>
            <div className="sr sr--up" style={d(0.28)}>
              <p>
                They tell us what people are looking for, where demand exists, what competitors are doing and where opportunities may have been left open.
              </p>
              <p style={{ marginTop: u(14) }}>
                Before we design any advertising campaign, we begin by asking where there is an opportunity worth pursuing.
              </p>
            </div>
          </div>
          <Image className="strip sr sr--trail" style={d(0.7)} src="/images/footprints.webp" alt="" width={1303} height={150} />
        </ScrollReveal>

        {/* 5 — How we find the business */}
        <ScrollReveal id="how-we-find" className="wrap" style={{ marginTop: u(64) }} aria-labelledby="find-title">
          <h2 id="find-title" className="sr sr--up f" style={f(56.4, 68, d(0))}>
            How we find the business
          </h2>
          <div className="steps" style={{ marginTop: u(16) }}>
            <Step delay={0.1} title="1. Understand" img="/images/step-understand.webp" lead="Before we think about advertising, we look at your business.">
              <ul className="bullets f" style={f(19, 28)}>
                <li>What do you sell?</li>
                <li>Who buys it?</li>
                <li>Why do they choose you?</li>
                <li>What is a new customer worth?</li>
                <li>Where might there be room to grow?</li>
              </ul>
            </Step>
            <Step delay={0.22} title="2. Find" img="/images/step-find.webp" lead="Then we investigate the market.">
              <ul className="bullets f" style={f(19, 28)}>
                <li>What are potential customers searching for?</li>
                <li>Where are they searching?</li>
                <li>How many people are searching?</li>
                <li>Which searches suggest genuine buying interest?</li>
                <li>Where are competitors strong?</li>
                <li>Where might competitors be leaving opportunities open?</li>
              </ul>
            </Step>
            <Step delay={0.34} title="3. Reach" img="/images/step-reach.webp" lead="When we find a worthwhile opportunity, we work out the best way to reach it.">
              <p>
                Depending on the opportunity, that may include targeted search or social advertising, SEO, dedicated landing pages or other approaches designed to reach the right people.
              </p>
            </Step>
            <Step delay={0.46} title="4. Learn" img="/images/step-learn.webp" lead="Then we follow what happens.">
              <p>Not simply who clicked.</p>
              <p>We want to know:</p>
              <ul className="bullets" style={{ fontSize: "0.95em" }}>
                <li>Did they enquire?</li>
                <li>Was the enquiry any good?</li>
                <li>Did it become a quotation?</li>
                <li>Did it become a customer?</li>
                <li>Did it make money?</li>
              </ul>
              <p style={{ marginTop: u(18) }}>Then we do more of what works and less of what doesn&apos;t.</p>
            </Step>
          </div>
          <div className="sr sr--up" style={{ display: "flex", justifyContent: "center", marginTop: u(36), marginBottom: u(72), ...d(0.7) }}>
            <TalkButton />
          </div>
        </ScrollReveal>

        {/* 6 — Server Factory case study */}
        <ScrollReveal id="success" className="success" aria-labelledby="success-title">
          <div className="wrap" style={{ paddingTop: u(48), paddingBottom: u(44) }}>
            <h2 id="success-title" className="sr sr--up f" style={f(62, 76, d(0))}>
              What does success look like?
            </h2>
            <p className="sr sr--up f" style={f(27.1, 33, { marginTop: u(4), ...d(0.1) })}>
              It isn&apos;t a dashboard full of green arrows. It&apos;s business.
            </p>
            <div className="two-col f" style={f(22, 32.4, { marginTop: u(22) })}>
              <p className="mw sr sr--up" style={{ "--mw": 545, ...d(0.2) } as CSSProperties}>
                For Server Factory, a UK enterprise IT infrastructure company, the opportunity was to reach organisations actively searching for <span style={{ whiteSpace: "nowrap" }}>high-value</span> enterprise hardware.
              </p>
              <div className="sr sr--up" style={d(0.32)}>
                <p>The work went beyond simply running Google Ads.</p>
                <p style={{ marginTop: u(12) }}>
                  It included understanding the business and its customers, researching the market and competitors, identifying valuable searches, developing landing pages and continually learning from what happened.
                </p>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: u(22) }}>
              <div className="metric sr sr--up" style={d(0.45)}><b className="f" style={f(56, 64)}><CountUp to={3} /></b><span className="f" style={f(22, 27)}>months</span></div>
              <div className="metric sr sr--up" style={d(0.55)}><b className="f" style={f(56, 64)}><CountUp to={15000} prefix="$" comma /></b><span className="f" style={f(22, 27)}>media spend</span></div>
              <div className="metric sr sr--up" style={d(0.65)}><b className="f" style={f(56, 64)}><CountUp to={100} suffix="+" /></b><span className="f" style={f(22, 27)}>qualified leads</span></div>
              <div className="metric sr sr--up" style={d(0.75)}><b className="f" style={f(56, 64)}><CountUp to={4.7} prefix="$" suffix="m" decimals={1} /></b><span className="f" style={f(22, 27)}>quoted</span></div>
              <div className="metric metric--accent sr sr--up" style={d(0.85)}><b className="f" style={f(56, 64)}><CountUp to={1.2} prefix="$" suffix="m" decimals={1} /></b><span className="f" style={f(22, 27)}>in sales</span></div>
            </div>
            <div className="roi" style={{ marginTop: u(46) }}>
              <span className="roi__figure sr sr--up f display" style={f(126, 110, d(1.0))}><CountUp to={80} prefix="$" duration={1500} /></span>
              <span className="roi__text sr sr--up f display" style={f(43.5, 51, d(1.1))}>in sales for every $1 of advertising spend</span>
              <Link href="/work/server-factory" className="roi__link sr sr--up f" style={f(17, 22, d(1.2))}>
                <span className="roi__link-text">Read the Server Factory case study</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 7 — Business suitability */}
        <ScrollReveal className="wrap" style={{ paddingTop: u(90) }} aria-labelledby="fit-title">
          <div className="fit-grid">
            <div>
              <h2 id="fit-title" className="sr sr--up f mw" style={f(53, 59, { ...mw(420), ...d(0) })}>
                This approach isn&apos;t right for
                <span className="f italic" style={f(39, 48, { display: "block", marginTop: u(2) })}>every business.</span>
              </h2>
              <p className="sr sr--up f mw" style={f(22, 32.3, { marginTop: u(26), ...mw(430), ...d(0.14) })}>
                We work especially well with businesses selling things people think carefully about before they buy.
              </p>
            </div>
            <div>
              <p className="sr sr--up f" style={f(23, 28, { marginTop: u(-4), ...d(0.24) })}>It works particularly well when:</p>
              <ul className="bullets fit-list f" style={f(22, 32.4, { marginTop: u(22) })}>
                <li className="sr sr--up" style={d(0.34)}>one new customer is worth a significant amount to your business</li>
                <li className="sr sr--up" style={d(0.44)}>potential customers actively search online for what you sell or the problems you solve</li>
                <li className="sr sr--up" style={d(0.54)}>your product or service is specialist, technical or complex</li>
                <li className="sr sr--up" style={d(0.64)}>quality matters more than lead volume</li>
                <li className="sr sr--up" style={d(0.74)}>a sales conversation normally follows an enquiry</li>
                <li className="sr sr--up" style={d(0.84)}>you suspect there are customers, markets or opportunities you&apos;re currently missing</li>
              </ul>
            </div>
          </div>
          <ul className="industries f" style={f(19.2, 23, { marginTop: u(56) })}>
            {industries.map((i, n) => (
              <li key={i} className="sr sr--up" style={d(0.9 + 0.08 * n)}>{i}</li>
            ))}
          </ul>
        </ScrollReveal>

        {/* 8 — Team */}
        <ScrollReveal id="disciplines" className="wrap" style={{ marginTop: u(72) }} aria-labelledby="team-title">
          <div className="section-rule" aria-hidden="true" />
          <h2 id="team-title" className="team-title sr sr--up f" style={f(56.1, 68, d(0))}>
            Three disciplines. One commercial objective.
          </h2>
          <p className="sr sr--up f" style={f(25.1, 30, { marginTop: u(10), ...d(0.1) })}>
            Finding new customers online requires more than knowing how to operate Google Ads.
          </p>
          <p className="sr sr--up f" style={f(22, 30, { marginTop: u(12), ...d(0.2) })}>
            We bring together three different ways of looking at the same problem.
          </p>
          <div className="team" style={{ marginTop: u(32) }}>
            {team.map((t, i) => (
              <article key={t.name} className="team__card">
                <div className="team__media sr--clip" style={d(0.3 + i * 0.12)}>
                  <Image className="team__photo" src={t.img} alt={`${t.name}, against a sage-green studio backdrop`} width={435} height={543} />
                </div>
                <div className="sr sr--up" style={d(0.75 + i * 0.12)}>
                  <h3 className="f" style={f(35, 53)}>{t.name}</h3>
                  <p className="team__role f" style={f(20, 29.4)}>{t.role}</p>
                  <p className={`team__bio f${t.name === "Junaid Kazi" ? " mw" : ""}`} style={f(20, 29.4, t.name === "Junaid Kazi" ? mw(360) : {})}>{t.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="quote sr sr--up f display" style={f(32, 49, { marginTop: u(35), ...d(0.3) })}>
            Find the business you’re missing.
          </p>
        </ScrollReveal>

        {/* 9 — How we work / closing CTA */}
        <ScrollReveal id="contact" className="wrap contact" aria-labelledby="work-title">
          <div className="closing">
            <div className="mw" style={mw(620)}>
              <h2 id="work-title" className="sr sr--up f" style={f(54, 66, d(0))}>
                How we work
              </h2>
              <div className="closing__copy f" style={f(22, 32.4, { marginTop: u(8) })}>
                <p className="sr sr--up" style={d(0.1)}>If you have a valuable product or service and suspect you&apos;re missing customers, we’ll be glad to talk.</p>
                <p className="sr sr--up" style={d(0.2)}>
                  We&apos;ll start by discussing your business, your customers, what you&apos;re doing now and where there may be opportunities worth investigating.
                </p>
                <p className="sr sr--up" style={d(0.3)}>
                  We won&apos;t begin by trying to sell you a package. And we won&apos;t pretend to know the answer before we&apos;ve looked.
                </p>
                <p className="sr sr--up" style={d(0.4)}>Sometimes we may conclude that paid search isn&apos;t actually the right opportunity.</p>
                <p className="sr sr--up" style={d(0.5)}>That&apos;s useful to know too.</p>
              </div>
            </div>
            <div className="closing__cta">
              <p className="sr sr--up f italic mw" style={f(45, 56, { ...mw(420), ...d(0.6) })}>
                <span className="closing__line">Let&apos;s see</span> <span className="closing__line">what&apos;s out there.</span>
              </p>
              <div className="sr sr--up" style={{ marginTop: u(28), ...d(0.7) }}>
                <TalkButton />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <SiteFooter />
    </>
  );
}
