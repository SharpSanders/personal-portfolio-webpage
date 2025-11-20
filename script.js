// Smooth scrolling for navbar links
document.querySelectorAll('#navbar a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const targetSelector = link.getAttribute("href");
    const target = document.querySelector(targetSelector);
    if (!target) return; // guard

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

function updateActiveLink() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// Fade-in project cards as they appear on screen
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".project-tile").forEach(tile => {
  observer.observe(tile);
});

// Lazy-load all screenshots
document.querySelectorAll("img").forEach(img => {
  img.loading = "lazy";
});
