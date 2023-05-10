import React from "react";
import { BiPen } from "react-icons/bi";
import { CiDatabase } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";
import Image from "next/image";
import { TbBrandNextjs } from "react-icons/tb";

const Skillset = () => {
  return (
    <div className="bg-[#000]" id="skills">
      <div className="flex p-6 md:p-24 justify-between flex-col md:flex-row">
        <div className="mr-8">
          <h1 className="text-[#fff] font-bold text-5xl ">Skillset</h1>
          <p
            className="text-[#5b6876] mt-6"
            style={{ fontSize: "18px", lineHeight: "150%" }}
          >
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div className="mr-8">
          <div className="group">
            <MdOutlineDesignServices
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Frontend Developer
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the frontend development process
              and I can build any website from scratch. I have experience with
              HTML, CSS, JavaScript, React, Nextjs, and Tailwind.
            </p>
          </div>
          <div className="mt-4 group">
            <IoMdCodeWorking
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Backend Developer
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the backend development process
              and I can build any website from scratch. I have experience with
              Ruby, Rails, Postgresql, and Rspec.
            </p>
          </div>
        </div>
        <div>
          <div className="group">
            <CiDatabase
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Database design
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the database design process and I
              can build any database from scratch. I have experience with
              Postgresql.
            </p>
          </div>
          <div className="mt-8 group">
            <BiPen
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Content Writing
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the content writing process and I
              can write any content from scratch. I have experience with writing
              articles, blogs, and essays.
            </p>
          </div>
        </div>
      </div>
      <h1 className=" mt-10 mb-5 text-center text-white text-4xl text-bold">
        Technologies
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-16">
        <div
          className="p-6 hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/html.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#5b6876]">HTML</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6   hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/css.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#5b6876]">CSS</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6 hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/javascript.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#5b6876]">Javascript</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6  hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/react.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#5b6876]">REACT JS</h3>
            </div>
          </div>
        </div>
        <div
          className="p-6  hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/ruby.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#5b6876]">RUBY</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6  hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/rails.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#5b6876]">RUBY ON RAILS</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6  hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <TbBrandNextjs size={40} color="white" />
              <Image src="/next.svg" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#5b6876]">NEXT JS</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6  hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/tailwind.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#5b6876]">TAILWIND CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
