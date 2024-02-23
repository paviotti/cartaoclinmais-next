import Titulo from "./components/titulo/Titulo";

const text1 = "Apenas por R$60,00* as consultas médicas?";
const text2 = "Veja as regras";
export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center">
        <Titulo titulo={"Pagina Inicial"} />
        <div className="flex bg-slate-400 max-w-4xl h-auto p-4">
          <div className="  rounded flex justify-center items-center lg:text-3xl text-white font-medium text-center">
            {text1}
          </div>
          <div className="flex mx-4 items-center lg:text-xl border-2 border-zinc-50 px-1 md:px-4 py-2 rounded-xl text-slate-700 bg-slate-50 font-medium text-center">
            {text2}
          </div>
        </div>
      </div>
    </>
  );
}
