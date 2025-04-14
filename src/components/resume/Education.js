import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2024 - Present"
          title="Junior Software Programmer"
          subTitle="Enpointe IO, Andheri West"
          des="Managing the complete backend of a high-traffic platform using Express.js, Node.js, and SQL Prisma, ensuring robust, scalable, and efficient solutions.
Designed and implemented APIs for exporting data to Excel and CSV formats, facilitating seamless data integration and usability.
Resolved complex bugs and system errors, significantly improving application stability and performance.
Created comprehensive API documentation to streamline the development process and enhance team collaboration.
 Vuejs, MySQL, Prisma, ExpressJs, NodeJs"
        />
        <ResumeCard
          badge="2024 - Present"
          title="Web Developer"
          subTitle="Arena GST, SIES GST"
          des="Developed and maintained web applications, managed projects in a competitive programming environment, and contributed to creating a seamless user experience."
        />
        <ResumeCard
          badge="2023 - Present"
          title="Senior Technical Coordinator"
          subTitle="Computer Society of India (CSI), SIES GST"
          des="Led technical workshops, coordinated events, and managed technical resources for student development in various fields like web development and competitive programming."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2022 - Present"
          title="Bachelor of Engineering, Computer Engineering"
          subTitle="SIES Graduate School of Technology"
          des="Pursuing a bachelor's degree with a focus on web development, software engineering, and competitive programming."
        />
      </div>
    </div>
  );
};

export default Education;
