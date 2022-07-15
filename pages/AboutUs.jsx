import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Fragment } from 'react';
import Head from 'next/head';
// import Youtube from 'react-youtube'

const AboutUs = () => {
  return (
    <Fragment>
      <div>
        <Head>
          <title>About Us | Schematics 2022</title>
          <meta name="description" content="Schematics 2022" />
          <link rel="icon" href="/schematics-logo.png" />
        </Head>
      </div>
      <div className="w-fit h-fit relative bg-dark-primary text-white overflow-hidden">
          <div className='absolute z-50 top-10 left-10 cursor-pointer'>
              <a href='/'><FaArrowCircleLeft size={66}/></a>  
          </div>
          <img src="button.png" className='absolute z-50 top-10 left-10 cursor-pointer' alt="" />
          <div className='absolute -left-[300px] -top-[150px] -translate-x-2 -translate-y-5 select-none'>
              <Image src="/AboutUs/TopLeft.png" alt="" width={692} height={457}/>
          </div>
          <div className='absolute -right-[250px] -top-[100px] translate-x-10 select-none'>
          <Image src="/AboutUs/TopRight.png" alt="" width={692} height={457}/>
          </div>
          <h1 className="text-8xl text-white font-primary text-center pt-28 z-50">SCHEMATICS</h1>

          <p className='py-20 px-28 text-4xl leading-[55px] font-secondary text-justify mx-24'>Schematics merupakan singkatan dari National Seminar of Technology, Art Exhibition, National Logic Contest, National Programming Contest, and Alumni Rendezvous of Informatics. Schematics merupakan acara tahunan yang diselenggarakan oleh mahasiswa Teknik Informatika ITS mulai dari tahun 2007 hingga sekarang dan menjadi salah satu event terbesar ITS.</p>

          <div className='w-fit mx-auto'>
              <Image src="/AboutUs/Center.png" width={670} height={693} alt="" />
          </div>

          <p className=' mt-5 p-28 text-4xl leading-[55px] font-secondary text-justify mx-24'>
            Tujuan utama dari masing-masing sub-event yakni untuk mencerdaskan masyarakat yang ingin mengasah kemampuan algoritma, pemrograman, dan logika serta memberikan pemahaman mengenai perkembangan teknologi dengan menggunakan pendekatan yang menarik.
          </p>

          {/* Ini tulisan company profile biar bagian kirinya sejajar sama atasnya gimana ya , Kurang tau bang */ }
          <div className='flex justify-center content-center p-28 pt-14'>
            <h1 className='text-white text-8xl font-[400] text-center w-[479px] self-center font-primary align-middle mr-24 z-50'> COMPANY PROFILE</h1>
            <div className='w-[600px] h-[420px] bg-gradient-to-t from-amber-300 to-color rounded active:bg-none z-50' > 
              <iframe  className='opacity-80 w-full h-full active:opacity-100 active:bg-none' frameBorder={0} 
                src="https://www.youtube.com/embed/gWdWqKMIuug">
              </iframe> 
            </div>
          </div>
          <div className='absolute -left-52 -bottom-60 -translate-x-2 -translate-y-5 select-none'>
          <Image width={692} height={457} src="/AboutUs/BottomLeft.png" alt="" />
          </div>
          <div className='absolute -right-[250px] -bottom-[260px] -translate-x-2 -translate-y-5 select-none'>
          <Image width={692} height={457} src="/AboutUs/BottomRight.png" alt="" />
          </div>
      </div>
    </Fragment>
  )
}

export default AboutUs;