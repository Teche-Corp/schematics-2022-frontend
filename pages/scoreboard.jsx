import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
export default function Scoreboard() {
  return (
    <>
      <Nav/>
      <main className="bg-dark-primary h-screen p-[108px] w-full flex items-center justify-center flex-col gap-y-4 md:gap-y-8">
        <h1 className="font-primary text-white text-6xl">Schematics NLC 2022</h1>
        <h1 className="font-primary text-white text-4xl">Scoreboard</h1>
        <div className="px-6 py-3 text-lg font-bold uppercase transition-colors rounded bg-dark-400 md:text-lg focus:text-nlc flex justify-evenly w-full">
          <Link href='/warming-up'>
            <a>
              <button className="font-secondary text-white text-2xl hover:text-yellow-400 bg-stone-700 px-3 py-1 rounded-lg active:brightness-90">WARMING UP</button>
            </a>
          </Link>
          <Link href='/penyisihan'>
            <a>
              <button className="text-white font-secondary text-2xl hover:text-yellow-400 bg-stone-700 px-3 py-1 rounded-lg active:brightness-90">PENYISIHAN</button>
            </a>
          </Link>
        </div>
      </main>
      <Footer/>
    </>
  );
}

const cta = [
  { link: '/sch-nlc/scoreboard/warming-up', text: 'Warming Up' },
  { link: '/sch-nlc/scoreboard/penyisihan', text: 'Penyisihan' },
  // { link: '#', text: 'Semi Final' },
];