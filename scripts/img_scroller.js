// load csv data
// load dirImages
// load curCount
const imageSources = [ // Put your image sources in this list
'./photo_pages/001.jpg',
'./photo_pages/002.jpg',
'./photo_pages/003.jpg',
'./photo_pages/004.jpg',
'./photo_pages/005.jpg',
'./photo_pages/006.jpg',
'./photo_pages/007.jpg',
'./photo_pages/008.jpg',
'./photo_pages/009.jpg',
'./photo_pages/010.jpg'
];

const imageAlts = [
 '2017 family picture!',
 'The Flannigan group UEM',
 'Stonearch bridge in Minneapolis',
 'The Flannigan group at Portland for Microscopy and Microanalysis',
 'Fireworks in Phoenix after Materials Research Society',
 'The most cowardly cat in the universe',
 'The bottom table of the Flannigan UEM',
 '2018 family picture!',
 'A side view of the bottom table of the Flannigan UEM',
 'The Flannigan group at hot pot!'
];

var testele = document.createElement("img");
testele.className = "photoImg";
document.getElementById("photoSec").appendChild(testele);
numLoaded = 0;
numImg = imageSources.length;
win_height_size = window.innerHeight;
win_width_size = window.innerWidth;
img_height_size = testele.clientHeight;
img_width_size = testele.clientWidth;
testele.remove();

numImgPerRow = Math.floor(win_width_size / img_width_size);
numRows = Math.ceil(win_height_size / img_height_size);
numImgLoad = numRows * numImgPerRow;

if (numImgLoad > numImg)
{
    numImgLoad = numImg
}

for (var i = 0; i < numImgLoad; i++) // Change this to however many images you have (or use for ... in) 
{ 
    var divele = document.createElement("div");
    divele.className = "photoCard";
    var imgele = document.createElement("img");
    imgele.className = "photoImg";
    imgele.setAttribute("src", imageSources[numLoaded]);
    var captionele = document.createElement("div");
    captionele.className = "photoCaption"
    captionele.innerText = imageAlts[numLoaded];
    divele.appendChild(imgele);
    divele.appendChild(captionele);
    document.getElementById("photoSec").appendChild(divele);
    numLoaded++;
}

// tweak num loaded to load based on size of screen etc etc etc

// Check to see if scrolling near bottom of page; load more photos
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - img_height_size) 
    {
        getPhotos();
    }
});

function getPhotos()
{
    
    if (numLoaded <= imageSources.length-1)
    {
        // reload img sizes
        var testele = document.createElement("img");
        testele.className = "photoImg";
        document.getElementById("photoSec").appendChild(testele);
        win_height_size = window.innerHeight;
        win_width_size = window.innerWidth;
        img_height_size = testele.clientHeight;
        img_width_size = testele.clientWidth;
        testele.remove();

        numImgPerRow = Math.floor(win_width_size / img_width_size);

        for (var i = 0; i < numImgPerRow; i++) // Change this 5 to however many images you have (or use for ... in) 
        { 
            if (numLoaded <= imageSources.length-1)
            {
                var divele = document.createElement("div");
                divele.className = "photoCard";
                var imgele = document.createElement("img");
                imgele.className = "photoImg";
                imgele.setAttribute("src", imageSources[numLoaded]);
                var captionele = document.createElement("div");
                captionele.className = "photoCaption"
                captionele.innerText = imageAlts[numLoaded];
                divele.appendChild(imgele);
                divele.appendChild(captionele);
                document.getElementById("photoSec").appendChild(divele);
                numLoaded++;
            }
        }
        
    }
    else
    {
        window.removeEventListener('scroll',() => {});
    }
    //loading.classList.remove("show");
};