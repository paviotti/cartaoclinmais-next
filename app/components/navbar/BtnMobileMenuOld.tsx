"use client";
import { useState } from "react";
import IconBarOficial from "../icons/IconBarOficial";
import IconX from "../icons/IconX";
import NavBarMobile from "./NavBarMobile";

const BtnMobileMenuOld = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSetMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-start mr-2 ">
      <button type="button" id="menu-mobile" onClick={handleSetMenuOpen}>
        {isMenuOpen ? (
          <>
            <IconX />

            <div className="absolute w-36 bg-green2/85 rounded-lg px-4 pt-6 pb-2 shadow-lg">
              <NavBarMobile className=" hover:text-orange1 hover:font-bold flex justify-start my-4" />
            </div>
            {/* <div className="px-2 pt-2 pb-3 ">teste</div> */}
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

export default BtnMobileMenuOld;
