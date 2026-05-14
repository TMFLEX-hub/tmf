import type { Metadata } from "next";
import { IndustrialProductPageView } from "@/components/industrial-product-page";
import { explosionProofEtgjhSsContent } from "@/content/explosion-proof-products";
import { siteMetadata } from "@/content/site";

export const metadata: Metadata = {
  title: `${explosionProofEtgjhSsContent.pageTitle} | ${siteMetadata.title}`,
  description: explosionProofEtgjhSsContent.metaDescription,
};

export default function ExplosionProofEtgjhSsPage() {
  return <IndustrialProductPageView content={explosionProofEtgjhSsContent} />;
}
