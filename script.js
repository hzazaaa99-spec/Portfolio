document.addEventListener("DOMContentLoaded", function () {
  const pageSections = document.querySelectorAll("section[id]");
  const menuLinks = document.querySelectorAll(".navbar a[href^='#']");

  function updateNavigation() {
    let currentSection = "";
    const position = window.scrollY + 180;

    pageSections.forEach(function (section) {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (position >= top && position < bottom) {
        currentSection = section.id;
      }
    });

    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 5
    ) {
      currentSection = "contact";
    }

    menuLinks.forEach(function (link) {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateNavigation);
  updateNavigation();
});
