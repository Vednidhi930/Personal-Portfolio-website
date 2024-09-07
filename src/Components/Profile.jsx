import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import Anurag from "./SocialLinks/myphoto.jpeg";
import "../Components/Global.css";
import cv from "../Components/SocialLinks/Resume.pdf";
import { FaRegUser } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LiaBlogSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Profile = ({ show, setShow, darkmode, bgcolor,setCross }) => {

 const handleCross=()=>{
  setCross(false)
  setShow(false)
 }

  return (
    <>
      {show ? (
        <div
          className={`${
            darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
          } lg:w-11/12  md:w-8/12 sm:w-11/12 absolute sm:top-50 z-20`}
        >
          <NavLink to="/">
            <div
              onClick={handleCross}
              className={`bg-slate-200 rounded-lg flex items-center p-2 gap-1`}
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <FaRegUser className="text-xl" />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                About
              </h1>
            </div>
          </NavLink>

          {/* <NavLink to="/Resume">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <PiNotepad
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Resume
              </h1>
            </div>
          </NavLink> */}

          <NavLink to="/Projects">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <FaLaptopCode
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Projects
              </h1>
            </div>
          </NavLink>

         
          <NavLink to="/Certify">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <AiOutlineSafetyCertificate
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Skills
              </h1>
            </div>
          </NavLink>

          <NavLink to="/Contact">

          <div
          onClick={handleCross}
          
            className="rounded-lg flex items-center p-2"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <TiContacts
              className={`text-xl my-1 ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            />
            <h1
              className={`text-sm my-1 ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            >
              Contact
            </h1>
          </div>
          </NavLink>
        </div>

        
      ) : null}

      <div className="w-full flex justify-around">
        <div
          className={`lg:w-80 sm:w-96 h-12/12 rounded-lg p-10 flex flex-col items-center relative gap-7  ${
            darkmode === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <div className="w-40 h-40 rounded-full  image">
            <img src="data:image/jpeg;base64,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" className="w-screen rounded-lg" />
          </div>
          <h1
            className={`text-2xl font-bold relative lg:top-16 sm:top-24 ${
              bgcolor === "white" ? "text-black" : "text-white"
            }`}
          >
            Your Name
          </h1>
          <div
            className="passion w-6/12 h-8 p-2 relative lg:top-12 sm:top-20"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <h1
              className={"text-center text-nowrap text-sm"}
              style={{
                color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
              }}
            >
              DEVELOPER
            </h1>
          </div>

          <div className=" w-96 p-2 flex gap-2 justify-center relative lg:top-10 sm:top-14">
            <div
              className="insta w-8 h-8 p-1 flex justify-center items-center rounded-lg hover:bg-blue-500  bg-slate-100"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <a href="https://www.instagram.com/confident_coder/?next=%2F" target="#">
                {" "}
                <FaInstagram className="text-2xl text-red-400   fw-bold" />{" "}
              </a>
            </div>

            <div
              className="insta w-8 h-8 p-1 flex justify-center items-center rounded-lg hover:bg-blue-500  bg-slate-100"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <a href="https://www.linkedin.com/in/anurag-singh-86998b28a/">
                {" "}
                <FaLinkedin className="text-2xl text-blue-600  fw-bold" />{" "}
              </a>
            </div>

            <div
              className="insta w-8 h-8 p-1 flex justify-center items-center rounded-lg hover:bg-blue-500  bg-slate-100"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`
              }}
            >
              <a href="https://github.com/vednidhi930" target="#">
                {" "}
                <BsGithub className="text-2xl text-black  fw-bold"
                style={{
                  color: `${bgcolor === "white" ? "black" : "white"}`
                }}
                />{" "}
              </a>
            </div>
          </div>

          <div
            className="w-68  p-4 flex flex-col gap-2 rounded-lg relative top-8"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <div
              className={`flex  items-center gap-2 ${
                bgcolor === "white"
                  ? "border-b border-grey-200 p-1"
                  : "border-b border-slate-500"
              }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${
                  bgcolor == "white" ? "bg-white" : "bg-black"
                } rounded-lg  hover:bg-blue-500`}
              >
                <CiMobile4 className="text-2xl text-pink-500 hover:text-white" />
              </div>

              <div className="phone">
                <h1
                  className={`${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  +9111234566445
                </h1>
              </div>
            </div>

            <div
              className={`flex  items-center gap-2 ${
                bgcolor === "white"
                  ? "border-b border-grey-200 p-1"
                  : "border-b border-slate-500"
              }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${
                  bgcolor == "white" ? "bg-white" : "bg-black"
                } rounded-lg  hover:bg-blue-500`}
              >
                <AiTwotoneMail className="text-2xl text-sky-600 hover:text-white" />
              </div>

              <div className="phone">
                <h1
                  className={`${
                    bgcolor === "white" ? "text-black" : "text-white"
                  } text-sm sm:text-sm`}
                >
                  xyz7988@gmail.com
                </h1>
              </div>
            </div>

            <div
              className={`flex  items-center gap-2 ${
                bgcolor === "white"
                  ? "border-b border-grey-200 p-1"
                  : "border-b border-slate-500"
              }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${
                  bgcolor == "white" ? "bg-white" : "bg-black"
                } rounded-lg  hover:bg-blue-500`}
              >
                <IoLocationSharp className="text-2xl text-pink-600 hover:text-white" />
              </div>

              <div className="phone">
                <h1
                  className={`${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Jhajjar,Haryana
                </h1>
              </div>
            </div>

            <div
              className={`flex  items-center gap-2 ${
                bgcolor === "white"
                  ? "border-b border-grey-200 p-1"
                  : "border-b border-slate-500"
              }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${
                  bgcolor == "white" ? "bg-white" : "bg-black"
                } rounded-lg  hover:bg-blue-500`}
              >
                <BsCalendarDate className="text-2xl text-purple-600 hover:text-white" />
              </div>

              <div className="phone">
                <h1
                  className={`${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  28 jul 2003 
                </h1>
              </div>
            </div>
          </div>
          <div className="flex relative top-5">
            <button className="bg-blue-500 flex items-center rounded-lg justify-center text-white p-2 text-md text-nowrap w-36 h-10">
              <a href={cv} download="Resume" className="flex">
                <MdOutlineFileDownload className="text-2xl" />
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
