import React from "react";
import img from "../resources/StockImages/shutterstock_1932198155.jpg";
import PageTitle from "../components/PageTitle";

function Services(){

    function displayPageBody(){
        return(
            <div className="container-fluid">
                <br/>
                <div>
                <h3 className="u-center-text">Services</h3>
                    <ul className="services__list">
                        <li><a href="/unavailable" target="_blank">Primary Care</a></li>
                        <li><a href="/unavailable" target="_blank">Acute and Chronic Disease Management</a></li>
                        <li><a href="/unavailable" target="_blank">Home Health Coordination - Referrals for Skilled Nursing, Physical Therapy</a></li>
                        <li><a href="/unavailable" target="_blank">Coordination of Social Services</a></li>
                        <li><a href="/unavailable" target="_blank">Preventitive Care</a></li>
                        <li><a href="/unavailable" target="_blank">Physical Exam and Annual Wellness Visit</a></li>
                        <li><a href="/unavailable" target="_blank">Post-Hospital Follow-up Visists</a></li>
                        <li><a href="/unavailable" target="_blank">In-home Laboratory testing and Diagnostic Imaging</a></li>
                        <li><a href="/unavailable" target="_blank">Medication Evaluation and Management</a></li>
                        <li><a href="/unavailable" target="_blank">Medical supply and equipment orders</a></li>
                        <li><a href="/unavailable" target="_blank">Referrals to Specialists- Wound care, Psychiatrist, Cardiologist.</a></li>
                    </ul>
                </div>
                <br/>
                <div>
                <h3 className="u-center-text">Insurance Accepted</h3>
                    <ul className="services__list">
                            <li><a href="/unavailable" target="_blank">We accept Medicare Part B</a></li>
                    </ul>
                </div>
                <br/>
                
                <div>
                <h3 className="u-center-text">We Care for Patients in the following home settings</h3>
                    <ul className="services__list">
                        <li><a href="/unavailable" target="_blank">Private Homes</a></li>
                        <li><a href="/unavailable" target="_blank">Assisted Living Facilities</a></li>
                        <li><a href="/unavailable" target="_blank">Group Homes</a></li>
                        <li><a href="/unavailable" target="_blank">Adult Foster Care Homes (AFC)</a></li>
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