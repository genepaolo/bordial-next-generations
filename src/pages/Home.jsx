import React, { Component} from "react";
import "../styles/styles.scss";
import "../styles/styles600px.scss";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import si1 from "../resources/StockImages/shutterstock_1403885852.jpg";
import si2 from "../resources/StockImages/shutterstock_342312542.jpg";
import si3 from "../resources/StockImages/shutterstock_1667840344.jpg";
import aui from "../resources/StockImages/shutterstock_1015449343.jpg"
import aimg from "../resources/StockImages/pexels-kampus-production-7551629.jpg";
import wimg from "../resources/StockImages/shutterstock_1657685833.jpg";
import mimg from "../resources/StockImages/shutterstock_206476099.jpg";


import MovingComponent from 'react-moving-text';
import Counties from "../components/Counties";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 'home'
        }
    }

    displayWelcomeDiv(){
        return(
            <div className="home-welcome">
                <MovingComponent
                type="popIn"
                duration="2000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                    <span id="home-welcome-welcome">Welcome to</span>
                    <p>Cordial Healthcare Providers</p>
                </MovingComponent>
            </div>
        );
    }

    displayPageBody(){
        return(
            <div className="page-body">
                {this.displayWelcomeDiv()}
                
                <div>
                    <p className="home-section-title">
                        Who We Are
                    </p>
                    <div className="home-section-cols">
                        <div className="col-lg-6 col-12">
                            <p >
                                Cordial Healthcare Providers is a team of Board-certified Doctors, Nurse Practitioners, and Physician Assistants who make house calls to homebound patients. It was created to make healthcare easier and to improve access to quality health care for patients who are unable to leave their homes or who have difficulty going to a doctor’s office. Our practice strives to provide the highest quality, compassionate, patient-centered care to homebound patients in the comfort of their own homes. Our goal is to improve the patient’s quality of life, prevent complications and exacerbations of diseases, reduce the risk of hospitalization, and avoid visits to the emergency room or urgent care.
                                We offer non-emergency medical care. If you believe that you have an emergency, you should call 911 or go immediately to the nearest emergency room.
                            </p>
                        </div>
                        <div className="home-section-imgs col-lg-6 col-12">
                            <img src={aui} ></img>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="home-section-title">
                            Our Mission
                        </p>
                    </div>
                    <div className="home-section-cols">
                        <p className="col-lg-6 col-12">
                            Our goal is to improve the patient’s overall health, prevent complications and exacerbations of diseases, reduce the risk of hospitalization, and avoid visits to the emergency room or urgent care. We strive to keep our patients happier, healthier and safer while avoiding unnecessary hospital visits. We are also committed to empowering our patients with better understanding of their health condition and keep them involved in their treatment plan.
                        </p>
                        <div className="home-section-imgs col-lg-6 col-12">
                            <img src={wimg} ></img>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        );
    }

    displayCounties(){
        return(
            <div className="page-counties">
                <div className="page-counties-header">
                    COUNTIES SERVED
                </div>
                <div className="page-counties-body">
                    Proudly serving LA County, Orange County and Ventura County. <a href="/contact-us">Contact us for an appointment today.</a>
                </div>
            </div>
        );
    }



    render(){
        const fadeImages = [
            si1,
            si2,
            si3
        ];
        const slideshow =
            <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <div className="image-container">
                        <img className="image-container-image"src={fadeImages[0]} alt="" />
                    </div>
                    <div className="slide-div-info">
                        <MovingComponent
                            type="fadeIn"
                            duration="2000ms"
                            delay="0s"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="none">
                                <p className="slide-div-info-title">
                                Medical Services Right To Your Home
                                </p>
                                <div className="slide-div-info-info">
                                    <p >
                                    We bring Primary Care directly in the comfort of your own home, at the convenience of your schedule,  making it easier for you to get the care you need. 
                                    </p>
                                </div>
                                <a class="slide-div-button" href="/services">
                                    View Full Services
                                </a>
                        </MovingComponent>
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img className="image-container-image" src={fadeImages[1]} alt=""/>
                    </div>
                    <div className="slide-div-info">
                        <MovingComponent
                        type="fadeIn"
                        duration="2000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                            <p className="slide-div-info-title">
                            Quality Healthcare Wherever You May Be
                            </p>
                            <div className="slide-div-info-info">
                                <p >
                                    We make quality health care more accessible to patients. With our well-trained and passionate team of Doctors, Nurse Practitioners, and Physician Assistants, you will attain healthcare at its best. 
                                </p>
                            </div>
                            <a class="slide-div-button" href="/intake-requests">
                                    Request a Visit
                            </a>
                            
                        </MovingComponent>
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img className="image-container-image" src={fadeImages[2]} alt=""/>
                    </div>
                    <div className="slide-div-info">
                        <MovingComponent
                        type="fadeIn"
                        duration="2000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                            <p className="slide-div-info-title">
                                COVID-19 UPDATES
                            </p>
                            <div className="slide-div-info-info">
                                <p >
                                    Stay home. We will visit you.
                                </p>
                                <p>
                                    <a href="/covid-update">Click here for more information.</a>
                                </p>
                            </div>
                            
                        </MovingComponent>
                    </div>
                </div>
            </Fade>
            </div>
        
        return(
            <div className="body" id="home-body">
                {slideshow}
                {this.displayPageBody()}
                <Counties/>
            </div>
        );
    }
}

export default Home;