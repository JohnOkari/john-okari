import React from "react";
import Image from "next/image";
import pic from "../public/john-image.png";

const About = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#fdf3e6] md:p-12 pb-8 justify-center"
      id="about"
    >
      <div className="p-6 ml-12">
        <h1 className="max-w-[780px] w-[100%] leading-10 text-4xl font-bold md:p-6 text-1xl md:text-2xl">
          About
        </h1>
        <p className="text-[#5b6876] text-1xl md:text-2xl leading-10 md:p-6 mt-6">
          I am a certified full stack developer with a passion for building
          innovative and impactful applications. My expertise lies in utilizing{" "}
          <span className=" text-[#5651e5]">
          HTML, CSS, JavaScript, Jest, React, Nextjs, Postgresql, Ruby, Rspec,
          and Rails </span> to bring ideas to life. With a certification from{" "}
           <span className=" text-[#5651e5]">Moringa School</span>,
          I have honed my skills and gained valuable
          experience in software development. I am always eager to learn and
          grow, and I thrive when working with a{" "}  <span className=" text-[#5651e5]">team of diverse individuals </span>
          from around the world. I believe that{" "}  <span className=" text-[#5651e5]">collaboration</span>  is key to creating
          amazing products, and I am committed to constantly improving my skills
          and contributing to the development community.
        </p>
        <a href="/john.pdf" download>
          <button className="hover:bg-[#4c24dd] text-black py-2 ml-6 border-b-2 border-[#000] hover:px-6 transition duration-300 ease-in-out hover:text-white">
            Download Resume
          </button>
        </a>
      </div>
      <div className="flex items-center  bg-gradient-to-b  from-blue-500 overflow-hidden rounded-full md:w-96 md:h-96 w-80 h-80 m-auto hover:scale-105 ease-in duration-300 shadow-xl shadow-[#5651e5] cursor-pointer">
        <Image
         src={pic} 
         alt="avatar"
         className="flex rotate-270 mx-auto justify-center rounded-full shadow-lg shadow-gray-400"
        />
      </div>
    </div>
  );
};

export default About;
