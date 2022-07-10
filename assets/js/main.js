

gsap.to("body", {
  duration: 2,
  "background-image":
    "linear-gradient(315deg, #130f40 0%, #000000 50%),url(./assets/images/noise-fine.svg)",
});

setTimeout(function () {
  document.body.style.background =
    "linear-gradient(315deg, #130f40 0%, #000000 60%)";
}, 2100);

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

var noise = "./assets/images/noise.svg";
let tl2 = gsap.timeline({
  defaults: {
    ease: "power4.inOut",
  },
  paused: true,
});
tl2
  .add(function () {
    if (tl2.reversed()) {
      transition.playing = false;
    }
  })
  .to(".arrow", {
    opacity: 0,
    duration: 0.5,
  })
  .to(
    "#second",
    {
      height: "100%",
      duration: 2,
    },
    "<+0.2"
  )
  .to(
    "#first",
    {
      height: "0vh",
      duration: 2,
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
      duration: 3,
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
      duration: 5,
    },
    "<"
  )
  .to(
    "body",
    {
      "background-color": "#000000",
      background:
        "linear-gradient(147deg, rgb(0, 0, 0) 0%, rgb(50 2 41) 74%), url(./assets/images/noise.svg) rgb(0, 0, 0)",
      height: "100%",
      duration: 1,
    },
    "<"
  )
  // linear-gradient(147deg, rgb(0, 0, 0) 0%, rgb(4, 97, 159) 74%), url("./assets/images/noise.svg") rgb(0, 0, 0)
  
  .add(function () {
    if (!tl2.reversed()) {
      transition.playing = false;
    }
  });

let tl3 = gsap.timeline({
  defaults: {
    ease: "power4.inOut",
  },
  paused: true,
});
tl3
  .add(function () {
    if (tl3.reversed()) {
      transition.playing = false;
    }
  })
  .to("#second", {
    height: "0",
    duration: 2,
  })
  .to(
    "#third",
    {
      height: "100%",
      duration: 2,
    },
    "<"
  )
  .to(
    "body",
    {
      height: "100%",
      duration: 3,
    },
    "<+1"
  )
  .add(function () {
    if (!tl3.reversed()) {
      transition.playing = false;
    }
  });

let tl4 = gsap.timeline({
  defaults: {
    ease: "power4.inOut",
  },
  paused: true,
});
tl4
  .add(function () {
    if (tl4.reversed()) {
      transition.playing = false;
    }
  })
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


tl2.timeScale(1.2);
tl3.timeScale(1.2);
tl4.timeScale(1.2);

// tl2.reverse(0);
var currentPage = 1;
setTimeout(function () {
  transition.playing = false;
  var a = Array.from(document.getElementsByClassName("back-filter"));
  a.forEach((e) => {
    e.style.setProperty("backdrop-filter", "blur(2.5px)");
  });
}, 5000);

window.addEventListener("wheel", function (e) {
  console.log("step1");
  if (e.wheelDelta <= -1 && !transition.playing) {
    console.log("step2");
    transition.playing = true;
    if (currentPage == 1) {
      console.log("1 to 2");
      tl2.play();
      currentPage += 1;
    } else if (currentPage == 2) {
      console.log("2 to 3");
      tl3.play();
      currentPage += 1;
    } else if (currentPage == 3) {
      console.log("3 to 4");
      tl4.play();
      currentPage += 1;
    }
  }
  if (e.wheelDelta > 0) {
    console.log("step3");
    if (currentPage == 2 && !tl3.isActive() && !tl2.isActive()) {
      console.log("2 to 1");
      tl2.reverse();
      currentPage -= 1;
    } else if (currentPage == 3 && !tl4.isActive()  && !tl3.isActive()) {
      console.log("3 to 2");
      tl3.reverse();
      currentPage -= 1;
    } else if (currentPage == 4 && !tl4.isActive()  && !tl3.isActive()) {
      console.log("4 to 3");
      tl4.reverse();
      currentPage -= 1;
    }
  }
});

//check for Navigation Timing API support
if (window.performance) {
  console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
} else {
  console.info("This page is not reloaded");
}
