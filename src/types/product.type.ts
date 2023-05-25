import { Category } from "./category.type";
import { Review } from "./review.type";

export type Product = {
  id: string;
  name: string;
  image: string[];
  price: number;
  available: boolean;
  category: Category;
  description: string;
  review: Review[];
};
