# Portfolio v2 Notes

## What changed

This version overhauls the portfolio from a card/tab personal site into a modern recruiter-focused engineering homepage.

### Positioning

The site now positions Xim Vyge Narciso as:

**Backend Software Engineer**  
**Distributed Systems • Event-Driven Architecture • Java • Spring Boot • AWS**

### New sections

- Hero section with backend engineering positioning
- Recruiter-friendly impact metrics
- Engineering positioning pills
- Experience timeline with impact-driven bullets
- Core engineering capabilities
- Engineering case studies
- Learning roadmap
- Contact / availability section

### Key metrics included

- 50M+ registered users supported
- ~1M requests/day
- 97% P95 latency reduction
- 15s → <500ms P95 improvement

### Technical validation

The project was built successfully with:

```bash
npm ci
npm run build
```

## Files changed

- `pages/index.tsx`
- `src/app/components/MainPage.tsx`
- `src/app/components/MainPage.css`

## Deployment

After replacing your repo contents with this version:

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
npm run start
```

If deployed on Vercel, push these changes to your connected GitHub repository and Vercel should rebuild automatically.

## Recommended next improvements

1. Add downloadable resume files under `public/resumes/`.
2. Add a custom Open Graph image.
3. Convert the case study cards into dedicated pages.
4. Add architecture diagrams for the performance refactor and SNS/SQS event-driven services.
5. Replace the current profile photo with a professional headshot or polished illustrated avatar.
