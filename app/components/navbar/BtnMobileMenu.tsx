"use client";
import { useState } from "react";
import IconBarOficial from "../icons/IconBarOficial";
import IconX from "../icons/IconX";
import NavBarMobile from "./NavBarMobile";
import { useMenuContext } from "./MenuContext";

const BtnMobileMenu = () => {
  const { isMenuUser, setMenuUser, isMenuOpen, setMenuOpen } = useMenuContext();

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
    if (isMenuUser) {
      setMenuUser(!isMenuUser);
    }
  };

  return (
    <div className="flex justify-start mr-2 ">
      <button type="button" id="menu-mobile" onClick={handleMenuClick}>
        {isMenuOpen ? (
          <>
            <IconX />

            <div className="absolute w-36 bg-green1 rounded-lg px-4 pt-6 pb-2 shadow-lg">
              <NavBarMobile className=" hover:text-orange1 hover:font-bold flex justify-start my-4" />
            </div>
          </>
        ) : (
          <div>
            <IconBarOficial />
          </div>
        )}
      </button>
    </div>
  );
};

export default BtnMobileMenu;
