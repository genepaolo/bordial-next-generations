import React, { Component, useState } from "react";
import "../styles/styles.scss";
import "../styles/styles600px.scss";
import img from "../resources/StockImages/GoogleMap.png";

class Counties extends Component {
    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className="page-counties">
                <div className="page-counties-header">
                    COUNTIES SERVED
                </div>
                <div className="page-counties-body">
                    <div>
                        <p>Proudly serving:</p>
                        <ul>
                            <li>LA County</li>
                            <li>Orange County</li>
                            <li>Ventura County</li>
                        </ul>
                        <p><a href="/contact-us">Click here to contact us for an appointment today!</a></p>
                    </div>
                    <div className="page-counties-body-col">
                        <img src={img} id="counties-img"></img>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Counties;