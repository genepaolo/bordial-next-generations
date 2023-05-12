import React  from "react";
import {prefix} from "@/api/ports";
const Counties = () => {
    return(
        <div className="page-counties">
            <div className="container-fluid">
                <h1 className="u-center-text">
                    COUNTIES SERVED
                </h1>
                <p>Proudly serving:</p>
                <ul>
                    <li>LA County</li>
                    <li>Orange County</li>
                    <li>San Bernardino County</li>
                    <li>Riverside County</li>
                    <li>Ventura County</li>
                    <li>Kern County</li>

                </ul>
                <p><a href={`${prefix}/contact-us`}>Click here to contact us for an appointment today!</a></p>
            </div>
            
        </div>
    );
    
    
};

export default Counties;