import React from "react";
import Image from "next/image";
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
    <footer className="bg-dark px-[132px] py-[30px]">
      <div className="flex gap-[40px] justify-between">
        {/* Schematics Logo */}
        <Link href="/">
          <a className="flex gap-1">
            <Image src="/schematics-logo.png" width={120} height={120} alt="" />
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
        <div>
          <h2 className="text-xl text-white uppercase font-primary">
            Unleash The Soul
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="/">
                <a className="flex items-center justify-center">
                  <Image
                    src="/instagram-logo.png"
                    width={34}
                    height={34}
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="/">
                <a>
                  <FaFacebookF className="text-4xl text-blue-600" />
                </a>
              </Link>
            </div>
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="/">
                <a>
                  <FaTwitter className="text-4xl text-[#1D9BF0]" />
                </a>
              </Link>
            </div>
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="/">
                <a>
                  <FaYoutube className="text-4xl text-[#f00]" />
                </a>
              </Link>
            </div>
            <div className="bg-[#2E2E2E87] p-2 rounded-xl">
              <Link href="/">
                <a>
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
        {/* Events */}
        <div>
          <h2 className="text-xl text-white uppercase font-primary">Events</h2>
          <ul>
            <li className="text-xl font-thin text-white font-secondary">
              Schematics <span className="text-[#FFCD46]">NLC</span>
            </li>
            <li className="text-xl font-thin text-white font-secondary">
              Schematics <span className="text-[#ED5565]">NPC</span>
            </li>
            <li className="text-xl font-thin text-white font-secondary">
              Schematics <span className="text-[#85D4BE]">NST</span>
            </li>
            <li className="text-xl font-thin text-white font-secondary">
              Schematics <span className="text-[#2E97EE]">REEVA</span>
            </li>
          </ul>
        </div>
        {/* Quick Link */}
        <div>
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
