
gsap.to("body", {
    duration: 2,
    "background-image":
        "linear-gradient(315deg, #130f40 0%, #000000 65%),url(./assets/images/noise-fine.svg)",
});

// alert(window.innerHeight +','+ window.innerWidth);

setTimeout(function () {
    document.body.style.background =
        "linear-gradient(315deg, #130f40 0%, #000000 65%)";
}, 2100);

// particlesJS("particles-js", {
//     "particles": {
//         "number": {
//             "value": 154,
//             "density": {
//                 "enable": true,
//                 "value_area": 800
//             }
//         },
//         "color": {
//             "value": "#ffffff"
//         },
//         "shape": {
//             "type": "circle",
//             "stroke": {
//                 "width": 0,
//                 "color": "#000000"
//             },
//             "polygon": {
//                 "nb_sides": 5
//             },
//             "image": {
//                 "src": "img/github.svg",
//                 "width": 100,
//                 "height": 100
//             }
//         },
//         "opacity": {
//             "value": 0.5,
//             "random": false,
//             "anim": {
//                 "enable": false,
//                 "speed": 1,
//                 "opacity_min": 0.1,
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 2.8,
//             "random": true,
//             "anim": {
//                 "enable": true,
//                 "speed": 1,
//                 "size_min": 0.1,
//                 "sync": false
//             }
//         },
//         "line_linked": {
//             "enable": false,
//             "distance": 150,
//             "color": "#ffffff",
//             "opacity": 0.4,
//             "width": 1
//         },
//         "move": {
//             "enable": true,
//             "speed": 6,
//             "direction": "none",
//             "random": false,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {
//                 "enable": false,
//                 "mode": "repulse"
//             },
//             "onclick": {
//                 "enable": false,
//                 "mode": "push"
//             },
//             "resize": true
//         },
//         "modes": {
//             "grab": {
//                 "distance": 400,
//                 "line_linked": {
//                     "opacity": 1
//                 }
//             },
//             "bubble": {
//                 "distance": 400,
//                 "size": 40,
//                 "duration": 2,
//                 "opacity": 8,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//             },
//             "push": {
//                 "particles_nb": 4
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true
// });

// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function () {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);

// document.getElementsByTagName('canvas')[1].style.display = "none";
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
        tl
        .from(
            mySplitText[i],
            2,
            {
                opacity: 0,
            },
            Math.random() * 2
        )
        ;
    }
}

textEffect1("heading");
textEffect1("subHeading");

var noise = "./assets/images/noise.svg";
var rule = CSSRulePlugin.getRule("#video-parent:before"),
    rule2 = CSSRulePlugin.getRule("#video-parent:after");
let tl2 = gsap.timeline({
    defaults: {
        ease: "power4.inOut",
    },
    paused: true,
});
tl2
    .to("#first", {
        height: "0vh",
        duration: 2,
    })
    .to(
        "#second",
        {
            height: "100%",
            duration: 2,
        },
        "<"
    )
    .to(
        "#camel",
        {
            fill: "#ffffff29",
            duration: 1,
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
            color: "rgb(255, 255, 255, 90%)",
            opacity: 0.9,
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
    .to(
        rule,
        {
            "-webkit-transform": "rotateY(-15deg) translateX(-76px) scale(1) translateZ(-30px)",
            transform: "rotateY(-15deg) translateX(-76px) scale(1) translateZ(-30px)",
            duration: 3,
        },
        "<"
    )
    .to(
        rule2,
        {
            "-webkit-transform": "rotateY(-15deg) translateX(-62px) scale(3) translateZ(-70px)",
            transform: "rotateY(-15deg) translateX(-62px) scale(3) translateZ(-70px)",
            duration: 3,
        },
        "<"
    )
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
    .to(
        "canvas",
        {
            height: "0px",
            duration: 1,
        },
        "<"
    )
    .to(
        "#logo",
        {
            filter: "",
            duration: 0.2,
        },
        "<"
    )
    .to(
        ".particles-js-canvas-el",
        {
            height: "100vh",
            opacity: 0.75,
            duration: 2,
        },
        "<0.05"
    )
    .to(
        "#logo",
        {
            filter: "",
            duration: 0.2,
        },
        "<"
    )
    .to(transition, {
        playing: false,
    });

let tl3 = gsap.timeline({
    defaults: {
        ease: "power4.inOut",
    },
    paused: true,
});
tl3
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
    .to(transition, {
        playing: false,
    });

let tl4 = gsap.timeline({
    defaults: {
        ease: "power4.inOut",
    },
    paused: true,
});
tl4
    .to("#third", {
        height: "0",
        y: "-100vh",
        duration: 2,
    })
    .to(
        "#fourth",
        {
            height: "100vh",
            duration: 2,
        },
        "<"
    )
    .to(
        "body",
        {
            height: "100vh",
            duration: 3,
        },
        "<+1"
    )
    .to(transition, {
        playing: false,
    });

// tl2.reverse(0);
var currentPage = 1;
setTimeout(function(){
    transition.playing = false;
    tl2.play();
}, 5000)
window.addEventListener("wheel", function (e) {
    if (e.wheelDelta < -1 && !transition.playing) {
        transition.playing = true;
        if (currentPage == 1) {
            tl2.play();
            currentPage += 1;
        } else if (currentPage == 2) {
            // tl3.play();
            currentPage += 1;
        } else if (currentPage == 3) {
            // tl4.play();
            currentPage += 1;
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
