gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-font-area",
    start: "top top",
    end: "+=100%", // পুরো scroll duration
    scrub: 1,
    pin: true,
  }
});

// Step 1: 
tl.to(".scroll-font", {
  fontSize: "150px",
  ease: "power2.out",
  scrub: 1,
  duration: 5 
});

// Step 2: 
tl.to(".scroll-font", {
  ease: "power2.out",
  duration: 5
});
// Step 3: 
tl.to(".hidden0", {
  display: "inline-block",
  
  ease: "power2.out",
  duration: 5
});
tl.to(".hidden1", {
  display: "inline-block",
  ease: "power2.out",
  duration: 5
});
tl.to(".hidden2", {
  display: "inline-block",
  ease: "power2.out",
  duration: 5
});
tl.to(".hidden3", {
  display: "inline-block",
  ease: "power2.out",
  duration: 5
});
tl.to(".hidden4", {
  display: "inline-block",
  ease: "power2.out",
  duration: 5
});
tl.to(".hidden5", {
  display: "inline-block",
  ease: "power2.out",
  duration: 5
});
tl.to(".hidden6", {
  display: "inline-block",
  ease: "power2.out",
  duration: 5
});