const locomotiveScroll = new LocomotiveScroll();

function mousesqueeze() {
  let timer;
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timer);
    let xdiff = dets.clientX - xprev;
    let ydiff = dets.clientY - yprev;

    xprev = dets.clientX;
    yprev = dets.clientY;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    mouseFollow(xscale, yscale);

    timer = setTimeout(function () {
      document.querySelector("#mousecircle").style.transform =
        `translate(${dets.clientX}px,${dets.clientY}px) scale(${1},${1})`;
    }, 100);
  });
}

function firstPage() {
  let tl = gsap.timeline();
  tl.from("#nav", {
    y: -50,
    opacity: -5,
    duration: 2,
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

function mouseFollow(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#mousecircle").style.transform =
      `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mouseleave", function (dets) {
    console.log(elem.getBoundingClientRect());
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    });
  });
});
document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let diffRotate = 0;
  elem.addEventListener("mousemove", function (dets) {
    let diff = dets.clientY - (elem.getBoundingClientRect().top + 100);
    diffRotate = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX - 100,
      rotate: gsap.utils.clamp(-20, 20, diffRotate),
    });
  });
});
firstPage();
mouseFollow();
mousesqueeze();
