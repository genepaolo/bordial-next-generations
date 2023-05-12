
export function updateActive(){
    const items = document.querySelectorAll(".nav-item");
    items.forEach(function(item){
        item.classList.remove("active");
        const link = item.querySelector(".nav-link");
        if(link.getAttribute("href") === window.location.pathname){
            item.classList.add("active");
        }
    });
    
}

export function handleToggle(toggled: boolean, setToggled: React.Dispatch<React.SetStateAction<boolean>>){
    const icon = document.querySelector(".navbar-toggler__icon");
    icon.classList.toggle("toggled");
    setToggled(!toggled);
}