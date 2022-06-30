import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="fixed z-50">
      <div className="bg-white absolute w-screen h-[92px] opacity-[0.15]"></div>
      <nav className="h-[92px] relative z-50 select-none w-screen font-secondary flex justify-between items-center px-[132px]">
        {/* header logo */}
        <Link href="/">
          <a className="flex gap-1">
            <Image alt="" src="/schematics-logo.png" width={72} height={72} />
            <div className="flex flex-col justify-center">
              <h1 className="font-bold leading-6 text-white">
                Schematics
                <br />
                <span className="font-thin">2022</span>
              </h1>
            </div>
          </a>
        </Link>
        <ul className="flex text-white gap-[67px]">
          <li>
            <Link href="/">
              <a className="flex items-center gap-[6px]">
                Events <FaAngleDown className="mt-1 text-lg" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About Us</a>
            </Link>
          </li>
          <li className="font-bold cursor-pointer text-black bg-white px-[31.5px] py-[1px] rounded-md">
            <Link href="/">
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
