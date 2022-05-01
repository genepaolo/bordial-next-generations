import React, {useEffect} from "react";
import img from "../resources/StockImages/shutterstock_1932198155.jpg";
import PageTitle from "../components/PageTitle";
function Services(){

    useEffect(()=>{
        setAllLinks();
    });
    
    function setAllLinks(){
        const listItems = document.querySelectorAll(".services__list li a");
        listItems.forEach( (link) => {
            link.href = "/unavailable";
            link.target="_blank";
        });
    }

    function displayPageBody(){
        return(
            <div className="container-fluid">
                <br/>
                <div>
                <h3 className="u-center-text">Services</h3>
                    <ul className="services__list">
                        <li><a>Primary Care</a></li>
                        <li><a>Acute and Chronic Disease Management</a></li>
                        <li><a>Home Health Coordination - Referrals for Skilled Nursing, Physical Therapy</a></li>
                        <li><a>Coordination of Social Services</a></li>
                        <li><a>Preventitive Care</a></li>
                        <li><a>Physical Exam and Annual Wellness Visit</a></li>
                        <li><a>Post-Hospital Follow-up Visists</a></li>
                        <li><a>In-home Laboratory testing and Diagnostic Imaging</a></li>
                        <li><a>Medication Evaluation and Management</a></li>
                        <li><a>Medical supply and equipment orders</a></li>
                        <li><a>Referrals to Specialists- Wound care, Psychiatrist, Cardiologist.</a></li>
                    </ul>
                </div>
                <br/>
                <div>
                <h3 className="u-center-text">Insurance Accepted</h3>
                    <ul className="services__list">
                            <li><a>We accept Medicare Part B</a></li>
                    </ul>
                </div>
                <br/>
                
                <div>
                <h3 className="u-center-text">We Care for Patients in the following home settings</h3>
                    <ul className="services__list">
                        <li><a>Private Homes</a></li>
                        <li><a>Assisted Living Facilities</a></li>
                        <li><a>Group Homes</a></li>
                        <li><a>Adult Foster Care Homes (AFC)</a></li>
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