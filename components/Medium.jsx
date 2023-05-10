import React from "react";
import Link from "next/link";

const Medium = () => {
  return (
    <div
      className="bg-[#f7e5fc] grid grid-cols-1 md:grid-cols-2 gap-10"
      id="medium"
    >
      <div className="p-6 md:p-0">
        <h1 className="text-5xl font-bold pt-16 md:pl-14">Medium</h1>
        <p
          className="text-[#5b6876] mt-6 md:pl-14"
          style={{ fontSize: "18px", lineHeight: "150%" }}
        >
          As a passionate technical writer, I have a love for creating clear and
          concise articles that educate and inform. With a strong understanding
          of complex technical concepts, I have the ability to break them down
          into easily digestible information for a wider audience. I believe
          that great technical writing not only helps spread knowledge and
          understanding, but can also make a significant impact on people's
          lives. Whether it's through improving software or helping people
          navigate a new technology, I take pride in using my writing skills to
          make a difference.
        </p>
        <Link href="https://medium.com/@johnnokari">
          <button className="hover:bg-[#4c24dd] text-black py-2 mt-10  md:ml-14 border-b-2 border-[#000] hover:px-6 transition duration-300 ease-in-out hover:text-white">
            Follow me on medium
          </button>
        </Link>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="medium"
        />
      </div>
    </div>
  );
};

export default Medium;
