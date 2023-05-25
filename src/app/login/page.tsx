"use client";

import Link from "next/link";
import Form from "./components/Form";
import Image from "next/image";
import arrowSvg from "../../../public/svg/arrow.svg";
import "../globals.css";

const Login = () => {
  return (
    <main className="h-screen flex-col lg:flex lg:flex-row">
      <section className="lg:w-full lg:h-screen image-login"></section>
      <section
        className={`hero w-full flex flex-shrink-0 h-full flex-col justify-center lg:w-1/3 lg:bg-[#ebebeb]`}
      >
        <h4 className="text-4xl px-[2rem] cursor-default font-bold text-slate-500 relative">
          <button className="flex justify-center items-center rounded-full bg-white hover:bg-[#dddddd] w-12 h-12 p-1 ml-[-2.5rem] cursor-pointer absolute left-[2rem] top-[-2rem] shadow-md">
            <Link href={"/"}>
              <Image src={arrowSvg} alt="arrow" className="w-8" />
            </Link>
          </button>
          <p>Bienvenido a</p>
          <span>
            Tu
            <span className="text-black text-5xl">ShoeShop</span>
          </span>
        </h4>
        <div className="form">
          <Form />
        </div>
      </section>
    </main>
  );
};

export default Login;
