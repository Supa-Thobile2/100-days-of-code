function toggleMenu(){
    const menu = document.querySelector(".nav-mobile-links");
    const icon = document.querySelector(".mobile-icon");

    menu.classList.toggle("open");

    icon.classList.toggle("open");

    // console.log("CLICKED")
}

// toggleMenu()