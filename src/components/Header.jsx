import React from "react";
import NavBar from "./NavBar";
import TopInfo from "./TopInfo";

function Header(){
    return (
        <section id="header">
            <TopInfo></TopInfo>
            <NavBar></NavBar>
        </section>
    );
};

export default Header;