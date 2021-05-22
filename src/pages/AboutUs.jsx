import React, { Component, useState } from "react";
import "../styles/styles.scss";
import "../styles/styles600px.scss";
import MovingComponent from 'react-moving-text';
import img from "../resources/StockImages/pexels-kampus-production-7551629.jpg";
import Counties from "../components/Counties";
class AboutUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 'benefits'
        }
    }

    displayPageBody(){
        return(
            <div className="page-body" id="page-body-about">
                <div>
                        <img src={img} id="about-us-img"></img>
                    </div>
                    <MovingComponent
                    type="slideInFromTOP"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                        <p>Cordial Healthcare Providers is a team of Board-certified Doctors, Nurse Practitioners, and Physician Assistants who make house calls to homebound patients. It was created to make healthcare easier and to improve access to quality health care for patients who are unable to leave their homes or who have difficulty going to a doctor’s office. Our practice strives to provide the highest quality, compassionate, patient-centered care to homebound patients in the comfort of their own homes. Our goal is to improve the patient’s quality of life, prevent complications and exacerbations of diseases, reduce the risk of hospitalization, and avoid visits to the emergency room or urgent care.

    We offer non-emergency medical care. If you believe that you have an emergency, you should call 911 or go immediately to the nearest emergency room.

                        </p>
                    </MovingComponent>
            </div>
        );
    }


    render(){
        return(
            <div className="body" id="about-us-body">
                <div className="page-title">
                    <p className="page-title-p">ABOUT US</p>
                </div>
                {this.displayPageBody()}
                <Counties/>
            </div>
        );
    }
}

export default AboutUs;