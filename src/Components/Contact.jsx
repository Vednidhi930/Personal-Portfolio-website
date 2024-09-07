import React from "react";
import "../Components/Global.css";

const handlecolorName = () => {
  let naam = document.getElementById("naam");
  let borderColorName = document.getElementById("borderColorName");
  console.log(naam);
  naam.style.color = "#FE7878";
  borderColorName.style.borderBottom = "1px solid #FE7878";
  borderColorName.style.height = "1.5rem";
};

const handlecolorEmail = () => {
  let email = document.getElementById("email");
  let borderColorEmail = document.getElementById("borderColorEmail");
  email.style.color = "#1B74E4";
  borderColorEmail.style.borderBottom = "1px solid #1B74E4";
  borderColorEmail.style.height = "1.5rem";
};

const handlecolorMessage = () => {
  let message = document.getElementById("message");
  let borderColorMessage = document.getElementById("borderColorMessage");
  message.style.color = "#CE65F3";
  borderColorMessage.style.borderBottom = "1px solid #CE65F3";
  borderColorMessage.style.height = "1.5rem";
};

const Contact = ({ bgcolor, darkmode }) => {
  return (
    <>
      {/* <div className="about p-3 relative aboutus"> */}
        <div
          className={` ${
            darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
          } p-10 rounded-lg flex flex-col gap-10`}
        >
          <h1
            className="text-3xl font-bold"
            style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}
          >
            Contact
          </h1>

          <div
            className="flex flex-col lg:w-11/12 sm:w-full gap-2 p-5 rounded-lg"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <div className="my-3">
              <h1
                className="text-2xl "
                style={{
                  color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
                }}
              >
                I'm Always Open To Discussing Product
              </h1>{" "}
              <h1
                className="text-2xl  font-bold"
                style={{
                  color: `${bgcolor === "white" ? "#000000" : "white"}`,
                }}
              >
                design work or Opportunities.
              </h1>
            </div>

            <form action="https://formspree.io/f/xyyrnkyr" method="POST">
              <div className="flex flex-col">
                <label
                  id="naam"
                  style={{
                    color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
                  }}
                >
                  Name*
                </label>

                <input
                  type="text"
                  className="w-10/12 h-2 border-b border-black outline-none"
                  style={{
                    background: `${
                      bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"
                    }`,
                    color: `${bgcolor === "white" ? "#000000" : "white"}`,
                  }}
                  onClick={handlecolorName}
                  name="name"
                  id="borderColorName"
                />
              </div>

              <div className="my-10 flex flex-col">
                <label
                  id="email"
                  style={{
                    color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
                  }}
                >
                  {" "}
                  Email*
                </label>

                <input
                  type="text"
                  className="w-10/12 h-2 border-b border-black outline-none"
                  style={{
                    background: `${
                      bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"
                    }`,
                    color: `${bgcolor === "white" ? "#000000" : "#white"}`,
                  }}
                  onClick={handlecolorEmail}
                  name="email"
                  id="borderColorEmail"
                />
              </div>
              <div className="flex flex-col">
                <label
                  id="message"
                  style={{
                    color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
                  }}
                >
                  {" "}
                  Message*
                </label>
                <input
                  type="text"
                  className="w-10/12 h-2 border-b border-black outline-none"
                  style={{
                    background: `${
                      bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"
                    }`,
                    color: `${bgcolor === "white" ? "#000000" : "white"}`,
                  }}
                  onClick={handlecolorMessage}
                  name="message"
                  id="borderColorMessage"
                />
              </div>

              <button
                className=" my-2 w-32 h-11 hover:bg-blue-500 hover:text-white font-bold rounded-lg btn-sumit border border-blue-500"
                style={{
                  background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
                  color: `${bgcolor === "white" ? "#000000" : "white"}`,
                }}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
