import React from "react";
import {scrollFunction, topFunction} from "./helpers";
const GoToTopButton = () =>{

  window.onscroll = function() {scrollFunction()};

      // When the user scrolls down 20px from the top of the document, show the button
  return(
        <button onClick={topFunction} id="myBtn" title="Go to top">
            Top&nbsp;&nbsp;<i className="arrow up"></i>
        </button>)
    
};

export default GoToTopButton;