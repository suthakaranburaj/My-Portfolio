import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Suthakar Anburaj</h2>
          <p className="text-base leading-6 ">
          Web Developer from India, Maharashtra. I’m skilled in MERN stack development and have experience creating dynamic, user-centered websites and applications. With a solid foundation in React, Node.js, and Express.js, along with knowledge of database systems like MongoDB and PostgreSQL, I’m passionate about building functional and engaging web solutions. I’d love to discuss innovative ideas and help bring your vision to life.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            21
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            INDIA
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Navi Mumbai, Nerul
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
