import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Suthakar_anburaj_resume.pdf";
import { bannerImg } from "../../assets/index";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-3xl font-semibold">Suthakar Anburaj</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a href="https://github.com/suthakaranburaj" target="_blank"  className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/suthakar-anburaj-7bb816290/" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </a>
            <a href="https://www.geeksforgeeks.org/user/suthakaranburaj/" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiGeeksforgeeks />
            </a>
            <a href="https://www.codechef.com/users/adapt_team_90" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiCodechef />
            </a>
            <a href="https://www.instagram.com/suthakaranburaj/" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </a>
            <a href="" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaSquareXTwitter />
            </a>
            <a href="https://leetcode.com/u/suthakaranburaj/" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiLeetcode />
            </a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            <a href="https://www.linkedin.com/in/suthakar-anburaj-7bb816290/" target="_blank">Contact me</a> <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
