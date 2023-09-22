import React, { useState } from "react";
import { VscFlame } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [drop, setDrop] = useState(false);

  return (
    <div className="sticky z-20 top-0 flex justify-between w-full items-center">
      <div className="hidden md:block w-full">
        <div className="flex justify-around items-center w-full ">
          <div className="bg-black text-white rounded-full hover:bg-white hover:text-mood transition-all duration-300 border border-black mt-3 h-10 mb-3 py-3 px-4 flex items-center">
            <VscFlame className="text-mood h-8 w-8" />
            <span>'Zone</span>
          </div>
          <nav className="flex">
            <a href="/" className="mx-6 hover:text-mood">
              {" "}
              Crytocurrency
            </a>
            <a href="//" className="mx-6 hover:text-mood">
              {" "}
              Exchanges
            </a>
            <a href="/" className="mx-6 hover:text-mood">
              {" "}
              Watchlists
            </a>
            <a href="/  " className="mx-6 hover:text-mood">
              {" "}
              Protofolios
            </a>
            <a href="/" className="mx-6 hover:text-mood">
              Products
              <VscChevronDown className="inline ml-1" />
            </a>
          </nav>
          <div className="flex">
            <SecondaryButton>LogIn</SecondaryButton>
            <PrimaryButton>Sign Up</PrimaryButton>
          </div>
        </div>
      </div>

      <div className="w-full h-10 md:hidden  flex justify-between px-3 relative">
        <div className="bg-black text-white rounded-full hover:bg-white hover:text-mood transition-all duration-300 border border-black mt-1 mb-1 py-3 px-4 flex items-center">
          <VscFlame className="text-mood h-5 w-6" />
          <span>'Zone</span>
        </div>
        <span
          className="text-4xl flex items-center"
          onClick={() => setDrop(!drop)}>
          <AiOutlineMenu />
        </span>
      </div>
      {drop && (
        <div className="absolute left-0 top-10 w-full">
          <nav className="flex flex-col text-center gap-3 py-2 shadow-lg -left-1/2 -right-1/2 rounded-lg bg-white opacity-100 visible h-full lg:h-auto py-4 px-6">
            <a href="/" className="mx-6 hover:text-mood">
              {" "}
              Crytocurrency
            </a>
            <a href="//" className="mx-6 hover:text-mood">
              {" "}
              Exchanges
            </a>
            <a href="/" className="mx-6 hover:text-mood">
              {" "}
              Watchlists
            </a>
            <a href="/  " className="mx-6 hover:text-mood">
              {" "}
              Protofolios
            </a>
            <a href="/" className="mx-6 hover:text-mood">
              Products
              <VscChevronDown className="inline ml-1" />
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
