document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      const menu = this.nextElementSibling;
      // Close other dropdowns
      document.querySelectorAll(".dropdown-menu").forEach(function (otherMenu) {
        if (otherMenu !== menu) {
          otherMenu.classList.add("hidden");
        }
      });
      menu.classList.toggle("hidden");
    });
  });

  document.addEventListener("click", function (event) {
    const isClickInsideDropdown = (element) => {
      return element.contains(event.target);
    };

    let clickedInside = false;
    dropdownToggles.forEach(function (toggle) {
      if (isClickInsideDropdown(toggle.parentElement)) {
        clickedInside = true;
      }
    });

    if (!clickedInside) {
      document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
        menu.classList.add("hidden");
      });
    }
  });
});
