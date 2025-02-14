let navBar = document.querySelector(".navbar");
let tabs = document.querySelectorAll(".tabs-section ul li");
let tabsText = document.querySelectorAll(".tabs-section .tab-text");

window.onscroll = function () {
  if (this.scrollY >= navBar.scrollHeight) {
    if (!navBar.classList.contains("scrolled"))
      navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    tabsText.forEach((text) => text.classList.remove("show"));
    tabsText.forEach((text) => {
      if (tab.dataset.tab === text.dataset.tab) {
        text.classList.add("show");
      }
    });
  });
});
document.querySelector(".contact form").onsubmit = function (e) {
  e.preventDefault();
};
