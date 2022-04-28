import React from "react";
import phone from "../resources/Icons/telephone.svg"
import email from "../resources/Icons/envelope-open.svg"
function TopInfo(){
    return (
        <div className="topinfo">
            <span><img src={phone} alt="Phone:" className="topinfo__icons"></img><a href="/">&ensp;(XXX) XXX-XXXX</a></span>
            <span>&emsp;|&emsp;<img src={email} alt="Email:"className="topinfo__icons"></img><a href="mailto:paolo.gene@gmail.com">&ensp;paolo.gene@gmail.com</a></span>
        </div>
    );
    
}

export default TopInfo;