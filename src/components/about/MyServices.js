import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <ServicesCard
      icons={<BiCodeAlt  />}
      title="Web Development"
      subTitle="Creating dynamic, user-friendly websites and applications using the MERN stack and other modern technologies."
    />
    <ServicesCard
      icons={<SiAntdesign  />}
      title="Frontend Development"
      subTitle="Designing visually appealing and responsive user interfaces with a focus on user experience using React and Tailwind CSS."
    />
    <ServicesCard
      icons={<AiTwotoneAppstore  />}
      title="Backend Development"
      subTitle="Building robust and scalable backends with Node.js, Express, and MongoDB to ensure smooth server performance."
    />
  </div>

  );
};

export default MyServices;
