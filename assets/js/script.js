gsap.utils.toArray(".rotate-in").forEach(icon => {
    gsap.from(icon, {
      scrollTrigger: icon,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
      rotation: 360,
      opacity: 0
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animation for the section title
    gsap.from(".section-title", {
      duration: 1,
      autoAlpha: 0,
      y: -50,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top center+=100",
        toggleActions: "play none none none"
      }
    });
  
    // Animation for the profile picture
    gsap.from(".img-fluid", {
      duration: 1.5,
      autoAlpha: 0,
      x: -100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".img-fluid",
        start: "top center+=150",
        toggleActions: "play none none none"
      }
    });
  
    // Animation for the content
    gsap.from(".content", {
      duration: 1.5,
      autoAlpha: 0,
      x: 100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".content",
        start: "top center+=150",
        toggleActions: "play none none none"
      }
    });
  
    // Staggered reveal for list items
    gsap.from(".row li", {
      duration: 0.5,
      autoAlpha: 0,
      y: 20,
      stagger: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".row",
        start: "top center+=100",
        toggleActions: "play none none none"
      }
    });
  });
    