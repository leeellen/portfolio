import Head from 'next/head';

import { content, EMAIL, GITHUB, BLOG, SITE_URL } from '@/content/portfolio';

const t = content.ko;

const EDUCATION = { school: '동남보건대학교', major: '경영학과 학사', period: '2014.03 — 2017.02' };
const CERT = { name: '컴퓨터활용능력 1급', date: '2017.02' };

export default function Resume() {
    return (
        <>
            <Head>
                <title>이은지 · 프론트엔드 개발자 — 이력서</title>
                <meta name="robots" content="noindex" />
            </Head>

            <main className="resume mx-auto max-w-[820px] bg-white px-10 py-10 text-[#1b1b1a]">
                {/* Header */}
                <header className="border-b border-black/15 pb-5">
                    <h1 className="text-3xl font-bold tracking-tight">
                        이은지 <span className="text-lg font-medium text-black/55">Ellen Lee</span>
                    </h1>
                    <p className="mt-1 font-semibold text-[#bd4b34]">프론트엔드 개발자</p>
                    <p className="mt-2 text-sm leading-6 text-black/60">
                        누구나 이해하기 쉽고 잘 읽히는 코드를 지향합니다. 2020년부터 React·Next.js·TypeScript로 프로덕션 웹을
                        만들어 왔고, 현재는 대규모 임상연구 데이터 플랫폼의 운영 화면 성능·구조·품질을 책임집니다.
                    </p>
                    <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-black/70">
                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        <a href={GITHUB}>github.com/leeellen</a>
                        <a href={BLOG}>rick-ford.tistory.com</a>
                        <a href={SITE_URL}>leeellen.vercel.app</a>
                    </p>
                </header>

                {/* Highlights */}
                <Section title="대표 성과">
                    <ul className="grid gap-2">
                        {t.highlights.map((h) => (
                            <li key={h.metric} className="text-sm leading-6">
                                <span className="font-semibold text-[#bd4b34]">{h.metric}</span>
                                <span className="text-black/70"> — {h.text}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* Experience */}
                <Section title="경력">
                    <div className="space-y-5">
                        {t.experience.items.map((item) => (
                            <article key={item.company} className="break-inside-avoid">
                                <div className="flex items-baseline justify-between">
                                    <h3 className="font-bold">
                                        {item.company} <span className="font-medium text-black/55">· {item.role}</span>
                                    </h3>
                                    <span className="text-sm text-black/55">{item.period}</span>
                                </div>
                                <p className="mt-1 text-sm leading-6 text-black/65">{item.summary}</p>
                                <ul className="mt-2 space-y-1.5">
                                    {item.points.map((p) => (
                                        <li key={p.title} className="text-sm leading-6">
                                            <span className="font-semibold">{p.title}</span>
                                            <span className="text-black/65"> — {p.detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </Section>

                {/* Skills */}
                <Section title="기술">
                    <div className="grid gap-1.5 text-sm leading-6">
                        {t.skills.groups.map((g) => (
                            <p key={g.label}>
                                <span className="font-semibold">{g.label}</span>
                                <span className="text-black/70"> · {g.items.join(', ')}</span>
                            </p>
                        ))}
                    </div>
                </Section>

                {/* Education */}
                <Section title="학력 · 자격">
                    <div className="flex items-baseline justify-between text-sm">
                        <span>
                            <span className="font-semibold">{EDUCATION.school}</span>
                            <span className="text-black/65"> · {EDUCATION.major}</span>
                        </span>
                        <span className="text-black/55">{EDUCATION.period}</span>
                    </div>
                    <div className="mt-1 flex items-baseline justify-between text-sm">
                        <span className="font-semibold">{CERT.name}</span>
                        <span className="text-black/55">{CERT.date}</span>
                    </div>
                </Section>
            </main>

            <style jsx global>{`
                @page {
                    size: A4;
                    margin: 14mm;
                }
                @media print {
                    body {
                        background: #fff;
                    }
                    .resume {
                        max-width: none;
                        padding: 0;
                    }
                }
            `}</style>
        </>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mt-6 break-inside-avoid">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#bd4b34]">{title}</h2>
            {children}
        </section>
    );
}
