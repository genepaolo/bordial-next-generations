import React, { Component } from "react";
import "../styles/styles.scss";
import "../styles/styles600px.scss";
import MovingComponent from 'react-moving-text';
import img from "../resources/StockImages/shutterstock_206476099.jpg";
import Counties from "../components/Counties";

class MissionStatement extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 'mission-statement'
        }
    }

    displayPageBody(){
        return(
            <div className="page-body" id="page-body-mission">
                <MovingComponent
                type="slideInFromRight"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                    <span id="page-counties-mission">The Mission of Cordial Healthcare Providers is to provide compassionate patient-centered care to the homebound patients with complex health issues and chronic conditions.</span>
                    <br></br>
                    <br></br>
                    <p>
                    Our goal is to improve the patient’s overall health, prevent complications and exacerbations of diseases, reduce the risk of hospitalization, and avoid visits to the emergency room or urgent care. We strive to keep our patients happier, healthier and safer while avoiding unnecessary hospital visits. We are also committed to empowering our patients with better understanding of their health condition and keep them involved in their treatment plan.
                    </p>
                </MovingComponent>
                <div>
                    <img src={img} alt="" id="mission-img"></img>
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
                    Proudly serving LA County, Orange County and Ventura County. <a href="/contact-us">Contact us for an appointment today!</a>
                </div>
                
            </div>
        );
    }

    render(){
        return(
            <div className="body" id="mission-statement-body">
                <div className="page-title">
                    <p className="page-title-p">MISSION STATEMENT</p>
                </div>
                {this.displayPageBody()}
                <Counties/>
            </div>
        );
    }
}

export default MissionStatement;