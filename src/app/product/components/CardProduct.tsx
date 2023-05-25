"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/types/product.type";
import arrowLeftSvg from "../../../../public/svg/arrowLeft.svg";
import arrowRightSvg from "../../../../public/svg/arrowRight.svg";
import Image from "next/image";
import "../../globals.css";

type Prop = {
  product: Product;
};

const CardProduct = ({ product }: Prop) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? product.image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (): void => {
    const isLastSlide = currentIndex === product.image.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (x: number): void => {
    setCurrentIndex(x);
  };

  return (
    <article className=" bg-transparent w-[250px] group m-2 rounded-xl hover:scale-101 duration-300 cursor-pointer shadow-lg hover:border justify-items-center p-1">
      <div className="relative w-full h-[250px]">
        <Link href={`./product/${product.name}`}>
          <img
            className="w-full h-full object-cover rounded-xl"
            src={product.image[currentIndex]}
            alt={product.name}
          />
        </Link>
        <div className=" hidden group-hover:block ">
          <span
            onClick={prevSlide}
            className="w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer bg-white hover:bg-[#d3d3d3] rounded-[50%] absolute left-2 top-1/2 shadow-md"
          >
            <Image src={arrowLeftSvg} alt="arrow left svg" />
          </span>
          <span
            onClick={nextSlide}
            className="w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer bg-white hover:bg-[#d3d3d3] rounded-[50%] absolute right-2 top-1/2 shadow-md"
          >
            <Image src={arrowRightSvg} alt="arrow right svg" />
          </span>
        </div>
        <div className="absolute  bottom-0 flex  w-full  justify-center m-1">
          {product.image.map((imag, imagIndex) => (
            <span
              key={imagIndex}
              onClick={() => goToSlide(imagIndex)}
              className={`${
                imagIndex === currentIndex ? `dot dot-activedot` : `dot`
              }`}
            >
              <span className="w-1 h-1 cursor-pointer "></span>
            </span>
          ))}
        </div>
      </div>
      <Link
        href={`./product/${product.name}`}
        className="p-1 flex flex-col justify-between h-[143px]"
      >
        <div className="flex items-start justify-between py-1">
          <span className="text-[1rem] text-[#0a0a0a]  font-bold capitalize">
            {product.name}
          </span>
          <div className="w-[10rem] text-[.9rem] font-medium text-[#0a0a0a] p-1 text-end">
            {product.category.name}
          </div>
        </div>
        <div className="text-[#9c9898] font-normal text-[1rem]  px-1">
          {product.available ? (
            <p>
              Disponible{" "}
              <span className="inline-block ml-2 w-2 h-2 bg-green-600 rounded-full"></span>
            </p>
          ) : (
            <p>
              Agotado{" "}
              <span className="inline-block ml-2 w-2 h-2 bg-red-600 rounded-full"></span>
            </p>
          )}
        </div>
        <span className="text-right text-[#0a0a0a] font-bold text-[.9rem]  p-1">
          ${product.price} US{" "}
          <span className="text-slate-700 font-light">par</span>
        </span>
      </Link>
    </article>
  );
};

export default CardProduct;
