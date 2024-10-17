import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className=" relative bottom-0 w-full h-auto bg-blue-800 mt-24 md:mt-10 ">
      <p className="text-white md:text-xl text-base text-center">
        �� &copy; 2024 ERUM WARIS All rights reserved.
      </p>
      <div className="flex justify-center ">
        <div className="md:w-14 md:h-14 h-10 w-10  bg-slate-300 text-2xl md:text-4xl border-2 border-white rounded-full m-3 p-3 flex justify-center items-center ">
          <a href="https://github.com/erum-waris" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className="md:w-14 md:h-14 h-10 w-10 bg-slate-300  text-2xl md:text-4xl  border-2 border-white rounded-full m-3 p-3 flex justify-center items-center ">
          <a
            href="https://www.facebook.com/profile.php?id=100086766218877&mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="md:w-14 md:h-14 h-10 w-10  bg-slate-300 text-2xl md:text-4xl border-2 border-white rounded-full m-3 p-3 flex justify-center items-center ">
          <a
            href="https://www.linkedin.com/in/erum-waris-16008b282/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="md:w-14 md:h-14 h-10 w-10 bg-slate-300  text-2xl md:text-4xl border-2 border-white rounded-full m-3 p-3 flex justify-center items-center ">
          <a href="mailto:erumwaris93@gmail.com" target="_blank">
            <MdEmail />
          </a>
        </div>
        <div className="md:w-14 md:h-14 h-10 w-10 bg-slate-300  text-2xl md:text-4xl border-2 border-white rounded-full m-3 p-3 flex justify-center items-center ">
          <a href="https://www.instagram.com/erumwaris93/" target="_blank">
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
