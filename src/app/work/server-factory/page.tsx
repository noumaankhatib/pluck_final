import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TalkButton from "@/components/TalkButton";
import { CountUp } from "@/components/case-study/CountUp";
import { CrowdedField, Overlap, Questionnaire, SearchResults, ServerRack, Signpost, Sprout, WebsiteFrames } from "@/components/CaseIllustrations";
import { serverFactoryCaseStudySeo, site } from "@/content/site";
import { serverFactoryCaseStudy, serverFactoryStory as story } from "@/content/server-factory-case-study";
import { d, f, mw, u } from "@/lib/ui";

export const metadata: Metadata = {
  title: serverFactoryCaseStudySeo.title,
  description: serverFactoryCaseStudySeo.description,
  keywords: serverFactoryCaseStudySeo.keywords,
  openGraph: {
    title: serverFactoryCaseStudySeo.title,
    description: serverFactoryCaseStudySeo.description,
    siteName: site.name,
  },
  twitter: {
    title: serverFactoryCaseStudySeo.title,
    description: serverFactoryCaseStudySeo.description,
  },
};

const { sections, results, afterResults, cta } = serverFactoryCaseStudy;
const [opportunity, customer, buyers, website, paid] = sections;
const [difference, next] = afterResults;

/**
 * Body copy. A paragraph that is a question is set as the italic accent line. With `columns` the copy flows
 * into two columns (used where a section has to hold a lot of text on one screen).
 */
function Paras({ items, start = 0.1, columns = false }: { items: string[]; start?: number; columns?: boolean }) {
  return (
    <div className={columns ? "case-cols2" : "mw"} style={columns ? undefined : mw(600)}>
      {items.map((p, i) => {
        const question = p.endsWith("?");
        const style: CSSProperties = question
          ? f(28, 36, { marginTop: i === 0 ? 0 : u(16), ...d(start + i * 0.08) })
          : f(18, 27, { marginTop: i === 0 ? 0 : u(13), ...d(start + i * 0.08) });
        return (
          <p key={p} className={`sr sr--up f${question ? " italic" : ""}`} style={style}>
            {p}
          </p>
        );
      })}
    </div>
  );
}

function Title({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="sr sr--up f" style={f(46, 52, d(0))}>
      {children}
    </h2>
  );
}

export default function ServerFactoryPage() {
  const [client, ...restTitle] = serverFactoryCaseStudy.headline.split(": ");
  const emphasis = "They Were Missing";
  const lead = restTitle.join(": ").replace(emphasis, "").trim();
  const ratio = results.highlight.match(/^(\$\d+)\s+(.*)$/);

  return (
    <>
      <SiteHeader />

      <main aria-label="Server Factory case study" className="case-page">
        {/* 1 — Hero */}
        <section className="wrap hero case-hero" aria-labelledby="case-title">
          <div>
            <Link href="/#success" className="case-back nav-link f reveal" style={f(16, 24, d(0))}>
              <span aria-hidden="true">←</span> Back to Our Work
            </Link>
            <h1 id="case-title" className="f" style={f(62, 68)}>
              <span className="hero-line reveal" style={d(0.05)}>{client}:</span>
              <span className="hero-line reveal" style={d(0.17)}>{lead}</span>
              <span className="hero-line display copper reveal" style={d(0.3)}>{emphasis}</span>
            </h1>
            <p className="f mw reveal" style={f(21, 31, { marginTop: u(20), ...mw(520), ...d(0.45) })}>
              {serverFactoryCaseStudy.deck}
            </p>
            <ul className="case-meta f reveal" style={f(16, 22, d(0.55))} aria-label="Project type">
              {story.heroMeta.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="hero__media reveal" style={d(0.3)}>
            <div className="media-frame hero-frame">
              <ServerRack />
            </div>
          </div>
        </section>

        {/* 2 — The opportunity */}
        <ScrollReveal className="case-screen case-screen--sage" aria-labelledby="opportunity">
          <div className="wrap intro">
            <div>
              <Title id="opportunity">{story.opportunity.headline}</Title>
              <div style={{ marginTop: u(20) }}>
                <Paras items={opportunity.paragraphs} start={0.14} />
              </div>
            </div>
            <div className="intro__media sr sr--up" style={d(0.36)}>
              <div className="media-frame intro-frame">
                <CrowdedField />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 — Starting with the customer */}
        <ScrollReveal className="case-screen" aria-labelledby="customer">
          <div className="wrap">
            <div className="case-split">
              <div className="case-split__img sr sr--up" style={d(0.05)}><Questionnaire /></div>
              <div>
                <Title id="customer">{customer.title}</Title>
                <div style={{ marginTop: u(18) }}>
                  <Paras items={customer.paragraphs} />
                </div>
              </div>
            </div>
            <ol className="case-steps f" style={f(16, 23, { marginTop: u(36) })} aria-label="Research process">
              {story.customer.steps.map((s, i) => (
                <li key={s.title} className="sr sr--up" style={d(0.3 + i * 0.1)}>
                  <h3 className="f" style={f(20, 26)}>{i + 1}. {s.title}</h3>
                  <p style={{ marginTop: u(6) }}>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>

        {/* 4 — Two different buyers */}
        <ScrollReveal className="case-screen case-screen--sage" aria-labelledby="buyers">
          <div className="wrap">
            <Title id="buyers">{buyers.title}</Title>
            <div style={{ marginTop: u(18) }}>
              <Paras items={buyers.paragraphs} columns />
            </div>
            <div className="case-cards" style={{ marginTop: u(26) }}>
              {story.buyers.cards.map((c, i) => (
                <article key={c.title} className="case-card sr sr--up" style={d(0.3 + i * 0.12)}>
                  <p className="f copper" style={f(14, 20)}>{c.tag}</p>
                  <h3 className="f" style={f(28, 34, { marginTop: u(4) })}>{c.title}</h3>
                  <p className="f" style={f(17, 25, { marginTop: u(8) })}>{c.text}</p>
                  <ol className="case-chain f" style={f(15, 21)}>
                    {c.path.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
            <div className="case-converge sr sr--up" style={d(0.6)}>
              <div className="case-ill case-ill--sm"><Signpost /></div>
              <p className="f italic" style={f(28, 36)}>{story.buyers.converge}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* 5 — Building a website around buying decisions */}
        <ScrollReveal className="case-screen" aria-labelledby="website">
          <div className="wrap case-two">
            <div>
              <Title id="website">{website.title}</Title>
              <div style={{ marginTop: u(18) }}>
                <Paras items={website.paragraphs} />
              </div>
            </div>
            <div className="case-aside">
              <div className="case-ill sr sr--up" style={d(0.2)}><WebsiteFrames /></div>
              <ul className="bullets f" style={f(18, 26)}>
                {story.website.items.map((item, i) => (
                  <li key={item} className="sr sr--up" style={{ marginTop: i === 0 ? 0 : u(6), ...d(0.4 + i * 0.07) }}>{item}</li>
                ))}
              </ul>
              <p className="case-note sr sr--up f" style={f(16, 24, d(0.85))}>{story.website.status}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 — Finding demand through paid search */}
        <ScrollReveal className="case-screen case-screen--sage" aria-labelledby="paid">
          <div className="wrap">
            <div className="case-two">
              <div>
                <Title id="paid">{paid.title}</Title>
                <div style={{ marginTop: u(18) }}>
                  <Paras items={paid.paragraphs} />
                </div>
              </div>
              <div className="case-aside">
                <div className="case-ill case-ill--sm sr sr--up" style={d(0.2)}><SearchResults /></div>
                <ul className="case-queries f" style={f(18, 24)} aria-label="Illustrative search intent">
                  {story.paid.signals.map((s, i) => (
                    <li key={s} className={`sr sr--up${i === story.paid.highlighted ? " is-hit" : ""}`} style={d(0.3 + i * 0.1)}>
                      {s}
                      {i === story.paid.highlighted ? <span className="case-flag f" style={f(14, 18)}>Commercial intent</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ol className="case-steps case-steps--6 f" style={f(16, 22, { marginTop: u(32) })} aria-label="Search to sale journey">
              {story.paid.flow.map((s, i) => (
                <li key={s} className="sr sr--up" style={d(0.4 + i * 0.08)}>
                  <h3 className="f" style={f(19, 24)}>{i + 1}. {s}</h3>
                </li>
              ))}
            </ol>
            <p className="sr sr--up f" style={f(14, 20, { marginTop: u(12), ...d(0.9), opacity: 0.8 })}>{story.paid.note}</p>
          </div>
        </ScrollReveal>

        {/* 7 — The results */}
        <ScrollReveal className="success case-screen" aria-labelledby="results">
          <div className="wrap">
            <h2 id="results" className="sr sr--up f" style={f(56, 66, d(0))}>{results.title}</h2>
            <p className="sr sr--up f" style={f(24, 30, { marginTop: u(4), ...d(0.1) })}>{story.results.kicker}</p>
            <div className="metrics metrics--case" style={{ marginTop: u(28) }}>
              {results.metrics.map((m, i) => {
                const [num, ...unit] = m.value.split(" ");
                const last = i === results.metrics.length - 1;
                return (
                  <div key={m.label} className={`metric${last ? " metric--accent" : ""} sr sr--up`} style={d(0.2 + i * 0.1)}>
                    <b className="f" style={f(52, 60)}>
                      <CountUp value={num} className="count" delay={i * 70} />
                      {unit.length ? <small className="f" style={f(22, 27)}>{unit.join(" ")}</small> : null}
                    </b>
                    <span className="f" style={f(18, 24)}>{m.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="roi" style={{ marginTop: u(36) }}>
              <span className="roi__figure sr sr--up f display" style={f(112, 100, d(0.8))}>
                <CountUp value={ratio ? ratio[1] : "$80"} className="count" duration={1500} />
              </span>
              <span className="roi__text sr sr--up f display" style={f(40, 48, d(0.9))}>
                {ratio ? ratio[2] : results.highlight}
              </span>
            </div>
            <div className="case-results-foot">
              <div>
                <p className="sr sr--up f" style={f(18, 27, d(1))}>{results.body[0]}</p>
                <p className="sr sr--up f" style={f(18, 27, { marginTop: u(10), ...d(1.1) })}>{results.body[1]}</p>
              </div>
              <p className="case-note sr sr--up f" style={f(15, 23, d(1.2))}>
                <span className="copper-soft">Please note</span>
                <br />
                {results.body[2]}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 8 — What made the difference */}
        <ScrollReveal className="case-screen" aria-labelledby="difference">
          <div className="wrap case-two">
            <div>
              <Title id="difference">{difference.title}</Title>
              <div style={{ marginTop: u(18) }}>
                <Paras items={difference.paragraphs} />
              </div>
            </div>
            <div className="case-aside">
              <div className="case-ill case-ill--sm sr sr--up" style={d(0.2)}><Overlap /></div>
              <div className="case-disc">
                {story.difference.disciplines.map((disc, i) => (
                  <article key={disc.title} className="sr sr--up" style={d(0.3 + i * 0.1)}>
                    <h3 className="f" style={f(20, 26)}>{disc.title}</h3>
                    <p className="f" style={f(16, 23, { marginTop: u(4) })}>{disc.text}</p>
                  </article>
                ))}
              </div>
              <div className="sr sr--up" style={d(0.7)}>
                <p className="f" style={f(15, 20)}>Shared outcome</p>
                <p className="f italic" style={f(30, 36, { marginTop: u(2) })}>{story.difference.outcome}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 9 — The next stage */}
        <ScrollReveal className="case-screen case-screen--sage" aria-labelledby="next">
          <div className="wrap">
            <div className="case-split">
              <div className="case-split__img sr sr--up" style={d(0.05)}><Sprout /></div>
              <div>
                <Title id="next">{next.title}</Title>
                <div style={{ marginTop: u(18) }}>
                  <Paras items={next.paragraphs} />
                </div>
                <p className="case-note sr sr--up f mw" style={f(16, 24, { marginTop: u(22), ...mw(600), ...d(0.5) })}>
                  {story.next.status}
                </p>
              </div>
            </div>
            <ol className="case-steps f" style={f(16, 23, { marginTop: u(36) })} aria-label="Future measurement plan">
              {story.next.steps.map((s, i) => (
                <li key={s} className="sr sr--up" style={d(0.3 + i * 0.1)}>
                  <h3 className="f" style={f(19, 25)}>{i + 1}. {s}</h3>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>

        {/* 10 — Closing call to action */}
        <ScrollReveal className="case-screen" aria-labelledby="cta">
          <div className="wrap closing">
            <div className="mw" style={mw(620)}>
              <h2 id="cta" className="sr sr--up f" style={f(54, 62, d(0))}>{cta.title}</h2>
              <div className="closing__copy f" style={f(21, 31, { marginTop: u(14) })}>
                {cta.body.map((p, i) => (
                  <p key={p} className="sr sr--up" style={d(0.1 + i * 0.1)}>{p}</p>
                ))}
              </div>
            </div>
            <div className="closing__cta sr sr--up" style={d(0.4)}>
              <TalkButton label={cta.label} />
            </div>
          </div>
        </ScrollReveal>
      </main>

      <SiteFooter />
    </>
  );
}
