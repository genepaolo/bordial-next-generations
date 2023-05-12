import React, {useEffect} from "react";
import {PageTitle} from "@/components";
import {getDogImage, displayPageBody} from "./helpers"

const Unavailable = () => {

    useEffect(()=>{
        getDogImage();
    }, []);

    

    return(
        <div>
            <PageTitle title="page/link unavailable" />
            {displayPageBody()}
            <div className="container-fluid u-center-text">
                <img src="" alt="none" className="unavailable__img"></img>
            </div>
        </div>
    );
}

export default Unavailable;