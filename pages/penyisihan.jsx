import Nav from "../components/Nav";
import ScoreBoardTable from "../components/ScoreboardTable";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Head from "next/head";

export default function WarmingUp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://schematics.its.ac.id:8081/api/scoreboard_penyisihan")
      .then((res) => {
      setData(res.data.data);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Username Tim',
        accessor: 'username_team',
        Cell: ({value}) => {
          const username = value;
          return (
            <>
              <span className="font-bold">{username}</span>
            </>
          )
        }
      },
      {
        Header: 'Nama Tim',
        accessor: data => [data.nama_team, data.nama_sekolah],
        Cell: ({value}) => {
          const [nama_team, nama_sekolah] = value;
          return (
            <>
              <span className="text-xl font-bold">{nama_team}</span>
              <br />
              <span>{nama_sekolah}</span>
            </>
          );
        },
      },
      {
        Header: 'Region',
        accessor: 'region',
      },
      {
        Header: 'Skor Soal',
        accessor: 'skor_soal',
      },
      {
        Header: 'Skor Game',
        accessor: 'skor_game',
      },
      {
        Header: 'Skor Total',
        accessor: 'skor_total',
      },
      {
        Header: 'Status',
        accessor: 'status',
      }
    ],
    []
  )

  return (
    <>
      <Head>
        <title>Scoreboard Babak Penyisihan Schematics NLC</title>
        <meta name='description' content='Schematics 2022' />
        <link rel='icon' href='/schematics-logo.png' />
        <meta charset='UTF-8' />
      </Head>
      <Nav/>
      <main className="bg-dark-primary h-full w-full overflow-x-hidden">
        <div className="flex flex-col items-center justify-center pt-80 gap-y-5">
          <h1 className="font-primary text-yellow-400 text-4xl md:text-6xl text-center">Schematics NLC 2022</h1>
          <h2 className="text-white text-xl md:text-3xl font-medium font-secondary text-center">Babak Penyisihan</h2>
        </div>
        <ScoreBoardTable columns={columns} data={data}/>
      </main>
    </>
  );
}