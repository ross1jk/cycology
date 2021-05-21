import React from "react";
import Input from "../Input";
// import "./style.css";

function Form(props) {
  return (
    <div className="form-group">
        <label for={props.id}>{props.label}</label>
        <Input type={props.type} className={props.class} id={props.id} aria-describedby={props.label} placeholder={props.placeholder}/>
    </div>
  );
}

export default Form;