const openIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const smNav = document.querySelector(".sm-screen-nav");
const lgNav = document.querySelector(".lg-screen-nav");
const contactBtn = document.querySelector("#contact");
const sideProject = document.querySelector("#side-projects");
const teamProject = document.querySelector("#team-projects");
const teamProjects = document.querySelector(".team-project-projects");
const singleProjects = document.querySelector(".single-project-projects");

openIcon.addEventListener("click", function () {
  smNav.style.display = "block";
  lgNav.style.display = "none";
});

closeIcon.addEventListener("click", function () {
  smNav.style.display = "none";
  lgNav.style.display = "flex";
});

contactBtn.addEventListener("click", function () {
  window.location = "mailto:agyapongantwi@yahoo.com";
});

sideProject.addEventListener("click", function () {
  teamProject.classList.remove("active-project");
  sideProject.classList.add("active-project");
  teamProjects.style.display = "none";
  singleProjects.style.display = "block";
});
teamProject.addEventListener("click", function () {
  sideProject.classList.remove("active-project");
  teamProject.classList.add("active-project");
  teamProjects.style.display = "block";
  singleProjects.style.display = "none";
});
