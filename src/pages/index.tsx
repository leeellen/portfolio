import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { content, EMAIL, GITHUB, BLOG, SITE_URL, type Locale } from '@/content/portfolio';

const RESUME = '/ellen-lee-resume.pdf';

export default function Home() {
    const router = useRouter();
    const locale: Locale = router.locale === 'en' ? 'en' : 'ko';
    const t = content[locale];
    const alternateLocale: Locale = locale === 'ko' ? 'en' : 'ko';
    const canonical = locale === 'en' ? `${SITE_URL}/en` : SITE_URL;
    const year = new Date().getFullYear();

    return (
        <>
            <Head>
                <title>{t.meta.title}</title>
                <meta name="description" content={t.meta.description} />
                <link rel="canonical" href={canonical} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonical} />
                <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'ko_KR'} />
                <meta property="og:title" content={t.meta.title} />
                <meta property="og:description" content={t.meta.description} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={t.meta.title} />
                <meta name="twitter:description" content={t.meta.description} />
                <link rel="alternate" hrefLang="ko" href={SITE_URL} />
                <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
                <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
            </Head>

            <div className="min-h-screen bg-[#f7f4ee] font-sans text-[#1b1b1a] antialiased selection:bg-[#bd4b34] selection:text-white">
                {/* Header */}
                <header className="sticky top-0 z-50 border-b border-black/[0.07] bg-[#f7f4ee]/85 backdrop-blur-md">
                    <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
                        <Link href="#top" className="text-base font-semibold tracking-tight">
                            Ellen Lee<span className="text-[#bd4b34]">.</span>
                        </Link>
                        <div className="hidden items-center gap-8 text-sm text-black/60 md:flex">
                            <Link href="#about" className="transition hover:text-[#bd4b34]">{t.nav.about}</Link>
                            <Link href="#skills" className="transition hover:text-[#bd4b34]">{t.nav.skills}</Link>
                            <Link href="#experience" className="transition hover:text-[#bd4b34]">{t.nav.experience}</Link>
                            <Link href="#projects" className="transition hover:text-[#bd4b34]">{t.nav.projects}</Link>
                            <Link href="#contact" className="transition hover:text-[#bd4b34]">{t.nav.contact}</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link
                                href={router.asPath}
                                locale={alternateLocale}
                                className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-semibold tracking-wide transition hover:border-[#bd4b34] hover:text-[#bd4b34]"
                                aria-label={alternateLocale === 'ko' ? '한국어로 보기' : 'View in English'}
                            >
                                {alternateLocale.toUpperCase()}
                            </Link>
                            <a
                                href={RESUME}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-[#1b1b1a] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#bd4b34]"
                            >
                                {t.contact.resume}
                            </a>
                        </div>
                    </nav>
                </header>

                <main id="top" className="mx-auto max-w-6xl px-5 md:px-8">
                    {/* Hero */}
                    <section className="grid items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#365b6d]">
                                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#5b8c5a]" />
                                {t.hero.availability}
                            </p>
                            <h1 className="mt-7 text-[2.7rem] font-semibold leading-[1.05] tracking-tight md:text-6xl">
                                {t.hero.title.map((line, i) => (
                                    <span key={i} className="block">
                                        {line}
                                    </span>
                                ))}
                            </h1>
                            <p className="mt-7 max-w-xl text-lg leading-8 text-black/70">{t.hero.tagline}</p>
                            <p className="mt-4 max-w-xl leading-7 text-black/65">{t.hero.intro}</p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="#projects"
                                    className="rounded-full bg-[#bd4b34] px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#a23e2a]"
                                >
                                    {t.hero.primaryCta}
                                </Link>
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="rounded-full border border-black/20 px-7 py-3 text-center text-sm font-semibold transition hover:border-[#365b6d] hover:text-[#365b6d]"
                                >
                                    {t.hero.secondaryCta}
                                </a>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {t.stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="flex items-baseline justify-between rounded-2xl border border-black/10 bg-white px-6 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                                >
                                    <span className="text-4xl font-semibold tracking-tight text-[#bd4b34]">{s.value}</span>
                                    <span className="text-right text-sm leading-5 text-black/60">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Highlights */}
                    <section aria-label={t.highlightsTitle} className="border-t border-black/[0.07] py-12">
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#bd4b34]">{t.highlightsTitle}</p>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {t.highlights.map((h) => (
                                <div key={h.metric} className="rounded-2xl bg-[#1b1b1a] p-6 text-white">
                                    <p className="text-xl font-semibold tracking-tight text-[#e7b778]">{h.metric}</p>
                                    <p className="mt-3 text-sm leading-6 text-white/70">{h.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* About */}
                    <section id="about" className="scroll-mt-24 border-t border-black/[0.07] py-20 md:py-24">
                        <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} />
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">{t.about.body}</p>

                        <p className="mt-14 text-sm font-semibold uppercase tracking-wider text-black/50">
                            {t.about.focusTitle}
                        </p>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            {t.about.focus.map((f) => (
                                <article key={f.title} className="rounded-2xl border border-black/10 bg-white p-6">
                                    <h3 className="text-lg font-semibold">{f.title}</h3>
                                    <p className="mt-3 leading-7 text-black/60">{f.body}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section id="skills" className="scroll-mt-24 border-t border-black/[0.07] py-20 md:py-24">
                        <SectionHeader eyebrow={t.skills.eyebrow} title={t.skills.title} />
                        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2">
                            {t.skills.groups.map((g) => (
                                <div key={g.label} className="bg-white p-6">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#365b6d]">{g.label}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {g.items.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full bg-[#f1ece3] px-3.5 py-1.5 text-sm font-medium text-black/70"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section id="experience" className="scroll-mt-24 border-t border-black/[0.07] py-20 md:py-24">
                        <SectionHeader eyebrow={t.experience.eyebrow} title={t.experience.title} />
                        <div className="mt-10 space-y-4">
                            {t.experience.items.map((item) => (
                                <article
                                    key={item.company}
                                    className="grid gap-5 rounded-2xl border border-black/10 bg-white p-6 md:grid-cols-[200px_1fr] md:p-8"
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-[#bd4b34]">{item.period}</p>
                                        <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                                        <p className="mt-1 text-black/60">{item.company}</p>
                                    </div>
                                    <div>
                                        <p className="leading-7 text-black/65">{item.summary}</p>
                                        <ul className="mt-5 space-y-3.5">
                                            {item.points.map((p) => (
                                                <li key={p.title} className="border-l-2 border-[#bd4b34]/25 pl-4">
                                                    <p className="font-semibold leading-6 text-[#1b1b1a]">{p.title}</p>
                                                    <p className="mt-0.5 text-sm leading-6 text-black/55">{p.detail}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section id="projects" className="scroll-mt-24 border-t border-black/[0.07] py-20 md:py-24">
                        <SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} />
                        <p className="mt-6 max-w-2xl leading-7 text-black/65">{t.projects.body}</p>
                        <div className="mt-10 grid gap-6">
                            {t.projects.list.map((project, i) => (
                                <article
                                    key={project.title}
                                    className={`grid overflow-hidden rounded-2xl border border-black/10 bg-white md:grid-cols-2 ${
                                        i % 2 === 1 ? 'md:[&>a]:order-2' : ''
                                    }`}
                                >
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex items-center justify-center overflow-hidden bg-[#e8e2d6] p-8"
                                        aria-label={`${project.title} — ${t.projects.visit}`}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} preview`}
                                            className="max-h-72 w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                                        />
                                    </Link>
                                    <div className="flex flex-col p-7 md:p-9">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#365b6d]">
                                            {project.category}
                                        </p>
                                        <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                                        <p className="mt-4 leading-7 text-black/60">{project.description}</p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.highlights.map((h) => (
                                                <span
                                                    key={h}
                                                    className="rounded-full border border-[#bd4b34]/30 bg-[#bd4b34]/5 px-3 py-1 text-xs font-medium text-[#a23e2a]"
                                                >
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6">
                                            <span className="text-xs text-black/55">{project.stack.join(' · ')}</span>
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-auto text-sm font-semibold text-[#bd4b34] transition hover:text-[#a23e2a]"
                                            >
                                                {t.projects.visit} →
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Contact */}
                    <section id="contact" className="scroll-mt-24 border-t border-black/[0.07] py-20 md:py-24">
                        <div className="rounded-3xl bg-[#1b1b1a] p-9 text-white md:p-14">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#e7b778]">
                                {t.contact.eyebrow}
                            </p>
                            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
                                {t.contact.title}
                            </h2>
                            <p className="mt-4 max-w-xl leading-7 text-white/55">{t.contact.body}</p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="rounded-full bg-[#bd4b34] px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#a23e2a]"
                                >
                                    {t.contact.email}
                                </a>
                                <a
                                    href={RESUME}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-semibold transition hover:border-white/60"
                                >
                                    {t.contact.resume}
                                </a>
                                <a
                                    href={GITHUB}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-semibold transition hover:border-white/60"
                                >
                                    {t.contact.github}
                                </a>
                                <a
                                    href={BLOG}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-semibold transition hover:border-white/60"
                                >
                                    {t.contact.blog}
                                </a>
                            </div>
                            <p className="mt-8 text-sm text-white/55">{EMAIL}</p>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-black/[0.07]">
                    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-black/55 sm:flex-row md:px-8">
                        <span>© {year} {t.footer}</span>
                        <div className="flex gap-5">
                            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-[#bd4b34]">
                                GitHub
                            </a>
                            <a href={BLOG} target="_blank" rel="noopener noreferrer" className="hover:text-[#bd4b34]">
                                Blog
                            </a>
                            <a href={`mailto:${EMAIL}`} className="hover:text-[#bd4b34]">
                                Email
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#bd4b34]">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        </div>
    );
}
