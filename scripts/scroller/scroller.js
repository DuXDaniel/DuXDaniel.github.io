// load csv data
// load dirImages
// load curCount
const imageSources = [ // Put your image sources in this list
'./published_code_images/AmePls.gif',
'./published_code_images/20180704_092921.jpg',
'./published_code_images/LumineBruh.gif',
'./published_code_images/AmePls.gif',
'./published_code_images/20180704_092921.jpg',
'./published_code_images/LumineBruh.gif',
'./published_code_images/AmePls.gif',
'./published_code_images/20180704_092921.jpg',
'./published_code_images/LumineBruh.gif',
'./published_code_images/20180704_092921.jpg',
'./published_code_images/LumineBruh.gif',
'./published_code_images/20180704_092921.jpg',
'./published_code_images/LumineBruh.gif'
];

numLoaded = 0;

for (let i = 0; i < imageSources.length-1; i++) // Change this 5 to however many images you have (or use for ... in) 
{ 
    let divele = document.createElement("div");
    divele.className = "photoCard";
    let imgele = document.createElement("img");
    imgele.className = "photoImg";
    imgele.setAttribute("src", imageSources[i]);
    divele.appendChild(imgele)
    document.getElementById("photoSec").appendChild(divele);
    numLoaded++;
}

// tweak num loaded to load based on size of screen etc etc etc

// Check to see if scrolling near bottom of page; load more photos
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000) 
    {
        console.log("sup");
        getPhotos();
        console.log("supafter");
    }
});

function getPhotos()
{
    for (let i = 0; i < imageSources.length-1; i++) // Change this 5 to however many images you have (or use for ... in) 
    { 
        if (numLoaded >= imageSources.length)
        {
            let divele = document.createElement("div");
            divele.className = "photoCard";
            let imgele = document.createElement("img");
            imgele.className = "photoImg";
            imgele.setAttribute("src", imageSources[i]);
            divele.appendChild(imgele)
            document.getElementById("photoSec").appendChild(divele);
            numLoaded++;
        }
    }
    page++;
    loading.classList.remove("show");
};