// const imageSources = [];
win_height_size = window.innerWidth;
win_width_size = window.innerHeight;

let expandbarElement = document.createElement("div");
expandbarElement.className = "expandbar";
let expandbarLoaded = 0;
let expandButton = document.createElement("div");
expandButton.className = "navButton";
let expandbarClicked = 0;

let homeElement = document.createElement("div");
homeElement.className = "homebar";
let homeLoaded = 0;
let homeButton = document.createElement("div");
homeButton.className = "navButton";
homeButton.innerText = "News";
homeElement.appendChild(homeButton);

let menuElement = document.createElement("div");
menuElement.className = "menubar";
let publicationButton = document.createElement("div");
publicationButton.className = "navButton";
publicationButton.innerText = "Publications";
menuElement.appendChild(publicationButton);
let codeButton = document.createElement("div");
codeButton.className = "navButton";
codeButton.innerText = "Published Code";
menuElement.appendChild(codeButton);
let modelButton = document.createElement("div");
modelButton.className = "navButton";
modelButton.innerText = "3D Modeling Projects";
menuElement.appendChild(modelButton);
let conferenceButton = document.createElement("div");
conferenceButton.className = "navButton";
conferenceButton.innerText = "Conference Proceedings";
menuElement.appendChild(conferenceButton);
let photoButton = document.createElement("div");
photoButton.className = "navButton";
photoButton.innerText = "Photos";
menuElement.appendChild(photoButton);
/*
<a href=""><p class="navButton a">Publications</p></a>
<a href=""><p class="navButton b">Published Code</p></a>
<a href=""><p class="navButton c">3D Modeling Projects</p></a>
<a href=""><p class="navButton d">Conference Proceedings</p></a>
<a href=""><p class="navButton e">Photos</p></a>
*/
let menuLoaded = 0;

if (win_width_size >= 800)
{
    document.getElementById("navbar").appendChild(homeElement);
    homeLoaded = 1;

    document.getElementById("navbar").appendChild(menuElement);
    menuLoaded = 1;
}
else
{
    document.getElementById("navbar").appendChild(expandbarElement);
    expandbarLoaded = 1;

    document.getElementById("navbar").appendChild(homeElement);
    homeLoaded = 1;
}

// tweak num loaded to load based on size of screen etc etc etc

// Check to see if scrolling near bottom of page; load more photos
window.addEventListener('resize', () => {
    win_height_size = window.innerHeight;
    win_width_size = window.innerWidth;
    // check size of window and redefine what appears inside navbar

    if (expandbarLoaded == 1)
    {
        expandbarElement.remove();
        expandbarLoaded = 0;
    }

    if (homeLoaded == 1)
    {
        homeElement.remove();
        homeLoaded = 0;
    }

    if (menuLoaded == 1)
    {
        menuElement.remove();
        menuLoaded = 0;
    }

    if (win_width_size >= 800)
    {
        document.getElementById("navbar").appendChild(homeElement);
        homeLoaded = 1;

        document.getElementById("navbar").appendChild(menuElement);
        menuLoaded = 1;
    }
    else
    {
        document.getElementById("navbar").appendChild(expandbarElement);
        expandbarLoaded = 1;

        document.getElementById("navbar").appendChild(homeElement);
        homeLoaded = 1;
    }

});

expandButton.addEventListener('click', () => {

});

homeButton.addEventListener('click', () => {
    window.location.href = "./index.html";
});

publicationButton.addEventListener('click', () => {
    window.location.href = "./publications.html";
});

codeButton.addEventListener('click', () => {
    window.location.href = "./published_code.html";
});

modelButton.addEventListener('click', () => {
    window.location.href = "./3D_models.html";    
});

conferenceButton.addEventListener('click', () => {
    window.location.href = "./conference_talks.html";    
});

photoButton.addEventListener('click', () => {
    window.location.href = "./photo_page.html";    
});