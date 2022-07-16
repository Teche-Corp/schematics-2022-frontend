import React from "react";
// import Image from "next/image";
import {
  FaDiscord,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark px-5 md:px-16 xl:px-[132px] py-[30px] select-none relative z-50">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        {/* Schematics Logo */}
        <Link href="/">
          <a className="flex self-center gap-1">
            <img
              src="/schematics-logo.png"
              className="object-contain w-36 sm:w-full"
              alt=""
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold leading-8 text-white font-secondary">
                Schematics
                <br />
                <span className="font-extralight">2022</span>
              </h1>
            </div>
          </a>
        </Link>
        {/* Unleash The Soul */}
        <div className="flex flex-col items-center justify-center gap-3 sm:items-start xl:justify-start lg:items-center xl:items-start lg:flex-row xl:flex-col">
          <div className="flex flex-col items-center justify-center xl:items-start">
            <h2 className="hidden text-xl text-white uppercase font-primary sm:inline">
              Unleash The Soul
            </h2>
            <h2 className="inline text-xl text-white uppercase font-primary sm:hidden">
              Temukan kami di sosial media
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-3 sm:mt-0">
            <div className="bg-[#2E2E2E87] pl-2 pr-1 pb-2 pt-1 rounded-xl">
              <div className="flex items-center justify-center">
                <Link href="https://www.instagram.com/schematics.its/">
                  <a
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10"
                  >
                    <img
                      src="/homepage/instagram-logo.png"
                      className="w-10 h-10"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="https://www.facebook.com/schematicshmtc/">
                <a target="_blank">
                  <FaFacebookF className="text-4xl text-blue-600" />
                </a>
              </Link>
            </div>
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="https://twitter.com/schematics_its">
                <a target="_blank">
                  <FaTwitter className="text-4xl text-[#1D9BF0]" />
                </a>
              </Link>
            </div>
            <div className="flex flex-row gap-2">
              <div className="bg-[#2E2E2E87] p-2 rounded-xl">
                <Link href="https://www.youtube.com/c/SchematicsITS">
                  <a target="_blank">
                    <FaYoutube className="text-4xl text-[#f00]" />
                  </a>
                </Link>
              </div>
              <div className="bg-[#2E2E2E87] p-2 rounded-xl">
                <Link href="https://www.linkedin.com/company/schematicsits/mycompany/">
                  <a target="_blank">
                    <FaLinkedinIn className="text-4xl text-[#0A66C2]" />
                  </a>
                </Link>
              </div>
              <div className="bg-[#2E2E2E87] p-2 rounded-xl">
                <Link href="/">
                  <a>
                    <FaDiscord className="text-4xl text-[#5865F2]" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="block w-full h-1 mt-2 bg-white border-0 sm:hidden" />
        <div className="flex flex-row-reverse gap-8 mt-8 xl:w-2/5 xl:justify-around xl:items-start sm:hidden lg:flex lg:flex-row">
          {/* Events */}
          <div className="flex flex-col sm:hidden xl:flex">
            <h2 className="text-xl text-white uppercase font-primary">
              Events
            </h2>
            <ul>
              <li className="text-xl font-thin text-white font-secondary">
                <Link href="/">
                  <a>
                    Schematics <span className="text-[#FFCD46]">NLC</span>
                  </a>
                </Link>
              </li>
              <li className="text-xl font-thin text-white font-secondary">
                <Link href="/">
                  <a>
                    Schematics <span className="text-[#ED5565]">NPC</span>
                  </a>
                </Link>
              </li>
              <li className="text-xl font-thin text-white font-secondary">
                <Link href="/">
                  <a>
                    Schematics <span className="text-[#85D4BE]">NST</span>
                  </a>
                </Link>
              </li>
              <li className="text-xl font-thin text-white font-secondary">
                <Link href="/">
                  <a>
                    Schematics <span className="text-[#2E97EE]">REEVA</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* Quick Link */}
          <div className="flex flex-col sm:hidden xl:flex">
            <h2 className="text-xl text-white uppercase font-primary">
              Quick Link
            </h2>
            <ul>
              <li className="text-xl font-thin text-white font-secondary">
                <Link href="/">
                  <a>About Us</a>
                </Link>
              </li>
              <li className="text-xl font-thin text-white font-secondary">
                <Link href="/">
                  <a>Login</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="block sm:hidden">
          <p className="text-[#898888] font-primary text-3xl text-center my-4">
            &copy; Copyright Schematics 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
