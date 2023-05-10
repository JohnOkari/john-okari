import React from "react";

const Contact = () => {
  return (
    <div
      className="bg-[#000] grid grid-cols-1 md:grid-cols-2 h-[100%] py-32  p-10 "
      id="contact"
    >
      <div className="md:pl-10 pb-6">
        <h1 className="text-[#fff] text-4xl md:text-6xl font-bold">
          Let’s talk business
        </h1>
        <p className="text-[#5b6876] text-lg mt-8">
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </p>
      </div>
      <div>
        <form action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6" method="POST">
          <h2 className="text-white mb-2">Name</h2>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-[#181822] text-[#fff] md:w-[70%] w-full outline-none py-1 mb-10 px-4 rounded-md"
            required
          />

          <h2 className="text-white mb-2">Email</h2>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-[#181822] text-[#fff] md:w-[70%] w-full outline-none py-1 mb-10 px-4 rounded-md"
            required
            validate="email"
          />

          <h2 className="text-white mb-2">Message</h2>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="bg-[#181822] text-[#fff] w-full md:w-[70%] outline-none py-1 px-4 rounded-md"
            required
          ></textarea>

          <input
            type="submit"
            value="Let's get started"
            className="bg-[#4c24dc] w-full text-[#fff] md:w-[70%] outline-none py-6 mt-10 font-bold uppercase cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
