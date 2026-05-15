"use client";

import Image from "next/image";
import { useCallback, useId, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type HeroCarouselSlide = {
  imageSrc: string;
  imageAlt: string;
};

type IndustrialHeroCarouselProps = {
  slides: readonly HeroCarouselSlide[];
  /** Passed through to next/image `sizes`. */
  sizes: string;
};

export function IndustrialHeroCarousel({
  slides,
  sizes,
}: IndustrialHeroCarouselProps) {
  const id = useId();
  const labelId = `${id}-label`;
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const safeIndex = ((index % count) + count) % count;
  const slide = slides[safeIndex]!;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const next = i + delta;
        return ((next % count) + count) % count;
      });
    },
    [count],
  );

  return (
    <div
      className="relative aspect-3/3 w-full overflow-hidden rounded-2xl border border-border bg-muted/30"
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
    >
      <p id={labelId} className="sr-only">
        Product images, slide {safeIndex + 1} of {count}
      </p>

      <div
        className="relative size-full"
        aria-live="polite"
        aria-atomic="true"
      >
        <Image
          key={slide.imageSrc}
          src={slide.imageSrc}
          alt={slide.imageAlt}
          fill
          className="object-contain p-2 sm:p-4"
          sizes={sizes}
          priority={safeIndex === 0}
        />
      </div>

      {count > 1 ? (
        <>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute left-2 top-1/2 z-10 size-9 -translate-y-1/2 rounded-full border border-border bg-background/90 shadow-sm backdrop-blur-sm sm:left-3 sm:size-10"
            onClick={() => go(-1)}
            aria-label="Previous image"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute right-2 top-1/2 z-10 size-9 -translate-y-1/2 rounded-full border border-border bg-background/90 shadow-sm backdrop-blur-sm sm:right-3 sm:size-10"
            onClick={() => go(1)}
            aria-label="Next image"
          >
            <ChevronRight className="size-5" aria-hidden />
          </Button>

          <div
            className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2"
            role="tablist"
            aria-label="Choose slide"
          >
            {slides.map((s, i) => (
              <button
                key={s.imageSrc}
                type="button"
                role="tab"
                aria-selected={i === safeIndex}
                aria-label={`Show image ${i + 1}`}
                className={cn(
                  "size-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  i === safeIndex
                    ? "bg-foreground"
                    : "bg-muted-foreground/45 hover:bg-muted-foreground/70",
                )}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
