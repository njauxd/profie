
    // Responsive part

    document.addEventListener("DOMContentLoaded", () => {
        const heroSection = document.querySelector(".hero");
        const professionSection = document.querySelector(".sec-boxes");
        const projectSection = document.querySelector(".project-ID");
        
        const adjustResponsiveLayout = () => {
          const screenWidth = window.innerWidth;
      
          // For small screens (mobile)
          if (screenWidth <= 480) {
            heroSection.style.flexDirection = "column";
            professionSection.style.display = "block";
            projectSection.style.display = "block";
          }
          // For medium screens (tablet)
          else if (screenWidth > 480 && screenWidth <= 768) {
            heroSection.style.flexDirection = "row";
            professionSection.style.display = "grid";
            professionSection.style.gridTemplateColumns = "1fr";
            projectSection.style.gridTemplateColumns = "1fr";
          }
          // For large screens (desktop)
          else {
            heroSection.style.flexDirection = "row";
            professionSection.style.display = "grid";
            professionSection.style.gridTemplateColumns = "repeat(2, 1fr)";
            projectSection.style.gridTemplateColumns = "repeat(3, 1fr)";
          }
        };
      
        // Attach the resize event listener
        window.addEventListener("resize", adjustResponsiveLayout);
      
        // Run the function on initial load
        adjustResponsiveLayout();
      });
      