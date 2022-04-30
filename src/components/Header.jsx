import React from "react";
import NavBar from "./NavBar";
import TopInfo from "./TopInfo";
import CovidInfo from "./CovidInfo";

function Header(){
    return (
        <section id="header">
            <CovidInfo></CovidInfo>
            <TopInfo></TopInfo>
            <NavBar></NavBar>
        </section>
    );
};

export default Header;