// const imageSources = [];
win_height_size = window.innerWidth;
win_width_size = window.innerHeight;

let expandbarElement = document.createElement("div");
expandbarElement.className = "expandbar";
let expandbarLoaded = 0;
let expandButton = document.createElement("img");
expandButton.setAttribute("src", "./scripts/expandbar_icon.png");
expandbarElement.appendChild(expandButton);
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

let menuLoaded = 0;

if (win_width_size >= 800)
{
    homeElement.style.marginRight = "auto";
    document.getElementById("navbar").appendChild(homeElement);
    homeLoaded = 1;

    document.getElementById("navbar").appendChild(menuElement);
    menuLoaded = 1;
    
    if (expandbarClicked == 1)
    {
        expandbarClicked = 0;
        expandNavBar.remove();
    }
}
else
{
    document.getElementById("navbar").appendChild(expandbarElement);
    expandbarLoaded = 1;

    homeElement.style.marginRight = 0;
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
        homeElement.style.marginRight = "auto";
        document.getElementById("navbar").appendChild(homeElement);
        homeLoaded = 1;

        document.getElementById("navbar").appendChild(menuElement);
        menuLoaded = 1;

        if (expandbarClicked == 1)
        {
            expandbarClicked = 0;
            expandNavBar.remove();
        }
    }
    else
    {
        document.getElementById("navbar").appendChild(expandbarElement);
        expandbarLoaded = 1;

        homeElement.style.marginRight = 0;
        document.getElementById("navbar").appendChild(homeElement);
        homeLoaded = 1;
    }

});

let expandNavBar = document.createElement("div");
expandNavBar.className = "expandNavBar";
let pubExpandButton = document.createElement("div");
pubExpandButton.className = "navButton";
pubExpandButton.innerText = "Publications";
expandNavBar.appendChild(pubExpandButton);
let codeExpandButton = document.createElement("div");
codeExpandButton.className = "navButton";
codeExpandButton.innerText = "Published Code";
expandNavBar.appendChild(codeExpandButton);
let modelExpandButton = document.createElement("div");
modelExpandButton.className = "navButton";
modelExpandButton.innerText = "3D Modeling Projects";
expandNavBar.appendChild(modelExpandButton);
let confExpandButton = document.createElement("div");
confExpandButton.className = "navButton";
confExpandButton.innerText = "Conference Proceedings";
expandNavBar.appendChild(confExpandButton);
let photoExpandButton = document.createElement("div");
photoExpandButton.className = "navButton";
photoExpandButton.innerText = "Photos";
expandNavBar.appendChild(photoExpandButton);

pubExpandButton.addEventListener('click', () => {
    window.location.href = "./publications.html";
});

codeExpandButton.addEventListener('click', () => {
    window.location.href = "./published_code.html";
});

modelExpandButton.addEventListener('click', () => {
    window.location.href = "./3D_models.html";    
});

confExpandButton.addEventListener('click', () => {
    window.location.href = "./conference_talks.html";    
});

photoExpandButton.addEventListener('click', () => {
    window.location.href = "./photo_page.html";    
});

expandButton.addEventListener('click', () => {
    if (expandbarClicked == 0)
    {
        expandbarClicked = 1;
        document.getElementById("navbar").appendChild(expandNavBar);
    }
    else if (expandbarClicked == 1)
    {
        expandbarClicked = 0;
        expandNavBar.remove();
    }
});