import React from "react";
import {PageTitle} from "@/components";
import {displayPageBody} from "./helpers"
const Services = () => {

    return(
        <div>
            <PageTitle title="our services" />
            {displayPageBody()}
        </div>
    );
}

export default Services;