"use client";
import React, { useContext } from "react";
import { MenuContext, useMenuContext } from "./MenuContext";
import { useState } from "react";
import NavBarUser from "./NavBarUser";
import IconUser from "../icons/IconUser";

const BtnMenuUser = () => {
  const { isMenuUser, setMenuUser, isMenuOpen, setMenuOpen } = useMenuContext();

  const handleMenuUserClick = () => {
    setMenuUser(!isMenuUser);
    if (isMenuOpen) {
      setMenuOpen(!isMenuOpen);
    }
  };

  return (
    <div className="flex justify-start mr-2">
      <button type="button" id="menu-user" onClick={handleMenuUserClick}>
        <IconUser />
        {isMenuUser && (
          <div className="absolute w-20 left-8 md:left-auto md:right-4 bg-green1 rounded-lg px-4 pt-6 pb-2 shadow-lg">
            <NavBarUser className="hover:text-orange1 hover:font-bold flex justify-start my-4" />
          </div>
        )}
      </button>
    </div>
  );
};

export default BtnMenuUser;
