const locomotiveScroll = new LocomotiveScroll();

function firstPage() {
  let tl = gsap.timeline();
  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeOut,
  })
    .to(".hiding", {
      y: 0,
      delay: -1.2,
      duration: 1.5,
      stagger: 0.2,
      ease: Expo.easeOut,
    })
    .from("#herofooter", {
      y: "-20",
      delay: -1.6,
      opacity: 0,
      duration: 1.5,
      stagger: 0.5,
      ease: Expo.easeOut,
    });
}

function mouseFollow() {
  window.addEventListener("mousemove", function (move) {
    document.querySelector("#mousecircle").style.transform =
      `translate(${move.clientX}px,${move.clientY}px)`;
  });
}

firstPage();
mouseFollow();
