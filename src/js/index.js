// toggle icon navbar mobile
let isNavbarToggleClick = false;
document.getElementById("navbar-mobile-toggle-btn").addEventListener("click", () => {
  isNavbarToggleClick = !isNavbarToggleClick;
  if (isNavbarToggleClick) {
    document.getElementById("navbar-mobile-menu").classList.replace("hidden", "block");
    document.getElementById("navbar-mobile-toggle-open").style.display = "none";
    document.getElementById("navbar-mobile-toggle-close").style.display = "block";
  } else {
    document.getElementById("navbar-mobile-menu").classList.replace("block", "hidden");
    document.getElementById("navbar-mobile-toggle-open").style.display = "block";
    document.getElementById("navbar-mobile-toggle-close").style.display = "none";
  }
});