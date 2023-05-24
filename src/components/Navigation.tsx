import Link from "next/link";
import searchSvg from "../../public/svg/search.svg";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="py-8 flex justify-between items-center">
      <span>
        <Link href={"/"}>Logo</Link>
      </span>

      <div className="bg-white flex gap-2 items-center shadow-md border rounded-s-full rounded-e-full p-1">
        <button className="mx-2">
          <Image src={searchSvg} alt="search" />
        </button>
        <input
          className="flex items-center pr-2 border-none outline-none text-gray-400 placeholder-gray-300 w-full"
          placeholder="¿Que producto necesitas?"
          type="search"
        />
      </div>

      <ul className="flex items-center gap-3">
        <li className="cursor-pointer">
          <Link href={"/register"}> registrarse</Link>
        </li>
        <li className="cursor-pointer">
          <Link href={"/login"}>iniciar cesion</Link>
        </li>
        <li className="w-10 h-10 bg-slate-600 rounded-full cursor-pointer"></li>
      </ul>
    </nav>
  );
};

export default Navigation;
