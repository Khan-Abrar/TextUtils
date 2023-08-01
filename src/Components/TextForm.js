import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleClear = () => {
    setText("");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.handleAlert("Text copied to Clipboard!", "success");
  };
  const handleWhiteSpace = () => {
    setText(text.split(/[ ]+/).join(" "));
  };

  return (
    <>
      <div className="container my-4">
        <label htmlFor="textForm" className="form-label">
          <h2>
            <strong>{props.heading}</strong>
          </h2>
        </label>
        <textarea className="form-control" id="textForm" rows="8" onChange={handleChange} value={text}></textarea>
        <div className="container-fluid d-flex flex-wrap">
          <button type="button" disabled={text.length === 0} onClick={handleUpperCase} className="btn btn-primary me-3 my-2 flex-fill">
            Convert To UpperCase
          </button>
          <button type="button" disabled={text.length === 0} onClick={handleLowerCase} className="btn btn-primary me-3 my-2 flex-fill">
            Convert To LowerCase
          </button>
          <button type="button" disabled={text.length === 0} onClick={handleWhiteSpace} className="btn btn-primary me-3 my-2 flex-fill">
            Remove WhiteSpaces
          </button>
          <button type="button" disabled={text.length === 0} onClick={handleClear} className="btn btn-primary me-3 my-2 flex-fill">
            Clear Text
          </button>
          <button type="button" disabled={text.length === 0} onClick={handleCopy} className="btn btn-primary me-3 my-2 flex-fill">
            Copy Text
          </button>
        </div>
      </div>
      <div className="container my-4">
        <h3>
          <strong>Text Summary</strong>
        </h3>
        <p>
          <strong>{text.split(/\s+/).filter((res) => res.length > 0).length}</strong> Words and <strong>{text.length}</strong> Characters.
        </p>
        <p>
          It's a <strong>{0.06 * text.split(/\s+/).filter((res) => res.length > 0).length}</strong> minute read.
        </p>
        <h3 className="py-2">
          <strong>Preview</strong>
        </h3>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
