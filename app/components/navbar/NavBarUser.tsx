// define os links para menu de acesso dos funcionários

import Link from "next/link";

interface MenuItem {
  path: string;
  text: string;
}

const items: MenuItem[] = [
  { path: "/profile", text: "profile" },
  { path: "/settings", text: "settings" },
  { path: "/logout", text: "logout" },
];

const NavBarUser = ({ className = "" }) => {
  return (
    <nav>
      {items.map((item, index) => (
        <div key={index}>
          <Link className={`${className}`} href={item.path}>
            {item.text}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavBarUser;
