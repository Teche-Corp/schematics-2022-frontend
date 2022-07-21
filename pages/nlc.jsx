import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function NLC() {
  return (
    <div>
      <Head>
        <title>Schematics 2022 | NLC</title>
        <meta name="description" content="Schematics 2022" />
        <link rel="icon" href="/schematics-logo.png" />
        <meta charset="UTF-8" />
      </Head>

      <Nav />
      <main className="bg-dark-primary overflow-x-hidden">
        {/* Header */}
        <section className="relative w-full min-h-max md:min-h-screen bg-dark-primary">
          <img
            className="absolute top-0 hidden md:block md:w-[445.2px] md:h-[601.33125px]"
            src="nlc/nlc-top-left.png"
            alt=""
          />
          <img
            className="absolute top-0 right-0 hidden md:block md:w-[437.5px] md:h-[575.4px]"
            src="nlc/nlc-top-right.png"
            alt=""
          />
          <img
            className="absolute w-[124px] h-[192.5px] top-0 left-0 md:hidden"
            src="nlc/top-left-mobile.png"
            alt=""
          />
          <img
            className="absolute w-[129.5px] h-[159px] top-0 right-0 md:hidden"
            src="nlc/top-right-mobile.png"
            alt=""
          />
          {/* NLC Text */}
          <div className="flex items-end p-10 pt-20 mx-auto md:pt-48 w-fit">
            <img
              className="inline-block w-[105px] md:w-[210px] h-[114.5px] md:h-[229px] md:r-4"
              src="nlc/N.png"
              alt=""
            />
            <img
              className="inline-block w-[116.5px] md:w-[233px] h-[148px] md:h-[296px]"
              src="nlc/L.png"
              alt=""
            />
            <img
              className="inline-block w-[108px] md:w-[216px] h-[119px] md:h-[238px]"
              src="nlc/C.png"
              alt=""
            />
          </div>

          <h1 className="mx-auto text-lg text-white w-fit font-primary md:text-7xl">
            NATIONAL LOGIC COMPETITION
          </h1>

          <div className="w-11/12 md:w-3/4 mx-auto mt-4 md:mt-24 flex justify-between text-center text-[10px] md:text-2xl font-primary">
            <Link href="#description">
              <a className="px-1 md:px-4 py-1 md:py-2 w-[115px] md:w-[306px] h-[20px] md:h-[50px] bg-[#FFDB7A] rounded-md md:rounded-lg">
                TENTANG KOMPETISI
              </a>
            </Link>
            <Link href="#">
              <a className="px-2 md:px-4 py-1 md:py-2 w-[115px] md:w-[306px] h-[20px] md:h-[50px] bg-[#FFDB7A] rounded-md md:rounded-lg">
                SCORE BOARD
              </a>
            </Link>
            <Link href="#timeline">
              <a className="px-2 md:px-4 py-1 md:py-2 w-[115px] md:w-[306px] h-[20px] md:h-[50px] bg-[#FFDB7A] rounded-md md:rounded-lg">
                TIMELINE
              </a>
            </Link>
          </div>
        </section>

        {/* Deskripsi */}

        <section
          id="description"
          className="w-full h-64 md:min-h-screen mt-8 bg-[url('/nlc/bg-desc-mobile.png')] md:bg-[url('/nlc/bg-desc.png')] bg-contain bg-no-repeat relative z-10"
        >
          <img
            className="hidden md:block absolute -top-24 translate-y-2 right-0 w-[291.2px] h-[380.8px]"
            src="nlc/joystick.png"
            alt=""
          />
          {/* content (desc/gambar) */}
          <div className="flex items-center w-11/12 gap-2 pt-12 mx-auto md:-translate-x-8 md:pt-52 md:w-5/6 md:gap-24">
            <div className="flex flex-col gap-8 md:gap-10 w-3/5 font-secondary md:text-3xl leading-1 md:leading-[37.5px]">
              <div className="align-center md:text-5xl">
                <h1 className="font-primary absolute text-white drop-shadow-md -translate-x-[2px] md:-translate-x-1 ">
                  Tentang Kompetisi
                </h1>
                <h1 className="absolute text-black font-primary drop-shadow-md ">
                  Tentang Kompetisi
                </h1>
              </div>
              <div className="md:mt-10 text-[10px] md:text-[25px]">
                Schematics National Logic Competition 2021 merupakan kompetisi
                yang menguji kemampuan berpikir secara logis dan analitis
                melalui berbagai persoalan dan permainan menarik.
              </div>
            </div>
            <div className="w-1/2">
              <img className="md:scale-110" src="/nlc/desc-img.png" alt="" />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="relative w-full h-80 md:min-h-screen">
          <img
            className="absolute w-[76.862px] md:w-[384.31px] h-[72.392px] md:h-[361.96px] -top-24 md:-top-64 right-0 -z-1"
            src="nlc/timeline-top-right.png"
            alt=""
          />

          <img
            className="absolute w-[108.7394px] md:w-[494.27px] h-[74.4194px] md:h-[338.27px] -left-1 md:-left-3 bottom-8 md:-left-bottom-8"
            src="nlc/timeline-bottom-left.png"
            alt=""
          />
          <img
            className="w-[307.6px] md:w-[769px] h-[286.656px] md:h-[716.64px] mx-auto -translate-y-16 md:-translate-y-24 mt-4"
            src="nlc/timeline.png"
            alt=""
          />
        </section>

        <section
          id="scoreboard"
          className="w-full h-64 md:min-h-screen -mt-36 md:-mt-56 bg-[url('/nlc/bg-desc-mobile.png')] md:bg-[url('/nlc/bg-desc.png')] bg-contain bg-no-repeat relative z-10"
        >
          <div className="flex w-5/6 mx-auto translate-y-12 item-center md:gap-10 md:translate-y-36">
            <div className="w-3/5 md:w-1/2 md:pt-8 ">
              <div className="md:text-5xl">
                <h1 className="absolute text-white font-primary drop-shadow-md">
                  Teknis Umum Kompetisi
                </h1>
                <h1 className="font-primary text-black absolute translate-x-[2px] md:translate-x-1 drop-shadow-md">
                  Teknis Umum Kompetisi
                </h1>
              </div>

              <div className="relative w-4/5 mt-8 md:mt-20 ">
                <li className="font-secondary text-[10px] md:text-3xl text-black md:leading-10 list-none">
                  &#9679; Dapat diikuti oleh satu tim beranggotakan maksimal dua
                  siswa SMA / sederajat
                </li>
                <br className="hidden md:block" />
                <br className="hidden md:block" />

                <li className="font-secondary text-[10px] md:text-3xl text-black md:leading-10 list-none">
                  &#9679; Kegiatan diadakan secara online melalui website
                  schematics
                </li>
              </div>
            </div>
            <div className="self-center w-2/5 md:w-1/2">
              <img
                className="bg-white rounded-xl md:rounded-2xl w-[93px] md:w-[306.4px] h-[116px] md:h-[383.2px] mx-auto md:translate-x-12"
                src="nlc/video-img.png"
              />
            </div>
          </div>
        </section>
        <section className="relative w-full pb-4 min-h-max bg-dark-primary md:pb-0">
          <img
            className="w-[129px] md:w-[281px] h-[276.83px] md:h-[603.01px] absolute left-6 md:left-28 -translate-y-56 md:-translate-y-2/3"
            src="nlc/price.png"
            alt=""
          />
          <img
            className="hidden md:block absolute w-[434.25px] h-[459.75px] right-4 -top-72 translate-y-3"
            src="nlc/lamp.png"
            alt=""
          />
          <div className="flex items-center w-11/12 pt-16 mx-auto md:pt-52">
            <div className="w-fit">
              <h1 className="font-primary text-lg leading-tight md:leading-snug md:text-[50px] text-white">
                Total Hadiah Rp 17 Juta+++
                <br />
                Dan Freepas Teknik Informatika ITS
              </h1>
            </div>
            <div className="flex flex-col items-center w-2/6 gap-3 md:gap-12">
              <button className="font-primary text-[10px] md:text-[25px] md:leading-7 bg-slate-50 w-full md:w-2/3 px-1 md:px-6 py-1 md:py-3 rounded-md md:rounded-xl">
                Unduh Guidebook
              </button>
              <button className="font-primary text-[10px] md:text-[25px] md:leading-7 text-white bg-[#FFCD46] w-full md:w-2/3 px-1 md:px-6 py-1 md:py-3 rounded-md md:rounded-xl">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </section>
        <section
          id="nlc-robot"
          className="relative hidden w-full mt-24 overflow-hidden md:block md:min-h-max"
        >
          <img className="mx-auto -mb-20" src="nlc/nlc-robot.svg" alt="" />
          <img
            className="w-[458.25px] h-[669.75px] absolute -bottom-48 translate-y-1"
            src="nlc/bottom-left.png"
            alt=""
          />
          <img
            className="w-[458.25px] h-[669.75px] absolute -bottom-56 translate-y-2 right-0"
            src="nlc/bottom-right.png"
            alt=""
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
