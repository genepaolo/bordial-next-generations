import React, { Component} from "react";
import "../styles/styles.scss";
import "../styles/styles600px.scss";
import Counties from "../components/Counties";
import img from "../resources/StockImages/shutterstock_1932198155.jpg";
class Services extends Component {
    constructor(props){
        super(props);
        document.title = "SERVICES - Cordial Health Providers";
        this.state = {
            active: 'services'
        }
    }

    displayPageBody(){
        return(
            <div className="page-body" id="services-body">
                <br/>
                <div>
                <h4>Our Services</h4>
                    <ul>
                        <li>Primary Care</li>
                        <li>Acute and Chronic Disease Management</li>
                        <li>
                            Home Health Coordination - Referrals for Skilled Nursing, Physical Therapy,
                            <p>Occupational Therapy, Wound Care, Speech Therapy, and other services needed.</p>
                        </li>
                        <li>Coordination of Social Services</li>
                        <li>Preventitive Care</li>
                        <li>Physical Exam and Annual Wellness Visit</li>
                        <li>Post-Hospital Follow-up Visists</li>
                        <li>In-home Laboratory testing and Diagnostic Imaging (X-ray, Electrocardiogram (EKG), Ultrasound)</li>
                        <li>Medication Evaluation and Management</li>
                        <li>Medical supply and equipment orders</li>
                        <li>Referrals to Specialists- Wound care, Psychiatrist, Cardiologist, Pain Management, Dermatologist, Ophthalmologist, Podiatrist etc.</li>
                    </ul>
                </div>
                <br/>
                <div>
                <h4>Insurance Accepted</h4>
                    <ul>
                            <li>We accept Medicare Part B</li>
                    </ul>
                </div>
                <br/>
                
                <div>
                <h4>We Care for Patients in the following home settings</h4>
                    <ul>
                        <li>Private Homes</li>
                        <li>Assisted Living Facilities</li>
                        <li>Group Homes</li>
                        <li>Adult Foster Care Homes (AFC)</li>
                    </ul>
                    
                </div>
                <div className="services-img">
                    <img src={img}></img>
                </div>
            </div>
        );
    }


    render(){
        return(
            <div className="body" id="services-body">
                 <div className="page-title">
                    <p className="page-title-p">OUR SERVICES</p>
                </div>
                {this.displayPageBody()}
            </div>
        );
    }
}

export default Services;