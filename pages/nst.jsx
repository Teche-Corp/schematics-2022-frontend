import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function NST() {
  const [imgCode, setImgCode] = useState(1);
  const changeImg = () => {
    setImgCode((prev) => ((prev + 1) % 3) + 1);
  };
  return (
    <>
      {/* Head */}
      <Head>
        <title>Schematics 2022 | NST</title>
        <meta name='description' content='Schematics 2022' />
        <link rel='stylesheet' href='/schematics-logo.png' />
        <meta charset='UTF-8' />
      </Head>

      <Nav />
      <main className='bg-dark-primary overflow-x-hidden w-full'>
        {/* Header */}
        <section className='w-full h-fit md:min-h-screen'>
          <img
            src='/nst/top-left.svg'
            alt=''
            className='absolute top-0 md:-top-4 -left-10 z-0 w-44 sm:w-48 md:w-56 lg:w-64 xl:w-72 select-none'
          />
          <img
            src='/nst/top-right.svg'
            alt=''
            className='absolute right-0 top-4 w-52 sm:w-60 md:w-64 lg:w-72 xl:w-80 z-0 '
          />
          <img
            className='absolute left-0 md:bottom-10 lg:-bottom-4 select-none w-1/3 hidden md:block md:w-1/5'
            src='/nst/book-new.png'
            alt=''
          />
          <img
            className='absolute right-0 -bottom-24 2xl:-bottom-48  md:w-64 lg:w-84 xl:w-96 select-none hidden md:block'
            src='/nst/terompet.svg'
            alt=''
          />

          <div className='min-h-[calc(100vh)] pt-36 z-10'>
            <div className='w-5/6 md:pt-10 lg:pt-8 mx-auto'>
              <object data='schematics-txt.svg' type=''></object>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img
                src='/nst/nst-text.png'
                alt=''
                className='flex items-center justify-center select-none'
              />
              <h1 className='mt-2 text-4xl font-medium font-primary text-center text-white md:text-6xl uppercase z-10'>
                National Seminar Of technology
              </h1>

              {/* CTA */}
              <div className='flex flex-col items-center justify-around md:flex-row mt-12 text-white text-2xl font-primary gap-10'>
                <Link href='#about'>
                  <a className='bg-[#85D4BE] hover:bg-white hover:text-[#85D4BE] upercase rounded-md px-8 py-3 z-10'>
                    TENTANG SEMINAR
                  </a>
                </Link>
                <Link href='#pembicara'>
                  <a className='bg-[#85D4BE] hover:bg-white hover:text-[#85D4BE] upercase rounded-md px-20 py-3 z-10'>
                    PEMBICARA
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tentang NST */}
        <section id='about' className='relative z-10 pt-20 md:pt-0'>
          {/* top bg */}
          <img className='bg-cover w-full' src='/nst/top-bg1.png' alt='' />
          {/* content */}
          <div className='bg-[#85D4BE] xl:gap-2 gap-4 flex xl:flex-row flex-col px-5 md:px-16 lg:px-[132px] pt-10 pb-2 relative'>
            {/* npc text */}
            <div className='flex flex-col justify-center xl:w-1/2'>
              <div className='relative'>
                <h2 className='relative z-10 text-4xl text-white md:text-5xl font-primary'>
                  Tentang Seminar
                </h2>
                <h2 className='absolute top-0 text-4xl md:text-5xl text-black select-none  font-primary'>
                  Tentang Seminar
                </h2>
              </div>
              <div className='px-2'>
                <p className='mt-4 text-xl md:text-2xl leading-relaxed font-medium text-white'>
                  Schematics National Seminar of Technology 2022 merupakan acara
                  seminar yang dihadirkan untuk memberikan pengetahuan dan
                  perkembangan seputar Teknologi Informasi terkini serta
                  bagaimana teknologi tersebut berdampak pada berbagai sektor di
                  Indonesia. Schematics NST dapat diikuti oleh masyarakat umum.
                </p>
              </div>
            </div>
            {/* npc text end */}
            {/* npc photos */}
            <div className='flex items-center justify-center w-full xl:w-1/2'>
              <img
                src={`/nst/foto-${imgCode}.png`}
                alt='NST Photos'
                width={575}
                className='cursor-pointer select-none'
                onClick={changeImg}
              />
            </div>
            {/* npc photos end */}
          </div>
          {/* bottom-bg */}
          <img className='bg-cover w-full' src='/nst/bottom-bg1.png' alt='' />
        </section>
        {/* Tema Schematics NST */}
        <section>
          <div className='pt-16 flex flex-col items-center justify-center'>
            <h2 className='font-primary text-white text-center text-3xl md:text-7xl'>
              TEMA <br /> SCHEMATICS NST
            </h2>
            <img className='w-2/3 md:w-1/2 mt-4 ' src='/nst/comma.svg' alt='' />

            {/* image */}
            {/* <img src="/nst/tema.svg" alt="" className="pt-12 md:pt-16 "/> */}
            <div className='bg-white rounded-xl md:rounded-2xl w-2/3 sm:w-1/2 md:w-full lg:w-full xl:w-3/5 mx-auto z-20 mt-10'>
              <video width={1000} controls>
                <source src='https://drive.google.com/uc?export=view&id=1b9vFK5Kw3ifgnK2uLFBFSsdB9qP66WQ5' />
              </video>
            </div>
          </div>
        </section>

        {/* Pembicara NST */}
        <section id='pembicara' className='pt-24 pb-40 relative min-h-max'>
          <h2 className='text-center text-white font-primary text-3xl md:text-7xl'>
            Pembicara <br />
            Schematics NST
          </h2>
          {/* Pembicara NST */}
          <div className='flex flex-wrap items-center justify-center gap-x-20 mt-10'>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-end w-[320px] h-[419px] bg-[#85D5BE]">
                <img src="/nst/AlamsyahHanza.png" alt=""  className=""/>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#85D5BE] h-24 -translate-y-1/2 w-11/12 rounded-xl">
                <h1 className="font-primary text-2xl">Alamsyah Hanza</h1>
                <h2 className="font-secondary text-[16px] font-medium text-center">Data Scientist at GOJEK</h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-end w-[320px] h-[419px] bg-[#85D5BE]">
                <img src="/nst/NabilBadjri.png" alt=""  className=""/>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#85D5BE] h-24 -translate-y-1/2 w-10/12 rounded-xl">
                <h1 className="font-primary text-2xl">Nabil Badjri</h1>
                <h2 className="font-secondary text-[16px] font-medium text-center">Chief Business Development Officer at IYKRA</h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-end w-[320px] h-[419px] bg-[#85D5BE]">
                <img src="/nst/RickentPutra.png" alt=""  className=""/>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#85D5BE] h-24 -translate-y-1/2 w-11/12 rounded-xl">
                <h1 className="font-primary text-2xl">Rickent Putra Haki</h1>
                <h2 className="font-secondary text-[16px] font-medium text-center">Data Analyst at DTO, Ministry of Health</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-end w-[320px] h-[419px] bg-[#85D5BE] pb-9">
                <img src="/nst/SiskaArifiani.png" alt=""  className=""/>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#85D5BE] h-24 -translate-y-1/2 w-full rounded-xl">
                <h1 className="font-primary text-2xl">Siska Arifiani</h1>
                <h2 className="font-secondary text-[16px] font-medium">Dosen/Moderator</h2>
              </div>
            </div>
          </div>

          {/* bottom */}
          <img
            className='absolute bottom-0 left-0 w-1/3 md:w-1/4 xl:w-1/3 sm:1/2 z-0'
            src='/nst/bottom-left1.svg'
            alt=''
          />
          <img
            src='/nst/bottom-right1.svg'
            alt=''
            className='absolute bottom-0 right-0 w-1/3 md:w-1/3 xl:w-1/3 sm:1/2 z-0'
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
