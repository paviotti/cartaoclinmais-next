import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const LogoTipo: React.FC<ImageProps> = () => {
  return (
    <div className="">
      <Image
        src={"/assets/logoClinMais.jpg"}
        alt="logo clim mais"
        width={80} // Defina a largura desejada
        height={80} // Defina a altura desejada
        className="w-14 h-auto rounded-full p-2" // Defina as classes CSS desejadas
      />
    </div>
  );
};

export default LogoTipo;
