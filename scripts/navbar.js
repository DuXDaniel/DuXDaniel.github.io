// const imageSources = [];
win_height_size = window.innerWidth;
win_width_size = window.innerHeight;

let expandbarElement = document.createElement("div");
expandbarElement.className = "expandbar";

let homeElement = document.createElement("div");
homeElement.className = "homebar";

let menuElement = document.createElement("div");
menuElement.className = "menubar";

if (win_width_size >= 1500)
{
    document.getElementById("navbar").appendChild(expandbarElement);

    document.getElementById("navbar").appendChild(homeElement);

    document.getElementById("navbar").appendChild(menuElement);
}

// tweak num loaded to load based on size of screen etc etc etc

// Check to see if scrolling near bottom of page; load more photos
window.addEventListener('resize', () => {
    win_height_size = window.innerWidth;
    win_width_size = window.innerHeight;
    // check size of window and redefine what appears inside navbar
});