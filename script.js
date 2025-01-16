window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    if (scrollPos < 200) {
      document.title = "Bloom Scroll 🌸 - Welcome";
    } else if (scrollPos < 600) {
      document.title = "🌷 Explore the Beauty!";
    } else {
      document.title = "✨ Keep Scrolling ✨";
    }
  });
  
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Scroll animations for sections
    gsap.registerPlugin(ScrollTrigger);
  
    // About Us Section Animation
    gsap.from(".about-us", {
      scrollTrigger: {
        trigger: ".about-us",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  
    const cards = document.querySelectorAll(".card");
  
    // Card Animations with spacing adjustment
    gsap.fromTo(
      cards,
      {
        y: 100,
        scale: 0.8,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1.2,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#services",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  
    // Contact Us Animation
    gsap.from(".contact-us", {
      scrollTrigger: {
        trigger: ".contact-us",
        start: "top 80%",
        end: "bottom 30%",
        scrub: 1,
        toggleActions: "play none none none",
      },
      opacity: 0,
      transform: "translateX(100%)",
      duration: 1,
      ease: "power4.out",
    });
  
    // Card Rotation Animation
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          rotateY: 360,
          duration: 1,
          ease: "power1.inOut",
        });
      });
  
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateY: 0,
          duration: 1,
          ease: "power1.inOut",
        });
      });
    });
  
    // Circle Animation
    gsap.to(".circle", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      scale: 10,
      rotation: 360,
      opacity: 0.5,
      ease: "none",
    });
  
    gsap.to(".circle", {
      scrollTrigger: {
        trigger: "body",
        start: "bottom bottom",
        end: "top top",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      ease: "none",
    });
  
    gsap.to(".flower", {
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      x: -200,
      y: -100,
      scale: 1.2,
      rotation: 180,
    });
  
    gsap.to(".petal", {
      scrollTrigger: {
        trigger: ".section3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      x: 300,
      y: 200,
      scale: 1.8,
      rotation: 720,
    });
  
    // Section Transitions
    gsap.from(".section h2", {
      scrollTrigger: {
        trigger: ".section",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      y: 50,
      opacity: 0,
    });
  });
  
  // CSS Media Queries for Responsive Styling
  const styles = `
    @media (max-width: 768px) {
      .card {
        transform: scale(0.9);
        margin-top: 5px; /* Add margin to prevent overlap */
      }
      .circle {
        scale: 8 !important;
      }
      .flower, .petal {
        scale: 1 !important;
      }
    }
  
    @media (max-width: 480px) {
      .card {
        transform: scale(0.8);
        margin: 5px; /* Reduce margin for mobile */
      }
      .circle {
        scale: 6 !important;
      }
      .flower, .petal {
        scale: 0.8 !important;
      }
    }
  `;
  
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
  