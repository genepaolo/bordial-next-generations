import React from "react";
import {NavBar, TopInfo, CovidInfo} from "@/components";

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