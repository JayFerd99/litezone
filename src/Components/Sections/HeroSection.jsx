import React from "react";
import {
  FaWindows,
  FaLinux,
  FaAppStore,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import Mapcrypto from "../../images/illustrations/undraw_digital_currency_qpak (1).svg";
import PrimaryButton from "../buttons/PrimaryButton";
import DropdownButton from "../Navbar/DropdownMenu";
import "../../Styles/global.css";

export default function HeroSection() {
  return (
    <section className="relative bg-primary pt-[140px] bg-opacity-5 pb-24">
      <div className="container px-4 mx-auto grid md:grid-cols-2">
        <div className="flex items-center">
          <div className="relative">
            <p className="text-mood">SIGN UP TODAY</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal">
              The World's <br />
              <span className="text-red-gradient">Fastest Growing</span> <br />
              Crypto Web App
            </h1>
            <div className="mt-4 mb-8">
              <p className="text-gray">
                Buy and sell 200+ cryptocurrencies with 20+ flat currencies
                using
              </p>
              <p className="text-gray">
                bank transfers or your credit/debit card.
              </p>
            </div>
            <div className="col-span-2 flex items-center gap-4 lg:mb-12">
              <PrimaryButton className="">Get Started</PrimaryButton>
              <div className="relative">
                <DropdownButton name="Download App">
                  <a
                    href="/download/windows"
                    target="_blank"
                    className="w-full hover:bg-mood px-6 pt-4 pb-2 block hover:text-white">
                    <FaWindows className="inline mr-2" /> Windows
                  </a>
                  <a
                    href="/download/mac"
                    target="_blank"
                    className="w-full hover:bg-mood px-6 pt-4 pb-2 block hover:text-white">
                    <FaApple className="inline mr-2" /> MAC
                  </a>
                  <a
                    href="/download/linux"
                    target="_blank"
                    className="w-full hover:bg-mood px-6 py-2 block hover:text-white">
                    <FaLinux className="inline mr-2" /> Linux
                  </a>
                  <a
                    href="/download/android"
                    target="_blank"
                    className="w-full hover:bg-mood px-6 py-2 block hover:text-white">
                    <FaAndroid className="inline mr-2" /> Android
                  </a>
                  <a
                    href="/download/ios"
                    target="_blank"
                    className="w-full hover:bg-mood px-6 pb-4 pt-2 block hover:text-white">
                    <FaAppStore className="inline mr-2" /> IOS
                  </a>
                </DropdownButton>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <img src={Mapcrypto} alt="Map" />
        </div>
      </div>
    </section>
  );
}
