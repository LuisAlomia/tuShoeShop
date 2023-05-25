"use client";

import React, { useState } from "react";
import filterSvg from "../../../../public/svg/filter.svg";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { setFilterGenre, setFilterPrice } from "@/redux/feactures/filterSlice";

const FilterBar = () => {
  const [active, setActive] = useState<boolean>(false);
  //const [price, setPrice] = useState<number>(50);
  const dispatch = useAppDispatch();

  const filterGenre = useAppSelector((state) => state.filter.genre);
  const filterPrice = useAppSelector((state) => state.filter.price);

  const handlerFilterPrice = (e: any) => {
    e.preventDefault();
    setActive(!active);
    dispatch(setFilterPrice(300));
    // dispatch(setFilterPrice(price));
  };

  const changePrice = (e: any) => {
    //setPrice(e.target.value);
    dispatch(setFilterPrice(e.target.value));
  };

  const handleFilterGenre = (data: string) => {
    dispatch(setFilterGenre(data));
  };

  return (
    <section>
      <ul className="w-full h-12 flex uppercase text-[1rem] font-bold my-6 bg-[#ebebeb63]">
        <li
          className="hover:cursor-pointer hover:bg-[#EBEBEB] w-full h-full flex justify-center items-center"
          onClick={() => handleFilterGenre("hombre")}
        >
          hombre
        </li>
        <li
          className="hover:cursor-pointer hover:bg-[#EBEBEB] w-full h-full flex justify-center items-center"
          onClick={() => handleFilterGenre("mujer")}
        >
          mujer
        </li>
        <li
          className="hover:cursor-pointer hover:bg-[#EBEBEB] w-full h-full flex justify-center items-center"
          onClick={() => handleFilterGenre("all")}
        >
          todos
        </li>
      </ul>
      <div className="w-full flex justify-between">
        <p>
          {filterGenre !== "all" && (
            <span className="font-semibold">Zapatillas para {filterGenre}</span>
          )}
        </p>

        <div className="flex items-center">
          <button
            onClick={() => setActive(!active)}
            className="text-sm font-semibold hover:cursor-pointer hover:text-slate-400 flex gap-2"
          >
            <Image src={filterSvg} alt="filter svg" /> Filtrar por precio
          </button>
          {active && (
            <form
              onSubmit={handlerFilterPrice}
              className="w-1/2 max-[750px]:w-full flex flex-wrap justify-evenly items-center bg-[#e9e9e9] p-4 rounded-md absolute z-10 right-1/4 max-[750px]:left-0 mt-8"
            >
              <div className="flex justify-center items-center gap-4">
                <div className="flex flex-col items-center">
                  <input
                    className="w-[10rem] h-[2rem]"
                    type="range"
                    min="50"
                    max="300"
                    step="50"
                    value={filterPrice}
                    onChange={changePrice}
                  />
                  <option className="text-[0.65rem] font-semibold">
                    50 | 100 | 150 | 200 | 250 |300
                  </option>
                </div>
                <span className="text-right text-[#0a0a0a] font-bold text-[.9rem] p-1">
                  $ {filterPrice} US
                </span>
              </div>
              <button className="bg-black text-white py-1 px-2 font-semibold rounded-[100%]">
                X
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
