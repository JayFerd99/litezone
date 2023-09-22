import React from "react";

export default function SecondaryButton({
  children,
  onClick,
  className,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-mood rounded-full hover:bg-mood hover:text-white transition-all duration-300 border border-black px-6 flex mx-1 items-center ${className}`}
      {...props}>
      {children}
    </button>
  );
}
