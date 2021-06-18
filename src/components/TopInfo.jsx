import React, { Component } from "react";


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
                <p><span>Office:</span> <a> 818.441.1137</a></p>
                <p><span>Fax:</span> <a> 818.239.4525</a></p>
                
            </div>

        );
    }
}

export default TopInfo;