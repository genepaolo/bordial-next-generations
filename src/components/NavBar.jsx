import React, { Component} from "react";
import Media from 'react-media';
import logo1 from "../resources/Logos/Cordial-Healthcare-Providers-Name.png";
import logo2 from "../resources/Logos/Cordial-Healthcare-Providers-Pic.png";
import '../styles/styles600px.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = { active: 'Home'};
    }

    onClick = (newActive) => {
        console.log("NEW ACTIVE: " + newActive);
        this.setState({
            active: newActive,
        });
    };

    displayNavbar1(){
        return(
        <div>
            <div className="navbar-logo-div1">
                <a href="/">
                    <img src={logo2} alt="logo" className="navbar-logo2" />
                    <img src={logo1} alt="CordialMD" className="navbar-logo1" />
                </a>
            </div>
            
            <nav className="navbar-link-div">
            <ul className="navbar-link-ul">
            <li className="active navbar-link-items" id="navbar-menu-1">
                <a href="/">
                    <div className="navbar-link-menu-item">
                        HOME
                    </div>
                </a>
            </li>
            <li className="navbar-link-items" id="navbar-menu-3">
                <a href="/services">
                    <div className="navbar-link-menu-item">
                        SERVICES
                    </div>
                </a>
            </li>
            <li className="navbar-link-items" id="navbar-menu-5">
                <a href="/contact-us">
                    <div className="navbar-link-menu-item">
                        CONTACT US
                    </div>
                </a>
            </li>
            <li className="navbar-link-items" id="navbar-menu-6">
                <a href="/intake-requests">
                    <div className="navbar-link-menu-item">
                        REQUEST VISIT
                    </div>
                </a>
            </li>
            <li className="navbar-link-items" id="navbar-menu-7">
                <a href="/career">
                    <div className="navbar-link-menu-item">
                        CAREER
                    </div>
                </a>
            </li>
            </ul>
            </nav>
        </div>
        );

    }
    displayNavbar2(){
        return(
            <nav className="navbar-link-div">
                <nav class="navbar navbar-fixed-top navbar-light bg-white static-top">
                <a className="navbar-logo-div2 col-11" href="/">
                    <img src={logo2} alt="logo" className="navbar-logo2" />
                    <img src={logo1} alt="CordialMD" className="navbar-logo1" />
                </a>


                <button class="btn col-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="dropdown-menu" id="navbarToggler">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="dropdown-item">
                            <a class="nav-link" href="/">Home </a>
                        </li>
                        <li class="dropdown-item">
                            <a class="nav-link" href="/services">Services</a>
                        </li>
                        
                        <li class="dropdown-item">
                            <a class="nav-link" href="/contact-us">Contact Us</a>
                        </li>
                        <li class="dropdown-item">
                            <a class="nav-link" href="/intake-requests">Request Visit</a>
                        </li>
                        <li className="dropdown-item" id="navbar-menu-7">
                            <a class="nav-link" href="/career">Career</a>
                        </li>
                    </ul>
                </div>
                </nav>
                
            </nav>
        );

    }

    render() {

        const navbar1 = this.displayNavbar1();
        const navbar2 = this.displayNavbar2();

        return (
            <div className="navbar-body">
                <Media queries={{ small: "(min-width: 900px)" }}>
                    {matches =>
                    matches.small ? (
                        navbar1
                    ) : (
                        navbar2
                    )
                    }
                </Media>
                
            </div>

        );
    }
}

export default NavBar;