import "./AboutContentStyle.css";
import React from 'react'
import { Link } from "react-router-dom";
import img from "../assets/react1.jpg";
import img1 from "../assets/react2.webp";

const AboutContent = () => {
return (  
<div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>Am a Full Stack Developer. I Create 
        Responsive Source Website For My Clients.
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    </div>

    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={img1} className="img" alt="true"/>
            </div>

            <div className="img-stock buttom">
                <img src={img} className="img" alt="imag"/>

            </div>
        </div>
    </div>
</div>
);
}

export default AboutContent