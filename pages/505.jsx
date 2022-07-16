import React from "react";
import Head from "next/head";

export default function Error505() {
  return (
    <div>
      <Head>
        <title>Schematics 2022 | 505</title>
        <meta name='description' content='Schematics 2022' />
        <link rel='icon' href='/schematics-logo.png' />
      </Head>
      <main className='min-h-screen min-w-screen overflow-hidden bg-dark-primary bg-[url(/505/505-background.png)] bg-cover bg-top'>
        <div className='flex items-center justify-center h-screen'>
          {/* text */}
          <div className='flex flex-col items-center justify-center gap-2 md:-translate-y-8 translate-y-60 px-2'>
            <h2 className='md:text-6xl text-4xl font-bold text-center text-white font-secondary text-border-thin '>
              Is That A Dragon?
            </h2>
            <div className='flex md:gap-10 gap-12 text-white font-primary md:text-[200px] text-[164px] text-border-thin -mt-12'>
              <span className='md:rotate-[-23.18deg] rotate-[23.18deg] relative md:top-5'>
                5
              </span>
              <span className='relative top-5 md:top-0'>0</span>
              <span className='md:rotate-[23.18deg] rotate-[-23.18deg] relative md:top-5'>
                5
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
