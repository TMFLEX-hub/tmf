import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { CorrugatedNTypeSpecTable } from "@/components/corrugated-n-type-spec-table";
import { CorrugatedPTypeSpecTable } from "@/components/corrugated-p-type-spec-table";
import type { IndustrialProductDetailContent } from "@/content/corrugated-products";

type IndustrialProductPageProps = {
  content: IndustrialProductDetailContent;
};

export function IndustrialProductPageView({
  content,
}: IndustrialProductPageProps) {
  const {
    breadcrumb,
    hero,
    lead,
    featuresHeading,
    features,
    spec,
    gallery,
    datasheetPdf,
    listingMark,
  } = content;

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="w-full max-w-8xl mx-auto px-4 pt-6 sm:px-6 lg:px-16"
      >
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          {breadcrumb.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 ? (
                <ChevronRight
                  className="size-4 shrink-0 opacity-60"
                  aria-hidden
                />
              ) : null}
              {i < breadcrumb.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-foreground">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <section className="w-full max-w-8xl mx-auto px-4 py-10 sm:px-6 lg:px-16 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-3/3 w-full overflow-hidden rounded-2xl border border-border bg-muted/30">
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="min-w-0">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {hero.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant={hero.secondaryCta.variant ?? "outline"}
              >
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            </div>

            <div className="mt-12 space-y-6 border-t border-border pt-12 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-12">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                {featuresHeading}
              </h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            {gallery.length > 0 ? (
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {gallery.map((g) => (
                  <figure
                    key={g.imageSrc}
                    className="overflow-hidden rounded-xl border border-border bg-muted/20"
                  >
                    <div className="relative aspect-4/3 w-full">
                      <Image
                        src={g.imageSrc}
                        alt={g.imageAlt}
                        fill
                        className="object-contain p-3"
                        sizes="(max-width: 640px) 100vw, 240px"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="product-spec-heading"
        className="w-full border-t border-border bg-muted/20"
      >
        <div className="max-w-8xl mx-auto px-4 py-14 sm:px-6 lg:px-16 lg:py-20">
          <h2
            id="product-spec-heading"
            className="text-2xl font-semibold text-foreground sm:text-3xl"
          >
            {spec.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {spec.caption}
          </p>

          {listingMark || datasheetPdf ? (
            <div className="mt-8 flex flex-col gap-6 rounded-xl border border-border bg-background/70 p-6 sm:flex-row sm:items-center sm:justify-between">
              {listingMark ? (
                <div className="flex justify-center sm:justify-start">
                  <Image
                    src={listingMark.imageSrc}
                    alt={listingMark.imageAlt}
                    width={440}
                    height={176}
                    className="max-h-28 w-auto object-contain sm:max-h-32"
                  />
                </div>
              ) : null}
              {datasheetPdf ? (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full shrink-0 sm:w-auto"
                >
                  <a
                    href={datasheetPdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {datasheetPdf.label}
                  </a>
                </Button>
              ) : null}
            </div>
          ) : null}

          {spec.lists?.map((list) => (
            <div key={list.title} className="mt-10">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                {list.title}
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {list.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {spec.specMatrix === "n-type" ? (
            <div className="mt-8">
              <CorrugatedNTypeSpecTable />
            </div>
          ) : spec.specMatrix === "p-type" ? (
            <div className="mt-8">
              <CorrugatedPTypeSpecTable />
            </div>
          ) : null}
          <div className="mt-10 max-w-4xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {spec.footnotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
