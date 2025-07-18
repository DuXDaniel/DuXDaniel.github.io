// could use a django backend for this goofiness, but w/e I don't generate more than 1 news article per year on average
const imageSources = [ // Put your image sources in this list
    './publication_images/2025_bioRXiv_01.jpg',
    './conference_images/2025_SMART.jpg',
    './publication_images/2024_bioRXiv.jpg',
    './publication_images/2023_J_Struct_Bio.jpg',
    './index_photos/0009.png',
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
    'Preprint: \"Pulsed-laser lensing for phase modulation in electron microscopy\"',
    'Conference Talk: Pulsed Laser Control of Fast Electrons',
    'Preprint: \"Development of an ultrafast pulsed ponderomotive phase plate for cryo-electron tomography\"',
    'Journal of Structural Biology Publication: \"Four-dimensional microED of conformational dynamics in protein microcrystals on the femto-to-microsecond timescales\"',
    'Cell Reports Methods Publication: \"Design of an ultrafast pulsed ponderomotive phase plate for cryo-electron tomography\"',
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
    'https://www.biorxiv.org/content/10.1101/2025.06.12.659428v1.abstract',
    '',
    'https://www.biorxiv.org/content/10.1101/2024.03.20.585981v1.abstract',
    'https://www.sciencedirect.com/science/article/pii/S1047847723000047',
    'https://www.sciencedirect.com/science/article/pii/S2667237522002922',
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
    'June 17th, 2025',
    'April, 2025',
    'March 25th, 2024',
    'March, 2023',
    'January 23rd, 2022',
    'June, 2021',
    'April, 2021',
    'April 17th, 2020',
    'April 17th, 2020',
    'June 11th, 2018',
    'April 4th, 2018',
    'December 5th, 2017',
    'July 13th, 2016'
];

const newsDetail = [
    '',
    'Smart Electron Consortium 2025',
    '',
    '',
    '',
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
    '',
    '',
    '',
    '',
    '',
    'https://aca.scitation.org/doi/10.1063/1.5144682',
    '',
    '',
    'https://www.cambridge.org/core/journals/microscopy-and-microanalysis/article/directed-hypersonic-strain-waves-imaged-with-ultrafast-electron-microscopy/2E945314275B9ECFCE26536AC4F5B246',
    '',
    ''
];

var testele = document.createElement("div");
testele.className = "newsCard";
var testimg = document.createElement("img");
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

for (var i = 0; i < numRows; i++) // Change this 5 to however many images you have (or use for ... in) 
{ 
    var divele = document.createElement("div");
    divele.className = "newsCard";
    var imgele = document.createElement("img");
    imgele.className = "newsImg";
    imgele.setAttribute("src", imageSources[numLoaded]);
    var titleele = document.createElement("div");
    titleele.className = "newsTitle";
    if (newsURLs[numLoaded] != '')
    {
        var titleURL = document.createElement("a");
        titleURL.className = "newsURLs";
        titleURL.setAttribute("href",newsURLs[numLoaded]);
        titleURL.innerText = newsTitles[numLoaded];
        titleele.appendChild(titleURL);
    }
    else
    {
        titleele.innerText = newsTitles[numLoaded];
    }
    var dateele = document.createElement("div");
    dateele.className = "newsDate";
    dateele.innerText = newsDate[numLoaded];
    var detailele = document.createElement("div");
    detailele.className = "newsDetail";
    if (newsExtraLinks[numLoaded] != '')
    {
        var detailurl = document.createElement("a");
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
    var divlineele = document.createElement("div");
    divlineele.className = "divline";
    document.getElementById("newsSec").appendChild(divele);
    document.getElementById("newsSec").appendChild(divlineele);
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
        var testele = document.createElement("div");
        testele.className = "newsCard";
        var testimg = document.createElement("img");
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
            var divele = document.createElement("div");
            divele.className = "newsCard";
            var imgele = document.createElement("img");
            imgele.className = "newsImg";
            imgele.setAttribute("src", imageSources[numLoaded]);
            var titleele = document.createElement("div");
            titleele.className = "newsTitle";
            if (newsURLs[numLoaded] != '')
            {
                var titleURL = document.createElement("a");
                titleURL.className = "newsURLs";
                titleURL.setAttribute("href",newsURLs[numLoaded]);
                titleURL.innerText = newsTitles[numLoaded];
                titleele.appendChild(titleURL);
            }
            else
            {
                titleele.innerText = newsTitles[numLoaded];
            }
            var dateele = document.createElement("div");
            dateele.className = "newsDate";
            dateele.innerText = newsDate[numLoaded];
            var detailele = document.createElement("div");
            detailele.className = "newsDetail";
            if (newsExtraLinks[numLoaded] != '')
            {
                var detailurl = document.createElement("a");
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
            var divlineele = document.createElement("div");
            divlineele.className = "divline";
            document.getElementById("newsSec").appendChild(divele);
            document.getElementById("newsSec").appendChild(divlineele);
            numLoaded++;
        }
    }
    //loading.classList.remove("show");
};