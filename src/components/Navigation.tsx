"use client";

import Link from "next/link";
import searchSvg from "../../public/svg/search.svg";
import Image from "next/image";
import { useState } from "react";
import menuSvg from "../../public/svg/menu.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hook";
import { setSearch } from "@/redux/feactures/searchSlice";

type Input = {
  search: string;
};

const Navigation = () => {
  const [active, setActive] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<Input>();

  const dispatch = useAppDispatch();

  const handleSearch: SubmitHandler<Input> = (data) => {
    dispatch(setSearch(data.search));
  };

  const clearSearch = () => {
    dispatch(setSearch(""));
  };

  return (
    <nav className="py-8 bg-white sticky top-0 z-[100]">
      <span className="inline-block min-[600px]:hidden mb-2">
        <Link href={"/"} className="font-bold text-xl">
          <span className="text-slate-400">tu</span>ShoeShop
        </Link>
      </span>
      <div className="flex justify-between items-center gap-5">
        <span className="max-[600px]:hidden">
          <Link href={"/"} className="font-bold text-xl" rel="preload">
            <span className="text-slate-400">tu</span>ShoeShop
          </Link>
        </span>

        <div className="w-1/2 max-[500px]:w-2/3 bg-white flex gap-2 justify-between items-center shadow-md border rounded-s-full rounded-e-full p-1">
          <form onSubmit={handleSubmit(handleSearch)} className="flex w-full">
            <button className="mx-2">
              <Image src={searchSvg} alt="search" />
            </button>
            <input
              className="flex items-center pr-2 border-none outline-none text-gray-400 placeholder-gray-300 w-full"
              placeholder="¿Que producto necesitas?"
              type="search"
              {...register("search")}
            />
          </form>
          <button
            onClick={clearSearch}
            className="bg-black text-white py-1 px-2 rounded-[100%] font-semibold hover:bg-slate-600"
          >
            X
          </button>
        </div>

        <ul className="flex items-center text-sm gap-3 font-semibold max-[900px]:hidden">
          <li className="cursor-pointer hover:text-gray-400">
            <Link href={"/register"}> Registrarse</Link>
          </li>
          <span>|</span>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href={"/login"}>Iniciar sesión</Link>
          </li>
          <li className="w-10 h-10 bg-slate-600 rounded-full cursor-pointer"></li>
        </ul>

        <div className="min-[900px]:hidden relative">
          <div className="flex gap-2 items-center">
            <button
              className="cursor-pointer"
              onClick={() => setActive(!active)}
            >
              <Image src={menuSvg} alt="menu svg" width={25} />
            </button>
            <div className="w-10 h-10 bg-slate-600 rounded-full cursor-pointer"></div>
          </div>
          {active && (
            <ul className="h-[100px] flex flex-col text-sm gap-1 font-semibold absolute capitalize right-9  p-2 pr-5 z-10 bg-white border rounded-md">
              <li className="cursor-pointer hover:text-gray-400">
                <Link href={"/register"}> Registrarse</Link>
              </li>
              <li className="cursor-pointer hover:text-gray-400">
                <Link href={"/login"}>Iniciar sesión</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
