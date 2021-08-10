import React, { Component } from "react";
import phone from "../resources/Icons/telephone.svg"
import email from "../resources/Icons/envelope-open.svg"
class TopInfo extends Component {

    constructor(props) {
        super(props);
        this.state = { active: 'home'};
    }

    onClick = (newActive) => {
        console.log("NEW ACTIVE: " + newActive);
        this.setState({
            active: newActive,
        });
    };

    render() {
        
        return (
            <div className="topinfo-body">
                <span><img src={phone} alt="Phone:" className="topinfo-icons"></img><a href="tel:8182399293">&ensp;(818) 239-9293</a></span>
                <span>&emsp;|&emsp;<img src={email} alt="Email:"className="topinfo-icons"></img><a href="info@cordial.com">&ensp;info@cordial.com</a></span>
            </div>

        );
    }
}

export default TopInfo;