"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ADDRESS, EMAIL, PHONE, PHONE_HREF, legalPages } from "./content";
import s from "./legal.module.css";

const fromHash = () => {
  const h = window.location.hash.slice(1);
  return legalPages.some((p) => p.key === h) ? h : "registration";
};
const pad = (n: number) => String(n).padStart(2, "0");

const LegalPage = ({ fontClass }: { fontClass: string }) => {
  const [page, setPage] = useState("registration");

  useEffect(() => {
    const onHash = () => setPage(fromHash());
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (key: string) => {
    history.replaceState(null, "", "#" + key);
    setPage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const idx = legalPages.findIndex((p) => p.key === page);
  const current = legalPages[idx];
  const Body = current.body;

  return (
    <div className={`${fontClass} ${s.root}`}>
      <header className={s.header}>
        <div className={s.headerInner}>
          <Link href="/" className={s.logoLink}>
            <Image
              src="/assets/img/logo/edenwoods-logo-full.png"
              alt="Edenwoods Eduhub Foundation"
              width={640}
              height={431}
              priority
            />
          </Link>
          <Link href="/" className={s.backLink}>
            ← Back to website
          </Link>
        </div>
      </header>

      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroText}>
            <div className={s.eyebrow}>
              <span className={s.eyebrowRule} />
              Legal &amp; Policies · {pad(idx + 1)} / {pad(legalPages.length)}
            </div>
            <h1 className={s.title}>{current.label}</h1>
            <div className={s.updated}>
              Last updated 20 October 2026 — applies to edenwoods.org and all
              Foundation programs
            </div>
          </div>
          <div className={s.bigNum} aria-hidden="true">
            {pad(idx + 1)}
          </div>
        </div>
        <div className={s.strip}>
          <div className={s.stripInner}>
            <span>Section 8 Company</span>
            <span className={s.diamond}>◆</span>
            <span>PAN AAICE2319K</span>
            <span className={s.diamond}>◆</span>
            <span>12A · AAICE2319KE20251</span>
            <span className={s.diamond}>◆</span>
            <span>80G · AAICE2319KF20251</span>
          </div>
        </div>
      </section>

      <main className={s.main}>
        <aside className={s.aside}>
          <div className={s.indexHead}>Index</div>
          {legalPages.map((p, i) => (
            <button
              key={p.key}
              type="button"
              onClick={() => go(p.key)}
              className={`${s.tab} ${p.key === page ? s.tabActive : ""}`}
              aria-current={p.key === page ? "page" : undefined}
            >
              <span className={s.tabNum}>{pad(i + 1)}</span>
              <span>{p.label}</span>
            </button>
          ))}
          <div className={s.askBox}>
            Questions about these policies?
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <br />
            <a href={PHONE_HREF}>{PHONE}</a>
          </div>
        </aside>

        <article className={s.article}>
          <Body />
          <div className={s.orgBox}>
            <strong>Edenwoods Eduhub Foundation</strong>
            <br />
            Section 8 company (Companies Act, 2013) · PAN AAICE2319K
            <br />
            12A URN AAICE2319KE20251 · 80G URN AAICE2319KF20251
            <br />
            {ADDRESS} · <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ·{" "}
            <a href={PHONE_HREF}>{PHONE}</a>
          </div>
        </article>
      </main>

      <footer className={s.footer}>
        <div className={s.footerInner}>
          <div>© 2026 Edenwoods Eduhub Foundation. All rights reserved.</div>
          <div>edenwoods.org</div>
        </div>
      </footer>
    </div>
  );
};

export default LegalPage;
