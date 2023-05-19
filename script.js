const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const membersBtn = document.getElementById("members-btn");
const worksBtn = document.getElementById("works-btn");

const homeIframe = document.getElementById("home-iframe");
const aboutIframe = document.getElementById("about-iframe");
const membersIframe = document.getElementById("members-iframe");
const worksIframe = document.getElementById("works-iframe");

homeBtn.addEventListener("click", function() {
  homeIframe.style.display = "block";
  aboutIframe.style.display = "none";
  membersIframe.style.display = "none";
  worksIframe.style.display = "none";
});

aboutBtn.addEventListener("click", function() {
  homeIframe.style.display = "none";
  aboutIframe.style.display = "block";
  membersIframe.style.display = "none";
  worksIframe.style.display = "none";
});

membersBtn.addEventListener("click", function() {
  homeIframe.style.display = "none";
  aboutIframe.style.display = "none";
  membersIframe.style.display = "block";
  worksIframe.style.display = "none";
});

worksBtn.addEventListener("click", function() {
  homeIframe.style.display = "none";
  aboutIframe.style.display = "none";
  membersIframe.style.display = "none";
  worksIframe.style.display = "block";
});