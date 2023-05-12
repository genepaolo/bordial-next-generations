export function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.transition = "all 0.5s linear";
      mybutton.style.display = "block";
    } else {
      mybutton.style.transition = "all 0.5s linear";
      mybutton.style.display = "none";
    }
}

export function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}