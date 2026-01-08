// NOTE:
// This project uses `basePath: "/websites"` in `next.config.js`, so the route
// `/websites/roofer-demo` is backed by `src/app/roofer-demo/page.tsx`.
//
// The demo implementation lives at `src/app/websites/roofer-demo/page.tsx`
// (as requested), and we re-export it here to keep the public URL correct.

export { metadata, default } from '../websites/roofer-demo/page';

