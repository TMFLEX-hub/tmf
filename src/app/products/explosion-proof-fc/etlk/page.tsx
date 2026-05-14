import type { Metadata } from "next";
import { IndustrialProductPageView } from "@/components/industrial-product-page";
import { explosionProofEtlkContent } from "@/content/explosion-proof-products";
import { siteMetadata } from "@/content/site";

export const metadata: Metadata = {
  title: `${explosionProofEtlkContent.pageTitle} | ${siteMetadata.title}`,
  description: explosionProofEtlkContent.metaDescription,
};

export default function ExplosionProofEtlkPage() {
  return <IndustrialProductPageView content={explosionProofEtlkContent} />;
}
