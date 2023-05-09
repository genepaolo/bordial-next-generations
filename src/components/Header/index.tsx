import React from "react";
import NavBar from "@/components/NavBar";
import TopInfo from "@/components/TopInfo";
import CovidInfo from "@/components/CovidInfo";

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