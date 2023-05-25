import { Genre } from "@/types/category.type";
import { Product } from "@/types/product.type";

export const products: Product[] = [
  {
    id: "1",
    name: "nike zoomX vaporfly",
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
        name: "calor",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
      {
        id: "2",
        name: "luis",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
      {
        id: "3",
        name: "andres",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
    ],
  },
  {
    id: "2",
    name: "sion 1 sp",
    image: [
      "https://i.ibb.co/1JgMKsv/1-removebg-preview.png",
      "https://i.ibb.co/X2K6pnc/2-removebg-preview.png",
    ],
    price: 300,
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
        name: "calor",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
      {
        id: "2",
        name: "mateo",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
    ],
  },
  {
    id: "3",
    name: "nike pegasus trial 3 gore-tex",
    image: [
      "https://i.ibb.co/wMHHHFy/8.jpg",
      "https://i.ibb.co/yBTXGcZ/5-removebg-preview.png",
      "https://i.ibb.co/b2VCJqc/4-removebg-preview.png",
      "https://i.ibb.co/LJqxHyR/3-removebg-preview.png",
      "https://i.ibb.co/svqS3zr/2-removebg-preview.png",
    ],
    price: 230,
    category: {
      id: "1",
      name: Genre.mujer,
    },
    available: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt a eaque repellendus ipsam possimus! Quaerat et cumque nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia. Dolores natus voluptas ut reiciendis distinctio reprehenderit ducimus fugit laborum, nobis veritatis fuga provident unde. Natus id eius harum consectetur.",
    review: [
      {
        id: "1",
        name: "lola",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
      {
        id: "2",
        name: "samanta",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
    ],
  },
  {
    id: "4",
    name: "nike court zoom NXT",
    image: [
      "https://i.ibb.co/Rg5ZbKp/17.jpg",
      "https://i.ibb.co/3Yw9Df0/4-removebg-preview.png",
      "https://i.ibb.co/m8w64Gp/3-removebg-preview.png",
      "https://i.ibb.co/s1KXDsT/2-removebg-preview.png",
    ],
    price: 140,
    category: {
      id: "1",
      name: Genre.mujer,
    },
    available: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt a eaque repellendus ipsam possimus! Quaerat et cumque nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia. Dolores natus voluptas ut reiciendis distinctio reprehenderit ducimus fugit laborum, nobis veritatis fuga provident unde. Natus id eius harum consectetur.",
    review: [
      {
        id: "1",
        name: "carla",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
    ],
  },
  {
    id: "5",
    name: "nike air vaporMax plus",
    image: [
      "https://i.ibb.co/DpvK7d3/15.jpg",
      "https://i.ibb.co/4Frp8xx/4-removebg-preview.png",
      "https://i.ibb.co/ZgVgQX7/3-removebg-preview.png",
      "https://i.ibb.co/fYLM9jn/2-removebg-preview.png",
    ],
    price: 99,
    category: {
      id: "1",
      name: Genre.mujer,
    },
    available: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt a eaque repellendus ipsam possimus! Quaerat et cumque nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia. Dolores natus voluptas ut reiciendis distinctio reprehenderit ducimus fugit laborum, nobis veritatis fuga provident unde. Natus id eius harum consectetur.",
    review: [
      {
        id: "1",
        name: "carolina",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
      {
        id: "2",
        name: "diana",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
      {
        id: "3",
        name: "isabella",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
    ],
  },
  {
    id: "6",
    name: "nike zoomX invincible run flyknit",
    image: [
      "https://i.ibb.co/bzrgHqx/10.jpg",
      "https://i.ibb.co/85KLsNh/5-removebg-preview.png",
      "https://i.ibb.co/ZY95t04/4-removebg-preview.png",
      "https://i.ibb.co/c8jJ6Tg/3-removebg-preview.png",
      "https://i.ibb.co/smjy2Cd/2-removebg-preview.png",
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
        name: "calor",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
      {
        id: "2",
        name: "sebastian",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
      {
        id: "3",
        name: "felipe",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
    ],
  },
  {
    id: "7",
    name: "nike air force 1 react",
    image: [
      "https://i.ibb.co/qywFWgs/5.jpg",
      "https://i.ibb.co/98kHBq7/3-removebg-preview.png",
      "https://i.ibb.co/7yf6rNT/2-removebg-preview.png",
    ],
    price: 140,
    category: {
      id: "1",
      name: Genre.hombre,
    },
    available: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt a eaque repellendus ipsam possimus! Quaerat et cumque nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia. Dolores natus voluptas ut reiciendis distinctio reprehenderit ducimus fugit laborum, nobis veritatis fuga provident unde. Natus id eius harum consectetur.",
    review: [
      {
        id: "1",
        name: "camilo",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
    ],
  },
  {
    id: "8",
    name: "kyrie flytrap 5",
    image: [
      "https://i.ibb.co/YTWdh5p/3.jpg",
      "https://i.ibb.co/Ctyxf0q/4-removebg-preview.png",
      "https://i.ibb.co/MC6PsNt/3-removebg-preview.png",
      "https://i.ibb.co/JzZ9hRC/2-removebg-preview.png",
    ],
    price: 280,
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
        name: "calor",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
      {
        id: "2",
        name: "juan",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
      {
        id: "3",
        name: "leonardo",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim distinctio ex illo porro qui odit animi sint! Suscipit aliquid sunt",
      },
    ],
  },
];
