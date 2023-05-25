import { Product } from "@/types/product.type";
import React from "react";

interface Props {
  data: Product;
}

const ProductDetail = ({ data }: Props) => {
  return (
    <div>
      <div className=" py-10 px-6 ">
        <div className="w-full p-2 px-4 flex flex-col gap-4">
          <p className="font-bold text-3xl capitalize border-b-2 pb-4">
            {data.name}
          </p>

          <p className="uppercase text-sm text-gray-300 font-bold">
            {data.category.name}
          </p>

          <p className="text-black font-bold text-2xl">$ {data.price} US</p>
          <p>
            <span className="font-bold text-gray-400">Market</span>vendido y
            distribuido por{" "}
            <span className="font-bold text-black uppercase">tuShoeShop</span>
          </p>

          <p className="flex gap-2 items-center">
            <span className="font-bold text-gray-400">Stock:</span>
            <span
              className={`w-2 h-2 rounded-full ml-5 ${
                data.available ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span>{data.available ? "Disponible" : "Agotado"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
