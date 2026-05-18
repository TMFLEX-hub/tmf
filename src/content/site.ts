/** Central copy and navigation data for the site. */

export const siteMetadata = {
  title: "TMFlex",
  description:
    "TMFlex — engineered metal hose, interlocked hose, and explosion-proof flexible conduit for industrial applications.",
} as const;

export const navContent = {
  logoAlt: "Tubos Mexicanos Flexibles",
  homeAriaLabel: "Home",
  labels: {
    home: "Home",
    products: "Products",
    hoseAssemblies: "Hose assemblies",
    company: "Company",
  },
  /** First product link used in the static desktop nav fallback */
  staticProductsEntryHref: "/products/corrugated-hose",
  cta: {
    label: "Contact Us",
    href: "/#contact",
  },
  openMenuAriaLabel: "Open menu",
  sheetMenuTitle: "Menu",
  /**
   * Products dropdown: optional `items` nests links under the parent (e.g. N/P under Corrugated Hose).
   */
  productsNavItems: [
    {
      label: "Corrugated Hose",
      href: "/products/corrugated-hose",
      items: [
        {
          label: "N-Type Corrugated Metal Hose",
          href: "/products/corrugated-hose/n-type",
        },
        {
          label: "P-Type Corrugated Metal Hose",
          href: "/products/corrugated-hose/p-type",
        },
      ],
    },
    { label: "Interlocked Hose", href: "/products/interlocked-hose" },
    {
      label: "Explosion Proof Flexible Conduit",
      href: "/products/explosion-proof-fc",
      items: [
        {
          label: "Copleflex ETGJH",
          href: "/products/explosion-proof-fc/etgjh",
        },
        {
          label: "Copleflex ETLK",
          href: "/products/explosion-proof-fc/etlk",
        },
        {
          label: "Copleflex ETGJH-SS",
          href: "/products/explosion-proof-fc/etgjh-ss",
        },
      ],
    },
  ],
  companySubmenu: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Locations", href: "/locations" },
    { label: "Quality System", href: "/quality-system" },
  ],
} as const;

export const homeContent = {
  hero: {
    imageSrc: "/images/hero2.jpg",
    imageAlt: "Industrial hose and flexible tubing solutions",
    title: "Engineered Metal Hose & Flexible Hose Assemblies",
    body: "High-quality corrugated hose, interlocked hose, and explosion-proof flexible conduit for industrial and commercial applications.",
    primaryCta: { label: "Contact Us", href: "#contact" },
    secondaryCta: {
      label: "Explore Products",
      href: "/products",
      variant: "outline" as const,
    },
  },
} as const;

export const aboutContent = {
  subheading: "About us",
  title: "Engineering Flexibility Since 1957",
  paragraphs: [
    "TMFlex, LLC is the U.S. subsidiary of Tubos Mexicanos Flexibles (TMF), a manufacturer founded in 1957 with decades of expertise in flexible metal solutions.",
    "With two production plants in Mexico and a U.S. distribution center, we serve customers across North America and beyond with high-quality corrugated hose, interlocked hose, and explosion-proof conduit solutions.",
  ],
  cta: { label: "Learn More About TMFlex", href: "/about" },
} as const;

export const productsContent = {
  subheading: "Our products",
  title: "Our Products",
  exploreLabel: "Explore",
  items: [
    {
      title: "Corrugated Hose",
      href: "/products/corrugated-hose",
      imageSrc: "/images/N-TypeCorrugatedMetalHose.png",
      imageAlt: "Corrugated hose",
    },
    {
      title: "Interlocked Hose",
      href: "/products/interlocked-hose",
      imageSrc: "/images/interlocked.jpg",
      imageAlt: "Interlocked hose",
    },
    {
      title: "Explosion Proof Flexible Conduit",
      href: "/products/explosion-proof-fc",
      imageSrc: "/images/products/explosion-proof/etgjh.png",
      imageAlt: "Copleflex ETGJH explosion proof flexible conduit",
    },
  ],
} as const;

export const industriesContent = {
  subheading: "Industries we serve",
  title: "Industries We Support",
  body: "Our products are trusted by industries that require performance, compliance, and reliability in challenging operating conditions.",
  imageSrc: "/images/homepage-1.jpg",
  imageAlt: "Industries we serve",
  list: [
    "Oil & Gas",
    "Chemical & Petrochemical",
    "Power Generation",
    "HVAC & Mechanical Systems",
    "Industrial Manufacturing",
    "Infrastructure & Utilities",
  ],
} as const;

/** Icon keys mapped to Lucide components in `WhyTmflexSection` */
export const whyTmflexContent = {
  subheading: "Why TMFlex",
  title: "Why Partner with TMFlex?",
  reasons: [
    { text: "Nearly 70 Years of Manufacturing Experience", icon: "award" },
    { text: "International Production Capabilities", icon: "globe" },
    { text: "High-Quality Stainless-Steel Materials", icon: "layers" },
    { text: "Custom Fabrication & Assemblies", icon: "wrench" },
    { text: "U.S.-Based Distribution & Sales Support", icon: "truck" },
    {
      text: "Commitment to Quality & Industrial Standards",
      icon: "shieldCheck",
    },
  ],
} as const;

export type WhyTmflexIconKey =
  (typeof whyTmflexContent.reasons)[number]["icon"];

export const contactContent = {
  subheading: "Contact form",
  title: "Need a Reliable Flexible Metal Solution?",
  body: "Contact TMFlex today to discuss your application requirements or request a customized quote.",
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    companyLabel: "Company (optional)",
    companyPlaceholder: "Company name",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your application or quote request...",
    submitLabel: "Contact Us",
  },
} as const;

export const footerContent = {
  copyright: "TMF © 2026 Copyright. All rights reserved.",
} as const;

export const companyPagesContent = {
  about: {
    hero: {
      imageSrc: "/images/homepage-2.jpg",
      imageAlt: "About TMFlex",
      title: "About",
      body: "Decades of engineering experience, international production capabilities, and reliable distribution across North America.",
      primaryCta: { label: "Contact Us", href: "/#contact" },
      secondaryCta: {
        label: "View locations",
        href: "/locations",
        variant: "outline" as const,
      },
      heightClassName: "h-[420px] sm:h-[460px]",
    },
    title: "About",
    paragraphs: [
      "TMFlex, LLC is a subsidiary of Tubos Mexicanos Flexibles, S.A. de C.V. (TMF), founded in 1957 in Mexico. Formerly manufacturing innovative, exclusively designed flexible metal conduit for the domestic market, over time, the company incorporated specialized processes for the production of annular corrugated stainless-steel hose, highly valued for fluid transfer and vibration absorption across multiple industrial sectors.",
      "Today, TMF operates two production plants, four branches in Mexico, and a distribution center in the United States. It is one of the leading manufacturers of flexible metal conduit and stainless-steel corrugated hose, with sales in Mexico, the United States, Europe, and Latin America.",
      "With almost 70 years of experience in designing and manufacturing solutions that meet the demands of flexibility and vibration absorption, TMFlex offers a wide range of high-quality products for numerous industrial applications.",
    ],
  },
  careers: {
    hero: {
      imageSrc: "/images/hero2.jpg",
      imageAlt: "Careers at TMFlex",
      title: "Join Our Growing U.S. Team",
      body: "TMFlex is expanding across the United States and seeking experienced sales professionals to help drive our next phase of growth.",
      primaryCta: { label: "Apply Now", href: "mailto:tmflex@tmflex.com" },
      heightClassName: "h-[420px] sm:h-[460px]",
    },
    title: "Join Our Growing U.S. Team",
    intro: [
      "TMFlex is expanding its presence across the United States and is seeking experienced sales professionals to support our growth.",
      "We are looking for candidates with a strong background in:",
    ],
    list: [
      "Corrugated metal hose",
      "Flexible metallic conduit",
      "Stainless-steel hose assemblies",
      "Industrial product sales",
    ],
    outro:
      "If you understand the industry, know the market, and are passionate about building long-term customer relationships, we want to hear from you.",
    emailLabel: "Submit your résumé to:",
    email: "tmflex@tmflex.com",
  },
  locations: {
    hero: {
      imageSrc: "/images/hero2.jpg",
      imageAlt: "TMFlex locations",
      title: "Locations",
      body: "Production, warehousing, and sales support across the United States and Mexico.",
      primaryCta: { label: "Contact Us", href: "/#contact" },
      heightClassName: "h-[420px] sm:h-[460px]",
    },
    title: "Locations",
    mapSvgSrc: "/images/north-america.svg",
    mapAlt:
      "Map of North America showing TMFlex locations in the United States and Mexico",
    /** Matches `viewBox` on `public/images/north-america.svg` */
    mapViewBox: { width: 1000, height: 902 },
    groups: [
      {
        type: "US Warehouse",
        locations: [
          {
            title: "Magnolia, Texas",
            lines: [
              "331 Corporate Woods Dr, Suite I-1",
              "Magnolia, Texas 77354",
              "1 (281) 541-3070",
            ],
          },
        ],
      },
      {
        type: "US Sales Office",
        locations: [
          {
            title: "Cumming, Georgia",
            lines: ["5290 Matt Hwy, Suite 502", "PMB 204, Cumming, GA 30028"],
          },
        ],
      },
      {
        type: "Production Plants",
        locations: [
          { title: "Queretaro, Mexico", lines: [] },
          { title: "State of Mexico, Mexico", lines: [] },
        ],
      },
      {
        type: "Branches",
        locations: [
          { title: "Monterrey, Mexico", lines: [] },
          { title: "Guadalajara, Mexico", lines: [] },
          { title: "State of Mexico, Mexico", lines: [] },
          { title: "Puebla, Mexico", lines: [] },
          { title: "Queretaro, Mexico", lines: [] },
        ],
      },
    ],
    mapMarkers: [
      { label: "Texas", svgX: 708, svgY: 696 },
      { label: "Georgia", svgX: 788, svgY: 662 },
      { label: "Monterrey", svgX: 596, svgY: 708 },
      { label: "Queretaro", svgX: 528, svgY: 738 },
      { label: "State of Mexico", svgX: 526, svgY: 756 },
      { label: "Guadalajara", svgX: 494, svgY: 744 },
      { label: "Puebla", svgX: 546, svgY: 770 },
    ],
  },
  qualitySystem: {
    hero: {
      imageSrc: "/images/hero2.jpg",
      imageAlt: "TMFlex quality system and certifications",
      title: "Quality System",
      body: "Quality, safety, and compliance across our manufacturing operations and product lines — including our certifications.",
      primaryCta: { label: "Contact Us", href: "/#contact" },
      heightClassName: "h-[420px] sm:h-[460px]",
    },
    title: "Quality System",
    body: "TMFlex is committed to maintaining the highest standards of quality, safety, and compliance across our manufacturing and product lines.",
    certificatesHeading: "View Our Certificates:",
    /** Image + PDF pairs; PDFs live under `public/pdf/` */
    certificates: [
      {
        imageSrc: "/images/certificate1.png",
        pdfHref: "/pdf/Certificado_ISO_9001_2015_Vigente_2026.pdf",
        label: "ISO 9001:2015 certificate",
      },
      {
        imageSrc: "/images/certificate2.png",
        pdfHref: "/pdf/MMF_UL_Certificate.pdf",
        label: "MMF UL certificate",
      },
    ],
  },
} as const;

const productCategoryHeroSecondary = {
  label: "All products",
  href: "/products",
  variant: "outline" as const,
};

export const productCategoryHeroHeight = "h-[420px] sm:h-[460px]" as const;

export const productsLandingContent = {
  hero: {
    imageSrc: "/images/hero2.jpg",
    imageAlt: "TMFlex products",
    title: "Products",
    body: "Corrugated hose, interlocked hose, and explosion-proof flexible conduit for industrial and commercial applications.",
    primaryCta: { label: "Contact Us", href: "/#contact" },
    secondaryCta: {
      label: "Hose assemblies",
      href: "/hose-assemblies",
      variant: "outline" as const,
    },
    heightClassName: productCategoryHeroHeight,
  },
  introParagraphs: [
    "Browse our core product families below. Detailed specifications, comparison tables, and downloadable PDFs will be added as final content and datasheets are provided.",
  ],
} as const;

export const productCategoryContent = {
  corrugated: {
    hero: {
      imageSrc: "/images/N-TypeCorrugatedMetalHose.png",
      imageAlt: "Corrugated hose",
      title: "Corrugated Hose",
      body: "Annular and omega stainless-steel corrugated hose families for fluid transfer, vibration absorption, and demanding industrial service.",
      primaryCta: { label: "Contact Us", href: "/#contact" },
      secondaryCta: productCategoryHeroSecondary,
      heightClassName: productCategoryHeroHeight,
    },
    pageTitle: "Corrugated Hose",
    paragraphs: [
      "TMFlex corrugated metal hose is designed for applications that require flexibility, pressure capability, and reliable performance in challenging operating conditions.",
      "Select a product line below for specifications, features, and downloadable pressure or dimension charts from the manufacturer datasheet.",
    ],
    pendingSpecsBody:
      "Use the N-Type and P-Type product pages for features, imagery, and downloadable pressure charts.",
  },
  interlocked: {
    hero: {
      imageSrc: "/images/interlocked.jpg",
      imageAlt: "Interlocked hose",
      title: "Interlocked Hose",
      body: "Flexible interlocked metal hose solutions for conveyance, protection, and industrial routing applications.",
      primaryCta: { label: "Contact Us", href: "/#contact" },
      secondaryCta: productCategoryHeroSecondary,
      heightClassName: productCategoryHeroHeight,
    },
    pageTitle: "Interlocked Hose",
    paragraphs: [
      "Interlocked hose provides robust mechanical protection and flexibility for applications where a rugged metal conduit is required.",
      "Product-specific descriptions, tables, and downloads are pending. This placeholder will be replaced with finalized copy and structured specs when available.",
    ],
    pendingSpecsBody:
      "Technical tables and ordering data for interlocked hose products will be published in this section after final documentation is received.",
  },
  explosionProofFc: {
    hero: {
      imageSrc: "/images/products/explosion-proof/etgjh.png",
      imageAlt: "Copleflex ETGJH explosion proof flexible conduit",
      title: "Explosion Proof Flexible Conduit",
      body: "Copleflex® flexible conduit couplings for Class I, II, and III hazardous locations—brass and all-stainless models plus the ETLK union configuration.",
      primaryCta: { label: "Contact Us", href: "/#contact" },
      secondaryCta: productCategoryHeroSecondary,
      heightClassName: productCategoryHeroHeight,
    },
    pageTitle: "Explosion Proof Flexible Conduit",
    paragraphs: [
      "Copleflex® is a flexible, explosionproof conduit coupling that conducts and protects electrical wiring in classified locations, with corrugated stainless core, metallic braid, and insulating liner.",
      "Choose a model below for construction materials, hazardous-location ratings by trade size, and imagery. Use the brochure link on this page for overview, illustrations, and dimensional tables.",
    ],
    pendingSpecsBody: "",
  },
} as const;

export const hoseAssembliesContent = {
  hero: {
    imageSrc: "/images/hero2.jpg",
    imageAlt: "Hose assemblies",
    title: "Hose Assemblies",
    body: "Custom-fabricated hose assemblies backed by TMF manufacturing expertise and U.S.-based distribution support.",
    primaryCta: { label: "Contact Us", href: "/#contact" },
    secondaryCta: {
      label: "View products",
      href: "/products",
      variant: "outline" as const,
    },
    heightClassName: productCategoryHeroHeight,
  },
  title: "Hose Assemblies",
  paragraphs: [
    "TMFlex can support engineered hose assembly solutions tailored to your application requirements.",
    "Detailed assembly capabilities, configuration options, and technical content are pending from the client. This section will be updated when final copy and imagery are provided.",
  ],
} as const;
