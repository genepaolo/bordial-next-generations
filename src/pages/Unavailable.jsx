import React, {useEffect} from "react";
import PageTitle from "../components/PageTitle";

function Unavailable() {

    useEffect(()=>{
        getDogImage();
    }, []);

    async function getDogImage(){
        const dog = await fetch("https://dog.ceo/api/breeds/image/random");
        const dogObj = await dog.json();
        const img = document.querySelector(".unavailable__img");
        img.src = dogObj.message;
    }

    function displayPageBody(){
        return(
            <div className="container-fluid">
                <div className="u-center-text">
                    <p>This page is either unavailable or used as a link to showcase the design from another page.</p>
                    <p>Sorry about that and thank you!</p>
                </div>    
            </div>
        );
    }

    return(
        <div>
            <PageTitle title="page/link unavailable" />
            {displayPageBody()}
            <div className="container-fluid u-center-text">
                <img src="" alt="none" className="unavailable__img"></img>
            </div>
        </div>
    );
}

export default Unavailable;