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
                        About us
                    </p>
                    <div className="home-section-cols">
                        <div className="col-lg-6 col-12">
                            <p >
                                Cordial Healthcare Providers is a team of Board-certified Doctors, Nurse Practitioners, and Physician Assistants who provide primary care to medically complex, chronically ill, and homebound patients. It was created to improve access to quality health care for patients who are unable to leave their homes or who have difficulty going to a doctor’s office.
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
                        <div className="col-12">
                            <p >
                                The Mission of Cordial Healthcare Providers is to provide compassionate patient-centered care to the homebound patients with excellence in quality and service. Our goal is to improve the patient’s overall health, prevent complications and exacerbations of diseases, reduce the risk of hospitalization, avoid visits to the emergency room, and build long-term relationships with the patients we serve. We strive to keep our patients happier, healthier and safer while avoiding unnecessary hospital visits. We are committed to empowering our patients with better understanding of their health condition and keep them involved in their treatment plan. We work with you and your family closely to ensure you will get the best care possible.
                            </p>
                            <br/>
                            <ul>
                                <li>Our team consists of highly trained and qualified Board-certified Doctors, Nurse Practitioners, and Physician Assistants.</li>
                                <li>Our Medical Providers are available 7 days a week.</li>
                                <li>Fast and easy appointment scheduling.</li>
                                <li>Appointments are available within 24 to 48 hours. We even offer same-day appointments if the schedule permits. </li>
                                <li>Fast processing of documentation to ensure compliance. Home Health Referrals are submitted within 48 hours.</li>
                                <li>Our team utilizes best practices, innovative equipment, and an advanced electronic medical record system to attain best patient outcomes.</li>
                                <li>For even more added convenience, we offer both in-home and telehealth options.</li>
                                <li>We strive to provide the best quality healthcare wherever you may be. We are very proud of the exceptional services that we provide to every patient each time we visit because we believe our patients deserve the best. We ensure that all our patients receive the utmost attention and compassionate care they deserve.</li>
                                <li>We work with you and your loved ones to develop a treatment plan designed for you. </li>
                                <li>We take the time to get to know our patients and address all of their medical needs.</li>
                                
                            </ul>
                        </div>
                        
                        <div className="home-section-imgs col-12">
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