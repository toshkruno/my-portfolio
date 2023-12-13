import "./WorkCardStyles.css";

import React from "react";
import {NavLink} from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="true"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="pro-btns">
            <div className="gap">
            <NavLink to={props.view} className="btn rounded">Preview</NavLink>
            </div>
            <div>
            <NavLink to={props.source} className="btn rounded">Source</NavLink>
            </div>
            
            
          </div>
        </div>
    </div>
  );
};

export default WorkCard;
