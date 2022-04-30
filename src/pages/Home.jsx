import React, {lazy, Suspense} from "react";
import Welcome from "../components/Welcome";
const HomeBody = lazy(()=>import("../components/HomeBody"));
const Counties= lazy(()=>import("../components/Counties"));

function Home(){

    return(
        <section className="content">
            <Welcome />
            <Suspense fallback={<div>Loading...</div>}>
                <HomeBody />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Counties/>
            </Suspense>
            
        </section>
    );
    
}

export default Home;