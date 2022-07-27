import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [hideEvents, setHideEvents] = useState(true);
  const toggleShowEvents = () => {
    setShowEvents((prev) => !prev);
  };
  const toggleShowNav = () => {
    setShowNav((prev) => !prev);
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
      <div className="bg-white absolute w-screen h-[92px] z-20 opacity-[0.15]"></div>
      <nav className="h-[92px] relative z-50 select-none backdrop-blur-3xl w-screen font-secondary flex justify-between items-center px-5 md:px-16 lg:px-[132px]">
        {/* header logo */}
        <Link href="/">
          <a className="relative z-50 flex gap-1">
            <img alt="" className="w-16" src="/logo-schematics-footer.png" />
            <div className="flex flex-col justify-center">
              <h1 className="font-bold leading-6 text-white">
                Schematics
                <br />
                <span className="font-thin">2022</span>
              </h1>
            </div>
          </a>
        </Link>
        <div className="relative z-50 flex mr-2 md:hidden">
          {!showNav && (
            <GiHamburgerMenu
              className="text-4xl text-white"
              onClick={toggleShowNav}
            />
          )}
          {showNav && (
            <FaTimes
              className="text-4xl text-red-600"
              onClick={toggleShowNav}
            />
          )}
        </div>
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
                  <div onClick={toggleShowEvents}>
                    <Link href="/nlc">
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
                  <div onClick={toggleShowEvents}>
                    <Link href="/nst">
                      <a className="text-slate-900">
                        <div className="flex items-start justify-center gap-4 p-4 rounded-lg hover:bg-slate-100">
                          <div className="p-2 text-2xl text-center text-green-600 rounded-lg">
                            <HiSpeakerphone />
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
                </div>
                <div className="flex flex-col w-1/2 gap-2">
                  <div onClick={toggleShowEvents}>
                    <Link href="/npc">
                      <a className="text-slate-900">
                        <div className="flex items-start justify-center gap-4 p-4 rounded-lg hover:bg-slate-100">
                          <div className="p-2 text-2xl text-center text-red-600 rounded-lg">
                            <MdOutlineMonitor />
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
                  <div onClick={toggleShowEvents}>
                    <Link href="/reeva">
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
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a className="font-bold text-black bg-white px-[31.5px] py-[1px] rounded-md outline-4 outline-black">
                Login
              </a>
            </Link>
          </li>
        </ul>

        {/* {showNav && ( */}
        <ul
          className={`flex md:hidden translate-y-full ${
            showNav ? "translate-x-0 opacity-1" : "translate-x-full opacity-0"
          } text-white z-20 transition duration-300 md:flex-row flex-col bg-[#464646] md:static absolute bottom-0 left-0 md:w-auto w-full md:gap-5 lg:gap-10 xl:gap-[67px]`}
        >
          <li className="relative py-4 border-2 border-black px-7">
            <button
              onClick={toggleShowEvents}
              className="flex items-center justify-between w-full md:w-auto md:gap-[6px] text-3xl font-primary text-border-thin md:font-secondary md:text-md"
            >
              Events{" "}
              <FaAngleDown
                className={`mt-1 ${
                  showEvents ? "rotate-180" : "rotate-0"
                } transition duration-150 text-3xl md:text-lg`}
              />
            </button>
          </li>
          <div className={`${showEvents ? "flex" : "hidden"} flex-col w-full`}>
            <div
              onClick={() => {
                toggleShowEvents();
                toggleShowNav();
              }}
              className="flex h-10 gap-5 bg-white border-2 border-black px-7"
            >
              <Link href="/nlc">
                <a className="inline-block w-full text-2xl text-black font-primary">
                  <div className="inline-block w-5 h-5 rounded-full bg-nlc"></div>{" "}
                  Schematics <span className="text-nlc">NLC</span>
                </a>
              </Link>
            </div>
            <div
              onClick={() => {
                toggleShowEvents();
                toggleShowNav();
              }}
              className="flex h-10 gap-5 bg-white border-2 border-black px-7"
            >
              <Link href="/npc">
                <a className="inline-block w-full text-2xl text-black font-primary">
                  <div className="inline-block w-5 h-5 rounded-full bg-npc"></div>{" "}
                  Schematics <span className="text-npc">NPC</span>
                </a>
              </Link>
            </div>
            <div
              onClick={() => {
                toggleShowEvents();
                toggleShowNav();
              }}
              className="flex h-10 gap-5 bg-white border-2 border-black px-7"
            >
              <Link href="/nst">
                <a className="inline-block w-full text-2xl text-black font-primary">
                  <div className="inline-block w-5 h-5 rounded-full bg-nst"></div>{" "}
                  Schematics <span className="text-nst">NST</span>
                </a>
              </Link>
            </div>
            <div
              onClick={() => {
                toggleShowEvents();
                toggleShowNav();
              }}
              className="flex h-10 gap-5 bg-white border-2 border-black px-7"
            >
              <Link href="/reeva">
                <a className="inline-block w-full text-2xl text-black font-primary">
                  <div className="inline-block w-5 h-5 rounded-full bg-reeva"></div>{" "}
                  Schematics <span className="text-reeva">REEVA</span>
                </a>
              </Link>
            </div>
          </div>
          <li
            onClick={toggleShowNav}
            className="py-4 border-2 border-black px-7"
          >
            <Link href="/about">
              <a className="flex items-center justify-between w-full md:w-auto md:gap-[6px] text-3xl font-primary text-border-thin md:font-secondary md:text-md">
                About Us
              </a>
            </Link>
          </li>
          <li
            onClick={toggleShowNav}
            className="py-4 bg-white border-2 border-black px-7"
          >
            <Link href="/login">
              <a className="flex items-center justify-center w-full md:w-auto md:gap-[6px] text-3xl font-primary text-black md:font-secondary md:text-md">
                Login
              </a>
            </Link>
          </li>
        </ul>
        {/* )} */}
      </nav>
    </div>
  );
};

export default Nav;
