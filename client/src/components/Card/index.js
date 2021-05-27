import React from "react";
// import "./style.css";

function Card(props) {
    return (
        <div className="card" id={props.id}>
            <div className="card-body">
            <h1 id="cardTitle">
            {props.cardTitleOne} {props.to} {props.cardTitleTwo}
            </h1>
            <p>{props.cardContent}</p>
            </div>
        </div>

    )
}

export default Card;