import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  const [activeNlc, setActiveNlc] = useState(false);
  const [showNlc, setShowNlc] = useState(false);
  const [activeNpc, setActiveNpc] = useState(false);
  const [showNpc, setShowNpc] = useState(false);
  const [activeReeva, setActiveReeva] = useState(false);
  const [showReeva, setShowReeva] = useState(false);
  const [activeNst, setActiveNst] = useState(false);
  const [showNst, setShowNst] = useState(false);

  const toggleActiveNlc = () => {
    setActiveNlc((prev) => !prev);
  };

  useEffect(() => {
    if (activeNlc) {
      setShowNlc(true);
    } else {
      setTimeout(() => {
        setShowNlc(false);
      }, 300);
    }
  }, [activeNlc]);

  const toggleActiveNpc = () => {
    setActiveNpc((prev) => !prev);
  };

  useEffect(() => {
    if (activeNpc) {
      setShowNpc(true);
    } else {
      setTimeout(() => {
        setShowNpc(false);
      }, 300);
    }
  }, [activeNpc]);

  const toggleActiveReeva = () => {
    setActiveReeva((prev) => !prev);
  };

  useEffect(() => {
    if (activeReeva) {
      setShowReeva(true);
    } else {
      setTimeout(() => {
        setShowReeva(false);
      }, 300);
    }
  }, [activeReeva]);

  const toggleActiveNst = () => {
    setActiveNst((prev) => !prev);
  };

  useEffect(() => {
    if (activeNst) {
      setShowNst(true);
    } else {
      setTimeout(() => {
        setShowNst(false);
      }, 300);
    }
  }, [activeNst]);

  return (
    <div>
      <Head>
        <title>Schematics 2022</title>
        <meta name="description" content="Schematics 2022" />
        <link rel="icon" href="/schematics-logo.png" />
      </Head>

      <Nav />
      <main>
        <section
          id="header"
          className="w-full pt-[92px] min-h-screen bg-dark-primary"
        >
          <div>
            {/* <img 
              src="/homepage/logo-schematics-lg.png" 
              alt=""
              className="absolute select-none w-[164px] ml-32 z-0 mt-10 md:mt-96 md:right-10 lg:mt-[100px] lg:w-[400px] lg:right-24" 
            /> */}
            <img 
            src="homepage/logo-desktop.png" 
            className="absolute select-none md:right-0 lg:right-0 md:w-[350px] lg:w-[600px] xl:w-[900px] md:mt-20 lg:mt-40 xl:mt-5"
            alt="" />
          </div>
          <div className="flex flex-col mt-32 md:mt-0 px-5 md:px-16 lg:px-[132px] items-center justify-center w-full min-h-[calc(100vh-92px)] z-50">
            <div className="flex items-center justify-start w-full gap-10">
              <div className="relative">
                <h1 className="relative z-10 text-5xl uppercase select-none sm:text-8xl md:text-7xl xl:text-8xl 2xl:text-9xl font-primary home-main-title">
                  Schematics
                  <br />
                  2022
                </h1>
                <h1 className="absolute top-0 text-5xl text-white uppercase -translate-x-1 select-none sm:text-8xl md:text-7xl xl:text-8xl md:-translate-x-2 2xl:text-9xl font-primary">
                  Schematics
                  <br />
                  2022
                </h1>
                <h2 className="text-3xl uppercase select-none mt-7 sm:mt-3 sm:text-4xl md:text-3xl xl:text-5xl home-main-title font-primary">
                  Unleash Your Soul
                </h2>
              </div>
              {/* <div className="items-center justify-center hidden select-none md:flex">
                <img
                  src="/homepage/logo-schematics-lg.png"
                  alt=""
                  className="relative z-10 w-36 sm:w-48 md:w-64 xl:w-80"
                />
              </div> */}
            </div>
            <div className="flex justify-center w-full mt-10 sm:justify-start sm:mt-7 md:mt-1 2xl:mt-10 ">
              <Link href="#about">
                <a className="text-2xl sm:text-4xl select-none text-white uppercase bg-white px-5 py-4 sm:px-14 sm:py-5 xl:px-16 xl:py-7 rounded-xl bg-opacity-[0.15]  font-primary">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
          <div className="relative bottom-0 z-10 w-full ">
            <img
              src="/homepage/gelombang.png"
              alt=""
              className="hidden w-full md:block"
            />
            <img
              src="/homepage/gelombang-sm.png"
              alt=""
              className="block w-full md:hidden"
            />
          </div>
        </section>
        {/* About */}
        <section
          id="about"
          className="relative z-10 w-full pt-[92px] min-h-screen bg-dark-primary"
        >
          <div className="flex md:gap-5 lg:gap-14 px-5 md:px-16 lg:px-[132px] min-h-[calc(100vh-92px)] py-4 items-center justify-center w-full z-50">
            <div className="lg:w-1/2 md:w-2/3">
              <h1 className="text-5xl text-center text-white uppercase lg:text-left md:text-5xl xl:text-7xl 2xl:text-8xl font-primary">
                About Us
              </h1>
              <div className="flex items-center justify-center w-full mt-4 lg:hidden lg:p-6 xl:p-10">
                <img
                  src="/homepage/about-us.png"
                  alt=""
                  className="w-64 select-none lg:w-full"
                />
              </div>
              <p
                className="relative z-50 mt-5 text-lg leading-loose text-white md:text-xl xl:text-2xl font-secondary"
                style={{ lineHeight: "45px" }}
              >
                Schematics adalah salah satu event terbesar ITS yang
                diselenggarakan oleh mahasiswa Teknik Informatika ITS.
                Schematics merupakan event yang berfokus pada kompetisi
                pemrograman dan logika, serta memperkenalkan perkembangan
                teknologi kepada masyarakat luas melalui subevent-subevent
                Schematics.
              </p>
              <div className="relative mt-2 md:mt-5">
                <div className="relative z-50 py-3 xl:py-5">
                  <Link href="/about">
                    <a className="inline-block w-full py-3 text-2xl text-center text-white uppercase bg-red-700 rounded-md select-none lg:text-left lg:w-auto xl:py-5 2xl:text-3xl home-btn-bg md:px-10 xl:px-14 text-border-thin font-primary">
                      Baca Selengkapnya
                    </a>
                  </Link>
                </div>
                <img
                  src="/homepage/cloud-1.png"
                  alt=""
                  className="absolute top-0 z-0 h-16 -translate-x-1/2 -translate-y-1/2 select-none xl:h-24 2xl:h-32 -left-5"
                />
              </div>
            </div>
            <div className="items-center justify-center hidden lg:flex lg:w-1/2 lg:p-6 xl:p-10">
              <img
                src="/homepage/about-us.png"
                alt=""
                className="w-full select-none"
              />
            </div>
          </div>
        </section>
        {/* join now */}
        <section
          id="join-now"
          className="w-full relative min-h-screen pt-[92px] bg-dark-primary"
        >
          <img
            src="/homepage/thunder-cloud-left.png"
            alt=""
            className="absolute top-0 left-0 select-none h-36 md:h-48 xl:h-72 2xl:h-80"
          />
          <img
            src="/homepage/thunder-cloud-right.png"
            alt=""
            className="absolute top-0 right-0 select-none h-36 md:h-48 xl:h-72 2xl:h-80"
          />
          <div className="gap-5 px-5 md:px-16 lg:px-[132px] flex flex-col items-center justify-center min-h-[calc(100vh-92px)]">
            <h1 className="text-3xl text-center text-white uppercase select-none sm:text-4xl md:text-5xl xl:text-7xl font-primary">
              <span>Are You Ready</span>
              <br />
              <span className="block mt-4 xl:mt-7">to Join Schematics</span>
            </h1>
            <img
              src="/homepage/rantai.png"
              alt=""
              className="w-full select-none"
            />
            <h2 className="text-xl select-none md:text-2xl text-center xl:text-4xl font-semibold tracking-wide font-secondary text-[#C4C4C4] uppercase">
              Bersama dengan 10.000+ Pendaftar Lain
            </h2>
            <div className="flex justify-center w-full py-3 mt-4 xl:py-5 md:mt-7">
              <Link href="/login">
                <a className="inline-block w-[90%] px-12 py-3 text-xl text-center text-white uppercase rounded-md select-none sm:w-auto md:px-24 xl:py-5 md:text-2xl xl:text-4xl home-btn-bg xl:px-36 text-border-thin font-primary">
                  Join Now!!!
                </a>
              </Link>
            </div>
          </div>
          <img
            src="/homepage/dark-cloud-left.png"
            alt=""
            className="absolute bottom-0 left-0 h-64 translate-y-1/2 select-none xl:h-80"
          />
          <img
            src="/homepage/dark-cloud-right.png"
            alt=""
            className="absolute right-0 h-64 translate-y-1/2 select-none bottom-5 xl:h-80"
          />
        </section>
        {/* cta */}
        <section
          id="cta"
          className="relative flex flex-col justify-between w-full h-[calc(200vh-184px)] md:h-[calc(100vh-92px)] z-5 bg-dark-primary"
        >
          <div className="flex flex-col h-full md:flex-row md:h-1/2 md:w-auto">
            <div className="h-full md:w-1/2">
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
                  <div className="flex flex-col items-center justify-center px-3 py-2 xl:px-7 h-1/2">
                    <h1 className="text-3xl uppercase md:text-3xl xl:text-4xl font-primary">
                      <span className="text-nlc-home-top">National Logic</span>
                      <br />
                      <span className="text-nlc-home-bottom">Competition</span>
                    </h1>
                    <p className="text-md xl:text-xl font-medium font-secondary md:mt-1 xl:mt-[11px]">
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
                    {showNlc && (
                      <Link href="/nlc">
                        <a
                          className={`absolute right-3 xl:right-8 ${
                            activeNlc ? "opacity-1" : "opacity-0"
                          } px-2 md:px-5 xl:px-10 text-border-thinner tracking-tight py-2 text-white transition duration-300 home-btn-bg rounded-md bottom-5 xl:bottom-[41.3px] uppercase md:text-sm xl:text-md right-0 font-primary`}
                        >
                          Selengkapnya
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </button>
            </div>
            <div className="h-full md:w-1/2">
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
                  } max-h-full max-w-full transition duration-300 inset-0 flex flex-col items-center justify-center md:justify-start bg-npc-home`}
                >
                  <div className="flex flex-col items-center justify-center px-3 py-2 xl:px-7 h-1/2">
                    <h1 className="text-2xl uppercase text-npc-home md:text-3xl xl:text-4xl font-primary">
                      National Programming
                      <br />
                      Contest
                    </h1>
                    <p className="text-md xl:text-xl font-medium font-secondary mt-1 xl:mt-[11px]">
                      Kompetisi pemrograman nasional untuk menguji kemampuan
                      pemrograman peserta di tingkat SMA/sederajat maupun
                      tingkat mahasiswa.
                    </p>
                  </div>
                  <div className="relative flex justify-center w-full h-1/2">
                    <img
                      src="/homepage/npc-inner.png"
                      alt=""
                      className="h-full"
                    />
                    {showNpc && (
                      <Link href="/npc">
                        <a
                          className={`absolute right-3 xl:right-8 ${
                            activeNpc ? "opacity-1" : "opacity-0"
                          } px-2 md:px-5 xl:px-10 text-border-thinner tracking-tight py-2 text-white transition duration-300 home-btn-bg rounded-md bottom-5 xl:bottom-[41.3px] uppercase md:text-sm xl:text-md right-0 font-primary`}
                        >
                          Selengkapnya
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col h-full md:flex-row md:h-1/2">
            <div className="h-full md:w-1/2">
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
                  <div className="flex flex-col items-center justify-center px-3 py-2 xl:px-7 h-1/2">
                    <h1 className="text-xl uppercase sm:text-3xl xl:text-4xl text-reeva-home font-primary">
                      REVOLUTIONARY ENTERTAIMENT
                      <br />
                      AND EXPO WITH VARIOUS ARTS
                    </h1>
                    <p className="text-md xl:text-xl font-medium font-secondary md:mt-1 xl:mt-[11px]">
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
                    {showReeva && (
                      <Link href="/reeva">
                        <a
                          className={`absolute right-3 xl:right-8 ${
                            activeReeva ? "opacity-1" : "opacity-0"
                          } px-2 md:px-5 xl:px-10 text-border-thinner tracking-tight py-2 text-white transition duration-300 home-btn-bg rounded-md bottom-5 xl:bottom-[41.3px] uppercase md:text-sm xl:text-md right-0 font-primary`}
                        >
                          Selengkapnya
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </button>
            </div>
            <div className="h-full md:w-1/2">
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
                  <div className="flex flex-col items-center justify-center px-3 py-2 xl:px-7 h-1/2">
                    <h1 className="text-3xl uppercase md:text-3xl xl:text-4xl text-nst-home font-primary">
                      NATIONAL SEMINAR
                      <br />
                      OF TECHNOLOGY
                    </h1>
                    <p className="text-md xl:text-xl font-medium font-secondary mt-1 xl:mt-[11px]">
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
                    {showNst && (
                      <Link href="/nst">
                        <a
                          className={`absolute right-3 xl:right-8 ${
                            activeNst ? "opacity-1" : "opacity-0"
                          } px-2 md:px-5 xl:px-10 text-border-thinner tracking-tight py-2 text-white transition duration-300 home-btn-bg rounded-md bottom-5 xl:bottom-[41.3px] uppercase md:text-sm xl:text-md right-0 font-primary`}
                        >
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
        {/* <section
          id="schemastore"
          className="relative flex flex-col pt-[92px] justify-between w-full min-h-screen z-5 bg-dark-primary"
        >
          <div className="lg:px-[132px] px-5 md:px-16 relative min-h-[calc(100vh-92px)] flex flex-col justify-center">
            <div className="relative z-20 flex flex-col w-full md:gap-6 xl:gap-10">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <h1 className="text-4xl text-white uppercase md:text-5xl xl:text-6xl 2xl:text-7xl font-primary">
                    Schemastore
                  </h1>
                  <h1 className="absolute hidden text-4xl text-white uppercase select-none md:inline top-8 xl:top-10 text-schemastore-shadow md:text-5xl xl:text-6xl 2xl:text-7xl font-primary">
                    Schemastore
                  </h1>
                </div>
                <div className="hidden py-2 xl:py-4 sm:inline">
                  <Link href="/">
                    <a className="px-2 py-2 text-lg text-white uppercase rounded-md select-none md:px-4 xl:py-4 xl:px-10 md:text-xl xl:text-3xl 2xl:text-4xl home-btn-bg text-border-thin font-primary">
                      <span className="hidden md:inline">Lihat</span>{" "}
                      Selengkapnya
                    </a>
                  </Link>
                </div>
              </div>
              <p className="text-white 2xl:text-3xl md:text-2xl text-secondary">
                Temukan merchandise keren Schematics di Schemastore!
              </p>
            </div>
            <div className="relative z-20 flex justify-between w-full gap-4 mt-4 md:mt-8">
              <div className="flex items-center justify-center w-1/4 select-none">
                <img src="/homepage/shirt-example.png" alt="" />
              </div>
              <div className="flex items-center justify-center w-1/4 select-none">
                <img src="/homepage/shirt-example.png" alt="" />
              </div>
              <div className="flex items-center justify-center w-1/4 select-none">
                <img src="/homepage/shirt-example.png" alt="" />
              </div>
              <div className="flex items-center justify-center w-1/4 select-none">
                <img src="/homepage/shirt-example.png" alt="" />
              </div>
            </div>
            <div className="inline-block py-2 mt-4 xl:py-4 sm:hidden">
              <Link href="/">
                <a className="px-2 py-2 text-lg text-white uppercase rounded-md select-none md:px-4 xl:py-4 xl:px-10 md:text-xl xl:text-3xl 2xl:text-4xl home-btn-bg text-border-thin font-primary">
                  <span className="hidden md:inline">Lihat</span> Selengkapnya
                </a>
              </Link>
            </div>
            <img
              className="absolute left-0 w-20 -translate-y-1/2 select-none -bottom-24 md:w-24 xl:w-36"
              src="/homepage/sch-store-left.png"
              alt=""
            />
            <img
              className="absolute top-0 right-0 select-none w-36 md:w-48 xl:w-72"
              src="/homepage/sch-store-right.png"
              alt=""
            />
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
