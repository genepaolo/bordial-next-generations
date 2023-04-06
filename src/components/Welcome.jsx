import React, {useEffect} from "react";
import welcome1 from "../resources/StockImages/welcome1.png";
import welcome2 from "../resources/StockImages/welcome2.png";

function Welcome(){
    

    useEffect(()=>{
        updateImgClass();
    },[]);

    function updateImgClass(){
        const width = window.innerWidth;
        const imgs = document.querySelectorAll(".sliding-imgs");
        if(width<=990){
            // choose slide-img-right/left
            imgs[0].classList.add("slide-img-left");
            imgs[0].classList.remove("slide-left");
            imgs[1].classList.add("slide-img-right");
            imgs[1].classList.remove("slide-right");
        }else{
            // choose slide-right/left
            imgs[0].classList.remove("slide-img-left");
            imgs[0].classList.add("slide-left");
            imgs[1].classList.remove("slide-img-right");
            imgs[1].classList.add("slide-right");
        }
    }
    
    

    return(
        <div className="home-welcome">
            <div className="home-welcome__1">
                <div className="container-fluid">
                    <h1 className="slide-left home-welcome__h1 home-welcome__h1--1 u-center-text">Welcome to<br/>Bordial Next Generations!</h1>
                    <img alt="hw1" className="sliding-imgs home-welcome__img--1" src={welcome1}></img>
                </div>
            </div>
            <div className="home-welcome__2">
                <div className="container-fluid">
                    <h1 className="slide-right home-welcome__h1 home-welcome__h1--2 ">Your best care begins here.</h1>
                    <img loading="lazy" alt="hw1" className="sliding-imgs home-welcome__img--2" src={welcome2}></img>
                </div>
            </div>
            <div className="home-welcome__info">
                <h3>
                    This is a replica of the CordialMD website both created by Gene Flores. Due to complications out of my control the webiste was taken down. I was able to recreate and improve on the website now.
                </h3>
            </div>
            
            <svg width="0" height="0">
                <defs>
                    <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
                    <path
                            d="M 0,1
                                L 0,0
                                L 1,0
                                L 1,0.3
                                C .3 .3, .7 .7, 0 0.7
                                Z"
                        />
                    </clipPath>
                </defs>
            </svg>
            <svg width="0" height="0">
                <defs>
                    <clipPath id="myFlat" clipPathUnits="objectBoundingBox">
                    <path
                            d="M 0,1
                                L 0,0
                                L 1,0
                                L 1,1
                                Z"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default Welcome;