import React from "react";
import img from "../resources/StockImages/shutterstock_473259139.jpg";
import PageTitle from "../components/PageTitle";

function Career() {

    function displayPageBody(){
        return(
            <div className="container-fluid">
                <div className="u-center-text slide-right">
                    <p>We would love for you to join us!</p>
                    <p>For interested applicants, please submit your CV or resume to: <a href ="/career">Nonexistent HR Department</a></p>
                </div>    
            </div>
        );
    }
    return(
        <div>
            <PageTitle title="career" />
            {displayPageBody()}
            <div>
                <img src={img} alt=""className="career-img"></img>
            </div>
        </div>
    );
}

export default Career;