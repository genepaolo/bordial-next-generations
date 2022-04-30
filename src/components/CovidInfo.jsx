import React from "react";
import info from "../resources/Icons/icons8-info.svg";
function CovidInfo(){
    return (
        <div className="covidinfo u-center-text">
            <span><img src={info} alt="Info" className="topinfo__icons"></img> Find the latest <a href="/covid-update">information on COVID-19</a></span>
        </div>
    );
    
}

export default CovidInfo;