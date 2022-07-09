import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function NLC() {
  return (
    <div>
      <Head>
        <title>Schematics 2022 | NLC</title>
        <meta name='description' content='Schematics 2022' />
        <link rel='icon' href='/schematics-logo.png' />
        <meta charset='UTF-8' />
      </Head>

      <main className='bg-dark-primary'>
        {/* Header */}
        <section className='w-full min-h-screen bg-dark-primary'>
          <img
            className='absolute -top-2 w-[445.2px] h-[601.33125px]'
            src='nlc/nlc-top-left.png'
            alt=''
          />
          <img
            className='absolute top-0 right-0 w-[437.5px] h-[575.4px]'
            src='nlc/nlc-top-right.png'
            alt=''
          />
          {/* NLC Text */}
          <div className='pt-48 p-10 w-fit mx-auto flex items-end block'>
            <img
              className='inline-block w-[210px] h-[229px] mr-4'
              src='nlc/N.png'
              alt=''
            />
            <img
              className='inline-block w-[233px] h-[296px]'
              src='nlc/L.png'
              alt=''
            />
            <img
              className='inline-block w-[216px] h-[238px]'
              src='nlc/C.png'
              alt=''
            />
          </div>

          <h1 className='w-fit mx-auto font-primary text-white text-7xl'>
            NATIONAL LOGIC COMPETITION
          </h1>

          <div className='w-3/4 mx-auto mt-24 flex justify-between text-center text-2xl font-primary'>
            <Link href='#description'>
              <a className='px-4 py-2 w-[306px] h-[50px] bg-[#FFDB7A] rounded-lg'>
                TENTANG KOMPETISI
              </a>
            </Link>
            <Link href='#'>
              <a className='px-4 py-2 w-[306px] h-[50px] bg-[#FFDB7A] rounded-lg'>
                SCORE BOARD
              </a>
            </Link>
            <Link href='#timeline'>
              <a className='px-4 py-2 w-[306px] h-[50px] bg-[#FFDB7A] rounded-lg'>
                TIMELINE
              </a>
            </Link>
          </div>
        </section>

        {/* Deskripsi */}

        <section
          id='description'
          className="w-full min-h-screen mt-8 bg-[url('/nlc/bg-desc.png')] bg-contain bg-no-repeat relative z-10"
        >
          <img
            className='absolute -top-24 translate-y-2 right-0 w-[291.2px] h-[380.8px]'
            src='nlc/joystick.png'
            alt=''
          />
          {/* content (desc/gambar) */}
          <div className='flex items-center mx-auto -translate-x-8 pt-52 w-5/6 gap-24'>
            <div className='w-3/5 font-secondary text-3xl leading-[37.5px]'>
              Schematics National Logic Competition 2021 merupakan kompetisi
              yang menguji kemampuan berpikir secara logis dan analitis melalui
              berbagai persoalan dan permainan menarik.
            </div>
            <div className='w-1/2'>
              <img className='scale-110' src='/nlc/desc-img.png' alt='' />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          id='timeline'
          className='w-full min-h-screen bg-contain bg-no-repeat relative'
        >
          <img
            className='absolute w-[384.31px] h-[361.96px] -top-64 right-0 -z-1'
            src='nlc/timeline-top-right.png'
            alt=''
          />

          <img
            className='absolute w-[494.27px] h-[338.27px] bottom-3'
            src='nlc/timeline-bottom-left.png'
            alt=''
          />
          <img
            className='w-[769px] h-[716.64px] mx-auto -translate-y-24'
            src='nlc/timeline.png'
            alt=''
          />
        </section>

        <section
          id='scoreboard'
          className="w-full min-h-screen -mt-56 bg-[url('/nlc/bg-desc.png')] bg-contain bg-no-repeat relative z-10"
        >
          <div className='flex item-center gap-10 w-5/6 mx-auto translate-y-36'>
            <div className='w-1/2 pt-8 '>
              <div>
                <h1 className='font-primary text-white text-5xl absolute drop-shadow-md'>
                  Teknis Umum Kompetisi
                </h1>
                <h1 className='font-primary text-black text-5xl absolute translate-x-1 drop-shadow-md'>
                  Teknis Umum Kompetisi
                </h1>
              </div>

              <div className='mt-20 relative w-4/5 '>
                <li className='font-secondary text-3xl text-black leading-10 list-none'>
                  &#9679; Dapat diikuti oleh satu tim beranggotakan maksimal dua
                  siswa SMA / sederajat
                </li>
                <br />
                <br />
                <li className='font-secondary text-3xl text-black leading-10 list-none'>
                  &#9679; Kegiatan diadakan secara online melalui website
                  schematics
                </li>
              </div>
            </div>
            <div className='w-1/2'>
              <img
                className='bg-white rounded-2xl w-[306.4px] h-[383.2px] mx-auto translate-x-12'
                src='nlc/video-img.png'
              />
            </div>
          </div>
        </section>
        <section className='w-full min-h-max bg-dark-primary relative'>
          <img
            className='w-[281px] h-[603.01px] absolute left-28 -translate-y-3/4'
            src='nlc/price.png'
            alt=''
          />
          <img
            className='absolute w-[434.25px] h-[459.75px] right-4 -top-72 translate-y-3'
            src='nlc/lamp.png'
            alt=''
          />
          <div className='flex items-center w-11/12 mx-auto pt-44'>
            <div className='w-3/5'>
              <h1 className='font-primary text-5xl text-white'>
                Total Hadiah Rp 1,5 Juta+++
                <br />
                Dan Freepas Teknik Informatika ITS
              </h1>
            </div>
            <div className='w-2/5 flex flex-col gap-8 items-center'>
              <button className='font-primary text-[25px] leading-7 bg-slate-50 w-1/2 px-6 py-3 rounded-xl'>
                Unduh Guidebook
              </button>
              <button className='font-primary text-[25px] leading-7 text-white bg-[#FFCD46] w-1/2 px-6 py-3 rounded-xl'>
                Daftar Sekarang
              </button>
            </div>
          </div>
        </section>
        <section
          id='boardgame'
          className='w-full min-h-max mt-24 relative overflow-hidden'
        >
          <img className='mx-auto' src='nlc/boardgame.svg' alt='' />
          <img
            className='w-[458.25px] h-[669.75px] absolute -bottom-48 translate-y-1'
            src='nlc/bottom-left.png'
            alt=''
          />
          <img
            className='w-[458.25px] h-[669.75px] absolute -bottom-56 translate-y-2 right-0'
            src='nlc/bottom-right.png'
            alt=''
          />
        </section>
      </main>
    </div>
  );
}
