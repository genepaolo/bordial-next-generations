import React, { Component} from "react";
import img from "../resources/StockImages/shutterstock_473259139.jpg";
import MovingComponent from 'react-moving-text';

class Career extends Component {
    constructor(props){
        super(props);
        document.title = "CAREER - Cordial Health Providers";
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
                    <p>For interested applicants, please submit your CV or resume to: <a href ="mailto: info@cordialmd.com">info@cordialmd.com</a></p>
                </MovingComponent>
            </div>
        );
    }

    render(){
        return(
            <div className="body" id="career-body">
                <div className="page-title">
                    <p className="page-title-p">CAREER</p>
                </div>
                {this.displayPageBody()}
                <div>
                    <img src={img} alt=""className="career-img"></img>
                </div>
            </div>
        );
    }
}

export default Career;