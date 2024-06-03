import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
    const fundo = require('../../public/assets/background-DIRPPG-DV.svg')
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between bg-[url('/assets/fundo(2).png')] bg-contain bg-top bg-no-repeat">

      <NavBar/>
  
    </main>
  );
}
