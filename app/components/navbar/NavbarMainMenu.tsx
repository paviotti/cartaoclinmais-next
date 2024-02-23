import Link from "next/link";

interface MenuItem {
  path: string;
  text: string;
}

const navItens: MenuItem[] = [
  { path: "/", text: "Home" },
  { path: "/especialidades", text: "Especialidades" },
  { path: "/exames", text: "Exames" },
  { path: "/descontos", text: "Descontos" },
  { path: "/duvidas", text: "Dúvidas" },
  { path: "/contato", text: "Contato" },
  { path: "/sobre", text: "Sobre" },
  { path: "/login", text: "Login" },
];
export const NavbarMainMenu = ({
  className = "",
  // className = "flex bg-blue-800 bg-opacity-30 p-2 rounded w-full",
}) => {
  return (
    // cor e tamanho da barra de menu
    <nav className={`${className}`}>
      {navItens.map((navItem, index) => (
        <div key={index}>
          <Link href={navItem.path}>{navItem.text}</Link>
        </div>
      ))}
    </nav>
  );
};
