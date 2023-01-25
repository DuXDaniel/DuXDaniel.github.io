var headerele = document.createElement("header");

var backimg01 = document.createElement("img");
backimg01.className = "headerImg";
backimg01.setAttribute("src", "./background/300sq/background_transparent.png");
backimg01.style.position = "relative";
headerele.appendChild(backimg01);

var backimg02 = document.createElement("img");
backimg02.className = "headerImg";
backimg02.setAttribute("src", "./background/header/header_img.png");
backimg01.style.position = "absolute";
headerele.appendChild(backimg02);

var titleele = document.createElement("p");
titleele.className = "headerTitle";
titleele.innerText = "Daniel Du's Portfolio";
headerele.appendChild(titleele);

var textele = document.createElement("p");
textele.className = "headerText";
textele.innerHTML = '<a href="mailto:dxd2001@columbia.edu">dxd2001@columbia.edu</a>&nbsp|&nbsp<a href="https://github.com/DuXDaniel">GitHub</a>&nbsp|&nbsp<a href="https://www.linkedin.com/in/dudanielx/">LinkedIn</a>&nbsp|&nbsp<a href="https://twitter.com/DuXDaniel">Twitter</a>';
headerele.appendChild(textele);

var navele = document.createElement("div");
navele.className = "navbar";
navele.id = "navbar";
headerele.appendChild(navele);

document.getElementsByClassName("container")[0].prepend(headerele)