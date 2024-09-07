import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import "../Components/Global.css";

const Resume = ({bgcolor,darkmode}) => {
  return (
    <>
      {/* <div className="about p-3 "> */}
        <div className={` ${darkmode==="dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
          <h1  className={`text-3xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`} >Resume</h1>

          <div className="Education flex items-center gap-1 my-4">
            <IoBookOutline className="text-3xl text-blue-500" />
            <h1 className={`text-2xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}> Education</h1>
          </div>

          <div className="flex gap-5 flex-wrap ">
            <div
              className="ui-ux-design w-80 flex flex-col gap-2 p-4 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <p  style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}  >2020-2024</p>
              <h1  style={{ color: `${bgcolor==="white" ? "#000000" : "white"}`}}  >B.Tech in CSE,Maharshi Dayanand University</h1>
              <h1 style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}>Rohtak,Haryana</h1>
            </div>

            <div
              className="ui-ux-design w-80 flex flex-col gap-2 p-4 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#EEF5FA" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <p  style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}  >2019-2020</p>
              <h1 style={{ color: `${bgcolor==="white" ? "#000000" : "white"}`}}>12th Class in Shivhari KSV School</h1>
              <h1 style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}>Kadi,Mehsana(Gujarat)</h1>
            </div>

            <div
              className="ui-ux-design w-80 flex flex-col gap-2 p-4 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <p  style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}  >2017-2018</p>
              <h1 style={{ color: `${bgcolor==="white" ? "#000000" : "white"}`}}>10th Class,Holy Family School</h1>
              <h1 style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}>Kadi,Mehsana(Gujarat)</h1>
            </div>
          </div>

          {/* <div>
            <div className="Education flex items-center gap-1 my-4">
              <AiOutlineFileDone className="text-3xl text-blue-500" />
              <h1 className={`text-2xl my-2 font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Key Skills</h1>
            </div>
          </div> */}

          {/* <div className="flex w-10/12 flex-wrap gap-2 p-5">
                <div
                  className="passion lg:w-4/12 h-8 p-2"
                  style={{ background: `${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}
                >
                  <h1 className="text-center text-nowrap text-sm" style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}>
                    Hyper Text Markup Language
                  </h1>
                </div>

                <div
                  className="passion lg:w-4/12 h-8 p-2 "
                  style={{ background: `${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}
                >
                  <h1 className="text-center text-nowrap text-sm" style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}>
                    Cascading Style Sheet
                  </h1>
                </div>
                    
                <div
                  className="passion lg:w-4/12 h-8 p-2 "
                  style={{ background: `${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}
                >
                  <h1 className="text-center text-nowrap text-sm"  style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}>
                    Javascript
                  </h1>
                </div>

                <div
                  className="passion lg:w-4/12 h-8 p-2"
                  style={{ background: `${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}
                >
                  <h1 className="text-center text-nowrap text-sm" style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}>
                    Bootstrap
                  </h1>
                </div>

                <div
                  className="passion w-4/12 h-8 p-2"
                  style={{ background: `${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}
                >
                  <h1 className="text-center text-nowrap text-sm" style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}>
                    Tailwind
                  </h1>
                </div>

                <div
                  className="passion w-4/12 h-8 p-2"
                  style={{ background: `${bgcolor==="white" ? "#f3f6f6" : "#1D1D1D"}`}}
                >
                  <h1 className="text-center text-nowrap text-sm" style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}>
                    Reactjs
                  </h1>
                </div>
              </div> */}
        </div>
      {/* </div> */}
    </>
  );
};

export default Resume;
