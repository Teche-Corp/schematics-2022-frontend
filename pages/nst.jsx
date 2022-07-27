import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function NST() {
    return(
        <>
            {/* Head */}
            <Head>
                <title>Schematics 2022 | NST</title>
                <meta name="description" content="Schematics 2022"/>
                <link rel="stylesheet" href="/schematics-logo.png" />
                <meta charset="UTF-8"/>
            </Head>

            <Nav/>
            <main className="bg-dark-primary overflow-x-hidden w-full">
                {/* Header */}
                <section className="w-full">
                    <img 
                        src="/nst/top-left.svg" 
                        alt="" 
                        className="absolute top-0 left-0 z-0 w-1/5 select-none"
                    />
                    <img 
                        src="/nst/top-right.svg" 
                        alt="" 
                        className="absolute right-0 top-0 z-0 w-3/12"
                    />
                    <img
                        className="absolute left-0 -bottom-40 select-none hidden xl:block" 
                        src="/nst/book.svg" alt="" />
                    <img 
                    className="absolute right-0 -bottom-2 w-96 select-none hidden xl:block"
                    src="/nst/terompet.svg" alt="" />

                    
                    <div className="h-[calc(100vh-92px)] pt-60 z-10">
                        <div className="flex flex-col items-center justify-center">
                            <img 
                                src="/nst/nst-text.svg" 
                                alt="" 
                                className="flex items-center justify-center select-none"
                            />
                            <h1 className="mt-2 text-4xl font-medium font-primary text-center text-white md:text-7xl uppercase z-10">
                                National Seminar Of technology
                            </h1>

                            {/* CTA */}
                            <div className="flex flex-col items-center justify-around md:flex-row mt-12 text-white text-2xl font-primary gap-10">
                                <Link href="#about">
                                    <a className="bg-[#85D4BE] hover:bg-white hover:text-[#85D4BE] upercase rounded-md px-8 py-4">
                                        TENTANG SEMINAR
                                    </a>
                                </Link>
                                <Link href="#pembicara">
                                    <a className="bg-[#85D4BE] hover:bg-white hover:text-[#85D4BE] upercase rounded-md px-20 py-4">
                                        PEMBICARA
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </section>

                {/* Tentang NST */}
                <section id="about" className="relative z-10 pt-20 md:pt-0">
                    {/* top bg */}
                    <img className="bg-cover w-full z-[1]" src="/nst/top-bg1.png" alt="" />
                    {/* content */}
                    <div className="bg-[#85D4BE] xl:gap-2 gap-4 flex xl:flex-row flex-col px-5 md:px-16 lg:px-[132px] pt-10 pb-2 relative z-0">
                        {/* npc text */}
                        <div className="flex flex-col justify-center xl:w-1/2">
                            <div className="relative">
                                <h2 className="relative z-10 text-4xl text-white md:text-5xl font-primary">
                                Tentang Kompetisi
                                </h2>
                                <h2 className="absolute top-0 text-4xl md:text-5xl text-black select-none  font-primary">
                                Tentang Kompetisi
                                </h2>
                            </div>
                        <div className="px-2">
                            <p className="mt-4 text-xl md:text-2xl leading-relaxed font-medium text-white">
                            Schematics National Seminar of Technology 2021 merupakan acara seminar
                                                yang dihadirkan untuk memberikan pengetahuan dan perkembangan seputar
                                                Teknologi Informasi terkini serta bagaimana teknologi tersebut 
                                                berdampak pada berbagai sektor di Indonesia. Schematics NST dapat diikuti oleh masyarakat umum.
                            </p>
                        </div>
                    </div>
                    {/* npc text end */}
                    {/* npc photos */}
                    <div className="flex items-center justify-center w-full xl:w-1/2">
                    <img
                        src={`/nlc/desc-img.png`}
                        alt="NPC Photos"
                        className="cursor-pointer select-none"
                        // onClick={changeImg}
                    />
                    </div>
                    {/* npc photos end */}

                    </div>
                    {/* bottom-bg */}
                    <img className='bg-cover w-full' src="/nst/bottom-bg1.png" alt="" />
                </section>
            {/* Tema Schematics NST */}
            <section>
                    <div className="pt-12 flex flex-col items-center justify-center">
                        <h2 className="font-primary text-white text-center text-3xl md:text-7xl">
                            TEMA <br /> SCHEMATICS NST
                        </h2>
                        <img 
                        className="w-2/3 md:w-2/5 mt-4 "
                        src="/nst/comma.svg" alt=""/>
                        
                        {/* image */}
                        <img src="/nst/tema.svg" alt="" className="pt-24"/>
                    </div>
            </section>
            
            {/* Pembicara NST */}
            <section id="pembicara" className="pt-24 pb-40 relative">
                <h2 className="text-center text-white font-primary text-3xl md:text-7xl">
                    Pembicara <br />Schematics NST
                </h2>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-16 md:gap-10 pt-10 w-full md:w-10/11 xl:w-full">
                    <img src="/nst/pembicara1.svg" alt="" />
                    <img src="/nst/pembicara2.svg" alt="" />
                    <img src="/nst/pembicara3.svg" alt="" />
                </div>

                {/* bottom */}
                <img 
                    className="absolute bottom-0 left-0 w-1/2 xl:w-fit z-0"
                    src="/nst/bottom-left1.svg" alt="" 
                />
                <img 
                    src="/nst/bottom-right1.svg" alt="" 
                    className="absolute bottom-0 right-0 w-1/2 xl:w-fit z-0"
                />
            </section>
            
            </main>
        <Footer/>
    </>
    )
}