    // JavaScript to enable interactivity for your HTML page

    document.addEventListener("DOMContentLoaded", () => {
    
        // Buttons functionality

        const signInButton = document.querySelector(".sign-btn");
        const logInButton = document.querySelector(".log-btn");
        const actionButtons = document.querySelectorAll("button[type='submit']");
    
        signInButton.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Sign-In button clicked! Redirecting to Sign-In page...");
        });
    
        logInButton.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Log-In button clicked! Redirecting to Log-In page...");
        });
    
        actionButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            alert(`${btn.innerText} button clicked! Action initiated.`);
        });
        });
    
        // Navigation links functionality

        const navLinks = document.querySelectorAll(".header ul li a");
        navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert(`You clicked on ${link.textContent}. Navigation triggered.`);
        });
        });
    
        // Projects section functionality

        const projectLinks = document.querySelectorAll(".project-ID a");
        projectLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert(`View Project: ${link.previousElementSibling.textContent}`);
        });
        });
    
        // FAQ toggle functionality

        const faqHeaders = document.querySelectorAll(".question h3");
        faqHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const paragraph = header.nextElementSibling;
            if (paragraph && paragraph.style.display === "block") {
            paragraph.style.display = "none";
            } else if (paragraph) {
            paragraph.style.display = "block";
            }
        });
        });
    
        // Social media icons

        const socialIcons = document.querySelectorAll(".socials img");
        socialIcons.forEach((icon, index) => {
        icon.addEventListener("click", () => {
            alert(`Social icon ${index + 1} clicked! Redirecting...`);
        });
        });
    
        // Footer links

        const footerLinks = document.querySelectorAll(".footer-box a");
        footerLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert(`Footer link ${link.textContent} clicked!`);
        });
        });
    
        // 'Discover More' button in professions section
        
        const discoverMoreBtn = document.querySelector(".btn-text a");
        discoverMoreBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Discover More button clicked! Loading details...");
        });
    
    });
    