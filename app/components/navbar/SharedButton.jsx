import { useState } from "react";
import BtnMenuUser from "../buttons/BtnMenuUser";
import BtnMobileMenu from "../buttons/BtnMobileMenu";

const SharedButton = () => {
  const [isMenuUserOpen, setMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenuUser = () => {
    setMenuOpen(!isMenuUserOpen);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <BtnMenuUser isOpen={isMenuUserOpen} toggleMenu={toggleMenuUser} />
      <BtnMobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </div>
  );
};

export default SharedButton;
