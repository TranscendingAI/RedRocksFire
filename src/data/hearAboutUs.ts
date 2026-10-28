/**
 * "How Did You Hear About Us?" options for the contact form (client spec,
 * 2026-10). Shared by src/pages/contact.astro and src/pages/api/contact.ts so
 * the dropdown and server-side validation can't drift apart.
 *
 * `detail` = the option needs a follow-up text answer: referrals and existing
 * customers say *who*; "Other" says what.
 */
export const HEAR_ABOUT_US_OPTIONS: { value: string; detail?: string }[] = [
  { value: 'Google Search' },
  { value: 'AI Search (ChatGPT, Claude, Gemini, Perplexity, etc.)' },
  { value: 'Google Maps / Google Business Profile' },
  { value: 'Bing or Other Search Engine' },
  { value: 'Referral from a Friend or Colleague', detail: 'Who referred you?' },
  { value: 'Referral from Another Business or Vendor', detail: 'Which business or vendor referred you?' },
  { value: 'Existing Red Rocks Fire Protection Services Customer', detail: 'Customer / company name' },
  { value: 'Instagram' },
  { value: 'Linked In' },
  { value: 'Yelp' },
  { value: 'Industry Association or Professional Network' },
  { value: 'Apt Assoc of Metro Denver (AAMD)' },
  { value: 'Other (Please Specify)', detail: 'Please specify' },
];
