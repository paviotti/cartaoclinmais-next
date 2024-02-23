import Image from "next/image";

const ImageHero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={"/assets/draBruna.jpg"}
        alt="Image Hero"
        layout="fill"
        objectFit="cover"
        // layout="responsive"
        // objectFit="cover"
        // width={80} // Defina a largura desejada
        // height={80} // Defina a altura desejada
      />
      {/* <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
        Seu Texto Sobreposto
      </div> */}
    </div>
  );
};

export default ImageHero;
