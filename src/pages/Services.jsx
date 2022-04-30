import React from "react";
import img from "../resources/StockImages/shutterstock_1932198155.jpg";
import PageTitle from "../components/PageTitle";
function Services(){

    function displayPageBody(){
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
                    <img src={img} alt="health care"></img>
                </div>
            </div>
        );
    }

    return(
        <div>
            <PageTitle title="our services" />
            {displayPageBody()}
        </div>
    );
}

export default Services;