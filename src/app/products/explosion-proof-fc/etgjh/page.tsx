import type { Metadata } from "next";
import { IndustrialProductPageView } from "@/components/industrial-product-page";
import { explosionProofEtgjhContent } from "@/content/explosion-proof-products";
import { siteMetadata } from "@/content/site";

export const metadata: Metadata = {
  title: `${explosionProofEtgjhContent.pageTitle} | ${siteMetadata.title}`,
  description: explosionProofEtgjhContent.metaDescription,
};

export default function ExplosionProofEtgjhPage() {
  return <IndustrialProductPageView content={explosionProofEtgjhContent} />;
}
