import React from "react";
import data from "@/resources/Data/data.json";
import img from "@/resources/StockImages/shutterstock_1932198155-min-20.jpg";

export function displayPageBody(){
    return(
        <div className="container-fluid">
            <br/>
            <div>
            <h3><strong>Services</strong></h3>
                <ul className="services__list">
                    {
                        data.serviceList.map((x) => (
                            <li><a href={x.href} rel="noreferrer" target="_blank"> {x.title} </a></li>
                        ))
                    }
                    
                </ul>
            </div>
            <br/>
            <div>
            <h3><strong>Insurance Accepted</strong></h3>
                <ul className="services__list">
                    {
                        data.insuranceList.map((x) => (
                            <li><a href={x.href} rel="noreferrer" target="_blank"> {x.title} </a></li>
                        ))
                    }
                </ul>
            </div>
            <br/>
            
            <div>
            <h3><strong>We Care for Patients in the following home settings</strong></h3>
                <ul className="services__list">
                    {
                        data.homeList.map((x) => (
                            <li><a href={x.href} rel="noreferrer" target="_blank"> {x.title} </a></li>
                        ))
                    }
                </ul>
                
            </div>
            <div className="services-img">
                <img src={img} alt="health care"></img>
            </div>
        </div>
    );
}