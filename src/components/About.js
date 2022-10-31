// import React, { useState } from "react";
import React from "react";

export default function About(props) {
  // const [mystyle, setMystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid black",
  //   borderRadius: "10px",
  // });

  let mystyle = {
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "10px",
  };
  if (props.mode === "dark") {
    mystyle = {
      color: "white",
      backgroundColor: "black",
      borderColor: "white",
      borderRadius: "10px",
    };
  }

  // const [btntext, setbtntext] = useState("Enable Dark Mode");

  // const togglestyle = () => {
  //   if (mystyle.color === "black") {
  //     setMystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       borderColor: "white",
  //       borderRadius: "10px",
  //     });
  //     setbtntext("Enable Light Mode");
  //   } else {
  //     setMystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       borderColor: "black",
  //       borderRadius: "10px",
  //     });
  //     setbtntext("Enable Dark Mode");
  //   }
  // };

  // instead of using a different button for about comp., we pass mode as prop from app here, and set Mystyle in if else.

  return (
    <div
      className="accordion"
      id="accordionPanelsStayOpenExample"
      width="70%"
      style={mystyle}
    >
      <h2 style={mystyle}>About Us</h2>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
            style={mystyle}
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div className="accordion-body" style={mystyle}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
            style={mystyle}
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
          style={mystyle}
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
            style={mystyle}
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
          style={mystyle}
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={togglestyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div> */}
      {/* we try to change the mode by using the mode in app js as a prop. we check the mode here through prop, and change mystyle using simple if else. */}
    </div>
  );
}
