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

            <div className="cv">
                {/* full-height gold strip — repeats on every printed page */}
                <div className="cv-rail" aria-hidden />

                {/* sidebar content — appears once (page 1) */}
                <aside className="cv-side">
                    <section>
                        <h2 className="side-h">PERSONAL</h2>
                        <p className="side-k">Name</p>
                        <p className="side-v">이은지 · Ellen Lee</p>
                        <p className="side-k">Email</p>
                        <p className="side-v">{EMAIL}</p>
                    </section>

                    <section>
                        <h2 className="side-h">SKILLS</h2>
                        {t.skills.groups.map((g) => (
                            <div key={g.label} className="skill-grp">
                                <p className="skill-label">{g.label}</p>
                                <p className="skill-items">{g.items.join(', ')}</p>
                            </div>
                        ))}
                    </section>

                    <section>
                        <h2 className="side-h">LINKS</h2>
                        <p className="side-v">{GITHUB.replace('https://', '')}</p>
                        <p className="side-v">{BLOG.replace('https://', '')}</p>
                        <p className="side-v">{SITE_URL.replace('https://', '')}</p>
                    </section>
                </aside>

                {/* main column */}
                <main className="cv-main">
                    <header className="cv-head">
                        <h1>EUNJI LEE</h1>
                        <p className="lead">프론트엔드 개발자 이은지입니다.</p>
                        <p className="lead">누구나 이해가 쉽고 잘 읽히는 코드의 작성을 위해 노력합니다.</p>
                        <p className="lead">
                            2020년부터 React·Next.js·TypeScript로 프로덕션 웹을 만들어 왔고, 현재는 대규모 임상연구 데이터
                            플랫폼의 운영 화면 성능·구조·품질을 책임집니다.
                        </p>
                    </header>

                    <section className="cv-sec">
                        <h2 className="sec-h">WORK EXPERIENCE</h2>
                        {t.experience.items.map((item) => (
                            <article key={item.company} className="exp">
                                <div className="exp-date">{item.period}</div>
                                <div className="exp-body">
                                    <h3 className="exp-role">{item.role}</h3>
                                    <p className="exp-co">{item.company}</p>
                                    <p className="exp-sum">{item.summary}</p>
                                    <ul className="exp-points">
                                        {item.points.map((p) => (
                                            <li key={p.title}>
                                                <span className="pt-title">{p.title}</span> — {p.detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </section>

                    <section className="cv-sec">
                        <h2 className="sec-h">EDUCATION &amp; QUALIFICATIONS</h2>
                        <article className="exp">
                            <div className="exp-date">{EDUCATION.period}</div>
                            <div className="exp-body">
                                <h3 className="exp-role">{EDUCATION.school}</h3>
                                <p className="exp-co">{EDUCATION.major}</p>
                            </div>
                        </article>
                        <article className="exp">
                            <div className="exp-date">{CERT.date}</div>
                            <div className="exp-body">
                                <h3 className="exp-role">{CERT.name}</h3>
                            </div>
                        </article>
                    </section>
                </main>
            </div>

            <style jsx global>{`
                @page {
                    size: A4;
                    margin: 0;
                }
                * {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                body {
                    margin: 0;
                    color: #1f1d1a;
                    font-size: 11px;
                    line-height: 1.55;
                }
                .cv {
                    position: relative;
                }
                .cv-rail {
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    width: 34%;
                    background: #e7a23a;
                    z-index: 0;
                }
                .cv-side {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 34%;
                    box-sizing: border-box;
                    padding: 34px 26px;
                    color: #2a2410;
                    z-index: 1;
                }
                .cv-side section {
                    margin-bottom: 22px;
                }
                .side-h {
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    margin: 0 0 10px;
                    border-bottom: 1.5px solid rgba(0, 0, 0, 0.28);
                    padding-bottom: 5px;
                }
                .side-k {
                    margin: 8px 0 0;
                    font-size: 9.5px;
                    font-weight: 700;
                    opacity: 0.65;
                }
                .side-v {
                    margin: 1px 0 0;
                    font-size: 10.5px;
                    word-break: break-all;
                }
                .skill-grp {
                    margin-top: 8px;
                }
                .skill-label {
                    margin: 0;
                    font-size: 9.5px;
                    font-weight: 700;
                }
                .skill-items {
                    margin: 1px 0 0;
                    font-size: 10px;
                    opacity: 0.85;
                }
                .cv-main {
                    margin-left: 34%;
                    box-sizing: border-box;
                    padding: 34px 32px 34px 30px;
                    position: relative;
                    z-index: 1;
                }
                .cv-head h1 {
                    margin: 0;
                    font-size: 30px;
                    font-weight: 800;
                    letter-spacing: 0.01em;
                }
                .lead {
                    margin: 6px 0 0;
                    font-size: 11.5px;
                    color: #3a352c;
                }
                .cv-sec {
                    margin-top: 26px;
                }
                .sec-h {
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    border-bottom: 2px solid #e7a23a;
                    padding-bottom: 6px;
                    margin: 0 0 16px;
                }
                .exp {
                    display: grid;
                    grid-template-columns: 92px 1fr;
                    gap: 14px;
                    margin-bottom: 18px;
                    break-inside: avoid;
                }
                .exp-date {
                    font-size: 10px;
                    font-weight: 700;
                    color: #6b6453;
                    padding-top: 2px;
                }
                .exp-role {
                    margin: 0;
                    font-size: 13px;
                    font-weight: 800;
                }
                .exp-co {
                    margin: 1px 0 0;
                    font-size: 11px;
                    font-weight: 700;
                    color: #c07a1e;
                }
                .exp-sum {
                    margin: 7px 0 0;
                    font-size: 10.5px;
                    color: #4a4438;
                }
                .exp-points {
                    margin: 8px 0 0;
                    padding-left: 15px;
                }
                .exp-points li {
                    margin-bottom: 5px;
                    font-size: 10.5px;
                }
                .pt-title {
                    font-weight: 700;
                }
            `}</style>
        </>
    );
}
