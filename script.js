const menuToggle = document.getElementById("menuToggle");
      const navPanel = document.getElementById("navPanel");

      menuToggle.addEventListener("click", () => {
        navPanel.classList.toggle("nav-open");
      });

      navPanel.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navPanel.classList.remove("nav-open");
        });
      });