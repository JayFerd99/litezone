import React from "react";
import { VscFlame } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

export default function Navbar() {
  return (
    <div className="sticky top-0  py-8 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="bg-black text-white rounded-full hover:bg-white hover:text-mood transition-all duration-300 border border-black  py-3 px-4 flex items-center">
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
      </div>
      <div className="flex">
        <SecondaryButton>LogIn</SecondaryButton>
        <PrimaryButton>Sign Up</PrimaryButton>
      </div>
    </div>
  );
}
