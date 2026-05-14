/** Copleflex® explosion-proof flexible conduit / coupling (ETGJH, ETLK, ETGJH-SS). */

import type { IndustrialProductDetailContent } from "@/content/corrugated-products";

const contactCta = {
  label: "Contact Us",
  href: "/#contact",
} as const;

const explosionProofHubCta = {
  label: "Explosion proof conduit overview",
  href: "/products/explosion-proof-fc",
  variant: "outline" as const,
};

const sharedLead = [
  "Copleflex® is a flexible, explosionproof conduit coupling that conducts and protects electrical wiring in hazardous (classified) locations.",
  "It is primarily used where a flexible component is required for difficult bends and to absorb vibration and movement of connected equipment in electrical conduit systems. The hermetic seal supports humid environments with liquids, dust, or gases—common in refineries, fueling stations, oil and gas facilities, emergency power plants, mines, and similar installations.",
] as const;

const sharedFeatureBullets = [
  "Explosion proof, dust-ignition proof, and waterproof.",
  "Corrugated metallic internal body rated to withstand explosive pressure (Class I) and mechanical abuse.",
  "Outer metallic braid provides a continuous electrical path.",
  "Interior insulating liner helps prevent electrical arcs, limits grounding risk from short circuits, limits flame propagation, and protects conductors from abrasion under vibration.",
  "NPT fittings for tight, rigid joints and ground continuity.",
] as const;

const sharedComplianceItems = [
  "½″ and ¾″ trade sizes: Class I, Division 1 and 2, Groups A, B, C, and D.",
  "1″ through 2″ trade sizes: Class I, Division 1 and 2, Groups C and D.",
  "All sizes may also be installed in Class II, Division 1, Groups E, F, and G; Class II, Division 2, Groups F and G; and Class III locations.",
] as const;

const sharedFootnotes = [
  "Custom lengths are available—consult your TMFlex representative.",
  "Due to ongoing product improvements, specifications may change without notice.",
] as const;

export const explosionProofBrochurePdf = {
  label: "Download Copleflex brochure (PDF)",
  href: "/pdf/tmf-copleflex-explosion-proof-flexible-coupling.pdf",
} as const;

export const explosionProofUlListingMark = {
  imageSrc: "/images/products/explosion-proof/ul-listed.webp",
  imageAlt: "UL Listed mark for Copleflex explosion proof flexible coupling",
} as const;

const specCaption =
  "Hazardous-location groupings depend on conduit trade size. For product overview, illustrations, and dimensional tables, use the manufacturer brochure (PDF). Contact TMFlex for the latest revision or application-specific guidance.";

export const explosionProofEtgjhContent = {
  slug: "etgjh",
  pageTitle: "Copleflex® ETGJH — Explosion Proof Flexible Conduit",
  metaDescription:
    "Copleflex® ETGJH flexible explosionproof conduit coupling — brass NPT ends, 300-series stainless corrugated core, brass braid, and hazardous-location ratings.",
  breadcrumb: [
    { label: "Products", href: "/products" },
    {
      label: "Explosion Proof Flexible Conduit",
      href: "/products/explosion-proof-fc",
    },
    { label: "ETGJH", href: "/products/explosion-proof-fc/etgjh" },
  ],
  hero: {
    imageSrc: "/images/products/explosion-proof/etgjh.jpg",
    imageAlt: "Copleflex ETGJH explosion proof flexible conduit with male NPT brass fittings",
    title: "Copleflex® model ETGJH",
    body: "Flexible explosionproof conduit coupling with forged brass male NPT on both ends, 300-series stainless corrugated core, and brass wire mesh braid.",
    primaryCta: contactCta,
    secondaryCta: explosionProofHubCta,
  },
  lead: sharedLead,
  featuresHeading: "Features",
  features: [
    ...sharedFeatureBullets,
    "Male NPT threaded connection on both outer ends.",
  ],
  spec: {
    heading: "Compliance & datasheet",
    caption: specCaption,
    lists: [
      {
        title: "Construction materials",
        items: [
          "NPT male threaded connections: forged brass.",
          "Flexible metal tubing: AISI 300-series stainless steel.",
          "Braid: brass wire mesh.",
          "Inner layer: insulating sheath.",
        ],
      },
      {
        title: "Hazardous location ratings",
        items: [...sharedComplianceItems],
      },
    ],
    footnotes: [...sharedFootnotes],
  },
  gallery: [],
  datasheetPdf: explosionProofBrochurePdf,
  listingMark: explosionProofUlListingMark,
} as const satisfies IndustrialProductDetailContent;

export const explosionProofEtlkContent = {
  slug: "etlk",
  pageTitle: "Copleflex® ETLK — Explosion Proof Flexible Coupling",
  metaDescription:
    "Copleflex® ETLK combines ETGJH flexible conduit with an integrated UL explosionproof female union nut—copper-free aluminum union, brass male NPT, stainless core.",
  breadcrumb: [
    { label: "Products", href: "/products" },
    {
      label: "Explosion Proof Flexible Conduit",
      href: "/products/explosion-proof-fc",
    },
    { label: "ETLK", href: "/products/explosion-proof-fc/etlk" },
  ],
  hero: {
    imageSrc: "/images/products/explosion-proof/etlk-hero.webp",
    imageAlt: "Copleflex ETLK explosion proof flexible coupling with union nut",
    title: "Copleflex® model ETLK",
    body: "ETGJH-based flexible coupling with an integrated UL-listed explosionproof female union nut at one end for faster, compliant terminations.",
    primaryCta: contactCta,
    secondaryCta: explosionProofHubCta,
  },
  lead: sharedLead,
  featuresHeading: "Features",
  features: [
    ...sharedFeatureBullets,
    "The ETLK flexible coupling is built on Copleflex® model ETGJH with an integrated UL-listed explosionproof female union nut at one end.",
  ],
  spec: {
    heading: "Compliance & datasheet",
    caption: specCaption,
    lists: [
      {
        title: "Construction materials",
        items: [
          "NPT male threaded connections: forged brass.",
          "NPT female threaded union nut: copper-free aluminum.",
          "Flexible metal tubing: AISI 300-series stainless steel.",
          "Braid: brass wire mesh.",
          "Inner layer: insulating sleeve.",
        ],
      },
      {
        title: "Hazardous location ratings",
        items: [...sharedComplianceItems],
      },
    ],
    footnotes: [...sharedFootnotes],
  },
  gallery: [
    {
      imageSrc: "/images/products/explosion-proof/etlk.jpg",
      imageAlt: "Alternate view of Copleflex ETLK flexible coupling",
    },
  ],
  datasheetPdf: explosionProofBrochurePdf,
  listingMark: explosionProofUlListingMark,
} as const satisfies IndustrialProductDetailContent;

export const explosionProofEtgjhSsContent = {
  slug: "etgjh-ss",
  pageTitle: "Copleflex® ETGJH-SS — All-Stainless Explosion Proof Flexible Conduit",
  metaDescription:
    "Copleflex® ETGJH-SS explosionproof flexible conduit — AISI 300-series stainless NPT fittings, corrugated core, stainless mesh, and hazardous-location ratings.",
  breadcrumb: [
    { label: "Products", href: "/products" },
    {
      label: "Explosion Proof Flexible Conduit",
      href: "/products/explosion-proof-fc",
    },
    { label: "ETGJH-SS", href: "/products/explosion-proof-fc/etgjh-ss" },
  ],
  hero: {
    imageSrc: "/images/products/explosion-proof/etgjh-ss-hero.webp",
    imageAlt: "Copleflex ETGJH-SS all-stainless explosion proof flexible conduit",
    title: "Copleflex® model ETGJH-SS",
    body: "All–300-series stainless construction—male NPT fittings, corrugated tubing, and braid—for corrosive or washdown-heavy environments.",
    primaryCta: contactCta,
    secondaryCta: explosionProofHubCta,
  },
  lead: sharedLead,
  featuresHeading: "Features",
  features: [
    ...sharedFeatureBullets,
    "Male NPT threaded connection on both outer ends.",
  ],
  spec: {
    heading: "Compliance & datasheet",
    caption: specCaption,
    lists: [
      {
        title: "Construction materials",
        items: [
          "NPT male threaded connections: AISI 300-series stainless steel.",
          "Flexible metal tubing: AISI 300-series stainless steel.",
          "Braid: AISI 300-series stainless steel mesh.",
          "Inner layer: insulating sleeve.",
        ],
      },
      {
        title: "Hazardous location ratings",
        items: [...sharedComplianceItems],
      },
    ],
    footnotes: [...sharedFootnotes],
  },
  gallery: [
    {
      imageSrc: "/images/products/explosion-proof/etgjh-ss.jpg",
      imageAlt: "Alternate view of Copleflex ETGJH-SS stainless flexible conduit",
    },
  ],
  datasheetPdf: explosionProofBrochurePdf,
  listingMark: explosionProofUlListingMark,
} as const satisfies IndustrialProductDetailContent;

export const explosionProofFcSubproducts = [
  {
    title: explosionProofEtgjhContent.pageTitle,
    href: "/products/explosion-proof-fc/etgjh",
    imageSrc: explosionProofEtgjhContent.hero.imageSrc,
    imageAlt: explosionProofEtgjhContent.hero.imageAlt,
    description:
      "Brass NPT ends, stainless corrugated core, and brass braid for classified locations.",
  },
  {
    title: explosionProofEtlkContent.pageTitle,
    href: "/products/explosion-proof-fc/etlk",
    imageSrc: explosionProofEtlkContent.hero.imageSrc,
    imageAlt: explosionProofEtlkContent.hero.imageAlt,
    description:
      "ETGJH-based coupling with an integrated UL explosionproof female union nut.",
  },
  {
    title: explosionProofEtgjhSsContent.pageTitle,
    href: "/products/explosion-proof-fc/etgjh-ss",
    imageSrc: explosionProofEtgjhSsContent.hero.imageSrc,
    imageAlt: explosionProofEtgjhSsContent.hero.imageAlt,
    description:
      "Full AISI 300-series stainless fittings, core, and braid for demanding environments.",
  },
] as const;
