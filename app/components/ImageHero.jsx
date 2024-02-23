import Image from "next/image";

const ImageHero = () => {
  return (
    <div className="relative">
      <Image
        src={"/assets/draBruna.jpg"}
        alt="Image Hero"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ImageHero;
