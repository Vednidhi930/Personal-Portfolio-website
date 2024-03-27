import React from "react";
import { BiLogoRedux } from "react-icons/bi";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { AiTwotoneAppstore } from "react-icons/ai";
import { MdOutlineFlipCameraIos } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import "../Components/Global.css";

const Projects = () => {
  return (
    <>
      <div className="about p-3 relative top-28  aboutus">
        <div className="content-width  bg-white p-10 rounded-lg">
          <h1 className="text-3xl font-bold">Projects</h1>

          <div className="flex gap-5 flex-wrap ">
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{ background: "#FFF4F4" }}
            >
              <img
                src="https://media.tychesoftwares.com/wp-content/uploads/2018/11/70679-big.jpg"
                className="rounded-lg transition delay-150"
              />
              <div>
                <h1>
                  <a href="https://amazing-toffee-71729d.netlify.app">
                    Project Link
                  </a>
                </h1>

                <h1 className="text-md font-bold">E-commerce Clothing Website (Reactjs)</h1>
              </div>
            </div>

            <div
              className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg"
              style={{ background: "#EEF5FA" }}
            >
              <div>
                <AiTwotoneAppstore className="text-4xl my-2 text-yellow-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-bold my-2">App Development</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod tincidunt volutpat.
                </p>
              </div>
            </div>

            <div
              className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg"
              style={{ background: "#EEF5FA" }}
            >
              <div>
                <MdOutlineFlipCameraIos className="text-4xl my-2 text-pink-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-bold my-2">Photography</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod tincidunt volutpat.
                </p>
              </div>
            </div>

            <div
              className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg"
              style={{ background: "#FFF4F4" }}
            >
              <div>
                <FaCode className="text-4xl my-2 text-blue-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-bold my-2">Web Development</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod tincidunt volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
