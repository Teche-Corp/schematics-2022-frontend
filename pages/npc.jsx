import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

const NPC = () => {
  return (
    <>
      <Head>
        <title>Schematics 2022 | NPC</title>
        <meta
          name="description"
          content="Schematics 2022 National Programming Competition"
        />
        <link rel="icon" href="/schematics-logo.png" />
      </Head>

      <Nav />
      <main className="overflow-x-hidden">
        {/* header */}
        <section
          id="npc-header"
          className="min-h-screen pt-[150px] md:pt-[92px] bg-dark-primary relative"
        >
          {/* absolute assets */}
          <img
            src="/npc/TopLeft.png"
            alt=""
            className="absolute top-0 left-0 w-56 select-none sm:w-72"
          />
          <img
            src="/npc/TopRight-1.png"
            alt=""
            className="absolute top-0 right-0 w-56 select-none sm:w-72"
          />
          <div className="h-[calc(100vh-92px)] px-5 md:px-16 lg:px-[132px]">
            {/* header text */}
            <div className="flex flex-col items-center justify-center h-full ">
              <img
                src="/npc/npc.png"
                alt=""
                className="w-[400px] md:w-[683px] select-none"
              />
              <h2 className="mt-5 text-4xl font-bold leading-relaxed text-center text-white uppercase select-none md:text-5xl lg:text-6xl font-primary">
                National Programming Competition
              </h2>
              {/* cta */}
              <div className="relative z-50 flex flex-col items-center gap-5 mt-12 select-none md:mt-16 md:gap-10 xl:flex-row 2xl:gap-20">
                <div className="py-2">
                  <Link href="#about">
                    <a className="bg-[#ED5565] hover:bg-[#d74857] active:bg-[#ed5565] transform duration-200 text-white font-primary uppercase text-xl md:text-2xl px-6 md:px-[24px] py-2 rounded-md">
                      Tentang Kompetisi
                    </a>
                  </Link>
                </div>
                <div className="py-2">
                  <Link href="#score-board">
                    <a className="bg-[#ED5565] hover:bg-[#d74857] active:bg-[#ed5565] transform duration-200 text-white font-primary uppercase text-xl md:text-2xl md:px-16 px-[56px] py-2 rounded-md">
                      Score Board
                    </a>
                  </Link>
                </div>
                <div className="py-2">
                  <Link href="#timeline">
                    <a className="bg-[#ED5565] hover:bg-[#d74857] active:bg-[#ed5565] transform duration-200 text-white font-primary uppercase text-xl md:text-2xl md:px-[92px] px-[79px] py-2 rounded-md">
                      Timeline
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
        <section id="about" className="relative min-h-screen bg-dark-primary">
          <img
            src="/npc/bg-top.png"
            className="relative top-0 left-0 w-full select-none"
            alt=""
          />
          <img
            src="/npc/assetNPC.png"
            alt=""
            className="absolute right-0 z-30 -translate-y-1/2 w-36 md:w-72 top-10 md:top-20"
          />
          <div className="bg-[#ED5565] xl:gap-0 gap-4 flex xl:flex-row flex-col px-5 md:px-16 lg:px-[132px] pt-10 pb-2 relative z-20">
            {/* npc text */}
            <div className="flex flex-col justify-center xl:w-1/2">
              <div className="relative">
                <h2 className="relative z-10 text-4xl text-white md:text-5xl font-primary">
                  Tentang Kompetisi
                </h2>
                <h2 className="absolute top-0 text-4xl md:text-5xl text-black select-none -translate-x-1.5 font-primary">
                  Tentang Kompetisi
                </h2>
              </div>
              <div className="px-2">
                <p className="mt-4 text-xl md:text-2xl leading-relaxed font-medium text-[#231F20]">
                  Schematics National Programming Contest 2021 merupakan{" "}
                  <span className="text-white">
                    kompetisi pemrograman nasional
                  </span>{" "}
                  yang menguji kemampuan penyelesaian suatu permasalahan dengan
                  algoritma yang paling efektif dan efisien menggunakan program
                  komputer dengan spesifikasi yang telah ditentukan. Schematics
                  NPC Junior dapat diikuti oleh siswa SMA/Sederajat secara
                  perorangan dan Schematics NPC Senior dapat diikuti oleh tim
                  beranggotakan maksimal 3 mahasiswa.
                </p>
              </div>
            </div>
            {/* npc text end */}
            {/* npc photos */}
            <div className="flex items-center justify-center w-full xl:w-1/2">
              <img
                src="/npc/PhotoNPC.png"
                alt="NPC Photos"
                className="select-none"
              />
            </div>
            {/* npc photos end */}
          </div>
          <div className="relative">
            <img
              src="/npc/bg-bottom-secondary.png"
              className="relative bottom-0 left-0 z-20 w-full select-none"
              alt=""
            />
            {/* <img
              src="/npc/leaf.png"
              alt=""
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 w-72 left-10 top-20"
            />
            <img
              src="/npc/leaf.png"
              alt=""
              className="absolute translate-x-1/2 -translate-y-1/2 -left-10 -rotate-12 w-72 top-28"
            />
            <img
              src="/npc/leaf.png"
              alt=""
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 w-72 -right-10 top-20"
            />
            <img
              src="/npc/leaf.png"
              alt=""
              className="absolute translate-x-1/2 -translate-y-1/2 right-10 -rotate-12 w-72 top-20"
            /> */}
          </div>
        </section>
        {/* end about */}
        {/* timeline */}
        <section
          id="timeline"
          className="select-none bg-dark-primary scroll-mt-40"
        >
          <div className="flex items-center justify-center px-5 md:px-16 lg:px-[132px]">
            <img src="/npc/TimelineNPC.png" alt="NPC Timeline" />
          </div>
        </section>
        {/* end timeline */}
        {/* teknis */}
        <section id="teknis" className="relative min-h-screen bg-dark-primary">
          <img
            src="/npc/bg-secondary-top.png"
            className="relative top-0 left-0 w-full select-none"
            alt=""
          />
          <div className="bg-[#ED5565] flex xl:flex-row flex-col xl:gap-0 gap-5 py-10 px-5 md:px-16 lg:px-[132px] relative z-20">
            {/* npc text */}
            <div className="flex flex-col justify-center xl:w-1/2">
              <div className="relative">
                <h2 className="relative z-10 text-4xl text-white md:text-5xl font-primary">
                  Teknis Umum Kompetisi
                </h2>
                <h2 className="absolute top-0 text-4xl text-black -translate-x-1 select-none md:text-5xl font-primary">
                  Teknis Umum Kompetisi
                </h2>
              </div>
              <div className="px-7">
                <ul className="mt-4 text-xl list-disc md:text-2xl">
                  <li className="font-medium font-secondary">
                    Schematics NPC Junior dapat diikuti oleh siswa SMA/Sederajat
                    secara perorangan dan Schematics NPC Senior dapat diikuti
                    oleh tim beranggotakan maksimal 3 mahasiswa.
                  </li>
                  <li className="mt-6 font-medium font-secondary">
                    Kegiatan diadakan secara online melalui website schematics.
                  </li>
                </ul>
              </div>
            </div>
            {/* npc text end */}
            {/* npc photos */}
            <div className="flex items-center justify-center h-64 select-none sm:px-16 xl:h-auto xl:w-1/2">
              <iframe
                className="w-full h-full opacity-80 active:opacity-100 active:bg-none"
                frameBorder={0}
                src="https://www.youtube.com/embed/gWdWqKMIuug"
              ></iframe>
            </div>
            {/* npc photos end */}
          </div>
          <div className="relative">
            <img
              src="/npc/bg-bottom.png"
              className="relative bottom-0 left-0 w-full select-none"
              alt=""
            />
            <img
              src="/npc/assetNPC1.png"
              alt=""
              className="absolute bottom-0 right-0 z-20 translate-y-1/2 select-none w-36 lg:w-72 md:bottom-16"
            />
          </div>
          <div className="absolute h-96 w-40 md:w-72 bottom-56 md:bottom-40 translate-x-1/2 translate-y-1/2 -left-16 md:-left-24 z-10 bg-[#ED5565]">
            <div className="relative w-full h-full">
              <div className="absolute w-full text-center translate-y-full select-none -bottom-5 md:bottom-10">
                <h2 className="text-xl text-white md:text-4xl font-primary">
                  Junior: Rp 50k
                </h2>
                <h2 className="text-xl text-white md:text-4xl font-primary">
                  Senior: Rp 120k
                </h2>
              </div>
              <div className="absolute bg-[#ED5565] w-full h-[50%] bottom-12 -z-10 translate-y-full rounded-b-full"></div>
            </div>
          </div>
        </section>
        {/* guidebook */}
        <section
          id="guidebook"
          className="overflow-y-hidden bg-dark-primary py-[92px] relative px-5 md:px-16 lg:px-[132px]"
        >
          <div className="flex flex-col justify-center xl:items-center xl:flex-row py-36">
            {/* guidebook text */}
            <div className="xl:w-1/2">
              <h2 className="text-4xl text-center text-white xl:text-left 2xl:text-5xl font-primary">
                Total Hadiah Rp 15 Juta+++
              </h2>
              <h2 className="mt-6 text-4xl text-center text-white uppercase xl:text-start sm:mt-2 2xl:text-5xl font-primary">
                Tunggu Apalagi!
              </h2>
            </div>
            {/* guidebook text end */}
            {/* guidebook links */}
            <div className="relative z-20 flex flex-col items-center justify-center gap-6 mt-10 select-none xl:gap-4 xl:mt-0 xl:w-1/2">
              <div className="py-2">
                <Link href="#guidebook">
                  <a className="px-4 py-2 text-2xl duration-200 transform bg-white rounded-md hover:bg-slate-200 sm:px-16 2xl:text-4xl font-primary">
                    Senior Guidebook
                  </a>
                </Link>
              </div>
              <div className="py-2">
                <Link href="#guidebook">
                  <a className="py-2 px-[16px] text-2xl bg-white hover:bg-slate-200 transform duration-200 rounded-md sm:px-16 2xl:text-4xl font-primary">
                    Junior Guidebook
                  </a>
                </Link>
              </div>
              <div className="py-2">
                <Link href="#guidebook">
                  <a className="sm:px-[73.5px] px-[22px] text-2xl py-2 transform duration-200 2xl:text-4xl bg-[#ED5565] hover:bg-[#d74857] text-white rounded-md font-primary">
                    Daftar Sekarang
                  </a>
                </Link>
              </div>
            </div>
            {/* guidebook links end */}
          </div>
          <img
            src="/npc/BottomLeft.png"
            alt=""
            className="absolute left-0 translate-y-1/2 select-none w-36 md:w-72 bottom-10"
          />
          <img
            src="/npc/BottomRight.png"
            alt=""
            className="absolute right-0 translate-y-1/2 select-none w-36 md:w-72 bottom-20 md:bottom-28"
          />
        </section>
        {/* guidebook end */}
      </main>
      <Footer />
    </>
  );
};

export default NPC;
