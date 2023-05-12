export function updateImgClass(){
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