import { StaticImageData } from 'next/image';

import kovo from 'public/images/projects/kovo.webp';
import nlize from 'public/images/projects/nlize.webp';
import dokdo from 'public/images/projects/dokdo.webp';

export type Locale = 'ko' | 'en';

export type Project = {
    title: string;
    category: string;
    image: StaticImageData;
    link: string;
    stack: string[];
    description: string;
    highlights: string[];
};

export type SkillGroup = {
    label: string;
    items: string[];
};

export type ExperiencePoint = {
    title: string;
    detail: string;
};

export type ExperienceItem = {
    period: string;
    role: string;
    company: string;
    summary: string;
    points: ExperiencePoint[];
};

export type Content = {
    meta: { title: string; description: string };
    nav: { about: string; skills: string; experience: string; projects: string; contact: string };
    hero: {
        availability: string;
        title: string[];
        tagline: string;
        intro: string;
        primaryCta: string;
        secondaryCta: string;
    };
    stats: { value: string; label: string }[];
    highlightsTitle: string;
    highlights: { metric: string; text: string }[];
    about: {
        eyebrow: string;
        title: string;
        body: string;
        focusTitle: string;
        focus: { title: string; body: string }[];
    };
    skills: { eyebrow: string; title: string; groups: SkillGroup[] };
    experience: { eyebrow: string; title: string; items: ExperienceItem[] };
    projects: { eyebrow: string; title: string; body: string; visit: string; list: Project[] };
    contact: { eyebrow: string; title: string; body: string; email: string; github: string; blog: string; resume: string };
    footer: string;
};

export const EMAIL = 'lee.ellen0814@gmail.com';
export const GITHUB = 'https://github.com/leeellen';
export const BLOG = 'https://rick-ford.tistory.com/';
export const SITE_URL = 'https://leeellen.vercel.app';

export const content: Record<Locale, Content> = {
    ko: {
        meta: {
            title: 'Ellen Lee · 프론트엔드 개발자',
            description:
                '누구나 이해하기 쉽고 잘 읽히는 코드를 지향하는 프론트엔드 개발자 이은지입니다. React, Next.js, TypeScript 기반의 프로덕션 웹과 대규모 데이터 운영 UI를 만듭니다.',
        },
        nav: { about: '소개', skills: '기술', experience: '경력', projects: '프로젝트', contact: '연락' },
        hero: {
            availability: 'Frontend Developer · React · Next.js · TypeScript',
            title: ['읽기 쉬운 코드로', '제품을 끝까지', '완성하는 개발자'],
            tagline: '누구나 이해하기 쉽고 잘 읽히는 코드의 작성을 위해 노력합니다.',
            intro: '2020년부터 React·Next.js·TypeScript로 다양한 프로덕션 웹을 만들어 온 프론트엔드 개발자입니다. 현재는 대규모 임상연구 데이터 플랫폼에서 복잡한 데이터 테이블·폼·권한·접근성을 다루며, 사용자가 매일 쓰는 운영 화면의 품질을 책임지고 있습니다.',
            primaryCta: '프로젝트 보기',
            secondaryCta: '이메일 보내기',
        },
        stats: [
            { value: '6년+', label: '프론트엔드 개발 경력' },
            { value: '10+', label: '런칭한 프로덕션 웹' },
        ],
        highlightsTitle: '대표 성과',
        highlights: [
            { metric: '10초 → 0.1초', text: '대량 데이터 조회 응답 지연 해결 — Firebase를 자체 API로 교체' },
            { metric: 'react-hook-form 리팩토링', text: '대상자 입력 로직 재설계로 불필요한 리렌더·입력 지연 대폭 감소' },
            { metric: '기획부터 구현까지', text: 'CRF 빌더·DVS 개발 도구를 데이터 구조 설계 단계부터 직접 구축' },
        ],
        about: {
            eyebrow: '소개',
            title: '요구사항을 안정적이고 유지보수하기 쉬운 화면으로 옮깁니다',
            body: '웹 퍼블리싱부터 React 기반 백오피스, CMS, 대규모 데이터 운영 UI까지 제품의 전 영역을 경험했습니다. 화려한 코드보다 다음 사람이 읽기 쉬운 코드를, 단발성 구현보다 오래 유지보수되는 구조를 우선합니다.',
            focusTitle: '지금 집중하는 일',
            focus: [
                {
                    title: '대규모 데이터 운영 UI',
                    body: '임상연구 데이터 플랫폼에서 복잡한 데이터 테이블과 시트, 일괄 입력·필터·정렬·페이지네이션, 저장 중 편집 제어, 중복 요청 방지 같은 운영 흐름을 구현합니다.',
                },
                {
                    title: '폼 검증과 권한·인증',
                    body: '입력 폼 검증, 역할 기반 권한, 인증 플로우를 다루며 사용자에 따라 다르게 동작하는 화면을 안정적으로 설계합니다.',
                },
                {
                    title: '웹 접근성',
                    body: 'WAI-ARIA 시멘틱, 헤딩 구조, 상태 알림, 키보드 내비게이션을 실제 컴포넌트에 적용해 보조기술에서도 동작하는 UI를 만듭니다.',
                },
                {
                    title: '파일 I/O·실시간 연동',
                    body: '파일 업·다운로드, CSV/엑셀 처리, 카메라·OCR, WebSocket 기반 실시간 연동 등 브라우저 환경의 까다로운 기능을 구현합니다.',
                },
            ],
        },
        skills: {
            eyebrow: '기술 스택',
            title: '주로 사용하는 도구',
            groups: [
                { label: '언어 · 프레임워크', items: ['TypeScript', 'JavaScript', 'React', 'Next.js'] },
                { label: '상태 · 데이터', items: ['TanStack Query', 'Jotai', 'react-hook-form', 'TanStack Table'] },
                { label: '마크업 · 스타일링', items: ['HTML', 'CSS', 'Tailwind CSS', 'Emotion', 'styled-components', 'Ant Design'] },
                { label: '테스트 · 도구', items: ['Jest', 'Testing Library', 'Playwright', 'Sentry'] },
            ],
        },
        experience: {
            eyebrow: '경력',
            title: '실무에서 쌓아온 경험',
            items: [
                {
                    period: '2024.07 — 현재',
                    role: 'Frontend Developer',
                    company: 'MDB Co., Ltd.',
                    summary: '임상시험 데이터를 수집·관리하는 eCRF 플랫폼에서, 매일 수많은 데이터가 오가는 운영 화면의 성능·구조·품질을 책임집니다. 기능을 더하기 전에 "왜 느린가, 어떻게 더 견고하게 만들까"를 먼저 묻습니다.',
                    points: [
                        { title: '대상자 입력 로직 성능 리팩토링', detail: '리렌더가 잦던 입력 로직을 react-hook-form으로 재설계. 기획·시나리오 테스트를 직접 주도해 불필요한 리렌더와 입력 응답 지연을 대폭 감소시켰습니다.' },
                        { title: 'CRF 빌더 설계·구현 주도', detail: '신규 빌더의 데이터 구조를 기획 단계에서 설계해 채택. 에디터 로드·서브밋·엔티티 추가 코어 플로우를 담당하고 비즈니스 로직 테스트로 보강했습니다.' },
                        { title: 'DVS 개발 도구 신규 구축', detail: '검증·파생값 로직을 만들고 즉시 확인하는 개발 도구를 0부터 구현. preview·save 트리거 연동, 방문 그룹·동적 테이블, 저장 응답 유실 방지까지.' },
                        { title: 'OCR·카메라 입력 연동', detail: '카메라 기반 OCR 입력 구현. WebSocket 실시간 연동 안정화, 디바이스 표시, 카메라 권한 처리, 캡처 파이프라인 Next 라우트 통합.' },
                        { title: 'eCRF 임상 데이터 워크플로', detail: '쿼리 발행·응답, 수정 사유·감사 추적, 데이터 잠금, 전자 서명, 대용량 업·다운로드 등 핵심 운영 플로우를 구현했습니다.' },
                        { title: '대상자 인쇄 · 역할 권한 관리', detail: '대량 선택 인쇄(1,000명 가드·완료 시 자동 다운로드)와 role·privilege 관리 UI를 권한 게이팅·유효성 검사와 함께 구현했습니다.' },
                        { title: '대규모 데이터 시트·테이블', detail: 'TanStack Table·Virtual 기반 가상화 시트, 다중 고정 컬럼, 권한 기반 행 제어, 중복 요청 방지.' },
                        { title: '코드 품질·일관성 개선', detail: '분산된 구현을 표준 라이브러리로 일원화(자체 CSV 파싱 → xlsx), 폴더·훅을 기능 단위로 분리, 테스트 커버리지를 꾸준히 확장했습니다.' },
                        { title: '디자인·접근성 자동화 스킬 구축', detail: '디자이너 작업 자동화와 릴리즈별 사용자 안내서 자동 생성·검수 파이프라인을 구축. 접근성 감사 스킬로 보조기술과 AI 에이전트가 다루기 쉬운 서비스로 개선했습니다.' },
                    ],
                },
                {
                    period: '2022.03 — 2023.12',
                    role: 'Frontend Developer',
                    company: '주식회사 메이데이파트너스',
                    summary: 'Next.js·TypeScript·Emotion으로 다양한 서비스와 CMS 백오피스를 개발했습니다.',
                    points: [
                        { title: 'KOVO 웹사이트 리뉴얼', detail: '노후화된 한국배구연맹 사이트를 Next.js로 재구축 — 구단별 커스터마이징·영문·반응형 페이지.' },
                        { title: 'KOVO CMS', detail: '구단별 동적 네비게이션과 팝업·배너·게시판·미디어 CRUD를 담당했습니다.' },
                        { title: 'WEVENT', detail: 'Konva 기반 일반/3D 로비·스폰서 설정을 서비스 화면과 연동했습니다.' },
                        { title: 'Dokdo 체험관', detail: '퍼블리싱 코드를 Next.js로 재구현하고 NICE 본인인증·관람 예약을 구현했습니다.' },
                        { title: 'Nlize · Shakerrr Mall 외', detail: '브랜드 사이트부터 SNS·커머스까지 다양한 프론트엔드를 개발했습니다.' },
                    ],
                },
                {
                    period: '2020.06 — 2022.02',
                    role: 'Frontend Developer',
                    company: '주식회사 필드쉐어',
                    summary: '우주인(WOOJOOIN) 서비스의 백오피스·웹·파트너 센터를 개발·고도화했습니다.',
                    points: [
                        { title: '응답 지연 해결 (10초 → 0.1초)', detail: '대량 데이터에서 10초까지 걸리던 Firebase Database 조회를 자체 서버 API로 교체해 응답 시간을 0.1초까지 단축했습니다.' },
                        { title: '우주인 백오피스 개발·운영', detail: '배너·팝업 광고부터 지도·지역 API 기반 지역 광고 기능까지 전체 개발·유지보수했습니다.' },
                        { title: 'UX 재설계', detail: '직관적이지 않던 UI를 사용자 행동 단계를 단순화해 재구현, UX를 개선했습니다.' },
                        { title: '우주인 웹·파트너 센터', detail: '시설 예약·결제, 예약 수락, 시설 운영·휴업 처리 등 회원·운영 기능을 개발했습니다.' },
                        { title: '우주인 셔틀', detail: '반복되는 레이아웃·UI를 컴포넌트화해 신규 사이트 개발 시간을 최소화했습니다.' },
                    ],
                },
            ],
        },
        projects: {
            eyebrow: '프로젝트',
            title: '런칭한 프로덕션 작업',
            body: '실제 서비스 중인 웹사이트입니다. 이미지를 클릭하면 사이트로 이동합니다.',
            visit: '사이트 방문',
            list: [
                {
                    title: 'KOVO',
                    category: '협회 웹사이트 리뉴얼 · CMS',
                    image: kovo,
                    link: 'https://kovo.co.kr/',
                    stack: ['React', 'Next.js', 'TypeScript', 'Emotion'],
                    description:
                        '노후화된 한국배구연맹 웹사이트를 Next.js로 리뉴얼하고, 구단별 커스터마이징·영문·반응형 페이지를 구현했습니다. CMS에서는 구단별 동적 네비게이션과 팝업·배너·게시판·미디어 CRUD를 담당했습니다.',
                    highlights: ['구단별 동적 네비게이션', 'CMS CRUD', '영문·반응형'],
                },
                {
                    title: 'Dokdo Experience Center',
                    category: '예약 · 본인인증 플로우',
                    image: dokdo,
                    link: 'http://dokdomuseum.nahf.or.kr/',
                    stack: ['Next.js', 'TypeScript', 'Emotion', 'Ant Design'],
                    description:
                        '독도체험관 사이트를 Next.js 환경에서 재구현하고, 퍼블리싱 코드를 React 구조로 옮겼습니다. NICE 본인인증과 관람 예약 기능을 구현했습니다.',
                    highlights: ['Next.js 재구현', 'NICE 본인인증', '관람 예약'],
                },
                {
                    title: 'Nlize',
                    category: '정적 브랜드 사이트',
                    image: nlize,
                    link: 'http://nlize-co.com/index.html',
                    stack: ['HTML', 'CSS', 'JavaScript'],
                    description:
                        'HTML·CSS·JavaScript만으로 Nlize 브랜드 소개 웹사이트 전체를 개발했습니다. 반응형 화면과 스크롤 인터랙션 효과를 구현했습니다.',
                    highlights: ['No-framework', '스크롤 인터랙션', '반응형'],
                },
            ],
        },
        contact: {
            eyebrow: '연락',
            title: '함께 좋은 제품을 만들어요',
            body: '새로운 기회나 협업 제안은 언제든 환영합니다. 편하게 연락 주세요.',
            email: '이메일 보내기',
            github: 'GitHub',
            blog: '기술 블로그',
            resume: '이력서 PDF',
        },
        footer: 'Eunji Lee · Frontend Developer',
    },
    en: {
        meta: {
            title: 'Ellen Lee · Frontend Developer',
            description:
                'Eunji (Ellen) Lee — a frontend developer who writes code that is easy to read and understand. I build production web apps and large-scale data operation UIs with React, Next.js, and TypeScript.',
        },
        nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
        hero: {
            availability: 'Frontend Developer · React · Next.js · TypeScript',
            title: ['I ship products', 'end to end with', 'readable code'],
            tagline: 'I strive to write code that anyone can read and understand.',
            intro: 'A frontend developer building production web apps with React, Next.js, and TypeScript since 2020. I currently work on a large-scale clinical-research data platform, handling complex data tables, forms, permissions, and accessibility for the operational screens people use every day.',
            primaryCta: 'View projects',
            secondaryCta: 'Email me',
        },
        stats: [
            { value: '6+ yrs', label: 'Frontend experience' },
            { value: '10+', label: 'Production sites shipped' },
        ],
        highlightsTitle: 'Selected impact',
        highlights: [
            { metric: '10s → 0.1s', text: 'Cut large-dataset query latency by replacing Firebase with a custom API' },
            { metric: 'react-hook-form refactor', text: 'Redesigned subject-entry logic — slashed re-renders and input latency' },
            { metric: 'design → ship', text: 'Built the CRF builder & DVS dev tool from the data-structure stage up' },
        ],
        about: {
            eyebrow: 'About',
            title: 'I turn requirements into stable, maintainable screens',
            body: 'I have worked across the full surface of a product — from web publishing to React back offices, CMS platforms, and large-scale data operation UIs. I prioritize code the next person can read over clever code, and structures that last over one-off implementations.',
            focusTitle: 'What I focus on now',
            focus: [
                {
                    title: 'Large-scale data UIs',
                    body: 'On a clinical-research data platform I build complex tables and sheets — bulk input, filtering, sorting, pagination, edit-locking during save, and duplicate-request prevention.',
                },
                {
                    title: 'Forms, auth & permissions',
                    body: 'I handle input validation, role-based permissions, and auth flows, designing screens that behave differently and reliably per user.',
                },
                {
                    title: 'Web accessibility',
                    body: 'I wire WAI-ARIA semantics, heading structure, status announcements, and keyboard navigation into real components so the UI works with assistive technology.',
                },
                {
                    title: 'File I/O & real-time',
                    body: 'I implement tricky browser features: file upload/download, CSV/Excel handling, camera/OCR, and WebSocket-based real-time integration.',
                },
            ],
        },
        skills: {
            eyebrow: 'Tech stack',
            title: 'Tools I work with',
            groups: [
                { label: 'Languages & Frameworks', items: ['TypeScript', 'JavaScript', 'React', 'Next.js'] },
                { label: 'State & Data', items: ['TanStack Query', 'Jotai', 'react-hook-form', 'TanStack Table'] },
                { label: 'Markup & Styling', items: ['HTML', 'CSS', 'Tailwind CSS', 'Emotion', 'styled-components', 'Ant Design'] },
                { label: 'Testing & Tooling', items: ['Jest', 'Testing Library', 'Playwright', 'Sentry'] },
            ],
        },
        experience: {
            eyebrow: 'Experience',
            title: 'Where I have worked',
            items: [
                {
                    period: '2024.07 — Present',
                    role: 'Frontend Developer',
                    company: 'MDB Co., Ltd.',
                    summary: 'On an eCRF platform that captures and manages clinical-trial data, I own the performance, structure, and quality of the operational screens used every day. Before adding a feature, I ask "why is this slow, and how do we make it sturdier?"',
                    points: [
                        { title: 'Subject-entry performance refactor', detail: 'Redesigned the re-render-heavy data-entry logic around react-hook-form. Drove it end to end — planning through scenario testing — cutting unnecessary re-renders and input latency dramatically.' },
                        { title: 'Led the CRF builder design & build', detail: 'Proposed the new builder\'s data structure at the planning stage and got it adopted. Owned core flows — editor load, submit, entity-add — backed by business-logic tests.' },
                        { title: 'Built the DVS dev tool from scratch', detail: 'A developer tool to author validation/derived-value logic and preview it instantly: preview/save trigger APIs, visit groups, dynamic tables, and guards against losing save responses.' },
                        { title: 'OCR & camera input', detail: 'Built camera-based OCR input — stabilized the WebSocket link, device display, camera-permission handling, and consolidated the capture pipeline into Next routes.' },
                        { title: 'eCRF clinical data workflows', detail: 'Manual query issue/response, modification reasons & audit trail, data lock, e-signature, and large-volume data upload/download.' },
                        { title: 'Subject printing & access control', detail: 'Bulk selection printing (1,000-subject guard, auto-download on completion) and role/privilege management UIs with permission gating and validation.' },
                        { title: 'Large-scale data sheets & tables', detail: 'Virtualized sheets on TanStack Table/Virtual with multi-frozen columns, permission-based row control, and duplicate-request prevention.' },
                        { title: 'Code quality & consistency', detail: 'Consolidated scattered implementations onto standard libraries (custom CSV parser → xlsx), split folders/hooks along feature boundaries, and steadily grew test coverage.' },
                        { title: 'Design & accessibility automation skills', detail: 'Built designer-workflow automation and a per-release user-guide generation/review pipeline. A semantic-audit skill made the product easy for assistive tech and AI agents to analyze and operate.' },
                    ],
                },
                {
                    period: '2022.03 — 2023.12',
                    role: 'Frontend Developer',
                    company: 'Mayday Partners',
                    summary: 'Built a range of services and CMS back offices with Next.js, TypeScript, and Emotion.',
                    points: [
                        { title: 'KOVO website renewal', detail: 'Rebuilt the aging Korea Volleyball Federation site on Next.js — team-specific, English, responsive pages.' },
                        { title: 'KOVO CMS', detail: 'Dynamic team navigation plus popup, banner, board, and media CRUD.' },
                        { title: 'WEVENT', detail: 'Konva-based general/3D lobby and sponsor settings wired to the service UI.' },
                        { title: 'Dokdo Experience Center', detail: 'Rebuilt published markup in Next.js with NICE identity verification and viewing reservation.' },
                        { title: 'Nlize · Shakerrr Mall & more', detail: 'Delivered frontends ranging from brand sites to SNS and commerce.' },
                    ],
                },
                {
                    period: '2020.06 — 2022.02',
                    role: 'Frontend Developer',
                    company: 'Fieldshare',
                    summary: 'Developed and advanced the WOOJOOIN admin back office, web, and partner center.',
                    points: [
                        { title: 'Fixed major latency (10s → 0.1s)', detail: 'Replaced a Firebase Database query that took up to 10s on large datasets with a custom server API, cutting response time to 0.1s.' },
                        { title: 'WOOJOOIN admin back office', detail: 'Full development & maintenance — from banner/popup ads to location-based ads using map and region APIs.' },
                        { title: 'UX redesign', detail: 'Rebuilt an unintuitive UI by simplifying user-action steps, improving overall UX.' },
                        { title: 'WOOJOOIN web & partner center', detail: 'Facility reservation/payment, reservation acceptance, and facility operation/closure handling.' },
                        { title: 'WOOJOOIN shuttle', detail: 'Componentized repeated layouts/UI to minimize new-site build time.' },
                    ],
                },
            ],
        },
        projects: {
            eyebrow: 'Projects',
            title: 'Production work, shipped',
            body: 'Live websites in production. Click an image to visit the site.',
            visit: 'Visit site',
            list: [
                {
                    title: 'KOVO',
                    category: 'Federation renewal · CMS',
                    image: kovo,
                    link: 'https://kovo.co.kr/',
                    stack: ['React', 'Next.js', 'TypeScript', 'Emotion'],
                    description:
                        'Renewed the aging Korea Volleyball Federation website with Next.js, including team-specific, English, and responsive pages. In the CMS I built dynamic team navigation plus popup, banner, board, and media CRUD.',
                    highlights: ['Dynamic team nav', 'CMS CRUD', 'English · responsive'],
                },
                {
                    title: 'Dokdo Experience Center',
                    category: 'Reservation · identity flow',
                    image: dokdo,
                    link: 'http://dokdomuseum.nahf.or.kr/',
                    stack: ['Next.js', 'TypeScript', 'Emotion', 'Ant Design'],
                    description:
                        'Reimplemented the Dokdo Experience Center site in Next.js from published markup, and built NICE identity verification and viewing-reservation flows.',
                    highlights: ['Next.js rebuild', 'NICE verification', 'Reservation'],
                },
                {
                    title: 'Nlize',
                    category: 'Static brand site',
                    image: nlize,
                    link: 'http://nlize-co.com/index.html',
                    stack: ['HTML', 'CSS', 'JavaScript'],
                    description:
                        'Delivered the full Nlize brand site with only HTML, CSS, and JavaScript, including responsive layouts and scroll interaction effects.',
                    highlights: ['No framework', 'Scroll interactions', 'Responsive'],
                },
            ],
        },
        contact: {
            eyebrow: 'Contact',
            title: "Let's build something good together",
            body: 'I am always open to new opportunities and collaboration. Feel free to reach out.',
            email: 'Email me',
            github: 'GitHub',
            blog: 'Tech blog',
            resume: 'Resume (PDF)',
        },
        footer: 'Eunji Lee · Frontend Developer',
    },
};
