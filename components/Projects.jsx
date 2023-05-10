import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="bg-[#000] md:p-32 grid grid-cols-1 md:grid-cols-2 gap-10  p-10 " id="projects">
      <div className="flex md:mr-7 flex-col">
        <div className="mb-5">
          <h1
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
            Work Experience
          </h1>
          <h1
            className="text-[#fff] md:text-6xl text-2xl font-bold"
            id="projects"
          >
            Work that I've done for the past 3 years
          </h1>
        </div>
        <Link href="/proctor" className="widt">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5 ">
            <img src="proctor.png" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Proctor
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2">
              This is a doctor-patient website that allows patients to search for doctors and
              also book appointments. It is built with Laravel.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/inscribe">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out ">
            <img src="/inscribe.png" className="w-full" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Inscribe
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
              This a blogging website that enables content creators, particularly those with an interest in technical writing, 
              to publish, oversee, and share their blog posts. .
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/codeoverflow">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5">
            <img src="/codeoverflow.png" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              codeOverflow
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
              This is a Stack Overflow inspired full-stack application
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/caloryze">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5">
            <img src="/caloryze.png" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Caloryze
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
              This is a web app that enables users to maintain a proper diet by tracking the calories they consume in every meal. 
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <div className="pt-24 flex justify-center">
          <Link href="https://github.com/JohnOkari">
            <button className="bg-[#000] text-[#fff] md:text-2xl font-1xl font-semibold py-4 px-20 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc]">
              View all projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
