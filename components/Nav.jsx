import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import { BsStars } from "react-icons/bs";

const Nav = () => {
  const [showEvents, setShowEvents] = useState(false);
  const [hideEvents, setHideEvents] = useState(true);
  const toggleShowEvents = () => {
    setShowEvents((prev) => !prev);
  };
  useEffect(() => {
    if (showEvents) {
      setHideEvents(true);
    } else {
      setTimeout(() => {
        setHideEvents(false);
      }, 300);
    }
  }, [showEvents]);
  return (
    <div className="fixed z-50">
      <div className="bg-white absolute w-screen h-[92px] opacity-[0.15]"></div>
      <nav className="h-[92px] relative z-50 select-none backdrop-blur-3xl w-screen font-secondary flex justify-between items-center px-5 md:px-16 lg:px-[132px]">
        {/* header logo */}
        <Link href="/">
          <a className="flex gap-1">
            <Image alt="" src="/schematics-logo.png" width={72} height={72} />
            <div className="flex flex-col justify-center">
              <h1 className="font-bold leading-6 text-white">
                Schematics
                <br />
                <span className="font-thin">2022</span>
              </h1>
            </div>
          </a>
        </Link>
        <ul className="md:flex hidden text-white md:gap-5 lg:gap-10 xl:gap-[67px]">
          <li className="relative">
            <button
              onClick={toggleShowEvents}
              className="flex items-center gap-[6px]"
            >
              Events <FaAngleDown className="mt-1 text-lg" />
            </button>
            {/* events */}
            {hideEvents && (
              <div
                className={`absolute shadow-xl ${
                  showEvents ? "opacity-1" : "opacity-0 translate-y-1"
                } right-0 w-[602px] flex p-5 rounded-lg text-secondary transition duration-300 bg-white text-slate-900 top-10`}
              >
                <div className="flex flex-col w-1/2 gap-2">
                  <div>
                    <Link href="/">
                      <a className="text-slate-900">
                        <div className="flex items-start justify-center gap-4 p-4 rounded-lg hover:bg-slate-100">
                          <div className="p-2 text-2xl text-center text-yellow-400 rounded-lg">
                            <BiBrain />
                          </div>
                          <div>
                            <h2>Schematics NLC</h2>
                            <p className="mt-1 text-sm text-slate-500">
                              Test your logic and problem solving skills!
                            </p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/">
                      <a className="text-slate-900">
                        <div className="flex items-start justify-center gap-4 p-4 rounded-lg hover:bg-slate-100">
                          <div className="p-2 text-2xl text-center text-green-600 rounded-lg">
                            <HiSpeakerphone />
                          </div>
                          <div>
                            <h2>Schematics NPC</h2>
                            <p className="mt-1 text-sm text-slate-500">
                              Dare to try our programming challenge?
                            </p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 gap-2">
                  <div>
                    <Link href="/">
                      <a className="text-slate-900">
                        <div className="flex items-start justify-center gap-4 p-4 rounded-lg hover:bg-slate-100">
                          <div className="p-2 text-2xl text-center text-red-600 rounded-lg">
                            <MdOutlineMonitor />
                          </div>
                          <div>
                            <h2>Schematics NST</h2>
                            <p className="mt-1 text-sm text-slate-500">
                              Get a better understanding of technology with us!
                            </p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/">
                      <a className="text-slate-900">
                        <div className="flex items-start justify-center gap-4 p-4 rounded-lg hover:bg-slate-100">
                          <div className="p-2 text-2xl text-center text-blue-500 rounded-lg">
                            <BsStars />
                          </div>
                          <div>
                            <h2>Schematics Reeva</h2>
                            <p className="mt-1 text-sm text-slate-500">
                              The perfect combination between music and
                              technology
                            </p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link href="/">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="font-bold text-black bg-white px-[31.5px] py-[1px] rounded-md outline-4 outline-black">
                Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
