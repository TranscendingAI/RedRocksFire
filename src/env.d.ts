/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** GA4 measurement ID override. Defaults to G-KNQDF95RGK (BaseLayout). Prod builds only. */
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
  /** Microsoft Clarity project ID override. Defaults to yqnio023pg (BaseLayout). Prod builds only. */
  readonly PUBLIC_CLARITY_PROJECT_ID?: string;
  /** Google Search Console HTML-tag verification token. Optional. */
  readonly PUBLIC_GSC_VERIFICATION?: string;
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
