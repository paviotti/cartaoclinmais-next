"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  // ilumina o link ativo
  const pathName = usePathname();
  return (
    // ${style.link} separa cada link no menu
    <Link
      className={`py-1 px-2 ${style.link} ${
        pathName === path && style["active-link"]
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};
