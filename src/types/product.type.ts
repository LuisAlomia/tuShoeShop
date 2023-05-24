import { Category } from "./category.type";

export type Product = {
  id: string;
  name: string;
  image: string[];
  price: number;
  category: Category;
  description: string;
};
