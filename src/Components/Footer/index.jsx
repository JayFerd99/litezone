import React from "react";
import { BsArrowRight } from "react-icons/bs";
import PrimaryButton from "../buttons/PrimaryButton";

export default function Footer() {
  return (
    <footer>
      <div className="container px-2 border-y border-lightgray py-6">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4">
          <div className="p-6 xl:flex md:justify-between xl:border-r border-lightgray">
            <div className="text-mood text-2xl">
              LITE <span className="text-black text-2xl">'ZONE</span>
            </div>
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Buy Crypto
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Exchanges
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Watchlist
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Portfolio
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  NFT
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 xl:flex md:justify-center xl:border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Products
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 xl:flex md:justify-center xl:border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Help Center
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  System Status
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Area Avaibility
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-mood">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 w-full lg:col-span-3 xl:col-auto">
            <span className="text-gray">Newsletter</span>
            <p className="text-gray font-thin">
              Never miss anything crypto when you're on the go
            </p>
            <div className="flex gap-4 my-4">
              <div>
                <input
                  type="email"
                  className="border border-lightgray rounded-xl p-4 outline-none focus:border-mood w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <PrimaryButton className="!px-5 aspect-square !rounded-md">
                  <BsArrowRight color="white" />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray">© Copyright 2023 LLC. All rights reserved</p>
        <a href="/" className="text-mood" target="_blank" rel="noreferrer"></a>
      </div>
    </footer>
  );
}
