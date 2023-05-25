import { Product } from "@/types/product.type";
import { products } from "@/data/products.data";

export const fectchProductById = (id: string): Product | null => {
  const product = products.find((product: Product) => product.name === id);

  if (product === undefined) {
    return null;
  }

  return product;
};
