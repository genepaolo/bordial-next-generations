import React, {useState, useEffect} from "react";
import {prefix} from "@/api/ports";
import {updateActive, handleToggle} from "./helpers";
const NavBar = () => {
        const [toggled, setToggled] = useState(false);
        
        useEffect(()=>{
            updateActive();
        },[])

        return (
            <section id="navbar">
                <div className="container-fluid-small">
                    <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href={prefix +"/"}>
                        <h1>BNG</h1>  
                    </a>
                    <button onClick={() => handleToggle(toggled, setToggled)}className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="navbar-toggler__icon"></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href={prefix +"/"}>HOME </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={prefix +"/services"}>SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={prefix +"/intake-requests"}>REQUEST A VISIT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={prefix +"/testimonials"}>TESTIMONIALS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={prefix +"/contact-us"}>CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={prefix +"/career"}>CAREER</a>
                            </li>
                        </ul>
                    </div>
                        
                    </nav>
                    
                </div>
            </section>

        );


    
    }

export default NavBar;