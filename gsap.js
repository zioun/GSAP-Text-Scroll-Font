gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll-font", {
  fontSize: "500px",
  scrollTrigger: {
    trigger: ".scroll-font-area",
    start: "top top",
    end: "+=70%",
    scrub: 1, // smooth follow: 1 second lag
    pin: true,
  }
});

