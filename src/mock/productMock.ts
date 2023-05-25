import { Genre } from "@/types/category.type";
import { Product } from "@/types/product.type";

export const productMock: Product = {
  id: "1",
  name: "Nike ZoomX Vaporfly",
  image: [
    "https://i.ibb.co/drCn3zV/20.jpg",
    "https://i.ibb.co/hVg9m7H/5-removebg-preview.png",
    "https://i.ibb.co/wpCZTFW/4-removebg-preview.png",
    "https://i.ibb.co/M8bBtrV/3-removebg-preview.png",
    "https://i.ibb.co/b36P0cK/2-removebg-preview.png",
  ],
  price: 100,
  category: {
    id: "1",
    name: Genre.hombre,
  },
  available: true,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt a eaque repellendus ipsam possimus! Quaerat et cumque nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia. Dolores natus voluptas ut reiciendis distinctio reprehenderit ducimus fugit laborum, nobis veritatis fuga provident unde. Natus id eius harum consectetur.",
  review: [
    {
      id: "1",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui",
      name: "andres",
    },
  ],
};
