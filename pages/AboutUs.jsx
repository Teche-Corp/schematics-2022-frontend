import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Fragment } from "react";
import Head from "next/head";

// import Youtube from 'react-youtube'

const AboutUs = () => {
  return (
    <Fragment>
      <div className='w-full h-fit relative bg-dark-primary text-white overflow-hidden'>
        <div className='absolute z-50 xl:top-10 xl:left-10 cursor-pointer scale-50 sm:scale-75 lg:scale-100 lg:top-3 lg:left-3'>
          <a href='/'>
            <FaArrowCircleLeft size={66} />
          </a>
        </div>
        <img
          src='button.png'
          className='absolute z-50 top-10 left-10 cursor-pointer'
          alt=''
        />
        <div className='absolute -left-[300px] -top-[150px] xl:-translate-x-2 xl:-translate-y-5 select-none scale-50 sm:scale-75 lg:scale-100 -translate-y-6 -translate-x-10'>
          <Image src='/AboutUs/TopLeft.png' alt='' width={692} height={457} />
        </div>
        <div className='absolute -right-[250px] -top-[100px] xl:translate-x-10 select-none scale-50 lg:scale-100 -translate-y-16 translate-x-16'>
          <Image src='/AboutUs/TopRight.png' alt='' width={692} height={457} />
        </div>
        <h1 className='text-3xl md:text-6xl lg:text-8xl text-white font-primary text-center pt-28'>
          SCHEMATICS
        </h1>

        <p className='py-10 sm:py-16 lg:py-20 px-10 lg:px-16 xl:px-28 md:text-3xl lg:text-4xl sm:leading-8 md:leading-10 lg:leading-[55px] font-secondary text-justify lg:mx-16 xl:mx-24'>
          Schematics merupakan singkatan dari National Seminar of Technology,
          Art Exhibition, National Logic Contest, National Programming Contest,
          and Alumni Rendezvous of Informatics. Schematics merupakan acara
          tahunan yang diselenggarakan oleh mahasiswa Teknik Informatika ITS
          mulai dari tahun 2007 hingga sekarang dan menjadi salah satu event
          terbesar ITS.
        </p>

        <div className='w-[268px] md:w-[502.5px] lg:w-[670px] h-[277.2px] md:h-[519.75px] lg:h-[693px] mx-auto relative'>
          <Image
            src='/AboutUs/Center.png'
            className='w-[670px] h-[693px]'
            layout='fill'
            alt=''
          />
        </div>

        <p className='py-10 sm:py-16 lg:py-20 px-10 lg:px-16 xl:px-28 md:text-3xl lg:text-4xl sm:leading-8 md:leading-10 lg:leading-[55px] font-secondary text-justify lg:mx-16 xl:mx-24'>
          Tujuan utama dari masing-masing sub-event yakni untuk mencerdaskan
          masyarakat yang ingin mengasah kemampuan algoritma, pemrograman, dan
          logika serta memberikan pemahaman mengenai perkembangan teknologi
          dengan menggunakan pendekatan yang menarik.
        </p>

        {/* Ini tulisan company profile biar bagian kirinya sejajar sama atasnya gimana ya , Kurang tau bang */}
        <div className='flex flex-col xl:flex-row justify-center items-center md:p-14 md:pt-0 lg:p-28 lg:pt-14 mb-12'>
          <h1 className='text-white md:text-4xl lg:text-5xl xl:text-8xl font-[400] text-center w-[479px] font-primary align-middle xl:mr-24 z-50 lg:block'>
            {" "}
            COMPANY PROFILE
          </h1>
          <div className='mt-5 xl:mt-0 sm:w-[300px] md:w-[450px] lg:w-[600px] h-[210px] md:h-[315px] lg:h-[420px] bg-gradient-to-t from-amber-300 to-color rounded-xl active:bg-none z-50'>
            <iframe
              className='opacity-80 w-full h-full active:opacity-100 active:bg-none rounded-xl'
              frameBorder={0}
              src='https://www.youtube.com/embed/gWdWqKMIuug'
            ></iframe>
          </div>
        </div>
        <div className='absolute -left-52 -bottom-60 -translate-y-5 select-none scale-50 sm:scale-75 lg:scale-100 -translate-x-20 sm:-translate-x-16 lg:translate-x-0'>
          <Image
            width={692}
            height={457}
            src='/AboutUs/BottomLeft.png'
            alt=''
          />
        </div>
        <div className='absolute -right-[250px] -bottom-[260px] -translate-y-5 select-none scale-50 sm:scale-75 lg:scale-100 translate-x-8 sm:translate-x-10 lg:translate-x-0'>
          <Image
            width={692}
            height={457}
            src='/AboutUs/BottomRight.png'
            alt=''
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
