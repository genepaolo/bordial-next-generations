import React from "react";
function GoToTopButton(){

    
      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};
      function scrollFunction() {
        var mybutton = document.getElementById("myBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.transition = "all 0.5s linear";
          mybutton.style.display = "block";
        } else {
          mybutton.style.transition = "all 0.5s linear";
          mybutton.style.display = "none";
        }
      }
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    return(
        <button onClick={topFunction} id="myBtn" title="Go to top">
            Top&nbsp;&nbsp;<i className="arrow up"></i>
        </button>
    );
};

export default GoToTopButton;