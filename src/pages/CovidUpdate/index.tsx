import React from "react";
import {Counties}  from "@/components";
import { displayPageBody } from "./helpers"; 

const CovidUpdate = () => {

    return(
        <div className="body" id="covid-update-body">
            <div className="page-title">
                <p className="page-title-p">COVID UPDATE</p>
            </div>
            {displayPageBody()}
            <Counties/>
        </div>
    );
    
}

export default CovidUpdate;