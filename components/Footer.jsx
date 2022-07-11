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
      <div className="flex justify-between gap-2">
        {/* Schematics Logo */}
        <Link href="/">
          <a className="flex gap-1">
            <img
              src="/schematics-logo.png"
              className="object-contain w-16 lg:w-full"
              alt=""
            />
            <div className="flex-col justify-center hidden sm:flex">
              <h1 className="text-xl font-bold leading-8 text-white lg:text-2xl font-secondary">
                Schematics
                <br />
                <span className="font-extralight">2022</span>
              </h1>
            </div>
          </a>
        </Link>
        {/* Unleash The Soul */}
        <div className="flex flex-col items-start gap-3 lg:items-center xl:items-start lg:flex-row xl:flex-col">
          <div className="flex flex-col items-center justify-center xl:items-start">
            <h2 className="text-lg text-white uppercase lg:text-xl font-primary">
              Unleash The Soul
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#2E2E2E87] pl-2 pr-1 pb-2 pt-1 rounded-xl">
              <div className="flex items-center justify-center">
                <Link href="https://www.instagram.com/schematics.its/">
                  <a
                    target="_blank"
                    className="flex items-center justify-center w-7 h-7 lg:w-10 lg:h-10"
                  >
                    <img
                      src="/homepage/instagram-logo.png"
                      className="w-7 h-7 lg:w-10 lg:h-10"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="https://www.facebook.com/schematicshmtc/">
                <a target="_blank">
                  <FaFacebookF className="text-2xl text-blue-600 lg:text-4xl" />
                </a>
              </Link>
            </div>
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="https://twitter.com/schematics_its">
                <a target="_blank">
                  <FaTwitter className="lg:text-4xl text-2xl text-[#1D9BF0]" />
                </a>
              </Link>
            </div>
            <div className="flex flex-row gap-2">
              <div className="bg-[#2E2E2E87] p-2 rounded-xl">
                <Link href="https://www.youtube.com/c/SchematicsITS">
                  <a target="_blank">
                    <FaYoutube className="lg:text-4xl text-2xl text-[#f00]" />
                  </a>
                </Link>
              </div>
              <div className="bg-[#2E2E2E87] p-2 rounded-xl">
                <Link href="https://www.linkedin.com/company/schematicsits/mycompany/">
                  <a target="_blank">
                    <FaLinkedinIn className="lg:text-4xl text-2xl text-[#0A66C2]" />
                  </a>
                </Link>
              </div>
              <div className="bg-[#2E2E2E87] p-2 rounded-xl">
                <Link href="/">
                  <a>
                    <FaDiscord className="lg:text-4xl text-2xl text-[#5865F2]" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row gap-2 md:hidden">
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="/">
                <a>
                  <FaYoutube className="lg:text-4xl text-2xl text-[#f00]" />
                </a>
              </Link>
            </div>
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="/">
                <a>
                  <FaLinkedinIn className="lg:text-4xl text-2xl text-[#0A66C2]" />
                </a>
              </Link>
            </div>
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="/">
                <a>
                  <FaDiscord className="lg:text-4xl text-2xl text-[#5865F2]" />
                </a>
              </Link>
            </div>
          </div> */}
        </div>
        {/* Events */}
        <div className="flex-col hidden xl:flex">
          <h2 className="text-xl text-white uppercase font-primary">Events</h2>
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
        <div className="flex-col hidden xl:flex">
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
    </footer>
  );
};

export default Footer;
