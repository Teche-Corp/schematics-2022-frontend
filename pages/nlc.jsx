import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function NLC() {
  return (
    <>
      {/* Fragment */}
      <Head>
        <title>Schematics 2022 | NLC</title>
        <meta name='description' content='Schematics 2022' />
        <link rel='icon' href='/schematics-logo.png' />
        <meta charset='UTF-8' />
      </Head>
      <Nav />
      <main className='bg-dark-primary overflow-x-hidden'>
        {/* Header */}
        <section className='relative w-full min-h-max  bg-dark-primary'>
          <img
            className='absolute top-0 hidden md:block w-64 lg:w-80'
            src='nlc/nlc-top-left.png'
            alt=''
          />
          <img
            className='absolute top-0 right-0 hidden md:block w-72 lg:w-80'
            src='nlc/nlc-top-right.png'
            alt=''
          />
          <img
            className='absolute w-[186px] h-[238.5px] top-0 left-0 md:hidden'
            src='nlc/top-left-mobile.png'
            alt=''
          />
          <img
            className='absolute w-[194.25px] h-[238.5px] top-0 right-0 md:hidden'
            src='nlc/top-right-mobile.png'
            alt=''
          />

          <div className='w-3/4 pt-32 mx-auto'>
            <object data='schematics-txt.svg' type=''></object>
          </div>
          {/* NLC Text */}
          <div className='flex items-end pb-4 md:pb-6 lg:pb-10  mx-auto pt-8 md:pt-12 w-fit md:scale-75 lg:scale-95 xl:scale-100'>
            <img
              className='inline-block w-[105px] md:w-[210px] h-[114.5px] md:h-[229px] md:r-4'
              src='nlc/N.png'
              alt=''
            />
            <img
              className='inline-block w-[116.5px] md:w-[233px] h-[148px] md:h-[296px]'
              src='nlc/L.png'
              alt=''
            />
            <img
              className='inline-block w-[108px] md:w-[216px] h-[119px] md:h-[238px]'
              src='nlc/C.png'
              alt=''
            />
          </div>
          {/* Logo */}
          <h1 className='text-center text-2xl text-white  font-primary md:text-4xl lg:text-6xl xl:text-7xl'>
            NATIONAL LOGIC COMPETITION
          </h1>

          <div className='w-11/12 md:w-5/6 mx-auto mt-4 md:mt-12 flex flex-col md:flex-row gap-4 md:gap-4 justify-around items-center text-center text-[16px] md:text-md lg:text-xl xl:text-2xl font-primary'>
            <Link href='#description'>
              <a className='px-1  md:px-4 py-1 md:py-2 w-[306px] h-[30px] md:h-[50px] bg-[#FFDB7A] rounded-md md:rounded-lg'>
                TENTANG KOMPETISI
              </a>
            </Link>
            <Link href='#timeline'>
              <a className='px-2 md:px-4 py-1 md:py-2 w-[306px] h-[30px] md:h-[50px] bg-[#FFDB7A] rounded-md md:rounded-lg'>
                TIMELINE
              </a>
            </Link>
          </div>
        </section>

        {/* Deskripsi */}
        <img
          id='description'
          src='/nlc/bg-top.png'
          alt=''
          className='w-full bg-cover'
        />
        <section className='bg-[#FFCD46] w-full h-fit relative z-10'>
          <img
            className='hidden md:block absolute -top-36 right-0 md:w-32 lg:w-36 xl:w-44 md:translate-y-12 lg:translate-y-8 xl:translate-y-0'
            src='nlc/joy.png'
            alt=''
          />

          {/* Belum fix */}
          {/* content (desc/gambar) */}
          <div className='flex flex-col md:flex-row items-center w-5/6 mx-auto md:py-6 lg:py-8 pt-8 gap-8 md:gap-16 lg:gap-20 xl:gap-24'>
            <div className='w-5/6 sm:w-3/4 md:w-1/2 flex flex-col md:gap-10 font-secondary md:text-3xl leading-1 md:leading-[37.5px]'>
              <div className='align-center lg:text-3xl xl:text-4xl'>
                <h1 className='font-primary absolute text-white drop-shadow-md -translate-x-[2px] md:-translate-x-1 hidden md:block'>
                  Tentang Kompetisi
                </h1>
                <h1 className='md:absolute text-white md:text-black font-primary drop-shadow-md text-center text-3xl xl:text-4xl'>
                  Tentang Kompetisi
                </h1>
              </div>
              <div className='mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-[20px] xl:text-[25px] md:leading-7 lg:leading-8 xl:leading-9 '>
                Schematics National Logic Competition 2022 merupakan kompetisi
                yang menguji kemampuan berpikir secara logis dan analitis
                melalui berbagai persoalan dan permainan menarik.
              </div>
            </div>
            <div className='w-3/4 md:w-1/2'>
              <img className='w-full' src='/nlc/desc-img.png' alt='' />
            </div>
          </div>
        </section>

        {/* Bawah */}
        <img
          id='timeline'
          src='/nlc/bg-bot.png'
          alt=''
          className='relative bg-cover w-full z-[1]'
        />

        {/* Timeline */}
        <section id='timeline' className='relative w-full h-max'>
          {/* Top Card */}
          <img
            className='absolute w-2/12 right-0 -translate-y-[70%] translate-x-3 z-0'
            src='nlc/top-card.png'
            alt=''
          />
          {/* Timeline */}
          <img
            className='w-[384.5px] sm:w-[461.4px] md:w-[576.75px] lg:w-[769px] h-[458.32px] sm:h-[529.984px] md:h-[637.48px] lg:h-[816.64px] mx-auto -translate-y-4 md:-translate-y-8  '
            src='nlc/timeline.png'
            alt=''
          />
          {/* Bottom Card */}
          <img
            className='absolute w-3/12 -left-1 md:-left-3 bottom-0 md:-left-bottom-8 md:block z-0'
            src='nlc/bottom-card.png'
            alt=''
          />
        </section>

        {/* Teknis Umum Competition */}
        {/* Bg Top */}
        <img
          src='/nlc/bg-top.png'
          alt=''
          className=' relative bg-cover w-full -mt-[15%] md:-mt-[14%] lg:-mt-[13%] z-1'
        />
        {/*  Content*/}
        <section
          id='scoreboard'
          className='bg-[#FFCD46] w-full h-fit relative z-20'
        >
          <div className='flex flex-col md:flex-row w-5/6 mx-auto item-center gap-10 md:gap-10 pt-4 md:pt-0'>
            <div className='flex md:block w-full md:w-1/2 md:pt-8 '>
              <div className='md:text-3xl lg:text-4xl xl:text-5xl z-20'>
                <h1 className='absolute text-white font-primary drop-shadow-md text-3xl lg:text-4xl xl:text-5xl'>
                  Teknis Umum Kompetisi
                </h1>
                <h1 className='font-primary text-black absolute translate-x-[2px] md:translate-x-1 drop-shadow-md hidden md:block'>
                  Teknis Umum Kompetisi
                </h1>
              </div>

              <div className='relative w-full lg:w-4/5 mt-12 md:mt-16 lg:mt-20 z-20'>
                <li className='font-secondary text-[18px] md:text-2xl lg:text-3xl text-black md:leading-9 lg:leading-10 list-none text-justify'>
                  &#9679; Satu tim dapat beranggotakan maksimal tiga siswa/i
                  dari sekolah yang sama dan belum dinyatakan lulus
                  SMA/SMK/MA/Sederajat Kegiatan Schematics NLC 2022 diadakan
                  secara hybrid.
                </li>
                <br className='block' />
                <br className='hidden lg:block' />

                <li className='font-secondary text-[18px] md:text-2xl lg:text-3xl text-black md:leading-9 lg:leading-10 list-none mt-2 text-justify'>
                  &#9679; Babak penyisihan dilaksanakan secara online dan
                  offline. Babak perempat final, semifinal, final, dan Awarding
                  Night dilaksanakan secara offline.
                </li>
              </div>
            </div>
            <div className="flex items-center justify-center h-64 select-none sm:px-16 xl:h-auto xl:w-1/2">
              <iframe
                className="w-full h-full opacity-80 active:opacity-100 active:bg-none"
                frameBorder={0}
                src="https://drive.google.com/file/d/1mMte6eZM1T_Sfg7bQcryLIcMNfcG94C-/preview"
              ></iframe>
            </div>
          </div>
          <div className='absolute h-96 w-40 md:w-56 lg:w-64 xl:w-72 bottom-48 md:bottom-24 lg:bottom-12 translate-x-1/2 translate-y-1/2 -left-16 md:-left-24 -z-10 bg-[#FFCD46]'>
            <div className='relative w-full h-full'>
              <div className='absolute w-full text-center translate-y-full -bottom-12 md:bottom-0'>
                <h2 className='text-xl text-black md:text-4xl font-primary'>
                  Rp 150k/tim
                </h2>
              </div>
              <div className='absolute bg-[#FFCD46] w-full h-[50%] bottom-12 -z-10 translate-y-full rounded-b-full'></div>
            </div>
          </div>
          <img
            className='hidden md:block absolute w-[300px] right-4 -bottom-64 translate-y-3 z-0'
            src='nlc/lamp.png'
            alt=''
          />
        </section>
        {/* Bg Bottom */}
        <img
          src='nlc/bg-bot.png'
          alt=''
          className='relative bg-cover w-full z-20'
        />

        <section className='relative w-full pb-4 min-h-max bg-dark-primary md:pb-0'>
          <div className='flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-0 items-center w-11/12 pt-32 mx-auto md:pt-52'>
            <div className='w-fit'>
              <h1 className='font-primary text-3xl leading-tight md:leading-snug sm:text-40 md:text-44 lg:text-[50px] text-white'>
                Total Hadiah Rp 17 Juta+++
                <br />
                Dan Freepass Teknik Informatika ITS
              </h1>
            </div>
            <div className='flex flex-col items-center w-full md:w-2/6 gap-3 md:gap-8 lg:gap-12'>
              <Link href='https://drive.google.com/file/d/1QKap6V7x-k80DZ-1rCGuTIRRqaY4ceSH/view?usp=sharing'>
                <a
                  target='_blank'
                  className='font-primary text-[16px] md:text-[20px] lg:text-[25px] md:leading-7 bg-slate-50 w-[306px] md:w-[250px] lg:w-[306px] h-[30px] md:h-[50px] px-1 md:px-6 py-1 md:py-3 rounded-md md:rounded-xl text-center'
                >
                  Unduh Guidebook
                </a>
              </Link>
              <Link href='/dashboard'>
                <a
                  target='_blank'
                  className='font-primary text-[16px] md:text-[20px] lg:text-[25px] md:leading-7 text-white bg-[#FFCD46] w-[306px] md:w-[250px] lg:w-[306px] h-[30px] md:h-[50px] px-1 md:px-6 py-1 md:py-3 rounded-md md:rounded-xl text-center'
                >
                  Daftar Sekarang
                </a>
              </Link>
              <Link href='https://drive.google.com/drive/folders/1TgcidIjyzGt7xXtmqJ6ty24EboesImsI?usp=sharing'>
                <a
                  target='_blank'
                  className='font-primary text-[16px] md:text-[20px] lg:text-[25px] md:leading-7 text-white bg-[#FFCD46] w-[306px] md:w-[250px] lg:w-[306px] h-[30px] md:h-[50px] px-1 md:px-6 py-1 md:py-3 rounded-md md:rounded-xl text-center'
                >
                  Unduh Contoh Soal
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section
          id='nlc-robot'
          className='relative w-full mt-16 md:mt-24 overflow-hidden md:block md:min-h-max'
        >
          <img
            className='w-full md:w-10/12 lg:w-11/12 xl:w-full mx-auto md:-mb-10 lg:-mb-14 xl:-mb-20'
            src='nlc/nlc-robot.svg'
            alt=''
          />
          <img
            className='w-[152.75px] md:w-[229px] lg:w-[300px] xl:w-[458.25px] absolute -bottom-10 md:-bottom-20 xl:-bottom-48 lg:-bottom-24 translate-y-1'
            src='nlc/bottom-left.png'
            alt=''
          />
          <img
            className='w-[152.75px] md:w-[229px] lg:w-[300px] xl:w-[458.25px] absolute -bottom-8 md:-bottom-16 lg:-bottom-24 xl:-bottom-40 translate-y-2 right-0'
            src='nlc/bottom-right.png'
            alt=''
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
