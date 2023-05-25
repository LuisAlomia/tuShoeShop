"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import arrowSvg from "../../../../../public/svg/arrow.svg";

interface Props {
  image: string[];
}

const ProductImages = ({ image }: Props) => {
  const [img, setImg] = useState<string>("");

  return (
    <section className="p-2 relative">
      <button className="flex justify-center items-center rounded-full bg-white hover:bg-[#dddddd] w-12 h-12 p-1 ml-[-2.5rem] cursor-pointer absolute left-[2rem] top-[4rem] shadow-md z-50 border">
        <Link href={"/"}>
          <Image src={arrowSvg} alt="arrow" className="w-8" />
        </Link>
      </button>
      <img
        className="w-[26rem] h-[26rem]"
        src={img === "" ? image[1] : img}
        alt="image shoe"
      />
      <div className="w-full flex flex-wrap">
        {image.map((img: string) => (
          <img
            key={img}
            src={img}
            alt="image shoe"
            className="w-[5rem] h-[5rem] cursor-pointer"
            onClick={() => setImg(img)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductImages;
