import React from "react";

export default function Footer(props) {
  return (
    <footer className={`footer mt-auto py-3 text-center text-${props.mode === "light" ? "dark" : "light"}`} style={{ backgroundColor: props.mode === "light" ? "#f8f9fa" : "#062f6c" }}>
      <div className="container">
        <span>All rights reserved. Copyright&#169; {new Date().getFullYear()} <strong>TextUtils</strong></span>
      </div>
    </footer>
  );
}
