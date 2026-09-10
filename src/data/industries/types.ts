/**
 * Shared types for the /industries/ sub pages.
 *
 * Each industry page is fully data-driven: a page data object
 * (seo / banner / ordered sections / closing CTA) is rendered by
 * src/components/IndustryPage.astro. Copy lives verbatim in the per-page
 * data files under src/data/industries/.
 *
 * Section types mirror the multi-family-management-companies.astro template:
 *   - split     → SplitPanel pattern (about.astro §2) — white/light/panel/black
 *   - accordion → dark bg-image band + accordion (industry.astro §2)
 *   - slider    → 3 full-bleed photo columns (industry.astro §3)
 */

export type SplitBackground = 'white' | 'light' | 'panel' | 'black';

export interface SplitSection {
  type: 'split';
  eyebrow?: string;
  title: string;
  body: string[];
  image: string;
  imageAlt: string;
  background?: SplitBackground;
  reverse?: boolean;
  cta?: { label: string; href: string } | null;
}

export interface AccordionSection {
  type: 'accordion';
  eyebrow: string;
  title: string;
  /** Left-column intro paragraph. */
  intro: string;
  /** Background photo behind the dark band. */
  bgImage: string;
  panels: { title: string; body: string; open?: boolean }[];
}

export interface SliderSection {
  type: 'slider';
  eyebrow: string;
  title: string;
  panels: { number: string; title: string; body: string; image: string }[];
}

export type IndustrySection = SplitSection | AccordionSection | SliderSection;

export interface IndustryPageData {
  seo: {
    title: string;
    description: string;
  };
  banner: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  /** Rendered in order between the banner and the closing CTA. */
  sections: IndustrySection[];
  cta: {
    backgroundImage: string;
    paragraphs: string[];
    flipBackground?: boolean;
  };
}