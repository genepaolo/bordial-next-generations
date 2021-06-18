import React, { Component } from "react";
import img from "../resources/Logos/Cordial-Healthcare-Providers-Pic.png";
class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = { active: 'Home'};
    }

    displayContactInfo(){
        return(
            <div className="footer-container">
                <div className="footer-container-collumns">
                    <p className="footer-container-collumn-titles">CONTACT US</p>
                    <p>Cordial Healthcare Providers</p>
                    {/* <p>Office:</p> */}
                    {/* <p>Fax:</p> */}
                    <p>Email: <a href ="mailto: info@cordialmd.com">info@cordialmd.com</a></p>
                    <br/>
                    <p>127 S. Brand Blvd</p>
                    <p>Suite 333</p>
                    <p>Glendale, CA 91204</p>

                </div>
                <div className="footer-container-collumns">
                    <p className="footer-container-collumn-titles">OFFICE HOURS</p>
                    <p>Monday: 9:00am-6:00pm</p>
                    <p>Tuesday: 9:00am-6:00pm</p>
                    <p>Wednesday: 9:00am-6:00pm</p>
                    <p>Thursday: 9:00am-6:00pm</p>
                    <p>Friday: 9:00am-6:00pm</p>
                    <p>Saturday: 9:00am-3:00pm</p>
                </div>
                <div className="footer-container-collumns">
                    <p className="footer-container-collumn-titles">NAVIGATION</p>
                    <li class="footer-item active">
                        <a class="footer-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="footer-item">
                        <a class="footer-link" href="/mission-statement">Mission</a>
                    </li>
                    <li class="footer-item">
                        <a class="footer-link" href="/about-us">About Us</a>
                    </li>
                    <li class="footer-item">
                        <a class="footer-link" href="/services">Services</a>
                    </li>
                    <li class="footer-item">
                        <a class="footer-link" href="/contact-us">Contact Us</a>
                    </li>
                    <li class="footer-item">
                        <a class="footer-link" href="/intake-requests">Intake Form</a>
                    </li>
                    <div>
                        <img src={img} alt="logo" id="footer-img"></img>
                    </div>
                </div>
            </div>
        );
    }

    displayRightsReserved(){
        return(
            <div className="footer-rights-reserved">
                <p>Copyright © 2021. Cordial Health Providers. All rights reserved.</p>
            </div>
        );
    }

    

    render() {
        
        return (
            <div className="footer-body">
                {this.displayContactInfo()}
                {this.displayRightsReserved()}
            </div>

        );
    }
}

export default Footer;