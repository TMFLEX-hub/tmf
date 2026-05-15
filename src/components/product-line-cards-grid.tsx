import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProductLineCard = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  /** Default `cover`. Use `contain` for product photos that should not be cropped. */
  imageFit?: "cover" | "contain";
};

type ProductLineCardsGridProps = {
  items: readonly ProductLineCard[];
};

export function ProductLineCardsGrid({ items }: ProductLineCardsGridProps) {
  return (
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
      {items.map((product) => (
        <Link
          key={product.href}
          href={product.href}
          className={cn(
            "group relative flex aspect-5/3 overflow-hidden rounded-2xl transition-shadow duration-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:aspect-4/3",
            product.imageFit === "contain" && "bg-muted/30",
          )}
        >
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            className={cn(
              "transition-transform duration-200 group-hover:scale-105",
              product.imageFit === "contain"
                ? "object-contain p-4 sm:p-6"
                : "object-cover",
            )}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 flex max-w-[min(100%,28rem)] flex-col justify-end gap-1 rounded-tr-2xl bg-white p-5 sm:p-6">
            <Image
              src="/images/corner.svg"
              alt=""
              width={160}
              height={160}
              className="absolute -right-4 bottom-0 size-4 sm:-right-8 sm:size-8"
              aria-hidden
            />
            <Image
              src="/images/corner.svg"
              alt=""
              width={160}
              height={160}
              className="absolute left-0 -top-4 size-4 sm:-top-8 sm:size-8"
              aria-hidden
            />
            <h3 className="text-lg font-semibold text-black sm:text-xl">
              {product.title}
            </h3>
            <p className="text-sm leading-snug text-muted-foreground">
              {product.description}
            </p>
            <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-black">
              View product
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
