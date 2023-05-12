import React from "react";
import {Counties, HomeBody, Welcome} from "@/components";
// Lazy Loading doesnt support named imports yet
const Home = () =>{

    return(
        <section className="content">
            <Welcome />
            <HomeBody />
            <Counties/>
        </section>
    );
    
}

export default Home;