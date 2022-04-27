import React, { Component} from "react";
import MovingComponent from 'react-moving-text';
// import img from "../resources/StockImages/georg-arthur-pflueger-eO_JhqabBY0-unsplash.jpg";
import Counties from "../components/Counties";

class CovidUpdate extends Component {
    constructor(props){
        super(props);
        document.title = "COVID UPDATES - Cordial Health Providers";
        this.state = {
            active: 'covid-update'
        }
    }

    displayPageBody(){
        return(
            <div className="page-body" id="page-body-covid">
                <MovingComponent
                type="slideInFromRight"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                    <p>
                    Stay Home. We will visit you.
                    </p>
                    <p>
                    At Cordial Healthcare Providers, your health and safety are our top priority. Rest assured that we are taking every safety precaution possible to protect you and our medical provider during in-home visit. Our medical providers are fully vaccinated and have the required personal protective equipment (PPE) if needed to conduct in-home visits safely. For even more added convenience, we offer telehealth to reduce the need for home or office visits.
                    </p>
                    <p>
                    To stay up to date with the ongoing COVID-19 situation, use the following links from the CDC and LA County Department of Public Health
                    </p>
                    <p>
                    Click here for CDC: <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">https://www.cdc.gov/coronavirus/2019-ncov/index.html</a>
                    </p>
                    <p>Click here for LA County Department of Public Health: <a href="http://publichealth.lacounty.gov/media/coronavirus/">http://publichealth.lacounty.gov/media/coronavirus/</a>
                    </p>
                </MovingComponent>
            </div>
        );
    }

    render(){
        return(
            <div className="body" id="covid-update-body">
                <div className="page-title">
                    <p className="page-title-p">COVID UPDATE</p>
                </div>
                {this.displayPageBody()}
                <Counties/>
            </div>
        );
    }
}

export default CovidUpdate;