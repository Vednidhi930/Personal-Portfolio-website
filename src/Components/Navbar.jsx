import React from "react";
import { FaRegUser } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { LiaBlogSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Navbar = ({bgcolor,darkmode}) => {
  return (
    <>
      <nav className="lg:block sm:hidden h-full">
        <div className={`w-24 rounded-lg  ${darkmode==="dark" ? `bg-${bgcolor}` : `bg-white`} p-5 flex flex-col items-center gap-2 me-5`}>
          <NavLink to="/">
            {" "}
            <div
              className="w-16 rounded-lg flex flex-col justify-center items-center p-2 bg-slate-100"
              style={{ color: `${bgcolor==="white" ? "black" : "#A6A6A6"}`, background:`${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}

            >
              <FaRegUser className="text-2xl" />
              <h1 className="text-sm">About</h1>
            </div>{" "}
          </NavLink>

          {/* <NavLink to="/Resume">
            {" "}
            <div
              className="w-16  rounded-lg flex flex-col  items-center p-2"
              style={{ color: `${bgcolor==="white" ? "black" : "#A6A6A6"}`, background:`${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}
            >
              <PiNotepad className="text-2xl" />{" "}
              <h1 className="text-sm">Resume</h1>
            </div>
          </NavLink> */}
          <NavLink to="/Projects">
            <div
              className="w-16 rounded-lg flex flex-col justify-center items-center p-2"
              style={{ color: `${bgcolor==="white" ? "black" : "#A6A6A6"}`, background:`${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}
            >
              <FaLaptopCode className="text-2xl" />
              <h1 className="text-sm">Projects</h1>
            </div>
          </NavLink>

          <NavLink to="/Certify">

          <div
            className="w-16  rounded-lg flex flex-col justify-center items-center p-2"
            style={{ color: `${bgcolor==="white" ? "black" : "#A6A6A6"}`, background:`${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}
          >
            <AiOutlineSafetyCertificate className="text-2xl" />
            <h1 className="text-sm p-1">Skills</h1>
          </div>

          </NavLink>
          <NavLink to="/Contact">
            <div
              className="w-16 rounded-lg flex flex-col justify-center items-center p-2"
              style={{ color: `${bgcolor==="white" ? "black" : "#A6A6A6"}`, background:`${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}
            >
              <TiContacts className="text-2xl" />
              <h1 className="text-sm">Contacts</h1>
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
