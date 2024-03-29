import React from "react";
import {prefix} from "../../api/ports"

import phone from "@/resources/Icons/telephone.svg";
import email from "@/resources/Icons/envelope-open.svg";

const TopInfo = () => {
    return (
        <div className="topinfo">
            <span><img src={phone} alt="Phone:" className="topinfo__icons"></img><a href={prefix +"/"}>&ensp;(XXX) XXX-XXXX</a></span>
            <span>&emsp;|&emsp;<img src={email} alt="Email:"className="topinfo__icons"></img><a href="mailto:paolo.gene@gmail.com">&ensp;paolo.gene@gmail.com</a></span>
        </div>
    );
    
}

export default TopInfo;