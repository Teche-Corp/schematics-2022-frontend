import React from "react";
import Head from "next/head";
import { Fragment } from "react";
import Image from "next/image";

const NPC = () => {
  return (
    <Fragment>
      <div>
        <Head>
          <title>Schematics 2022</title>
          <meta name="description" content="Schematics 2022" />
          <link rel="icon" href="/schematics-logo.png" />
        </Head>
      </div>
      <main className="relative overflow-hidden md:w-full w-fit h-fit bg-dark-primary">
        <img
          src="/NPC/TopLeft.png"
          className="absolute md:w-[461px] md:h-[582px] w-[230px] h-[250px] -left-10"
        />
        <img
          src="/NPC/TopRight-1.png"
          className="absolute md:-right-0  md:-translate-y-40 md:w-[461px] md:h-[582px] w-[230px] h-[250px] -right-0 -translate-y-14"
        />
        {/*  NPC Hero*/}
        <div className="flex flex-col md:h-max h-[600px] justify-evenly items-center md:pt-[244px] pt-[100px]">
          <img
            src="/NPC/npc.png"
            className="md:h-[229px] md:w-[600px] md:mb-[22px] w-[500px]"
          />
          <h1 className="md:font-[400] md:text-6xl md:leading-[78px] font-primary text-white text-5xl">
            NATIONAL PROGRAMMING COMPETITION
          </h1>
          <div className="flex mt-4 text-white justify-evenly font-primary gap-x-10 md:gap-x-20 md:mt-14">
            <button className="h-[50px] w-[306px] bg-[#ED5565] rounded-lg">
              TENTANG KOMPETISI
            </button>
            <button className="h-[50px] w-[306px] bg-[#ED5565] rounded-lg">
              SCORE BOARD
            </button>
            <button className="h-[50px] w-[306px] bg-[#ED5565] rounded-lg">
              TIMELINE
            </button>
          </div>
        </div>

        {/* Tentang Kompetisi */}

        <div className="relative content-center w-full ">
          <div className="flex justify-center gap-x-12 content-center  h-[900px] w-full bg-[url('/NPC/Background-1.png')] md:bg-cover bg-auto bg-center bg-no-repeat items-center mb-24 z-50 p-20">
            <img
              src="/NPC/assetNPC.png"
              className="absolute right-0 hidden -translate-y-1/2 md:block"
            />
            <div className="w-[635px] py-[200px] ">
              <h2 className="text-5xl text-justify text-white font-primary">
                Tempat Kompetisi
              </h2>
              <p className="text-justify font-secondary text-[25px] pt-[20px] leading-[37px]">
                Schematics National Programming Contest 2021 merupakan kompetisi
                pemrograman nasional yang menguji kemampuan penyelesaian suatu
                permasalahan dengan algoritma yang paling efektif dan efisien
                menggunakan program komputer dengan spesifikasi yang telah
                ditentukan. Schematics NPC Junior dapat diikuti oleh siswa
                SMA/Sederajat secara perorangan dan Schematics NPC Senior dapat
                diikuti oleh tim beranggotakan maksimal 3 mahasiswa.
              </p>
            </div>
            <div className="flex justify-center py-[200px] select-none">
              <Image src="/NPC/PhotoNPC.png" width={601} height={341} />
            </div>
          </div>
        </div>
        {/* Timeline */}

        <div className="relative flex items-center justify-center w-full">
          <img src="/NPC/TimelineNPC.png" className="select-none" />
        </div>
        {/* Leaf nya nanti disatuin aja sama background gmn? Jd fotonya nyatu sama bg pink nya */}
        {/* Teknis Umum Kompetisi */}
        <div className="flex justify-evenly bg-[url('/NPC/Background-3.png')] bg-cover bg-center bg-no-repeat mb-20 h-[1220px]">
          <div className="mt-[400px]">
            <h1 className="font-primary text-white text-[50px]">
              Teknis Umum Kompetisi
            </h1>
            <ul className="pt-[42px] px-10 md:w-[696px] w-[500px] h-[315px] text-justify font-secondary text-3xl font-medium list-outside list-disc leading-[45px]">
              <li className="md:w-[696px] w-[500px]">
                Schematics NPC Junior dapat diikuti oleh siswa SMA/Sederajat
                secara perorangan dan Schematics NPC Senior dapat diikuti oleh
                tim beranggotakan maksimal 3 mahasiswa.
              </li>
              <li className="mt-10 md:w-[696px] w-[500px]">
                Kegiatan diadakan secara online melalui website schematics
              </li>
            </ul>
          </div>
          <div className="mt-[400px] md:w-[393px] w-[200px] md:h-[400px] h-[300px] bg-slate-700 rounded-lg"></div>
        </div>

        {/* Guidebook */}
        <div className=" flex justify-evenly h-[500px] px-40">
          <h1 className="text-white font-primary font-[400] text-5xl">
            Total Hadiah Rp 15 Juta+++ TUNGGU APALAGI!
          </h1>

          <div className="flex flex-col w-1/2 ">
            <button className="h-[50px] w-[306px] bg-white rounded-lg font-primary">
              Senior Guidebook
            </button>
            <button className="h-[50px] w-[306px] bg-white rounded-lg font-primary mt-[23px]">
              Junior Guidebook
            </button>
            <button className="h-[50px] w-[306px] bg-[#ED5565] rounded-lg text-white font-primary mt-[23px]">
              Daftar Sekarang
            </button>
          </div>
        </div>
        <img
          src="/NPC/BottomLeft.png"
          className="absolute hidden -bottom-40 md:block"
        />
        <img
          src="/NPC/BottomRight.png"
          className="absolute right-0 hidden -bottom-40 md:block"
        />
      </main>
    </Fragment>
  );
};

export default NPC;
