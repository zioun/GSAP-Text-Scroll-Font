gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll-font", {
  fontSize: "500px", // font grows
  scrollTrigger: {
    trigger: ".scroll-font-area",
    start: "top top",
    end: "+=50%",
    scrub: true,
    pin: true,
  }
});
