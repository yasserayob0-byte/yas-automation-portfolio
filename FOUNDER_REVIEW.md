# Founder review and fixes

Review perspective: an AI startup founder deciding whether to shortlist Yasser for an automation engagement.

The portfolio has useful workflow evidence and technical breadth. The main hiring friction was that generic sales claims and decorative status indicators competed with the actual work, while several navigation and accessibility defects made that work harder to evaluate.

This review used source inspection, TypeScript/build validation, six static React case-study renders, and development-server checks. A connected browser was unavailable, so desktop/mobile visual inspection and real assistive-technology interaction remain unverified. Responsive fixes below address concrete sizing and DOM issues found in the code; they are not a claim of visual certification.

## Complete finding register

| # | Area | Weakness found | Change made |
|---|---|---|---|
| 1 | Business messaging | The hero headline was long and generic. | Shortened the headline while retaining AI automation, business growth, and the original explanatory copy. |
| 2 | Conversion | Work samples appeared after extensive introduction and services. | Moved projects directly after the hero; kept every section. |
| 3 | Navigation | Navigation ordering did not reflect the new evaluation path. | Put Projects early and aligned the remaining links with the page sequence. |
| 4 | Conversion | Vague CTAs and discovery-call wording obscured the actual contact action. | Made project discussion and email actions explicit; removed booking implications where no booking tool exists. |
| 5 | Conversion | The selected project/service topic was not visible before contacting. | Show the selected topic and carry it into the email draft. General contact clears stale topics. |
| 6 | Conversion | All contact cards opened the same generic email draft. | Each service link now uses the corresponding service subject. |
| 7 | Conversion | A configured email application was the only practical contact path. | Added copy-email with success/failure feedback and retained a selectable direct address. |
| 8 | Conversion | Visitors were not told what to send or what clicking the CTA does. | Added a short briefing checklist and explained that the email draft sends nothing automatically. |
| 9 | Business messaging | Scope, operating costs, handoff, and failure ownership were unclear. | Added FAQs covering initial briefs, total cost, account ownership, testing, human review, documentation, and support. No prices or support guarantees were invented. |
| 10 | Credibility | Footer profile links led to platform homepages while claiming personal or verified profiles. | Replaced them with clearly labeled email requests for those profiles. Genuine URLs still require owner input. |
| 11 | Credibility | Quarter-specific availability and a response-time claim lacked current support. | Removed stale quarter wording and the unconfirmed four-hour response promise. |
| 12 | Credibility | Hero and testimonial decorations implied independent verification. | Removed the verification framing. Retained the supplied project records, names, and quotations. |
| 13 | Credibility | Testimonials displayed hardcoded five-star ratings and Unsplash portraits as identities. | Removed invented rating decorations and rendered name initials. Original testimonial data remains intact. |
| 14 | Credibility | Screenshot frames and the footer resembled live monitoring dashboards. | Replaced fake uptime, queue, and live-engine decorations with accurate screenshot/workflow labels. |
| 15 | Credibility | Case studies defaulted to live production, a two-week delivery, and an n8n platform regardless of the record. | Removed those defaults; derive platform from the actual stack and ask for scoping where timing is absent. |
| 16 | Credibility | A generic 30-day SLA was attached to every blueprint. | Changed the CTA note to discuss monitoring and support scope. |
| 17 | Credibility | The hero n8n count was hardcoded. | Derive it from the existing project records. |
| 18 | Business messaging | Impact copy promised universal conversion lifts, zero errors, infinite scale, and zero payroll. | Replaced universal guarantees with specific workflow benefits and real operational constraints. |
| 19 | Business messaging | FAQ copy disparaged freelancers and guaranteed identical infrastructure for every project. | Rewrote the same topics around scoping, integration feasibility, appropriate safeguards, and indicative timelines. |
| 20 | Calculator | Gross time value was labeled ROI and payroll savings. | Relabeled it as estimated annual capacity value, with USD and cost exclusions stated. |
| 21 | Calculator | The 85% assumption was fixed and working weeks were not fully explained. | Added an adjustable 0-100% automation share and disclosed 50 working weeks. |
| 22 | Calculator | A constant 12x response-speed figure appeared to be a calculated result. | Replaced it with the actual automation assumption used by the calculation. |
| 23 | Accessibility | Calculator sliders and technology search lacked accessible names; filter states were incomplete. | Added input names and selected/pressed states. |
| 24 | Accessibility | Before/after comparison depended heavily on color and icons. | Added explicit Manual workflow and With automation labels. |
| 25 | Functionality | The receptionist project opened the Facebook Messenger case study. | Built its detail view from the existing receptionist description, architecture, metrics, and screenshot. |
| 26 | Navigation | Case studies had no stable address or browser history integration. | Added hash-based detail URLs, browser history handling, and safe unknown-ID behavior. |
| 27 | Navigation | Opening a case study discarded portfolio filter state and reading position. | Keep the landing view mounted and restore the origin and trigger focus when returning. |
| 28 | Navigation | Footer section links could not navigate out of a case study. | Resolve section hashes back to the landing view and focus the requested section. |
| 29 | Accessibility/SEO | Case-study transitions lacked a focused main landmark and an appropriate document title. | Added a case-study main landmark, skip navigation, focus management, and per-study title/description with homepage restoration. |
| 30 | Accessibility | Service and technology cards had mouse-only actions. | Added native service buttons and keyboard operation for technology cards; retained every action. |
| 31 | Accessibility | Case-study lightboxes lacked consistent Escape dismissal, focus containment, and scroll locking. | Applied the shared modal behavior to both case-study lightboxes and added accessible control labels. |
| 32 | Accessibility | Background content remained available while dialogs were open. | Mark background surfaces inert and restore their previous state on close, including nested dialogs. |
| 33 | UX | Scaled screenshot zoom could leave top/left image edges unreachable. | Use scrollable image dimensions rather than centered transforms. |
| 34 | UX | Case-study thumbnail lists stopped after four images. | Show all existing gallery thumbnails, retain arrows, and expose selection state. |
| 35 | UX | GHL navigation could leave the active workflow pill offscreen. | Scroll the selected pill into the horizontal navigation viewport. |
| 36 | Animation | A timed fake loader delayed access and simulated nonexistent infrastructure work. | Removed the artificial loader and its dead component; hero content enters immediately. |
| 37 | Animation/accessibility | Continuous motion lacked an explicit pause control. | Added a persistent animation preference, honored system reduced motion, and applied it to Motion, gradients, marquees, and pointer glow. |
| 38 | Animation | Programmatic scrolling ignored reduced-motion settings. | Centralized the scroll preference and applied it to navigation and return-to-top actions. |
| 39 | Animation/accessibility | Marquees triplicated cards despite a half-width loop and repeated keyboard stops. | Use two visual copies, remove duplicate keyboard/accessibility stops, and preserve hover/focus pause behavior. |
| 40 | Typography | Small body text, cramped metric labels, and inconsistent brand sizing weakened readability. | Increased body/quote and small-label sizes, allowed metrics to wrap, and aligned navbar wordmark sizes. |
| 41 | Accessibility | Muted text and dark text on dark gradient endpoints had contrast risks. | Raised muted text contrast and used lighter primary-button gradient endpoints. |
| 42 | Spacing/UI | Repeated capability cards and decorative module labels made the page excessively long. | Reduced card and section spacing, removed redundant module decorations, and retained capability descriptions. |
| 43 | Responsiveness | Flex/grid intrinsic widths, long addresses, badges, and dialog toolbars could overflow. | Added intrinsic width constraints, wrapping, scrollable dialog content, and smaller mobile padding where needed. |
| 44 | Responsiveness | Mobile navigation used a fixed top offset and could exceed short viewports. | Measure the actual header height, position the drawer beneath it, and cap it to a scrollable available viewport. |
| 45 | Accessibility | Several icon controls and navigation targets were too small. | Added 44px minimum control targets, larger input targets, and consistent focus states. |
| 46 | Responsiveness | The mobile navbar contained a redundant hidden contact control and competing brand detail. | Removed the dead duplicate control, retained contact in the drawer, and simplified the mobile brand treatment. |
| 47 | Code quality | A generic partial case-study template could silently mix different projects. | Require a complete case-study record and safely resolve unknown IDs without a fallback project. |

## Evidence still needed from the owner

- Actual LinkedIn, GitHub, Upwork, and OnlineJobs profile URLs.
- Permission/provenance for the retained testimonial quotations and the identity of their authors.
- Baselines, measurement periods, and evidence for the retained project metrics and client outcomes.
- Confirmed commercial terms if specific pricing, response-time commitments, support guarantees, or availability are to be published.

These are evidence gaps, not facts that code can establish. The UI no longer invents verification, profile destinations, live telemetry, fixed ratings, or default delivery promises. Project-specific metrics and quotations are retained with reported-outcome/context wording; they have not been independently validated.

## Validation and preservation

- Ran npm run build after each implementation batch; corrected the missing architecture-description TypeScript field before continuing. Final production build passes.
- TypeScript checks with noUnusedLocals and noUnusedParameters pass.
- scripts/verify-portfolio.mjs checks all five project-card associations and all six detail renders, the receptionist identity, screenshot rendering, and unknown/prototype-like IDs.
- Original project, technology, and testimonial records remain unchanged. FAQ wording was intentionally revised.
- Original case-study records, all local image files, and index.html SEO metadata remain unchanged. The additional receptionist detail view is derived from its existing project record.
- Visual browser, device, and assistive-technology QA remain unverified because no connected browser was available.
