"use client";

import Container from "@/components/Container";
import CardProduct from "./product/components/CardProduct";
import Grid from "./product/components/Grid";
import { Product } from "@/types/product.type";
import FilterBar from "./product/components/FilterBar";
import { fetchProducts } from "@/services/fetchProducts";
import { useAppSelector } from "@/redux/hook";

export default function Home() {
  const search = useAppSelector((state) => state.search.value);
  const { genre, price } = useAppSelector((state) => state.filter);

  const products = fetchProducts(search, { genre, price });

  return (
    <Container>
      <FilterBar />
      <Grid>
        {products.map((product: Product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
}
