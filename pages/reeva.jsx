import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Reeva = () => {
  const [imgCode, setImgCode] = useState(1);
  const router = useRouter();
  const changeImg = () => {
    setImgCode((prev) => ((prev + 1) % 3) + 1);
  };
  return (
    <>
      <Head>
        <title>Schematics 2022 | Schematics Reeva</title>
        <meta name='description' content='Schematics 2022 Reeva' />
        <link rel='icon' href='/schematics-logo.png' />
      </Head>

      <Nav />
      <main className='overflow-hidden'>
        {/* header */}
        <section
          id='reeva-header'
          className='min-h-screen pt-[92px] bg-dark-primary relative'
        >
          {/* absolute assets */}
          <img
            src='/reeva/top-left.png'
            alt=''
            className='absolute top-0 md:-top-4 left-0 w-56 select-none md:w-72 lg:w-80'
          />
          <img
            src='/reeva/top-right.png'
            alt=''
            className='absolute top-0 right-0 w-56 select-none md:w-64 lg:w-80'
          />
          <div className='h-[calc(100vh-92px)] px-5 md:px-16 lg:px-[132px]'>
            {/* header text */}
            <div className='flex flex-col items-center justify-center h-full '>
              <div className='w-5/6 md:pt-16 lg:pt-8 mx-auto'>
                <object data='schematics-txt.svg' type=''></object>
              </div>
              <img
                src='/reeva/reeva-title.png'
                alt=''
                className='xl:w-[800px] relative z-10 w-[600px] mt-8 2xl:w-[1000px] select-none'
              />
              <h2 className='mt-4 text-2xl font-semibold text-center text-white uppercase select-none sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-primary'>
                Revolutionary Entertainment and Expo with Various Arts
              </h2>
              {/* cta */}
              <div className='z-20 flex flex-col flex-wrap items-center justify-center w-full gap-5 mt-10 select-none md:gap-5 xl:flex-row'>
                <div className='w-full md:w-auto'>
                  <Link href='#about'>
                    <a className='bg-[#2E97EE] w-full inline-block text-center hover:bg-[#4cadfd] active:bg-[#1d71b5] transform duration-200 text-white font-primary uppercase text-xl md:text-2xl px-8 md:px-[36px] py-2 rounded-xl md:rounded-md'>
                      Tentang Reeva
                    </a>
                  </Link>
                </div>
                <div className='w-full md:w-auto'>
                  <Link href='#concert'>
                    <a className='bg-[#2E97EE] inline-block w-full text-center text-white hover:bg-[#4cadfd] active:bg-[#1d71b5] transform duration-200 font-primary uppercase text-xl md:text-2xl md:px-20 px-[68px] py-2 rounded-xl md:rounded-md'>
                      Concert
                    </a>
                  </Link>
                </div>
                <div className='w-full md:w-auto'>
                  <Link href='#expo'>
                    <a className='bg-[#2E97EE] inline-block w-full text-center hover:bg-[#4cadfd] active:bg-[#1d71b5] transform duration-200 text-white font-primary uppercase text-xl md:text-2xl md:px-[104px] px-[88px] py-2 rounded-xl md:rounded-md'>
                      Expo
                    </a>
                  </Link>
                </div>
                <div className='w-full md:w-auto'>
                  <Link href='#donation'>
                    <a className='bg-[#2E97EE] w-full inline-block text-center hover:bg-[#4cadfd] active:bg-[#1d71b5] transform duration-200 text-white font-primary uppercase text-xl md:text-2xl md:px-[92px] px-[79px] py-2 rounded-xl md:rounded-md'>
                      Donasi
                    </a>
                  </Link>
                </div>
              </div>
              {/* end cta */}
            </div>
            {/* end header text */}
          </div>
        </section>
        {/* end header */}
        {/* about */}
        <section
          id='about'
          className='relative min-h-screen scroll-mt-[52px] bg-dark-primary'
        >
          <div>
            <img 
              src="reeva/guest-star.png" 
              alt="" 
              className="relative w-full"/>

          </div>
          {/* <div className='relative'>
            <img
              src='/reeva/upper-top.png'
              className='relative top-0 left-0 z-10 hidden w-full select-none sm:block'
              alt=''
            />
            <img
              src='/reeva/reeva-bg-sm-top.png'
              className='relative top-0 left-0 z-10 w-full select-none sm:hidden'
              alt=''
            />
            <img
              src='/reeva/upper-top-left.png'
              className='absolute left-0 hidden -translate-y-1/2 select-none md:block -top-20 w-80'
              alt=''
            />
            <img
              src='/reeva/upper-top-right.png'
              className='absolute right-0 hidden -translate-y-1/2 select-none md:block -top-20 w-80'
              alt=''
            />
          </div> */}
          <div className='bg-[#2E97EE] xl:gap-0 gap-4 flex xl:flex-row flex-col px-5 md:px-16 lg:px-[132px] py-10 relative z-0'>
            {/* reeva text */}
            <div className='flex flex-col justify-center xl:w-1/2'>
              <div className='relative'>
                <h2 className='relative z-10 text-4xl text-white md:text-5xl font-primary'>
                  Tentang Reeva
                </h2>
                {/* <h2 className="absolute top-0 text-4xl md:text-5xl text-black select-none -translate-x-1.5 font-primary">
                  Tentang Kompetisi
                </h2> */}
              </div>
              <div className='px-2'>
                <p className='mt-4 text-xl md:text-2xl leading-relaxed text-[#FFF]'>
                  Schematics Revolutionary Entertainments and Expo with Various
                  Art 2021 merupakan penutup dari rangkaian acara Schematics.
                  Schematics REEVA ini akan digelar dengan menghadirkan expo dan
                  konser musik dengan talkshow bersama sederet bintang tamu.
                </p>
                <ul className='ml-10 mt-2 text-xl md:text-2xl leading-relaxed text-[#FFF]'>
                  <li className='list-disc'>
                    Schematics REEVA dapat diikuti oleh masyarakat umum
                  </li>
                  <li className='list-disc'>
                    Schematics REEVA dapat diakses melalui Youtube
                  </li>
                </ul>
              </div>
            </div>
            {/* reeva text end */}
            {/* reeva photos */}
            <div className='flex items-center justify-center w-full xl:w-1/2'>
              <img
                src={`/reeva/reeva-photo-${imgCode}.png`}
                alt='Reeva Photos'
                className='cursor-pointer select-none'
                onClick={changeImg}
              />
            </div>
            {/* reeva photos end */}
          </div>
          <div className='relative'>
            <img
              src='/reeva/upper-bottom.png'
              className='relative bottom-0 left-0 z-20 hidden w-full select-none sm:block'
              alt=''
            />
            <img
              src='/reeva/reeva-bg-sm-bottom.png'
              className='relative bottom-0 left-0 z-20 w-full select-none sm:hidden'
              alt=''
            />
          </div>
        </section>
        {/* end about */}
        {/* concert */}
        <section
          id='concert'
          className='relative overflow-hidden min-h-screen bg-dark-primary pt-[92px] pb-[250px]'
        >
          {/* first */}
          <div className='flex gap-10 lg:flex-row flex-col min-h-[calc(100vh-92px)] px-5 md:px-16 lg:px-[132px] py-16'>
            <div className='flex items-center justify-center lg:w-1/2'>
              <img
                src='/reeva/reeva-1.png'
                className='lg:w-[470px] select-none w-[300px]'
                alt=''
              />
            </div>
            <div className='lg:w-1/2'>
              <div className='flex items-center justify-center h-1/4'>
                <h2 className='text-5xl text-center text-white uppercase font-primary'>
                  Schematics REEVA Concert
                </h2>
              </div>
              <div className='w-full pt-5 pb-24 xl:px-10 2xl:px-16 h-3/4'>
                <div className='w-full relative flex flex-col px-2 sm:px-4 py-4 h-full bg-white border-4 border-[#0A91FF] border-dashed divide-x-4'>
                  <div className='flex items-center justify-center h-2/5'>
                    <p className='text-2xl font-semibold text-center capitalize font-secondary'>
                      Konser yang dapat dinikmati masyarakat umum. Catat
                      tanggalnya agar tidak ketinggalan!
                    </p>
                  </div>
                  <div className='flex flex-col justify-center gap-6 pb-10 mt-8 border-none md:mt-6 lg:mt-8 h-2/5'>
                    <div className='flex gap-2'>
                      <img
                        src='/reeva/reeva-ticket.png'
                        className='w-8 select-none'
                        alt=''
                      />
                      <p className="text-2xl font-semibold capitalize font-secondary">
                        Presale 2
                      </p>
                    </div>
                    <div className='flex gap-2'>
                      <img
                        src='/reeva/reeva-calendar.png'
                        className='w-8 select-none'
                        alt=''
                      />
                      <p className='text-2xl font-semibold capitalize font-secondary'>
                        12 November 2022
                      </p>
                    </div>
                    <div className='flex gap-2'>
                      <img
                        src='/reeva/reeva-clock.png'
                        className='w-8 select-none'
                        alt=''
                      />
                      <p className='text-2xl font-semibold capitalize font-secondary'>
                        15.30 - 22.45
                      </p>
                    </div>
                  </div>
                  <div className='absolute bottom-0 left-0 flex items-center justify-center w-full translate-y-1/2 border-none'>
                    <button
                      onClick={() => router.push("/login")}
                      className='bg-[#0A91FF] select-none hover:bg-[#39a4fc] active:bg-[#067cdc] transform duration-200 text-white font-primary uppercase text-2xl md:text-3xl lg:text-4xl px-8 rounded-lg py-4'
                    >
                      Beli Sekarang!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second */}
          <div className='flex gap-10 lg:flex-row-reverse flex-col min-h-[calc(100vh-92px)] px-5 md:px-16 lg:px-[132px] py-16'>
            <div className='flex items-center justify-center lg:w-1/2'>
              <img
                src='/reeva/reeva-3.png'
                className='lg:w-[470px] w-[300px] select-none'
                alt=''
              />
            </div>
            <div className='lg:w-1/2'>
              <div className='flex items-center justify-center h-1/4'>
                <h2 className='text-5xl text-center text-white uppercase font-primary'>
                  Schematics REEVA Expo
                </h2>
              </div>
              <div className='w-full pt-5 pb-24 xl:px-10 2xl:px-16 h-3/4'>
                <div className='w-full relative flex flex-col px-2 sm:px-4 py-4 h-full bg-white border-4 border-[#0A91FF] border-dashed divide-x-4'>
                  <div className='flex items-center justify-center h-1/2'>
                    <p className='text-2xl font-semibold text-center capitalize font-secondary'>
                      Kami hadir dengan expo yang akan mengajak anda untuk
                      menjelajahi segala tentang Teknik Informatika ITS.
                    </p>
                  </div>
                  <div className='flex flex-col justify-center gap-6 pb-10 mt-8 border-none md:mt-6 lg:mt-8 h-2/5'>
                  <div className='flex gap-2'>
                      <img
                        src='/reeva/reeva-ticket.png'
                        className='w-8 select-none'
                        alt=''
                      />
                      <p className="text-2xl font-semibold capitalize font-secondary">
                        Expo
                      </p>
                    </div>
                    <div className='flex gap-2'>
                      <img
                        src='/reeva/reeva-calendar.png'
                        className='w-8 select-none'
                        alt=''
                      />
                      <p className='text-2xl font-semibold capitalize font-secondary'>
                        12 November 2022
                      </p>
                    </div>
                    <div className='flex gap-2'>
                      <img
                        src='/reeva/reeva-clock.png'
                        className='w-8 select-none'
                        alt=''
                      />
                      <p className='text-2xl font-semibold capitalize font-secondary'>
                        15.30 - 22.45
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* third */}
          <div className='flex gap-10 lg:flex-row flex-col min-h-[calc(100vh-92px)] px-5 md:px-16 lg:px-[132px] py-16'>
            <div className='flex items-center justify-center lg:w-1/2'>
              <img
                src='/reeva/reeva-2.png'
                className='lg:w-[470px] select-none w-[300px]'
                alt=''
              />
            </div>
            <div className='lg:w-1/2'>
              <div className='flex items-center justify-center h-1/4'>
                <h2 className='text-5xl text-center text-white uppercase font-primary'>
                  Schematics REEVA Donation
                </h2>
              </div>
              <div className='w-full pt-5 pb-24 xl:px-10 2xl:px-16 h-3/4'>
                <div className='w-full relative flex flex-col px-2 sm:px-4 py-10 bg-white border-4 border-[#0A91FF] border-dashed divide-x-4'>
                  <div className='flex items-center justify-center pb-3'>
                    <p className='text-2xl font-semibold text-center capitalize font-secondary'>
                      Mari membantu yang membutuhkan melalui donasi Schematics
                      REEVA.
                    </p>
                  </div>
                  <div className='flex gap-2'>
                    <img
                      src='/reeva/reeva-ticket.png'
                      className='w-8 select-none'
                      alt=''
                    />
                    <p className="text-2xl font-semibold capitalize font-secondary">
                      Donasi
                    </p>
                  </div>
                  
                  {/* <div className='flex flex-col justify-center gap-6 pb-10 mt-8 border-none md:mt-6 lg:mt-8 h-2/5'> */}
                  {/* <div className='flex gap-2'>
                      <img
                        src='/reeva/reeva-calendar.png'
                        className='w-8 select-none'
                        alt=''
                      />
                      <p className='text-2xl font-semibold capitalize font-secondary'>
                        24 Desember 2022
                      </p>
                    </div>
                    <div className='flex gap-2'>
                      <img
                        src='/reeva/reeva-clock.png'
                        className='w-8 select-none'
                        alt=''
                      />
                      <p className='text-2xl font-semibold capitalize font-secondary'>
                        14.00 - 15.00
                      </p>
                    </div> */}
                  {/* </div> */}
                  <div className='absolute bottom-0 left-0 flex items-center justify-center w-full translate-y-1/2 border-none'>
                    <button className='bg-[#0A91FF] select-none hover:bg-[#39a4fc] active:bg-[#067cdc] transform duration-200 text-white font-primary uppercase text-2xl md:text-3xl lg:text-4xl px-8 rounded-lg py-4'>
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src='/reeva/bottom-left.png'
            className='absolute w-48 -translate-x-1/2 translate-y-1/2 select-none bottom-12 md:bottom-16 left-16 md:left-48 md:w-96'
            alt=''
          />
          <img
            src='reeva/bottom-right.png'
            className='absolute w-48 translate-x-1/2 translate-y-1/2 select-none bottom-16 md:bottom-24 right-16 md:right-40 md:w-96'
            alt=''
          />
        </section>
        {/* concert end */}
      </main>
      <Footer />
    </>
  );
};

export default Reeva;
