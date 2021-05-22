import React, { Component, useState } from "react";
import "../styles/styles.scss";
import "../styles/styles600px.scss";
import img from "../resources/StockImages/pexels-rodnae-productions-6129507.jpg";
import MovingComponent from 'react-moving-text';

class Career extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 'career'
        }
    }

    displayPageBody(){
        return(
            <div className="page-body" id="career-page-body">
                <MovingComponent
                type="slideInFromLeft"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                    <p>We would love for you to join us!</p>
                    <p>For interested applicants, please submit your CV or resume to: <a href ="mailto: cordialmmg@gmail.com">cordialmmg@gmail.com</a></p>
                </MovingComponent>
            </div>
        );
    }

    render(){
        return(
            <div className="body" id="career-body">
                <div className="page-title">
                    <p className="page-title-p">Career</p>
                </div>
                {this.displayPageBody()}
                <div>
                    <img src={img} className="career-img"></img>
                </div>
            </div>
        );
    }
}

export default Career;