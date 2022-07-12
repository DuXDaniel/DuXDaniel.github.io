// could use a django backend for this goofiness, but w/e I don't generate more than 1 news article per year on average
const imageSources = [ // Put your image sources in this list
'./index_photos/0008.png',
'./index_photos/0007.png',
'./index_photos/0006.jpeg',
'./index_photos/0005.jpg',
'./index_photos/0004.png',
'./index_photos/0003.png',
'./index_photos/0002.png',
'./index_photos/0001.gif'
];

const newsTitles = [
'Sigma Xi Award: Grant in Aid of Research for the proposal of "Controlled Polarization of Pump Photons in Ultrafast Electron Microscopy Experiments',
'Ultramicroscopy Publication: \"UEMtomaton: A Source-Available Platform to Aid in Start-up of Ultrafast Electron Microscopy Labs\"',
'Featured Article in SciLight',
'Structural Dynamics Publication: \"Imaging phonon dynamics with ultrafast electron microscopy: Kinematical and dynamical simulations\"',
'Outstanding TA Awardee',
'M&M 2018 Meeting Awardee',
'Physical Review Materials Publication: \"Picosecond phase-velocity dispersion of hypersonic phonons imaged with ultrafast electron microscopy\"',
'Nano Letters Publication: \"Mechanisms of Local Stress Sensing in Multifunctional Polymer Films Using Fluorescent Tetrapod Nanocrystals\"'
];

const newsURLs = [
'https://www.sigmaxi.org/programs/grants-in-aid-of-research/grant-recipients',
'https://www.sciencedirect.com/science/article/pii/S0304399121000309',
'https://aip.scitation.org/doi/full/10.1063/10.0001176',
'https://aca.scitation.org/doi/10.1063/1.5144682',
'',
'https://www.microscopy.org/MandM/2018/meetings/2018_meeting_awardees.cfm',
'https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.1.073801',
'https://pubs.acs.org/doi/full/10.1021/acs.nanolett.6b01907'
];

const newsDate = [
'June, 2021.',
'April, 2021.',
'April 17th, 2020.',
'April 17th, 2020.',
'June 11th, 2018.',
'April 4th, 2018.',
'December 5th, 2017.',
'July 13th, 2016.'
];

const newsDetail = [
'',
'',
'Featured article in ACA SciLight for the publication of \"Imaging phonon dynamics with ultrafast electron microscopy: Kinematical and dynamical simulations\" in Structural Dynamics.',
'',
'Awarded for exemplary performance as a TA in MATS 3801 at University of Minnesota, Twin Cities.',
'M&M Student Scholar Awardee for the conference paper \"Directed Hypersonic Strain Waves Imaged with Ultrafast Electron Microscopy\".',
'',
''
];

const newsExtraLinks = [
'',
'',
'https://aca.scitation.org/doi/10.1063/1.5144682',
'',
'',
'https://www.cambridge.org/core/journals/microscopy-and-microanalysis/article/directed-hypersonic-strain-waves-imaged-with-ultrafast-electron-microscopy/2E945314275B9ECFCE26536AC4F5B246',
'',
''
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
    imgele.setAttribute("src", imageSources[numLoaded]);
    let titleele = document.createElement("div");
    titleele.className = "newsTitle";
    if (newsURLs[numLoaded] != '')
    {
        let titleURL = document.createElement("a");
        titleURL.className = "newsURLs";
        titleURL.setAttribute("href",newsURLs[numLoaded]);
        titleURL.innerText = newsTitles[numLoaded];
        titleele.appendChild(titleURL);
    }
    else
    {
        titleele.innerText = newsTitles[numLoaded];
    }
    let dateele = document.createElement("div");
    dateele.className = "newsDate";
    dateele.innerText = newsDate[numLoaded];
    let detailele = document.createElement("div");
    detailele.className = "newsDetail";
    if (newsExtraLinks[numLoaded] != '')
    {
        let detailurl = document.createElement("a");
        detailurl.className = "newsURLs";
        detailurl.setAttribute("href",newsExtraLinks[numLoaded]);
        detailurl.innerText = newsDetail[numLoaded];
        detailele.appendChild(detailurl);
    }
    else
    {
        detailele.innerText = newsDetail[numLoaded];
    }
    divele.appendChild(imgele);
    divele.appendChild(titleele);
    divele.appendChild(dateele);
    divele.appendChild(detailele);
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
            let titleele = document.createElement("div");
            titleele.className = "newsTitle";
            if (newsURLs[numLoaded] != '')
            {
                let titleURL = document.createElement("a");
                titleURL.className = "newsURLs";
                titleURL.setAttribute("href",newsURLs[numLoaded]);
                titleURL.innerText = newsTitles[numLoaded];
                titleele.appendChild(titleURL);
            }
            else
            {
                titleele.innerText = newsTitles[numLoaded];
            }
            let dateele = document.createElement("div");
            dateele.className = "newsDate";
            dateele.innerText = newsDate[numLoaded];
            let detailele = document.createElement("div");
            detailele.className = "newsDetail";
            if (newsExtraLinks[numLoaded] != '')
            {
                let detailurl = document.createElement("a");
                detailurl.className = "newsURLs";
                detailurl.setAttribute("href",newsExtraLinks[numLoaded]);
                detailurl.innerText = newsDetail[numLoaded];
                detailele.appendChild(detailurl);
            }
            else
            {
                detailele.innerText = newsDetail[numLoaded];
            }
            divele.appendChild(imgele);
            divele.appendChild(titleele);
            divele.appendChild(dateele);
            divele.appendChild(detailele);
            document.getElementById("newsSec").appendChild(divele);
            numLoaded++;
        }
    }
    //loading.classList.remove("show");
};