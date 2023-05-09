import React from "react";
import aui from "@/resources/StockImages/shutterstock_1015449343-min-20.jpg"
import wimg from "@/resources/StockImages/shutterstock_1657685833-min-20.jpg";

function HomeBody(){
    return(
        <div className="home-section">
            <div className="home-section-row home-section-row__half odd">
                <div className="home-section-row__desc col-lg-6">
                    <div>
                        <h2>
                            About us
                        </h2>
                        <p>
                            Bordial Healthcare Providers is a team of Board-certified Doctors, Nurse Practitioners, and Physician Assistants who provide primary care to medically complex, chronically ill, and homebound patients. It was created to improve access to quality health care for patients who are unable to leave their homes or who have difficulty going to a doctor’s office.
                        </p>
                    </div>
                    
                </div>
                <div className="home-section-imgs col-lg-6">
                    <img loading="lazy" src={aui} alt="health care" ></img>
                </div>
            </div>

            <div className="home-section-row even">
                <div className="col-12">
                    <h2 className="u-center-text">
                        Our Mission
                    </h2>
                    <p className="u-center-text">
                        The Mission of Bordial Healthcare Providers is to provide compassionate patient-centered care to the homebound patients with excellence in quality and service. Our goal is to improve the patient’s overall health, prevent complications and exacerbations of diseases, reduce the risk of hospitalization, avoid visits to the emergency room, and build long-term relationships with the patients we serve. We strive to keep our patients happier, healthier and safer while avoiding unnecessary hospital visits. We are committed to empowering our patients with better understanding of their health condition and keep them involved in their treatment plan. We work with you and your family closely to ensure you will get the best care possible.
                    </p>
                    <br/>
                </div>
            </div>
            <div className="home-section-row home-section-row__half odd">
                <div className="home-section-row__desc col-lg-6 ">
                    <div>
                        <h2>
                            Why Choose Us
                        </h2>
                        <ul>
                            <li>Our team consists of highly trained and qualified Board-certified Doctors, Nurse Practitioners, and Physician Assistants.</li>
                            <li>Our Medical Providers are available 7 days a week.</li>
                            <li>Fast and easy appointment scheduling.</li>
                            <li>Appointments are available within 24 to 48 hours. We even offer same-day appointments if the schedule permits. </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="home-section-imgs col-12 col-lg-6">
                    <img loading="lazy" src={wimg} alt="health care"></img>
                </div>
            </div>   
    </div>
                
            
    );
}

export default HomeBody;