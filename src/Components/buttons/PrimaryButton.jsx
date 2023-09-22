import React from "react";

export default function PrimaryButton({
  children,
  onClick,
  className,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-mood text-white rounded-full hover:bg-white hover:text-mood transition-all duration-300 border border-black  py-2 px-6  ${className}`}
      {...props}>
      {children}
    </button>
  );
}
