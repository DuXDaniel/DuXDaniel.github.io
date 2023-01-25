var footerele = document.createElement("footer");
var footText = document.createElement("p");
footText.className = "footerText";
footText.innerText = "This webpage is designed and created by Daniel Du (©Copyright 2022-Present)\n\nContact Information\nEmail: dxd2001@columbia.edu\nPhone: 240-838-8101";
footerele.appendChild(footText)
document.getElementsByClassName("container")[0].appendChild(footerele)