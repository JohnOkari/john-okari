import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function streanHub() {
  return (
    <div className="w-ful bg-[#181822] h-[100vh] text-white">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full  h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          src="/product.png"
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-12 grid md:grid-cols-5  gap-8 pt-5">
        <div className="col-span-4">
          <p
            className="text-[#86919f] uppercase"
            style={{
              display: "inline-block",
              marginBottom: "8px",
              color: "#8491a0",
              fontSize: "16px",
              lineHeight: "150%",
              fontWeight: "700",
            }}
          >
            streamHub
          </p>
          <h2 className="py-2 text-gray-600">Overview</h2>
          <p
            style={{
              marginBottom: "0px",
              color: "#fff",
              fontsize: "16px",
              lineHeight: "150%",
              textDecoration: "none",
            }}
          >
            streamHub is a YouTube inspired application.
          </p>
          <Link href="johnokari.vercel.app">
            <button className="font-lg font-semibold py-3 mt-6 px-20 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc]">
              Demo
            </button>
          </Link>
          <Link href="https://github.com/JohnOkari/streamhub">
            <button className="font-lg font-semibold py-3 mt-6 md:ml-6 px-20 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc]">
              Code
            </button>
          </Link>
        </div>
        <div className=" md:col-span-1 rounded-xl md:p-4">
          <div className="p-2">
            <p
              className="text-[#86919f] uppercase"
              style={{
                display: "inline-block",
                marginBottom: "8px",
                color: "#8491a0",
                fontSize: "16px",
                lineHeight: "150%",
                fontWeight: "700",
              }}
            >
              Technologies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 ">
              <p className="flex items-center text-[white] py-2 ">
                <RiRadioButtonFill className="pr-1" /> Ruby on Rails
              </p>
              <p className="flex items-center text-[white] py-2 ">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="flex items-center text-[white] py-2 ">
                <RiRadioButtonFill className="pr-1" /> Postgresql
              </p>
              <p className="flex items-center text-[white] py-2 ">
                <RiRadioButtonFill className="pr-1" /> Gitflow
              </p>
            </div>
          </div>
        </div>
        {/* back button that floats */}
        <div className="fixed md:top-{100px} top-10 z-50 left-5 animate-bounce">
          <Link href="/#projects">
            <BsFillArrowLeftSquareFill size={30} color="blue" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default streanHub;
