import React from "react";
import {prefix} from "@/api/ports";
function Footer(){

    function displayContactInfo(){
        return(
            <div className="footer container-fluid">
                <div className="footer__collumn">
                    <p className="footer__collumn__titles">CONTACT US:</p>
                    <p>Bordial Next Generations</p>
                    <p>University Park Campus, USC</p>
                    <p>Syracuse, NY, 90007</p>
                    <br/>
                    <p>Phone: <a href ={prefix + "/#"}> (XXX) XXX-XXXX</a></p>
                    <p>Fax:<a href={prefix + "/#"}> (XXX) XXX-XXXX</a></p>
                    <p>Email:<a href ="mailto:paolo.gene@gmail.com"> paolo.gene@gmail.com</a></p>

                </div>
                <div className="footer__collumn">
                    <p className="footer__collumn__titles">OFFICE HOURS:</p>
                    <p>Monday: 9:00am-5:00pm</p>
                    <p>Tuesday: 9:00am-5:00pm</p>
                    <p>Wednesday: 9:00am-5:00pm</p>
                    <p>Thursday: 9:00am-5:00pm</p>
                    <p>Friday: 9:00am-5:00pm</p>
                    <p>Saturday: 9:00am-2:00pm</p>
                </div>
                <div className="footer__collumn">
                    <p className="footer__collumn__titles">AREAS SERVED:</p>
                    <p>LA County</p>
                    <p>Orange County</p>
                    <p>San Bernardino County</p>
                    <p>Riverside County</p>
                    <p>Ventura County</p>
                    <p>Kern County</p>

                </div>
                <div className="footer__collumn">
                    <p className="footer__collumn__titles">NAVIGATION</p>
                    <li className="footer-item">
                        <a className="footer-link" href={prefix + "/"}>Home</a>
                    </li>
                    <li className="footer-item">
                        <a className="footer-link" href={prefix + "/services"}>Services</a>
                    </li>
                    <li className="footer-item">
                        <a className="footer-link" href={prefix +"/contact-us"}>Contact Us</a>
                    </li>
                    <li className="footer-item">
                        <a className="footer-link" href={prefix +"/intake-requests"}>Request A Visit</a>
                    </li>
                    <li className="footer-item">
                        <a className="footer-link" href={prefix +"/career"}>Careers</a>
                    </li>
                </div>
            </div>
        );
    };

    function displayRightsReserved(){
        return(
            <div className="footer--rights-reserved container-fluid">
                <p>Not Copyright © 2022. Bordial Next Generations. This is a fake company</p>
            </div>
        );
    };

    

    return (
        <section id="footer">
            {displayContactInfo()}
            {displayRightsReserved()}
        </section>

    );
    
}

export default Footer;