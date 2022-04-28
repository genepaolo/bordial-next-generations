import React, { Component} from "react";
import img from "../resources/StockImages/GoogleMap.png";

function Counties(){
    return(
        <div className="page-counties container-fluid">
            <div>
                <div className="page-counties__header">
                    COUNTIES SERVED
                </div>
                <p>Proudly serving:</p>
                <ul>
                    <li>LA County</li>
                    <li>Orange County</li>
                    <li>San Bernardino County</li>
                    <li>Riverside County</li>
                    <li>Ventura County</li>
                    <li>Kern County</li>

                </ul>
                <p><a href="/contact-us">Click here to contact us for an appointment today!</a></p>
            </div>
            <div>
                <img src={img} id="counties-img" alt="County Images"></img>
            </div>
            
        </div>
    );
    
};

export default Counties;