import React, { Component} from "react";
import img from "../resources/StockImages/GoogleMap.png";

class Counties extends Component {
    render(){
        return(
            <div className="page-counties">
                <div className="page-counties-body">
                
                    <div>
                        <div className="page-counties-header">
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
                    <div className="page-counties-body-col">
                        <img src={img} id="counties-img" alt="County Images"></img>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Counties;