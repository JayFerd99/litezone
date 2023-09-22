import classNames from "classnames";
import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";

import final from "../../images/illustrations/globe.png";

const FinalItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const iconClass = classNames({
    "transition-all duration-300": true,
    "rotate-180": isOpen,
  });

  const contentClass = classNames({
    "text-gray transition-all duration-300 overflow-hidden": true,
    "h-full": isOpen,
    "h-0": !isOpen,
  });

  return (
    <div className="mb-3 border-b border-lightgray pb-3">
      <div
        className="flex justify-between py-3 cursor-pointer hover:text-mood"
        onClick={() => setIsOpen(!isOpen)}>
        {title}
        <BsChevronUp className={iconClass} />
      </div>
      <div className={contentClass}>
        <p className="select-none">{children}</p>
      </div>
    </div>
  );
};

export default function FinalSection() {
  return (
    <section className="container mx-auto py-20">
      <div className="grid md:grid-cols-2">
        <div className="mb-4">
          <span up duration={1000}>
            <img src={final} alt="FAQ" />
          </span>
        </div>
        <div className="flex justify-center">
          <div className="">
            <span className="text-mood">SUPPORT</span>
            <h2 className="font-bold text-2xl mb-6 leading-normal">
              Frequently asked questions
            </h2>
            <div className="my-6">
              <FinalItem open={true} title="Why should I choose Lite 'Zone?">
                We're industry pioneers, having been in the cryptocurrency
                industry since 2023. We've facilitated more than 1 billion USD
                worth of transactions on our exchange for customers in over 40
                countries. Today, we're trusted by over 1 million customers
                around the world and have received praise for our easy-to-use
                app, secure wallet, and range of features.
              </FinalItem>
              <FinalItem open={false} title="How secure is Lite 'Zone?">
                We're industry pioneers, having been in the cryptocurrency
                industry since 2016. We've facilitated more than 1 billion USD
                worth of transactions on our exchange for customers in over 40
                countries. Today, we're trusted by over 1 million customers
                around the world and have received praise for our easy-to-use
                app, secure wallet, and range of features.
              </FinalItem>
              <FinalItem open={false} title="Why to buy Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency
                industry since 2016. We've facilitated more than 1 billion USD
                worth of transactions on our exchange for customers in over 40
                countries. Today, we're trusted by over 1 million customers
                around the world and have received praise for our easy-to-use
                app, secure wallet, and range of features.
              </FinalItem>
              <FinalItem open={false} title="How to buy Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency
                industry since 2016. We've facilitated more than 1 billion USD
                worth of transactions on our exchange for customers in over 40
                countries. Today, we're trusted by over 1 million customers
                around the world and have received praise for our easy-to-use
                app, secure wallet, and range of features.
              </FinalItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
