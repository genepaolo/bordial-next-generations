import React, {Suspense} from "react";
import Welcome from "@/components/Welcome";
import { lazy } from "@/utils";
const HomeBody = lazy(()=>import("@/components/HomeBody"));
const Counties = lazy(()=>import("@/components").then( (module)=>({default: module.default})));

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