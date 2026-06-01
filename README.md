# Ellen Lee — Portfolio

프론트엔드 개발자 이은지(Ellen Lee)의 개인 포트폴리오 사이트입니다.
React · Next.js · TypeScript 기반 프로덕션 웹 경험과 주요 프로젝트를 한/영 단일 페이지로 소개합니다.

🔗 **Live:** https://leeellen.vercel.app

## Stack

- **Framework:** Next.js 13 (Pages Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **i18n:** Next.js 내장 i18n 라우팅 (`ko` / `en`)
- **Deploy:** Vercel

## Structure

```
src/
├─ pages/
│  ├─ index.tsx       # 페이지 (프레젠테이션)
│  ├─ _app.tsx
│  └─ _document.tsx   # locale별 <html lang> 설정
├─ content/
│  └─ portfolio.ts    # 모든 콘텐츠 데이터 + 타입 (한/영)
└─ styles/
   └─ globals.css
```

콘텐츠는 `src/content/portfolio.ts` 한 곳에 모여 있습니다. 이력·프로젝트 갱신 시 이 파일만 수정하면 됩니다.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint
```

## License

Personal portfolio. © Eunji Lee.
