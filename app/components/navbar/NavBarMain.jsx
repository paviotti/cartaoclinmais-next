import BtnMobileMenu from "../buttons/BtnMobileMenu";
import BtnMenuUser from "../buttons/BtnMenuUser";
import NavBarMobile from "./NavBarMobile";
import LogoTipo from "../images/LogoTipo";

const NavBarMain = () => {
  return (
    <nav className="bg-green2 h-16 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex md:justify-between items-center text-white h-full ">
        <LogoTipo />
        {/* NavBarMobile - usado como menu principal */}
        <NavBarMobile className="hidden md:flex hover:text-orange2 hover:font-bold" />
        <div className="md:hidden px-4 ">
          <BtnMobileMenu />
        </div>
        <BtnMenuUser />
        <button
          type="button"
          id="menuButton"
          className="hover:text-orange2 font-bold hover:stroke-white focus:outline-none duration-200 ease-in-out"
          aria-label="Menu"
          aria-expanded="false"
        ></button>
      </div>
    </nav>
  );
};

export default NavBarMain;
