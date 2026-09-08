# YAS Automation portfolio

Static React + TypeScript site built with Vite. No backend or AI API key is required.

## Development

Use Node.js 22 LTS or newer.

```sh
npm ci
npm run dev
```

On Windows PowerShell, use npm.cmd if script execution is restricted.

## Validation

```sh
npm run build
npm test
npm audit
```

The build includes strict TypeScript and unused-symbol checks. Tests verify all six case-study renders, canonical project IDs, screenshot associations and unknown-route handling. They do not replace interactive browser testing.

## Deployment

Publish the contents of dist/ to a static HTTPS host after a successful build. Case-study navigation uses URL fragments and needs no server-side route rewrites. Keep existing hashed assets available during deployments so open sessions can finish loading; the case-study boundary offers recovery if a chunk is unavailable.

Use npm run preview to inspect the production output locally. Validate phone/tablet/desktop layouts, keyboard navigation, nested screenshot dialogs, reduced motion and email links on the target host before release. Configure host-specific caching and security headers there.

Brand sources are documented in src/assets/logos/SOURCES.md. Original project content and screenshots are retained.
