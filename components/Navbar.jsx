import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 text-white z-40 ">
      <div className="flex justify-between items-center w-full h-full 2xl:px-16">
        <div className="bg-[#000] w-[40%] h-[100%] px-2 items-center">
          <Link href="/">
            <h1 className="py-6 text-5xl px-5 font-signature cursor-pointer">
              John
            </h1>
          </Link>
        </div>
        <div className="bg-[#000] md:bg-[#181822] w-[60%] h-[100%]  px-6 flex justify-end text-[#adadb0]">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase py-6 hover:text-[#75fbfd]">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase py-6 hover:text-[#75fbfd]">
                About
              </li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase py-6 hover:text-[#75fbfd]">
                Skills
              </li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase py-6 hover:text-[#75fbfd]">
                Projects
              </li>
            </Link>
            <Link href="#testmonials">
              <li className="ml-10 text-sm uppercase py-6 hover:text-[#75fbfd]">
                Testimonials
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase bg-[#4c24dc] text-white py-6 px-10 hover:bg-[#202088]">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            {nav ? (
              <AiOutlineClose
                size={25}
                onClick={handleNav}
                className="z-10 text-white mt-6"
              />
            ) : (
              <BiMenuAltRight size={25} onClick={handleNav} className="mt-6" />
            )}
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed  top-20 w-full h-screen bg-black/70" : "hidden"
        }
      >
        <div
          className={
            nav
              ? "fixed w-[100%] sm:w-[60%] top-20 md-[45%] h-[55%] bg-[#111]  ease-in duration-500"
              : "fixed left-[-100%] h-[55%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="text-[hsla(2, 0%, 100%, 0.7)]">
            <ul className="py-4 flex flex-col">
              <Link
                href="/"
                className=" w-[100%]"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-1xl">Home</li>
              </Link>
              <Link
                href="#about"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">About</li>
              </Link>
              <Link
                href="#skills"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">Skills</li>
              </Link>
              <Link
                href="#projects"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">Projects</li>
              </Link>
              <Link
                href="#testmonials"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">Testmonials</li>
              </Link>
              <Link
                href="#contact"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">Contacts</li>
              </Link>
            </ul>
            <div className="flex items-center justify-between sm:w-[60%] px-10">
              <Link href="https://www.linkedin.com/in/johnnokari-001/">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaLinkedinIn />
                </div>
              </Link>

              <Link href="https://github.com/JohnOkari">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaGithub />
                </div>
              </Link>
              <Link href="mailto:johnnokari@gmail.com">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <AiOutlineMail />
                </div>
              </Link>

              <Link href="tel: +254707205896">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <BsPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
