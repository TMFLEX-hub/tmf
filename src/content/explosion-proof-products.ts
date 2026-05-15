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

const sharedFootnotes = [
  "Custom lengths can be manufactured. Please consult your representative.",
  "*Due to ongoing product improvements, the information contained in this brochure may be modified. Therefore, the specifications may vary.",
] as const;

export const explosionProofBrochurePdf = {
  label: "Download Copleflex brochure (PDF)",
  href: "/pdf/tmf-copleflex-explosion-proof-flexible-coupling.pdf",
} as const;

export const explosionProofUlListingMark = {
  imageSrc: "/images/products/explosion-proof/ul-listed.webp",
  imageAlt: "UL Listed mark for Copleflex explosion proof flexible coupling",
} as const;

/** Main product photos for line cards on the explosion-proof overview page. */
const explosionProofCardImages = {
  etgjh: {
    imageSrc: "/images/products/explosion-proof/etgjh.jpg",
    imageAlt:
      "Copleflex ETGJH explosion proof flexible conduit with male NPT brass fittings",
  },
  etlk: {
    imageSrc: "/images/products/explosion-proof/etlk.jpg",
    imageAlt: "Copleflex ETLK explosion proof flexible coupling with union nut",
  },
  etgjhSs: {
    imageSrc: "/images/products/explosion-proof/etgjh-ss.jpg",
    imageAlt:
      "Copleflex ETGJH-SS all-stainless explosion proof flexible conduit",
  },
} as const;

/** Paragraph below the model title on ETGJH, ETLK, and ETGJH-SS pages. */
const explosionProofProductIntro =
  "Copleflex® is a flexible, explosionproof conduit coupling that conducts and protects electrical wiring in hazardous (classified) locations";

const etgjhLead = [
  {
    variant: "labeled" as const,
    label: "Main applications:",
    text: "Copleflex® is primarily used where a flexible component is required to accomplish difficult bends and/or to absorb vibration and movement of connected equipment in electrical conduit systems.",
  },
  "Copleflex® hermetic seal allows it to be installed in humid environments in the presence of liquids, dust, or gases. It is an essential component in refineries, gas and gasoline service stations, oil & gas platforms, emergency power plants, mines, etc.",
] as const;

const etgjhFeatures = [
  "Explosion proof, dust-ignition proof, waterproof.",
  "Corrugated metallic internal body that withstands explosive pressure (Class I) and mechanical abuse.",
  "Outer metallic braid provides continuous electrical path.",
  "Interior insulating liner prevents the formation of electrical arcs, protects against potential grounding caused by a short circuit in the lines, prevents flame propagation, and protects conductors from abrasion under vibration conditions.",
  "NPT fittings for tight, rigid joints and ground continuity.",
] as const;

const etgjhComplianceItems = [
  '½" Ø y ¾" Ø Clase I, Div. 1 & 2, Grupos A, B, C Y D',
  '1" Ø a 2" Ø Clase I, Div. 1 & 2, Grupos C Y D',
  "All diameters can be used in Class II, Division 1, Groups E, F, G.",
] as const;

export const explosionProofEtgjhContent = {
  slug: "etgjh",
  pageTitle: "Copleflex® ETGJH — Explosion Proof Flexible Conduit",
  metaDescription:
    "Copleflex® ETGJH flexible explosionproof conduit coupling — brass NPT ends, 300-series stainless corrugated core, brass braid, hermetic seal, and hazardous-location ratings.",
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
    imageAlt:
      "Copleflex ETGJH explosion proof flexible conduit with male NPT brass fittings",
    title: "Copleflex® model ETGJH",
    body: explosionProofProductIntro,
    primaryCta: contactCta,
    secondaryCta: explosionProofHubCta,
  },
  heroImageCaption: "Male NPT threaded connection on both outer ends.",
  lead: etgjhLead,
  featuresHeading: "Features",
  features: etgjhFeatures,
  spec: {
    heading: "Compliance & datasheet",
    lists: [
      {
        title: "Construction materials",
        items: [
          "NPT male threaded connections in forged brass.",
          "Flexible metal tubing in AISI 300 series stainless steel.",
          "Brass wire mesh.",
          "Insulating inner sheath.",
        ],
      },
      {
        title: "Compliance",
        items: [...etgjhComplianceItems],
      },
    ],
    footnotes: [...sharedFootnotes],
  },
  gallery: [],
  datasheetPdf: explosionProofBrochurePdf,
  listingMark: explosionProofUlListingMark,
} as const satisfies IndustrialProductDetailContent;

const etlkLead = [
  {
    variant: "labeled" as const,
    label: "Main applications:",
    text: "Copleflex® is primarily used where a flexible component is required to accomplish difficult bends and/or to absorb vibration and movement of connected equipment in electrical conduit systems.",
  },
  "Copleflex® hermetic seal allows it to be installed in humid environments in the presence of liquids, dust, or gases. It is an essential component in refineries, gas and gasoline service stations, oil & gas platforms, emergency power plants, mines, etc.",
] as const;

const etlkFeatures = [
  "Explosion proof, dust-ignition proof, waterproof.",
  "Corrugated metallic internal body that withstands explosive pressure (Class I) and mechanical abuse.",
  "Outer metallic braid provides continuous electrical path.",
  "Interior insulating liner prevents the formation of electrical arcs, protects against potential grounding caused by a short circuit in the lines, prevents flame propagation, and protects conductors from abrasion under vibration conditions.",
  "NPT fittings for tight, rigid joints and ground continuity.",
] as const;

const etlkComplianceItems = [
  '½" Ø y ¾" Ø Clase I, Div. 1 & 2, Grupos A, B, C Y D',
  '1" Ø a 2" Ø Clase I, Div. 1 & 2, Grupos C Y D',
  "All diameters can be used in Class II, Division 1, Groups E, F, G.",
  "Division 2, Groups F, G and Class III.",
] as const;

export const explosionProofEtlkContent = {
  slug: "etlk",
  pageTitle: "Copleflex® ETLK — Explosion Proof Flexible Coupling",
  metaDescription:
    "Copleflex® ETLK is built from ETGJH with an integrated UL explosionproof female union nut—copper-free aluminum union, forged brass male NPT, AISI 300-series stainless core, and brass braid.",
  breadcrumb: [
    { label: "Products", href: "/products" },
    {
      label: "Explosion Proof Flexible Conduit",
      href: "/products/explosion-proof-fc",
    },
    { label: "ETLK", href: "/products/explosion-proof-fc/etlk" },
  ],
  hero: {
    imageSrc: "/images/products/explosion-proof/etlk.jpg",
    imageAlt: "Copleflex ETLK explosion proof flexible coupling with union nut",
    title: "Copleflex® model ETLK",
    body: explosionProofProductIntro,
    primaryCta: contactCta,
    secondaryCta: explosionProofHubCta,
  },
  heroSlides: [
    {
      imageSrc: "/images/products/explosion-proof/etlk.jpg",
      imageAlt: "Copleflex ETLK explosion proof flexible coupling with union nut",
    },
    {
      imageSrc: "/images/products/explosion-proof/etlk-hero.webp",
      imageAlt: "Alternate view of Copleflex ETLK flexible coupling",
    },
  ],
  heroImageCaption:
    "The ETLK flexible coupling is made up of a Copleflex® model ETGJH and it has an integrated UL female union nut at one end that is explosionproof.",
  lead: etlkLead,
  featuresHeading: "Features",
  features: etlkFeatures,
  spec: {
    heading: "Compliance & datasheet",
    lists: [
      {
        title: "Construction materials",
        items: [
          "NPT male threaded connections in forged brass.",
          "NPT female threaded union nut: Copper-free aluminum.",
          "Flexible metal tubing in AISI 300 series stainless steel.",
          "Brass wire mesh.",
          "Insulating inner sleeve.",
        ],
      },
      {
        title: "Compliance",
        items: [...etlkComplianceItems],
      },
    ],
    footnotes: [...sharedFootnotes],
  },
  gallery: [],
  datasheetPdf: explosionProofBrochurePdf,
  listingMark: explosionProofUlListingMark,
} as const satisfies IndustrialProductDetailContent;

const etgjhSsLead = [
  {
    variant: "labeled" as const,
    label: "Main applications:",
    text: "Copleflex® is primarily used where a flexible component is required to accomplish difficult bends and/or to absorb vibration and movement of connected equipment in electrical conduit systems.",
  },
  "Copleflex® hermetic seal allows it to be installed in humid environments in the presence of liquids, dust, or gases. It is an essential component in refineries, gas and gasoline service stations, oil & gas platforms, emergency power plants, mines, etc.",
] as const;

const etgjhSsFeatures = [
  "Explosion proof, dust-ignition proof, waterproof.",
  "Corrugated metallic internal body that withstands explosive pressure (Class I) and mechanical abuse.",
  "Outer metallic braid provides continuous electrical path.",
  "Interior insulating liner prevents the formation of electrical arcs, protects against potential grounding caused by a short circuit in the lines, prevents flame propagation, and protects conductors from abrasion under vibration conditions.",
  "NPT fittings for tight, rigid joints and ground continuity.",
] as const;

const etgjhSsComplianceItems = [
  '½" Ø y ¾" Ø Clase I, Div. 1 & 2, Grupos A, B, C Y D',
  '1" Ø a 2" Ø Clase I, Div. 1 & 2, Grupos C Y D',
  "All diameters can be used in Class II, Division 1, Groups E, F, G.",
  "Division 2, Groups F, G, and Class III.",
] as const;

export const explosionProofEtgjhSsContent = {
  slug: "etgjh-ss",
  pageTitle:
    "Copleflex® ETGJH-SS — All-Stainless Explosion Proof Flexible Conduit",
  metaDescription:
    "Copleflex® ETGJH-SS explosionproof flexible conduit — AISI 300-series male NPT, corrugated stainless tubing, stainless mesh, insulating inner sleeve, and hazardous-location ratings.",
  breadcrumb: [
    { label: "Products", href: "/products" },
    {
      label: "Explosion Proof Flexible Conduit",
      href: "/products/explosion-proof-fc",
    },
    { label: "ETGJH-SS", href: "/products/explosion-proof-fc/etgjh-ss" },
  ],
  hero: {
    imageSrc: "/images/products/explosion-proof/etgjh-ss.jpg",
    imageAlt:
      "Copleflex ETGJH-SS all-stainless explosion proof flexible conduit",
    title: "Copleflex® model ETGJH-SS",
    body: explosionProofProductIntro,
    primaryCta: contactCta,
    secondaryCta: explosionProofHubCta,
  },
  heroSlides: [
    {
      imageSrc: "/images/products/explosion-proof/etgjh-ss.jpg",
      imageAlt:
        "Copleflex ETGJH-SS all-stainless explosion proof flexible conduit",
    },
    {
      imageSrc: "/images/products/explosion-proof/etgjh-ss-hero.webp",
      imageAlt:
        "Alternate view of Copleflex ETGJH-SS stainless flexible conduit",
    },
  ],
  heroImageCaption: "Male NPT threaded connection on both outer ends.",
  lead: etgjhSsLead,
  featuresHeading: "Features",
  features: etgjhSsFeatures,
  spec: {
    heading: "Compliance & datasheet",
    lists: [
      {
        title: "Construction materials",
        items: [
          "NPT male threaded connections in AISI 300 series.",
          "Flexible metal tubing in AISI 300 series stainless steel.",
          "Mesh made of AISI 300 series stainless steel.",
          "Insulating inner sleeve.",
        ],
      },
      {
        title: "Compliance",
        items: [...etgjhSsComplianceItems],
      },
    ],
    footnotes: [...sharedFootnotes],
  },
  gallery: [],
  datasheetPdf: explosionProofBrochurePdf,
  listingMark: explosionProofUlListingMark,
} as const satisfies IndustrialProductDetailContent;

export const explosionProofFcSubproducts = [
  {
    title: explosionProofEtgjhContent.pageTitle,
    href: "/products/explosion-proof-fc/etgjh",
    imageSrc: explosionProofCardImages.etgjh.imageSrc,
    imageAlt: explosionProofCardImages.etgjh.imageAlt,
    imageFit: "contain" as const,
    description:
      "Brass NPT ends, stainless corrugated core, and brass braid for classified locations.",
  },
  {
    title: explosionProofEtlkContent.pageTitle,
    href: "/products/explosion-proof-fc/etlk",
    imageSrc: explosionProofCardImages.etlk.imageSrc,
    imageAlt: explosionProofCardImages.etlk.imageAlt,
    imageFit: "contain" as const,
    description:
      "ETGJH-based coupling with an integrated UL explosionproof female union nut.",
  },
  {
    title: explosionProofEtgjhSsContent.pageTitle,
    href: "/products/explosion-proof-fc/etgjh-ss",
    imageSrc: explosionProofCardImages.etgjhSs.imageSrc,
    imageAlt: explosionProofCardImages.etgjhSs.imageAlt,
    imageFit: "contain" as const,
    description:
      "Full AISI 300-series stainless fittings, core, and braid for demanding environments.",
  },
] as const;
