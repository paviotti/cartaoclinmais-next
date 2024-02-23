import Link from "next/link";

interface MenuItem {
  path: string;
  text: string;
}

const menuItems: MenuItem[] = [
  { path: "/", text: "Home" },
  { path: "/especialidades", text: "Especialidades" },
  { path: "/exames", text: "Exames" },
  { path: "/descontos", text: "Descontos" },
  { path: "/duvidas", text: "Dúvidas" },
  { path: "/contato", text: "Contato" },
  { path: "/sobre", text: "Sobre" },
];

const NavBarMobile = ({ className = "" }) => {
  return (
    <>
      {menuItems.map((item, index) => (
        <div className={`${className}`} key={index}>
          <Link href={item.text}>{item.text}</Link>
        </div>
      ))}
    </>
  );
};

export default NavBarMobile;
// hidden md:flex text-white hover:text-orange2 hover:font-bold
