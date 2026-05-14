import { ProductLineCardsGrid } from "@/components/product-line-cards-grid";
import { corrugatedHoseSubproducts } from "@/content/corrugated-products";

export function CorrugatedSubproductCardsGrid() {
  return <ProductLineCardsGrid items={corrugatedHoseSubproducts} />;
}
