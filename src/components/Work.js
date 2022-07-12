import "./WorkCardStyle.css";
import React from 'react';
import WorkCard from "./WorkCard";
import WorkData from "./WorkData";
// import project1 from "../assets/project1.png"
// import { NavLink } from "react-router-dom";

const Work = () => {
return ( 
<div className="work-container">
    <h1 className="project-heading">Project</h1>
    <div className="project-container">
        {WorkData.map((val, ind) =>{
            return(
                <WorkCard
                key={ind}
                imgSrc={val.imgSrc}
                title={val.title}
                text={val.text}
                view={val.view}/>
            );
        })}
    </div>
</div>
);
}

export default Work