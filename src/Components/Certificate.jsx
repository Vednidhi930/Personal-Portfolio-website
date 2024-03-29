import React from 'react'
import "../Components/Global.css";
import project1 from "../Components/SocialLinks/e commerce ss.png"
import project2 from "../Components/SocialLinks/portfolio project ss.png"
import project3 from "../Components/SocialLinks/text analyzer ss.png"
import iot from "../Components/SocialLinks/iot.png"
import reactjs from "../Components/SocialLinks/reactjs.png"
import webdevelopement from "../Components/SocialLinks/web developement.png"
import htmlcssjs from "../Components/SocialLinks/html css js.png"


const Certificate = ({bgcolor,darkmode}) => {
  return (
    <>
        <div className="about p-3 relative   aboutus">
        <div className={`content-width  ${darkmode==="dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
          <h1 className={`text-3xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Certificate</h1>

          <div className="flex gap-5 flex-wrap my-5">
          <a>
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={webdevelopement}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Internship (Web Developement)</h1>
              </div>
            </div>
            </a>

            <a>
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#EEF5FA" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={iot}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Internship (I I O T)</h1>
              </div>
            </div>
            </a>
            <a>
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#EEF5FA" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={htmlcssjs}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>HTML5 CSS3 JavascriptES6</h1>
              </div>
            </div>
            </a>

            <a>
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={reactjs}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Reactjs</h1>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Certificate
