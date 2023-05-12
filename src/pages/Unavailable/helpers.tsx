import React from "react";

export async function getDogImage(){
    const dog = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogObj = await dog.json();
    const img = document.querySelector(".unavailable__img");
    img.setAttribute("src",dogObj.message);
}

export function displayPageBody(){
    return(
        <div className="container-fluid">
            <div className="u-center-text">
                <p>This page is either unavailable or used as a link to showcase the design from another page.</p>
                <p>Sorry about that and thank you!</p>
            </div>    
        </div>
    );
}