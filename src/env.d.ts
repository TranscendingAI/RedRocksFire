/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** GA4 measurement ID (G-XXXXXXXXXX). Optional; GA is omitted when unset. */
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
  /** Google Search Console HTML-tag verification token. Optional. */
  readonly PUBLIC_GSC_VERIFICATION?: string;
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
