import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScoreBoardTable from "../components/ScoreboardTable";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

export default function WarmingUp() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://schematics-nlc.vercel.app/api/scoreboard")
  //     .then((res) => {
  //     setData(res.data);
  //     });
  // }, []);

  return (
    <>
      <Head>
        <title>Scoreboard Babak Penyisihan Schematics NLC</title>
        <meta name='description' content='Schematics 2022' />
        <link rel='icon' href='/schematics-logo.png' />
        <meta charset='UTF-8' />
      </Head>
      <Nav/>
      <main className="bg-dark-primary h-screen w-full flex items-center justify-center flex-col gap-y-4 md:gap-y-8">
        <h1 className="font-primary text-white text-6xl">Schematics NLC 2022</h1>
        <Link href='#'>
          <a>
            <button className="text-white font-secondary text-2xl hover:text-yellow-400 bg-stone-700 px-3 py-1 rounded-lg active:brightness-90">WARMING UP</button>
          </a>
        </Link>
        <h2 className="text-white text-3xl font-medium font-secondary">Babak Penyisihan</h2>
        <div className="w-3/4">
          <div className="flex items-center">
            <input type="text" className="rounded-sm px-2 py-1" placeholder="Search Nama Tim"/>
            <p className="mx-5 font-secondary text-white">Menampilkan 0 Tim</p>
          </div>
        </div>
        <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg w-3/4">
          <p className="text-white font-secondary text-center animate-pulse py-2">Sedang Menunggu Data</p>
        </div>
        <ScoreBoardTable data={data}/>
      </main>
    </>
  );
}