import Image from "next/image";
import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { PageRichTextSection } from "@/components/page-rich-text-section";
import { ProductLineCardsGrid } from "@/components/product-line-cards-grid";
import { Button } from "@/components/ui/button";
import {
  explosionProofBrochurePdf,
  explosionProofFcSubproducts,
  explosionProofUlListingMark,
} from "@/content/explosion-proof-products";
import { productCategoryContent } from "@/content/site";

export function ExplosionProofFcOverview() {
  const content = productCategoryContent.explosionProofFc;

  return (
    <>
      <Hero {...content.hero} />
      <PageRichTextSection
        title={content.pageTitle}
        paragraphs={content.paragraphs}
      />
      <section className="w-full max-w-8xl mx-auto px-4 pb-10 sm:px-6 lg:px-16">
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-muted/20 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex shrink-0 justify-center sm:justify-start">
              <Image
                src={explosionProofUlListingMark.imageSrc}
                alt={explosionProofUlListingMark.imageAlt}
                width={440}
                height={176}
                className="max-h-28 w-auto object-contain sm:max-h-32"
              />
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Product overview, illustrations, and dimensional tables for the
              Copleflex® explosion proof flexible coupling line are available in
              the printable brochure.
            </p>
          </div>
          <Button asChild size="lg" className="w-full shrink-0 sm:w-auto">
            <a
              href={explosionProofBrochurePdf.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {explosionProofBrochurePdf.label}
            </a>
          </Button>
        </div>
      </section>
      <section className="w-full max-w-8xl mx-auto px-4 pb-16 sm:px-6 lg:px-16 lg:pb-24">
        <header className="mb-8 lg:mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Product lines
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Copleflex® explosion proof flexible conduit
          </h2>
        </header>
        <ProductLineCardsGrid items={explosionProofFcSubproducts} />
      </section>
      <ContactSection />
    </>
  );
}
