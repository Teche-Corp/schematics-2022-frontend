import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeNlc, setActiveNlc] = useState(false);
  const [activeNpc, setActiveNpc] = useState(false);
  const [activeReeva, setActiveReeva] = useState(false);
  const [activeNst, setActiveNst] = useState(false);

  const toggleActiveNlc = () => {
    setActiveNlc((prev) => !prev);
  };

  const toggleActiveNpc = () => {
    setActiveNpc((prev) => !prev);
  };

  const toggleActiveReeva = () => {
    setActiveReeva((prev) => !prev);
  };

  const toggleActiveNst = () => {
    setActiveNst((prev) => !prev);
  };

  return (
    <div>
      <Head>
        <title>Schematics 2022</title>
        <meta name="description" content="Schematics 2022" />
        <link rel="icon" href="/schematics-logo.png" />
      </Head>

      <main>
        <section id="header" className="w-full min-h-screen bg-dark-primary">
          <div className="flex flex-col pt-[92px] px-[132px] items-center justify-center w-full min-h-screen z-50">
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col w-3/5 h-full gap-2">
                <div className="relative w-full h-auto">
                  <h1 className="relative z-10 uppercase select-none text-9xl font-primary home-main-title">
                    Unleash
                    <br />
                    Your Soul
                  </h1>
                  <h1 className="absolute top-0 text-white uppercase -translate-x-2 select-none text-9xl font-primary">
                    Unleash
                    <br />
                    Your Soul
                  </h1>
                </div>
              </div>
              <div className="w-2/5">
                <div className="relative flex items-center justify-center select-none">
                  <img
                    src="/homepage/logo-schematics-lg.png"
                    alt=""
                    className="relative z-10 w-80"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full mt-12">
              <Link href="#about">
                <a className="text-4xl select-none text-white uppercase bg-white px-16 py-7 rounded-t-xl bg-opacity-[0.15]  font-primary">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
          <div className="relative bottom-0 z-0 z-10 w-full">
            <img src="/homepage/gelombang.png" alt="" className="w-full" />
          </div>
        </section>
        {/* About */}
        <section
          id="about"
          className="relative z-10 w-full min-h-screen bg-dark-primary"
        >
          <div className="flex gap-14 px-[132px] pt-[92px] items-center justify-center w-full min-h-screen z-50">
            <div className="w-1/2 h-full">
              <h1 className="text-white uppercase text-8xl font-primary">
                About Us
              </h1>
              <p className="mt-5 text-2xl leading-loose text-white font-secondary">
                Schematics adalah salah satu event terbesar ITS yang
                diselenggarakan oleh mahasiswa Teknik Informatika ITS.
                Schematics merupakan event yang berfokus pada kompetisi
                pemrograman dan logika, serta memperkenalkan perkembangan
                teknologi kepada masyarakat luas melalui subevent-subevent
                Schematics.
              </p>
              <div className="relative py-3 mt-12">
                <div className="relative z-50">
                  <Link href="/">
                    <a className="py-5 text-4xl text-white uppercase bg-red-700 select-none px-14 rounded-xl text-border-thin font-primary">
                      Baca Selengkapnya
                    </a>
                  </Link>
                </div>
                <img
                  src="/homepage/cloud-1.png"
                  alt=""
                  className="absolute top-0 z-0 h-32 -translate-x-1/2 -translate-y-1/2 select-none -left-5"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <img
                src="/homepage/about-us.png"
                alt=""
                className="w-full select-none"
              />
            </div>
          </div>
        </section>
        <section id="join-now" className="w-full min-h-screen bg-dark-primary">
          <div className="relative gap-14 px-[132px] flex flex-col items-center justify-center min-h-screen">
            <img
              src="/homepage/thunder-cloud-left.png"
              alt=""
              className="absolute top-0 left-0 select-none h-80"
            />
            <img
              src="/homepage/thunder-cloud-right.png"
              alt=""
              className="absolute top-0 right-0 select-none h-80"
            />
            <h1 className="text-7xl leading-[120px] text-center text-white uppercase font-primary">
              Are You Ready <br /> to Join Schematics
            </h1>
            <img
              src="/homepage/rantai.png"
              alt=""
              className="w-full select-none"
            />
            <h2 className="text-4xl font-semibold tracking-wide font-primary text-[#C4C4C4] uppercase">
              Bersama dengan 10.000+ Pendaftar Lain
            </h2>
            <div>
              <Link href="/">
                <a className="py-5 text-4xl text-white uppercase bg-red-700 select-none px-36 rounded-xl text-border-thin font-primary">
                  Join Now!!!
                </a>
              </Link>
            </div>
            <img
              src="/homepage/dark-cloud-left.png"
              alt=""
              className="absolute bottom-0 left-0 translate-y-1/2 select-none h-80"
            />
            <img
              src="/homepage/dark-cloud-right.png"
              alt=""
              className="absolute right-0 translate-y-1/2 select-none bottom-5 h-80"
            />
          </div>
        </section>
        {/* cta */}
        <section
          id="cta"
          className="relative flex flex-col justify-between w-full h-screen z-5 bg-dark-primary"
        >
          <div className="flex w-full h-1/2">
            <div className="w-1/2 h-full">
              <button
                className="relative w-full h-full"
                onClick={toggleActiveNlc}
              >
                <img
                  src="/homepage/nlc.png"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full select-none"
                />
                <div
                  className={`absolute flex ${
                    activeNlc ? "opacity-1" : "opacity-0"
                  } max-h-full max-w-full transition duration-300 inset-0 flex flex-col items-center justify-center bg-nlc-home`}
                >
                  <div className="flex flex-col items-center justify-center p-2 h-1/2">
                    <h1 className="text-4xl uppercase font-primary">
                      <span className="text-nlc-home-top">National Logic</span>
                      <br />
                      <span className="text-nlc-home-bottom">Competition</span>
                    </h1>
                    <p className="text-xl font-secondary font-semibold mt-[11px]">
                      Kompetisi logika nasional yang melatih kemampuan berfikir
                      melalui lomba dan kegiatan yang seru.
                    </p>
                  </div>
                  <div className="relative flex justify-center w-full h-1/2">
                    <img
                      src="/homepage/nlc-cta.png"
                      alt=""
                      className="h-full"
                    />
                    {activeNlc && (
                      <Link href="/">
                        <a className="absolute px-5 py-2 bg-red-400 rounded-full bottom-[41.3px] uppercase text-2xl right-0 font-primary">
                          Selengkapnya
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </button>
            </div>
            <div className="w-1/2 h-full">
              <button
                className="relative w-full h-full"
                onClick={toggleActiveNpc}
              >
                <img
                  src="/homepage/npc.png"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full select-none"
                />
                <div
                  className={`absolute flex ${
                    activeNpc ? "opacity-1" : "opacity-0"
                  } max-h-full max-w-full transition duration-300 inset-0 flex flex-col items-center justify-center bg-npc-home`}
                >
                  <div className="flex flex-col items-center justify-center p-2 h-1/2">
                    <h1 className="text-4xl uppercase text-npc-home font-primary">
                      National Programming
                      <br />
                      Contest
                    </h1>
                    <p className="text-xl font-secondary font-semibold mt-[11px]">
                      Kompetisi pemrograman nasional untuk menguji kemampuan
                      pemrograman peserta di tingkat SMA/sederajat maupun
                      tingkat mahasiswa.
                    </p>
                  </div>
                  <div className="relative flex justify-center w-full h-1/2">
                    {/* <img
                      src="/homepage/nlc-cta.png"
                      alt=""
                      className="h-full"
                    /> */}

                    {activeNpc && (
                      <Link href="/">
                        <a className="absolute px-5 py-2 bg-red-400 rounded-full bottom-[41.3px] uppercase text-2xl right-0 font-primary">
                          Selengkapnya
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex h-1/2">
            <div className="w-1/2 h-full">
              <button
                className="relative w-full h-full"
                onClick={toggleActiveReeva}
              >
                <img
                  src="/homepage/reeva.png"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full select-none"
                />
                <div
                  className={`absolute flex ${
                    activeReeva ? "opacity-1" : "opacity-0"
                  } max-h-full max-w-full transition duration-300 inset-0 flex flex-col items-center justify-center bg-reeva-home`}
                >
                  <div className="flex flex-col items-center justify-center p-2 h-1/2">
                    <h1 className="text-4xl uppercase text-reeva-home font-primary">
                      REVOLUTIONARY ENTERTAIMENT
                      <br />
                      AND EXPO WITH VARIOUS ARTS
                    </h1>
                    <p className="text-xl font-semibold font-secondary mt-[11px]">
                      Expo dan konser musik dengan bintang tamu artis nasional
                      yang sangat ditunggu-tunggu!
                    </p>
                  </div>
                  <div className="relative flex justify-center w-full h-1/2">
                    <img
                      src="/homepage/reeva-cta.png"
                      alt=""
                      className="h-full"
                    />
                    {activeReeva && (
                      <Link href="/">
                        <a className="absolute px-5 py-2 bg-red-400 rounded-full bottom-[41.3px] uppercase text-2xl right-0 font-primary">
                          Selengkapnya
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </button>
            </div>
            <div className="w-1/2 h-full">
              <button
                className="relative w-full h-full"
                onClick={toggleActiveNst}
              >
                <img
                  src="/homepage/nst.png"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full select-none"
                />
                <div
                  className={`absolute flex ${
                    activeNst ? "opacity-1" : "opacity-0"
                  } max-h-full max-w-full transition duration-300 inset-0 flex flex-col items-center justify-center bg-nst-home`}
                >
                  <div className="flex flex-col items-center justify-center p-2 h-1/2">
                    <h1 className="text-4xl uppercase text-nst-home font-primary">
                      NATIONAL SEMINAR
                      <br />
                      OF TECHNOLOGY
                    </h1>
                    <p className="text-xl font-secondary font-semibold mt-[11px]">
                      Acara seminar teknologi yang menghadirkan
                      pembicara-pembicara ternama.
                    </p>
                  </div>
                  <div className="relative flex justify-center w-full h-1/2">
                    <img
                      src="/homepage/nst-cta.png"
                      alt=""
                      className={`h-full`}
                    />
                    {activeNst && (
                      <Link href="/">
                        <a className="absolute px-5 py-2 bg-red-400 rounded-full bottom-[41.3px] uppercase text-2xl right-0 font-primary">
                          Selengkapnya
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
        {/* schemastore */}
        <section
          id="schemastore"
          className="relative flex flex-col justify-between w-full min-h-screen z-5 bg-dark-primary"
        >
          <div className="px-[132px] relative py-[92px] min-h-screen flex flex-col justify-center">
            <div className="relative z-20 flex flex-col w-full gap-10 pt-4">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <h1 className="text-white uppercase text-7xl font-primary">
                    Schemastore
                  </h1>
                  <h1 className="absolute text-white uppercase top-10 text-schemastore-shadow text-7xl font-primary">
                    Schemastore
                  </h1>
                </div>
                <Link href="/">
                  <a className="px-10 py-4 text-4xl text-white uppercase bg-red-700 select-none rounded-xl text-border-thin font-primary">
                    Lihat Selengkapnya
                  </a>
                </Link>
              </div>
              <p className="text-3xl text-white text-secondary">
                Temukan merchandise keren Schematics di Schemastore!
              </p>
            </div>
            <div className="relative z-20 flex justify-between w-full mt-10">
              <div className="flex items-center justify-center w-1/4 p-2">
                <img src="/homepage/shirt-example.png" alt="" />
              </div>
              <div className="flex items-center justify-center w-1/4 p-2">
                <img src="/homepage/shirt-example.png" alt="" />
              </div>
              <div className="flex items-center justify-center w-1/4 p-2">
                <img src="/homepage/shirt-example.png" alt="" />
              </div>
              <div className="flex items-center justify-center w-1/4 p-2">
                <img src="/homepage/shirt-example.png" alt="" />
              </div>
            </div>
            <img
              className="absolute left-0 -translate-y-1/2 -bottom-24 w-36"
              src="/homepage/sch-store-left.png"
              alt=""
            />
            <img
              className="absolute top-0 right-0 w-72"
              src="/homepage/sch-store-right.png"
              alt=""
            />
          </div>
        </section>
      </main>
    </div>
  );
}
