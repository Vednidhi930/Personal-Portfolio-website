import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import Anurag from "./SocialLinks/Picsart_24-03-22_23-12-27-210.png";
import "../Components/Global.css";
import cv from "../Components/SocialLinks/anurag resume .pdf";
import { FaRegUser } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LiaBlogSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Profile = ({ show, setShow, darkmode, bgcolor }) => {
  return (
    <>
      {show ? (
        <div
          className={`${
            darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
          } lg:w-11/12 md:w-8/12 sm:w-11/12 absolute sm:top-64 z-20`}
        >
          <NavLink to="/About">
            <div
              onClick={()=>setShow(!show)}
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

          <NavLink to="/Resume">
            <div
              onClick={()=>setShow(!show)}
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
          </NavLink>

          <NavLink to="/Projects">
            <div
              onClick={()=>setShow(!show)}
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
              onClick={()=>setShow(!show)}
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
                Certify 
              </h1>
            </div>
          </NavLink>

          <NavLink to="/Contact">

          <div
          onClick={()=>setShow(!show)}
          
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

      <div className="profile w-screen h-full flex justify-around">
        <div
          className={`lg:w-80 sm:w-96 h-12/12 rounded-lg p-10 flex flex-col items-center relative gap-7 ${
            darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
          }`}
        >
          <div className="w-32 rounded-lg  image">
            <img src={Anurag} className="w-screen rounded-lg" />
          </div>
          <h1
            className={`text-2xl font-bold relative lg:top-16 sm:top-24 ${
              bgcolor === "white" ? "text-black" : "text-white"
            }`}
          >
            Anurag Singh
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
              <a href="https://www.instagram.com/anurag_hr13?igsh=MWt6aXpyMHNsbXZvdw==">
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
              <a href="https://github.com/AnuragSingh1630">
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
            className="w-64  p-4 flex flex-col gap-2 rounded-lg relative top-8"
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
                  +917016404210
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
                  } text-sm`}
                >
                  anu398059@gmail.com
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
                  Bahadurgarh,Haryana
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
                  27 oct 2002 
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
