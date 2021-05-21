import React from "react";
// import "./style.css";

function Input(props) {
  return (
    <div className="input-group input-group-lg">
      <input {...props} />
    </div>
  );
}

export default Input;