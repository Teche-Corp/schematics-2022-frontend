import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function NST() {
  return (
    <>
        <Head>
            <title>Schematics NST 2022</title>
            <meta name="description" content="Schematics 2022" />
            <link rel="icon" href="/schematics-logo.png" />
        </Head>
        <img 
            src="/nst/nst-top-left.png" 
            alt="nst-top-left"
            className='absolute right-0 top-0 w-3/12' 
        />
        <img 
            src="/nst/nst-top-right.png" 
            alt="nst-top-right"
            className='absolute left-0 top-0 w-3/12' 
        />
        <div className='h-screen flex flex-col justify-center items-center md:pb-16 pb-0' style={{background: 'linear-gradient(180deg, rgba(37, 37, 37, 0.8) 0%, #252525 100%)'}}>
            <div className='md:w-1/2 w-4/5 text-center'>
                <Image
                    src="/nst/nst-text.png"
                    alt="nst text"
                    width={614}
                    height={220}
                />
            </div>
            <div className='md:w-1/2 w-4/5 mt-2 text-white font-primary text-center space-y-2'>
                <p className='md:text-5xl text-3xl uppercase'>
                    is coming soon
                </p>
                <p className='md:text-5xl text-3xl uppercase'>
                    01.08.22
                </p>
            </div>
            <Link 
                href="/"
            >
                <button className='w-[270px] h-[50px] mt-12 rounded-md bg-nst-2 text-white font-primary text-xl'>
                    Back
                </button>
            </Link>
        </div>
        <img 
            src="/nst/nst-bottom.png" 
            alt="nst-bottom"
            className='absolute w-full bottom-0' 
        />
    </>
  )
}