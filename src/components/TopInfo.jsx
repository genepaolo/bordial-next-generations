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
                <p><span>Email:</span> <a href ="mailto: cordialmmg@gmail.com">cordialmmg@gmail.com</a></p>
                
            </div>

        );
    }
}

export default TopInfo;