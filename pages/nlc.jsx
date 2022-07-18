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
        <section className="min-h-screen pt-[80px] md:pt-0 bg-dark-primary relative">
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
          <div className="flex items-end p-10 pt-10 mx-auto md:pt-48 w-fit">
            <img
              className="w-[400px] md:w-[683px] select-none"
              src="nlc/nlc.png"
              alt=""
            />
          </div>

          <h1 className="mx-auto text-2xl text-white w-fit font-primary md:text-7xl text-center">
            NATIONAL LOGIC COMPETITION
          </h1>

          <div className="flex flex-col justify-center items-center gap-5 mt-12 select-none md:mt-16 md:gap-10 xl:flex-row 2xl:gap-20">
            <div className="py-2">
              <Link href="#about">
                <a className="bg-[#FFDB7A] text-black font-primary uppercase text-xl md:text-2xl px-6 md:px-[24px] py-2 rounded-md">
                  Tentang Kompetisi
                </a>
              </Link>
            </div>
            <div className="py-2">
              <Link href="#score-board">
                <a className="bg-[#FFDB7A] text-black font-primary uppercase text-xl md:text-2xl md:px-16 px-[56px] py-2 rounded-md">
                  Score Board
                </a>
              </Link>
            </div>
            <div className="py-2">
              <Link href="#timeline">
                <a className="bg-[#FFDB7A] text-black font-primary uppercase text-xl md:text-2xl md:px-[92px] px-[79px] py-2 rounded-md">
                  Timeline
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Deskripsi */}

        <section id="about" className="relative min-h-screen bg-dark-primary">
          <img
            src="/nlc/bg-top.png"
            className="relative top-0 left-0 w-full select-none z-0"
            alt=""
          />
          <img
            src="/nlc/joystick.png"
            alt=""
            className="absolute right-0 -translate-y-1/2 w-36 md:w-72 top-10 md:top-20 pt-10 z-20"
          />
          <div className="bg-[#FFCD46] xl:gap-0 gap-4 flex xl:flex-row flex-col px-5 md:px-16 lg:px-[132px] pt-10 pb-2 relative z-10">
            {/* npc text */}
            <div className="flex flex-col justify-center xl:w-1/2">
              <div className="relative">
                <h2 className="relative z-10 text-4xl text-white md:text-5xl font-primary">
                  Tentang Kompetisi
                </h2>
                <h2 className="absolute top-0 text-4xl md:text-5xl text-black select-none -translate-x-1.5 font-primary">
                  Tentang Kompetisi
                </h2>
              </div>
              <div className="px-2">
                <p className="mt-4 text-xl md:text-2xl leading-relaxed font-medium text-[#231F20]">
                  Schematics National Logic Competition 2021 merupakan kompetisi yang menguji kemampuan berpikir secara logis dan analitis melalui berbagai persoalan dan permainan menarik.
                </p>
              </div>
            </div>
            {/* npc text end */}
            {/* npc photos */}
            <div className="flex items-center justify-center w-full xl:w-1/2 z-0">
              <img
                src="/nlc/desc-img.png"
                alt="NLC Photos"
                className="select-none"
              />
            </div>
            {/* npc photos end */}
          </div>
          <div className="relative">
            <img
              src="/nlc/bg-top-2.png"
              className="relative bottom-0 left-0 z-20 w-full select-none"
              alt=""
            />
            <img
            className="absolute w-[76.862px] md:w-[384.31px] h-[72.392px] md:h-[361.96px] -top-24 md:-top-64 right-0 -z-1"
            src="nlc/timeline-top-right.png"
            alt=""
          />
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="relative w-full h-80 md:min-h-screen z-10">

          <img
            className="w-[307.6px] md:w-[769px] h-[286.656px] md:h-[716.64px] mx-auto -translate-y-16 md:-translate-y-24 mt-[30px]"
            src="nlc/timeline.png"
            alt=""
          />
        </section>

        <section id="teknis" className="relative min-h-screen bg-dark-primary -mt-36 sm:-mt-[100px] lg:-mt-[350px]">
          
          <img
            src="/nlc/bg-top.png"
            className="relative top-0 left-0 w-full"
            alt=""
          />
          <div className="bg-[#FFCD46] flex xl:flex-row flex-col xl:gap-0 gap-5 py-10 px-5 md:px-16 lg:px-[132px] relative z-20">
            {/* npc text */}
            <div className="flex flex-col justify-center xl:w-1/2">
              <div className="relative">
                <h2 className="relative z-10 text-4xl text-white md:text-5xl font-primary">
                  Teknis Umum Kompetisi
                </h2>
                <h2 className="absolute top-0 text-4xl text-black -translate-x-1 md:text-5xl font-primary">
                  Teknis Umum Kompetisi
                </h2>
              </div>
              <div className="px-7">
                <ul className="mt-4 text-xl list-disc md:text-2xl">
                  <li className="font-medium font-secondary">
                  Dapat diikuti oleh satu tim beranggotakan maksimal dua siswa SMA/sederajat
                  </li>
                  <li className="mt-6 font-medium font-secondary">
                    Kegiatan diadakan secara online melalui website schematics.
                  </li>
                </ul>
              </div>
            </div>
            {/* npc text end */}
            {/* npc photos */}
            <div className="flex items-center justify-center xl:w-1/2">
              <img src="/npc/PhotoNPC.png" alt="NPC Photos" />
            </div>
            {/* npc photos end */}
          </div>
          <div className="relative">
            <img
              src="/nlc/bg-top-2.png"
              className="relative bottom-0 left-0 w-full"
              alt=""
            />
          </div>
        </section>

        <section
          id="guidebook"
          className="overflow-y-hidden bg-dark-primary relative px-5 md:px-16 lg:px-[132px]"
        >
          <div className="flex flex-col justify-center xl:items-center xl:flex-row py-36">
            {/* guidebook text */}
            <div className="xl:w-1/2">
              <h2 className="text-4xl text-center text-white xl:text-left 2xl:text-5xl font-primary">
                Total Hadiah Rp 15 Juta+++
              </h2>
              <h2 className="mt-6 text-4xl text-center text-white uppercase xl:text-start sm:mt-2 2xl:text-5xl font-primary">
                Tunggu Apalagi!
              </h2>
            </div>
            {/* guidebook text end */}
            {/* guidebook links */}
            <div className="flex flex-col items-center justify-center gap-6 mt-10 xl:gap-4 xl:mt-0 xl:w-1/2">
              <div className="py-2">
                <Link href="#guidebook">
                  <a className="px-4 py-2 text-2xl bg-white rounded-md sm:px-16 2xl:text-4xl font-primary">
                    Unduh Guidebook
                  </a>
                </Link>
              </div>
              <div className="py-2">
                <Link href="#guidebook">
                  <a className="sm:px-[73.5px] px-[22px] text-2xl py-2 2xl:text-4xl bg-[#FFCD46] text-white rounded-md font-primary">
                    Daftar Sekarang
                  </a>
                </Link>
              </div>
            </div>
            {/* guidebook links end */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
