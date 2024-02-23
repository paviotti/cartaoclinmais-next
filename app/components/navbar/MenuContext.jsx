"use client";
// https://www.youtube.com/watch?v=Wta5DQv_EfA&ab_channel=Codewithguillaume
import { createContext, useState, useContext } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuUser, setMenuUser] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = (menuName) => {
    setActiveMenu(menuName);
  };
  const handleMenUser = () => {
    setMenuUser(!isMenuUser);
  };

  return (
    <MenuContext.Provider
      value={{ isMenuUser, setMenuUser, isMenuOpen, setMenuOpen }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
// mini hook
export const useMenuContext = () => useContext(MenuContext);
