import React from "react";
import {
  workImgOne,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import project2 from '../../assets/work/cars_renting_website.png'
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import   password_manager from '../../assets/work/password_manager.png'
import workImgTwo from '../../assets/work/workImgTwo.png'
import netflix from '../../assets/work/Netflix_clone.png'
import timer from '../../assets/work/timer.png'

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a href="https://clip-verse.vercel.app/" target="_blank">
            <ProjectsCard
              title="Clip Verse"
              category="Video Streaming Platform"
              image={workImgTwo}
            />
          </a>
          <a href="https://github.com/suthakaranburaj/Netflix-clone-using-html-and-css" target="_blank">
            <ProjectsCard
              title="Netflix Clone"
              category="Web application"
              image={netflix}
            />
          </a>
          <a href="https://github.com/suthakaranburaj/Promodoro-Timer-in-Python">
            <ProjectsCard
              title="Promodoro Timer"
              category="Desktop Application"
              image={timer}
            />
          </a>
        </div>
        
        <div className="px-6">
          <a href="https://github.com/suthakaranburaj/cars-website" target="_blank">
            <ProjectsCard
              title="Cars Renting Website"
              category="Full Stack Application"
              image={project2}
            />
          </a>
          
          <a href="https://github.com/suthakaranburaj/Password-Generator-in-Python" target="_blank">
            <ProjectsCard
              title="Password Manager"
              category="Desktop Application"
              image={password_manager}
            />
          </a>
          {/* <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          /> */}
          {/* <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          /> */}
          {/* <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
