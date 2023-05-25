import { products } from "@/data/products.data";
import { Product } from "@/types/product.type";

export const fetchProducts = (
  search: string,
  { genre, price }: { genre: string; price: number }
): Product[] => {
  let data: Product[];

  if (search !== "" && genre !== "all" && price !== 50) {
    data = products.filter(
      (product: Product) =>
        product.name.includes(search) &&
        product.category.name === genre &&
        product.price <= price
    );
  } else if (genre !== "all" && price !== 50) {
    data = products.filter(
      (product: Product) =>
        product.category.name === genre && product.price <= price
    );
  } else if (search !== "") {
    data = data = products.filter((product: Product) =>
      product.name.includes(search)
    );
  } else if (price !== 50) {
    data = products.filter((product: Product) => product.price <= price);
  } else if (genre !== "all") {
    data = products.filter(
      (product: Product) => product.category.name === genre
    );
  } else {
    data = products;
  }

  return data;
};
