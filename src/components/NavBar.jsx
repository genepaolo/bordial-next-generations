import React, {useState, useEffect} from "react";

function NavBar(){
        const [toggled, setToggled] = useState(false);
        function handleToggle(e){
            const icon = document.querySelector(".navbar-toggler__icon");
            icon.classList.toggle("toggled");
            setToggled(!toggled);
        }

        useEffect(()=>{
            updateActive();
        },[])

        function updateActive(){
            const items = document.querySelectorAll(".nav-item");
            items.forEach(function(item){
                item.classList.remove("active");
                const link = item.querySelector(".nav-link");
                if(link.pathname === window.location.pathname){
                    item.classList.add("active");
                }
            });
            
        }

        return (
            <section id="navbar">
                <div className="container-fluid-small">
                    <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        <h1>BNG</h1>  
                    </a>
                    <button onClick={handleToggle}className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="navbar-toggler__icon"></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">HOME </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">SERVICES</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/intake-requests">REQUEST A VISIT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/career">CAREER</a>
                            </li>
                        </ul>
                    </div>
                        
                    </nav>
                    
                </div>
            </section>

        );


    
    }

export default NavBar;