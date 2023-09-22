import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import SecondaryButton from "../buttons/SecondaryButton";
import { VscChevronDown } from "react-icons/vsc";

export default function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDocumentClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div onClick={handleClick}>
        <SecondaryButton className="h-10 lg:w-auto">
          Download Now <VscChevronDown className="inline" />
        </SecondaryButton>
      </div>
      {open && (
        <div
          ref={dropdownRef}
          className="lg:absolute top-full shadow-lg -left-1/2 -right-1/2 rounded-lg bg-white opacity-100 visible h-full lg:h-auto py-4 px-6"
          style={{ zIndex: 1000 }}>
          {children}
        </div>
      )}
    </div>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node,
};
