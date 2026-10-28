/**
 * "How Did You Hear About Us?" options for the contact form (client spec,
 * 2026-10). Shared by src/pages/contact.astro and src/pages/api/contact.ts so
 * the dropdown and server-side validation can't drift apart.
 *
 * `detail` = the option needs a required follow-up text answer (client: options
 * 4, 5, 6 + Other): which search engine, who referred them, or what "Other" is.
 */
export const HEAR_ABOUT_US_OPTIONS: { value: string; detail?: string }[] = [
  { value: 'Google Search' },
  { value: 'AI Search (ChatGPT, Claude, Gemini, Perplexity, etc.)' },
  { value: 'Google Maps / Google Business Profile' },
  { value: 'Bing or Other Search Engine', detail: 'Which search engine?' },
  { value: 'Referral from a Friend or Colleague', detail: 'Who referred you?' },
  { value: 'Referral from Another Business or Vendor', detail: 'Who referred you?' },
  { value: 'Existing Red Rocks Fire Protection Services Customer' },
  { value: 'Instagram' },
  { value: 'Linked In' },
  { value: 'Yelp' },
  { value: 'Industry Association or Professional Network' },
  { value: 'Apt Assoc of Metro Denver (AAMD)' },
  { value: 'Other (Please Specify)', detail: 'Please specify' },
];
