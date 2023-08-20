import React from "react";

export default function ImageSlider(props) {
  return (
    <div className="imageSlider">
      <img src={props.src} />
      <h1 className="slogan">jerseys worldwide</h1>
      <button
        className="col-0.5 leftArrow btn btn-sm btn-light text-dark"
        onClick={() => props.handleClick(true)}
      >
        <span className="arrow">{"<"}</span>
      </button>
      <button className="text btn-lg btn btn-outline-light">
        {props.text}
      </button>
      <button
        className="col-0.5 rightArrow btn btn-sm btn-light text-dark"
        onClick={() => props.handleClick(false)}
      >
        <span className="arrow">{">"}</span>
      </button>
    </div>
  );
}
