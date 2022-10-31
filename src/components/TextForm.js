import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text is capitalized!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text is edited!", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("text cleared!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleremovespace = () => {
    setText(text.trim().split(/[ ]+/).join(" "));
    props.showAlert("text is edited!", "success");
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#88AABE" : "white",
              borderRadius: "7px",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleremovespace}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.length ? text.trim().split(/[ ]+/).length : 0} words and{" "}
          {text.length} characters
        </p>
        <p>
          {Math.round(
            0.008 * (text.length ? text.trim().split(/[ ]+/).length : 0)
          )}{" "}
          Minutes read
        </p>
      </div>
    </>
  );
}
