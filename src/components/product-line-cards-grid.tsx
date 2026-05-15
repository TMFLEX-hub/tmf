import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ProductLineCard = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

type ProductLineCardsGridProps = {
  items: readonly ProductLineCard[];
};

export function ProductLineCardsGrid({ items }: ProductLineCardsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
      {items.map((product, index) => (
        <Link
          key={product.href}
          href={product.href}
          className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <div className="relative aspect-4/3 w-full overflow-hidden bg-muted/30">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index < 3}
              className="object-contain p-4 transition-transform duration-200 group-hover:scale-[1.02] sm:p-5"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">
              {product.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground">
              View product
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
