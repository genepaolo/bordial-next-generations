import React, {useEffect} from "react";
import welcome1 from "@/resources/StockImages/welcome1.png";
import welcome2 from "@/resources/StockImages/welcome2.png";
import {updateImgClass} from "./helpers";

const Welcome = () =>{
    

    useEffect(()=>{
        updateImgClass();
    },[]);

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
                    <img alt="hw2" className="sliding-imgs home-welcome__img--2" src={welcome2}></img>
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