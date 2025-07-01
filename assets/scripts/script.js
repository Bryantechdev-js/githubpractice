/* script.js */
gsap.registerPlugin(ScrollTrigger);

gsap.from(".title", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".subtitle", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out"
});

gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: "power3.out"
  });
});