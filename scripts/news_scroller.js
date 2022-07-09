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
'./published_code_images/LumineBruh.gif',
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
'./published_code_images/LumineBruh.gif',
'./published_code_images/AmePls.gif',
'./published_code_images/20180704_092921.jpg',
'./published_code_images/LumineBruh.gif',
'./published_code_images/AmePls.gif',
'./published_code_images/20180704_092921.jpg',
'./published_code_images/LumineBruh.gif',
'./published_code_images/AmePls.gif',
'./published_code_images/20180704_092921.jpg',
'./published_code_images/LumineBruh.gif'
];

let testele = document.createElement("div");
testele.className = "newsCard";
let testimg = document.createElement("img");
testimg.className = "newsImg";
testimg.setAttribute("src", imageSources[0]);
testele.appendChild(testimg);
document.getElementById("newsSec").appendChild(testele);
numLoaded = 0;
win_height_size = window.innerHeight;
win_width_size = window.innerWidth;
img_height_size = testele.clientHeight;
img_width_size = testele.clientWidth;
testimg.remove();
testele.remove();

numRows = Math.ceil(win_height_size / img_height_size);

for (let i = 0; i < numRows; i++) // Change this 5 to however many images you have (or use for ... in) 
{ 
    let divele = document.createElement("div");
    divele.className = "newsCard";
    let imgele = document.createElement("img");
    imgele.className = "newsImg";
    imgele.setAttribute("src", imageSources[i]);
    divele.appendChild(imgele);
    document.getElementById("newsSec").appendChild(divele);
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
        let testele = document.createElement("div");
        testele.className = "newsCard";
        let testimg = document.createElement("img");
        testimg.className = "newsImg";
        testimg.setAttribute("src", imageSources[0]);
        testele.appendChild(testimg);
        document.getElementById("newsSec").appendChild(testele);
        win_height_size = window.innerHeight;
        win_width_size = window.innerWidth;
        img_height_size = testele.clientHeight;
        img_width_size = testele.clientWidth;
        testimg.remove();
        testele.remove();
        
        if (numLoaded <= imageSources.length-1)
        {
            let divele = document.createElement("div");
            divele.className = "newsCard";
            let imgele = document.createElement("img");
            imgele.className = "newsImg";
            imgele.setAttribute("src", imageSources[numLoaded]);
            divele.appendChild(imgele);
            document.getElementById("newsSec").appendChild(divele);
            numLoaded++;
        }
    }
    //loading.classList.remove("show");
};