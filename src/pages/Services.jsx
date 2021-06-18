import React, { Component} from "react";
import "../styles/styles.scss";
import "../styles/styles600px.scss";
import Counties from "../components/Counties";

class Services extends Component {
    constructor(props){
        super(props);
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
                        <li>Home Health Coordination- Referrals for Skilled Nursing, Physical and Occupational Therapy, Wound Care, Speech Therapy, and other services needed</li>
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
                    <h4>Why Choose Cordial Healthcare Providers</h4>
                    <ul>
                        <li>Our team consists of highly trained and qualified Board-certified Doctors, Nurse Practitioners, and Physician Assistants.</li>
                        <li>Our Medical Providers are available 7 days a week.</li>
                        <li>Fast and easy appointment scheduling.</li>
                        <li>Appointments are available within 24 to 48 hours. We even offer same-day appointments if the schedule permits. </li>
                        <li>Home Health Referrals are submitted within 24 to 48 business hours.</li>
                        <li>We take the time to get to know our patients and address all of their medical needs.</li>
                        <li>We strive to provide the best quality healthcare wherever you may be.</li>
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
                <Counties/>
            </div>
        );
    }
}

export default Services;