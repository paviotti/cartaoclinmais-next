"use client";

import { useState } from "react";
import NavBarUser from "./NavBarUser";
import IconUser from "../icons/IconUser";

const BtnMenuUserOld = () => {
  const [isMenuUser, setMenuUser] = useState(false);
  const handleMenUser = () => {
    setMenuUser(!isMenuUser);
  };

  return (
    <div className="flex justify-start mr-2">
      <button type="button" id="menu-user" onClick={handleMenUser}>
        <IconUser />
        {isMenuUser && (
          <div className="absolute w-20 left-44 md:left-auto md:right-4 bg-green2/85 rounded-lg px-4 pt-6 pb-2 shadow-lg">
            <NavBarUser className="hover:text-orange1 hover:font-bold flex justify-start my-4" />
          </div>
        )}
      </button>
    </div>
  );
};

export default BtnMenuUserOld;
