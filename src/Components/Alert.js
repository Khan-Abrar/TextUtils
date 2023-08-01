import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lowerCase = word.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  };
  return (
    <div style={{ height: "30px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} pb-2`} role="alert">
          <strong>{capitalize(props.alert.type)}: </strong>
          {props.alert.message}
        </div>
      )}
    </div>
  );
}
