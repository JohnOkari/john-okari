import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#000] grid grid-cols-1 md:grid-cols-2 p-4 md:p-0" id="testmonials"> 
      <div className="md:sticky md:top-0 md:h-screen pt-32 md:pl-16">
        <h1 className="text-[#fff] md:text-6xl text-2xl font-bold">
          This is what people say about me
        </h1>

        <p className="text-[#5b6876] text-lg mt-8 md:mr-10">
          Here are a few lines from people who I have worked with over the past
          2+ years in my developer.
        </p>
      </div>
      <div className="md:pt-32 pt-20 md:p-12">
        <div>
          <img
            src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5ca959aafef7674902_Testimonial%201.jpg"
            alt=""
          />
          <div className="border-b-2 border-r-2 border-l-2 border-[#5b6876] p-10">
            <p className="text-[#fff] text-2xl font-bold">
              "John, is a very fast learner and always eager to learn and try
              out new things. We worked on a project together where he showed a
              good understanding of computer fundamentals and was always way
              proactive to take up and finish tasks on time. He is a fresher to
              the software industry but has shown good skills and in-depth
              knowledge on a few advanced topics too. I would highly recommend
              John."
            </p>

            <p className="text-[#5b6876] text-lg mt-4">
            - Kipngetich Ngeno, Software Engineer at Finplus Group 
             
            </p>
          </div>
        </div>

        <div className="mt-24">
          <img
            src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5ca959aafef7674902_Testimonial%201.jpg"
            alt=""
          />
          <div className="border-b-2 border-r-2 border-l-2 border-[#5b6876] p-10">
            <p className="text-[#fff] text-2xl font-bold">
              "John is a very creative and good developer. He possesses the
              technical knowledge to become an extraordinary developer. He is a
              brilliant and humble guy and can learn in a fast-paced
              environment. He's also open to ideas and listens to constructive
              criticism, approaching it as a thoughtful way of improving
              himself. I would highly recommend him as a software developer and
              designer."
            </p>

            <p className="text-[#5b6876] text-lg mt-4">
            - Kepha Okari, Software Engineer at OLIVE TREE MEDIA LIMITED
            </p>
          </div>
        </div>

        <div className="mt-24">
          <img
            src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5ca959aafef7674902_Testimonial%201.jpg"
            alt=""
          />
          <div className="border-b-2 border-r-2 border-l-2 border-[#5b6876] p-10">
            <p className="text-[#fff] text-2xl font-bold">
              "John is an amazing friend and an excellent software developer.
              He is always willing to offer help to other members who faced
              technical blockers. He is the perfect team player. who has
              leadership abilities. I highly recommend John."
            </p>

            <p className="text-[#5b6876] text-lg mt-4">
              - Justin Mbinya, Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
