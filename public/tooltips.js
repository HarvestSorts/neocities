const tooltip = document.getElementById("tooltip");
      const images = document.querySelectorAll("[data-tooltip]");

      images.forEach((image) => {
        image.addEventListener("mouseenter", () => {
          tooltip.textContent = image.getAttribute("data-tooltip");
          tooltip.classList.add("visible");
        });

        image.addEventListener("mouseleave", () => {
          tooltip.classList.remove("visible");
        });

        image.addEventListener("mousemove", (e) => {
          tooltip.style.left = e.clientX + 15 + "px";
          tooltip.style.top = e.clientY + 15 + "px";
        });
      });