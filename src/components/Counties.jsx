import React  from "react";
import imgSmall from "../resources/StockImages/counties-small.png";
import imgLarge from "../resources/StockImages/counties-large.jpg";

function Counties(){
    function applyBackgroundImages(){
        return ({
            backgroundImage: "url(" + imgSmall + ")",
            backgroundImage: "image-set(  url(" + imgSmall + ") 1x, url(" + imgLarge + ") 2x)",
            backgroundImage: "image-set(  url(" + imgSmall + ") 900w, url(" + imgLarge + ") 2048w)",
            backgroundImage: "-webkit-image-set(  url(" + imgSmall + ") 1x, url(" + imgLarge + ") 2x)",
            backgroundSize:"cover"
        });
    }
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
                <p><a href="/contact-us">Click here to contact us for an appointment today!</a></p>
            </div>
            
        </div>
    );
    
};

export default Counties;