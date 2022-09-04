import React from "react";
import { useState } from "react";

export default function Textarea(props) {
  const [textarea, settextarea] = useState("");
  const textareahandler = (event) => {
    settextarea(event.target.value);
  };
  const uppercasehandler = () => {
    const temp = textarea.toUpperCase();
    settextarea(temp);
    props.showalert("Text are now uppercased", "success");
  };
  const lowercasehandler = () => {
    const temp = textarea.toLowerCase();
    settextarea(temp);
    props.showalert("Text are now lowercased", "success");
  };
  const clearhandler = () => {
    settextarea("");
  };
  const copyhandler = () => {
    const temp = document.getElementById("exampleFormControlTextarea1");
    temp.select();
    navigator.clipboard.writeText(temp.value);
    props.showalert("Text has been copied to clipboard", "success");
  };

  const handleremovespace = () => {
    const temp = document.getElementById("exampleFormControlTextarea1");
    const newttext = temp.value.split(/[ ]+/);
    settextarea(newttext.join(" "));
    props.showalert("Extra space removed", "success");
  };

  const wordcount = textarea.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;
  const charactercount = textarea.length;
  return (
    <>
      <div
        className={`container mb-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.name}
        </label>
        <textarea
          className={`form-control bg-${
            props.mode === "light" ? "light" : "black"
          }`}
          id="exampleFormControlTextarea1"
          rows="3"
          style={{ color: props.mode === "light" ? "black" : "white" }}
          value={textarea}
          onChange={textareahandler}
        >
          {props.textarea}
        </textarea>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={uppercasehandler}
          disabled={textarea.length === 0}
        >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={lowercasehandler}
          disabled={textarea.length === 0}
        >
          lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={copyhandler}
          disabled={textarea.length === 0}
        >
          Copy text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleremovespace}
          disabled={textarea.length === 0}
        >
          Remove extra spaces
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={clearhandler}
          disabled={textarea.length === 0}
        >
          Clear
        </button>
      </div>
      <div
        className={`container mb-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h6>word count ={wordcount}</h6>
        <h6>characters count={charactercount}</h6>
        <h6>
          <u>
            {textarea.length === 0
              ? "Type text to see preview"
              : "Your text preview"}
          </u>
        </h6>
        <h6>{textarea}</h6>
      </div>
    </>
  );
}
