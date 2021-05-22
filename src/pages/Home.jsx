import React, { Component} from "react";
import "../styles/styles.scss";
import "../styles/styles600px.scss";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import si1 from "../resources/StockImages/pexels-thirdman-5327584.jpg";
import si2 from "../resources/StockImages/pexels-anthony-shkraba-5215013.jpg";
import si3 from "../resources/StockImages/pexels-thirdman-5327584.jpg";
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
                <MovingComponent
                type="popIn"
                duration="2000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                    <p>
                        We bring Primary Care directly in the comfort of your own home, at the convenience of your schedule, making it easier for you to get the care you need. Our highly trained and qualified medical providers provide primary care to medically complex, chronically ill, and homebound patients with access to evidenced-based and patient-centered care with excellence in quality and service. We work with you and your family closely to ensure you will get the best care possible.
                    </p>
                </MovingComponent>
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
                    Proudly serving LA County, Orange County and Ventura County. <a href="/contact-us">Contact us for an appointment today!</a>
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
                                    COVID-19 UPDATES
                                </p>
                                <p className="slide-div-info-info">
                                    Stay home! We will visit you!
                                </p>
                                <p className="slide-div-info-info">
                                    <a href="/covid-update">Click here for more information.</a>
                                </p>
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
                            COVID-19 UPDATES
                        </p>
                        <p className="slide-div-info-info">
                            Stay home! We will visit you!
                        </p>
                        <p className="slide-div-info-info">
                            <a href="/covid-update">Click here for more information.</a>
                        </p>
                    </MovingComponent>
                </div>
                </div>
            </Fade>
            </div>
        
        return(
            <div className="body" id="home-body">
                {slideshow}
                {this.displayWelcomeDiv()}
                {this.displayPageBody()}
                <Counties/>
            </div>
        );
    }
}

export default Home;