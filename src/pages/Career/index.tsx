import React from "react";
import img from "@/resources/StockImages/shutterstock_473259139-min-20.jpg";
import { PageTitle } from "@/components";
import {displayPageBody} from "./helpers";
const Career = ()=> {

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