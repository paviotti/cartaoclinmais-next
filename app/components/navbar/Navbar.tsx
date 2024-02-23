import { ActiveLink } from "../active-link/ActiveLink";

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
];
export const Navbar = ({
  className = "",
  // className = "flex bg-blue-800 bg-opacity-30 p-2 rounded w-full",
}) => {
  return (
    // cor e tamanho da barra de menu
    <nav className={`${className}`}>
      {navItens.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
