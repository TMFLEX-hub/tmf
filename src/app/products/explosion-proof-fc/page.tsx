import type { Metadata } from "next";
import { ExplosionProofFcOverview } from "@/components/explosion-proof-fc-overview";
import { productCategoryContent, siteMetadata } from "@/content/site";

const { pageTitle, hero } = productCategoryContent.explosionProofFc;

export const metadata: Metadata = {
  title: `${pageTitle} | ${siteMetadata.title}`,
  description: hero.body,
};

export default function ExplosionProofFcPage() {
  return <ExplosionProofFcOverview />;
}
