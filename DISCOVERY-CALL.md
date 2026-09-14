# Discovery booking

All discovery-call CTAs navigate to `#booking` using DiscoveryCallButton. Hash navigation also works from case-study pages. Profile-request buttons marked emailOnly retain a secondary email-copy dialog; no mailto links are used.

The single event URL is CALENDLY_URL in src/config/discoveryCall.ts:
https://calendly.com/yasserayob0/30min

BookingSection lazy-loads Calendly's official JavaScript and calls initInlineWidget. It renders the actual calendar, with an always-available direct Calendly link and a retry control if the script fails. Email is secondary. The left form does not save data on this site's server. Clicking Use these details in Calendly rebuilds the widget with prefilled name/email and custom answers; it does not book a meeting. Apply details before selecting a time because applying them resets the embed.

Configure these invitee questions in Calendly, in this order:
1. Business / Company (a1)
2. Biggest workflow challenge (a2)
3. Optional notes (a3)

Calendly determines whether those answers are accepted and collected. The website cannot add questions or change the event duration. Requested website copy says 20-minute consultation, while the supplied URL is named 30min. Confirm the actual duration in Calendly and adjust the event or website copy to agree.

Official documentation: https://developer.calendly.com/api-docs/overview/embedding/recipes

Checks: npm run build; npm test; node scripts/verify-calendly.mjs. No booking is submitted during checks. Browser automation is unavailable in this environment.
