var headerele = document.createElement("header");

var backimg01 = document.createElement("img");
backimg01.className = "headerImg";
backimg01.setAttribute("src", "./background/300sq/background_transparent.png");
backimg01.style.position = "relative";
headerele.appendChild(backimg01);

var backimg02 = document.createElement("img");
backimg02.className = "headerImg";
backimg02.setAttribute("src", "./background/header/header_img_4.png");
backimg01.style.position = "absolute";
headerele.appendChild(backimg02);

var titleele = document.createElement("p");
titleele.className = "headerTitle";
titleele.innerText = "Daniel Du's Portfolio";
headerele.appendChild(titleele);

var textele = document.createElement("p");
textele.className = "headerText";
textele.innerHTML = '<a href="mailto:du.daniel.x@gmail.com">du.daniel.x@gmail.com</a>&nbsp|&nbsp<a href="https://github.com/DuXDaniel">GitHub</a>&nbsp|&nbsp<a href="https://scholar.google.com/citations?user=iQGJ3fIAAAAJ&hl=en">Google Scholars</a>';
headerele.appendChild(textele);

var navele = document.createElement("div");
navele.className = "navbar";
navele.id = "navbar";
headerele.appendChild(navele);

document.getElementsByClassName("container")[0].prepend(headerele)