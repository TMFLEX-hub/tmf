/** Corrugated hose sub-products (from TMF N / P Metal Hoses spec copy). */

import type { HeroCta } from "@/components/hero";

export type ProductBreadcrumbItem = { label: string; href: string };

export type IndustrialProductDetailContent = {
  slug: string;
  pageTitle: string;
  metaDescription: string;
  breadcrumb: readonly ProductBreadcrumbItem[];
  hero: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    body: string;
    primaryCta: HeroCta;
    secondaryCta: HeroCta;
  };
  lead: readonly string[];
  featuresHeading: string;
  features: readonly string[];
  spec: {
    heading: string;
    footnotes: readonly string[];
    /** Renders built-in HTML matrix for N-type or P-type datasheet. */
    specMatrix?: "n-type" | "p-type";
    /** Optional titled bullet lists (e.g. construction + compliance when no matrix). */
    lists?: readonly { title: string; items: readonly string[] }[];
  };
  gallery: readonly { imageSrc: string; imageAlt: string }[];
  /** Optional brochure link shown in the spec section (e.g. explosion-proof lines). */
  datasheetPdf?: { label: string; href: string };
  /** Optional certification / listing mark image beside the datasheet link. */
  listingMark?: { imageSrc: string; imageAlt: string };
};

const contactCta = {
  label: "Contact Us",
  href: "/#contact",
} as const;

const corrugatedHubCta = {
  label: "Corrugated hose overview",
  href: "/products/corrugated-hose",
  variant: "outline" as const,
};

export const corrugatedNTypeContent = {
  slug: "n-type",
  pageTitle: "N-Type Stainless Steel Corrugated Metal Hose",
  metaDescription:
    "TMF N-type stainless steel corrugated metal hose — annular butt-welded hydroformed hose with standard pitch corrugations and stainless braid.",
  breadcrumb: [
    { label: "Products", href: "/products" },
    { label: "Corrugated hose", href: "/products/corrugated-hose" },
    { label: "N-Type", href: "/products/corrugated-hose/n-type" },
  ],
  hero: {
    imageSrc: "/images/N-TypeCorrugatedMetalHose.webp",
    imageAlt:
      "N-type stainless steel corrugated metal hose with stainless braid",
    title: "N-Type Stainless Steel Corrugated Metal Hose",
    body: "321 or 316L annular butt-welded hydroformed hose with standard pitch corrugations — engineered for flexibility across pressure ranges with 300-series stainless braid.",
    primaryCta: contactCta,
    secondaryCta: corrugatedHubCta,
  },
  lead: [
    "TMF’s N-type SS corrugated metal hose is a 321 or 316L annular butt-welded hydroformed hose with standard pitch corrugations, that provide flexibility for different pressure ranges. The braid is made of 300-series stainless steel.",
  ],
  featuresHeading: "Features",
  features: [
    "Versatile and reliable fluid handling across a broad spectrum of applications and environments.",
    "Air tight design with the flexibility and durability expected in industrial service.",
  ],
  spec: {
    heading: "Pressure ratings & dimensions",
    specMatrix: "n-type",
    footnotes: [
      "Pressures listed may vary depending on assembly methods and are subject to a specific welding procedure. Other methods such as brazing, crimping or mechanical clamping may result in different pressures. Multiple braids can be added on request. Consult our technical department.",
      "Considering the constant improvement of our products, the information contained in this spec sheet may be subject to change without previous notice.",
    ],
  },
  gallery: [
    {
      imageSrc: "/images/products/corrugated/corrugated-n-type-2.png",
      imageAlt: "Additional view of N-type corrugated metal hose construction",
    },
  ],
} as const satisfies IndustrialProductDetailContent;

export const corrugatedPTypeContent = {
  slug: "p-type",
  pageTitle: "P-Type Stainless Steel Corrugated Metal Hose",
  metaDescription:
    "TMF P-type stainless steel corrugated metal hose — omega butt-welded hydroformed hose with closed pitch corrugations and stainless braid.",
  breadcrumb: [
    { label: "Products", href: "/products" },
    { label: "Corrugated hose", href: "/products/corrugated-hose" },
    { label: "P-Type", href: "/products/corrugated-hose/p-type" },
  ],
  hero: {
    imageSrc: "/images/P-TypeCorrugatedMetalHose.webp",
    imageAlt:
      "P-type stainless steel corrugated metal hose with stainless braid",
    title: "P-Type Stainless Steel Corrugated Metal Hose",
    body: "321 or 316L omega butt-welded hydroformed hose with closed pitch corrugations — high flexibility with 300-series stainless braid.",
    primaryCta: contactCta,
    secondaryCta: corrugatedHubCta,
  },
  lead: [
    "TMF’s P-type SS corrugated metal hose is a 321 or 316L omega butt-welded hydroformed hose with closed pitch corrugations, that provide flexibility for different pressure ranges. The braid is made of 300-series stainless steel.",
  ],
  featuresHeading: "Features",
  features: [
    "Versatile and reliable fluid handling across a broad spectrum of applications and environments.",
    "Air tight design with closed pitch corrugations for superior flexibility and durability.",
  ],
  spec: {
    heading: "Pressure ratings & dimensions",
    specMatrix: "p-type",
    footnotes: [
      "Pressures listed may vary depending on assembly methods and are subject to a specific welding procedure. Other methods such as brazing, crimping or mechanical clamping may result in different pressures. Consult our technical department.",
      "Multiple braids can be added on request. Consult our technical department.",
      "Considering the constant improvement of our products, the information contained in this spec sheet may be subject to change without previous notice.",
    ],
  },
  gallery: [],
} as const satisfies IndustrialProductDetailContent;

export const corrugatedHoseSubproducts = [
  {
    title: corrugatedNTypeContent.pageTitle,
    href: "/products/corrugated-hose/n-type",
    imageSrc: corrugatedNTypeContent.hero.imageSrc,
    imageAlt: corrugatedNTypeContent.hero.imageAlt,
    description:
      "Annular butt-welded hydroformed hose with standard pitch corrugations.",
  },
  {
    title: corrugatedPTypeContent.pageTitle,
    href: "/products/corrugated-hose/p-type",
    imageSrc: corrugatedPTypeContent.hero.imageSrc,
    imageAlt: corrugatedPTypeContent.hero.imageAlt,
    description:
      "Omega butt-welded hydroformed hose with closed pitch corrugations.",
  },
] as const;
