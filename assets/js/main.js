gsap.to("#background", {
  duration: 2,
  "background":
    "linear-gradient(315deg, #130f40 0%, #000000 50%),url(./assets/images/noise-fine.svg)",
});

// ,radial-gradient(circle at left,#08071b 0vw,rgba(255,255,255,0) 36vw)

// setTimeout(function () {
//   document.body.style.background =
//     "linear-gradient(315deg, #130f40 0%, #000000 60%)";
// }, 2100);

var tl;
var transition = { playing: true };
function textEffect1(textId) {
  var a = document.getElementById(textId).innerText;
  var b = a.split("");
  for (var l in b) {
    b[l] =
      "<div class='shadowInherit'>" + b[l].replace(" ", "&nbsp;") + "</div>";
  }
  document.getElementById(textId).innerHTML = "<div>" + b.join("") + "</div>";

  var mySplitText = document.getElementById(textId).getElementsByTagName("div"),
    numChars = mySplitText.length;
  tl = new TimelineLite();
  for (var i = 0; i < numChars; i++) {
    if (i == 0) {
      document.getElementById(textId).style.opacity = 1;
    }
    // mySplitText[i].style.opacity = 0.7 + Math.random();
    //random value used as position parameter
    tl.from(
      mySplitText[i],
      2,
      {
        opacity: 0,
      },
      Math.random() * 2
    );
  }
}

textEffect1("heading");
textEffect1("subHeading");
// linear-gradient(147deg, rgb(0, 0, 0) 0%, #15062b 80%), url(./assets/images/noise.svg)
var noise = "./assets/images/noise.svg";
let tl2 = gsap.timeline({
  defaults: {
    ease: "power4.inOut",
  },
  paused: true,
});
tl2
.to(
  "#background",
  {
    
    "background":
      'linear-gradient(147deg, rgb(0, 0, 0) 0%, rgb(50, 2, 41) 90%), url("./assets/images/noise.svg")',
    duration: 3,
  },
  "<"
)
  .to(
    "#about-head",
    {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      y: 0,
      duration: 2,
    },
    "<0.8"
  )
  .to(
    ".about-desc",
    {
      transform: "translateY(0px) scale(0.9)",
      color: "rgb(255, 255, 255, 95%)",
      opacity: 1,
      duration: 2.3,
    },
    "<"
  )
  .to(
    "#about-vid",
    {
      opacity: 1,
      "-webkit-transform": "rotateY(-15deg) translateX(-60px)",
      transform: "rotateY(-15deg) translateX(-60px)",
      duration: 2,
    },
    "<"
  )
  .add(function () {
    let vp = document.getElementById("video-parent");
    vp.style.setProperty("--vpaAnimVar", "vpa 2s linear forwards");
    vp.style.setProperty("--vpbAnimVar", "vpb 2s linear forwards");
  }, "<")
  .to(
    "#about-vid-mobile",
    {
      opacity: 1,
      duration: 1.5,
    },
    "<"
  )
  ;

let tl3 = gsap.timeline({
  defaults: {
    ease: "power4.inOut",
  },
  paused: true,
});
tl3
  .to("#background", {
    "background":
      "linear-gradient(147deg, rgb(0, 0, 0) 0%, rgb(2 54 56) 74%), url(./assets/images/noise.svg) rgb(0, 0, 0)",
    duration: 3,
  });

let tl4 = gsap.timeline({
  defaults: {
    ease: "power4.inOut",
  },
  paused: true,
});

tl4
  // .add(function () {
  //   if (tl4.reversed()) {
  //     transition.playing = false;
  //   }
  // })
  .to("#third", {
    height: "0",
    y: "-100vh",
    duration: 1,
  })
  .to(
    "#fourth",
    {
      height: "100vh",
      duration: 1,
    },
    "<"
  )
  .to(
    "body",
    {
      height: "100vh",
      duration: 1.5,
    },
    "<+1"
  )
  .add(function () {
    if (!tl4.reversed()) {
      transition.playing = false;
    }
  });

tl2.timeScale(1.5);
tl3.timeScale(1.5);

// tl2.reverse(0);
var currentPage = 1;
setTimeout(function () {
  transition.playing = false;
  var a = Array.from(document.getElementsByClassName("back-filter"));
  a.forEach((e) => {
    e.style.setProperty("backdrop-filter", "blur(2.5px)");
  });
}, 5000);

//check for Navigation Timing API support
if (window.performance) {
  console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
} else {
  console.info("This page is not reloaded");
}
