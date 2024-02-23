import React from "react";

interface Props {
  titulo?: string;
}
const Titulo = ({ titulo }: Props) => {
  return <span className="text-4xl">{titulo}</span>;
};

export default Titulo;
