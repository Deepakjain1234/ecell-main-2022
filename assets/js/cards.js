var a = 3;
//   IMPORTING
import * as THREE from "three";

import { TWEEN } from "./jsm/libs/tween.module.min.js";
//   import { TrackballControls } from "./jsm/controls/TrackballControls.js";
import { CSS3DRenderer, CSS3DObject } from "./jsm/renderers/CSS3DRenderer.js";
//   /IMPORTING

const table = [
  "speaker1",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker2",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker3",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker4",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker5",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker6",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker7",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker8",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker9",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker10",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker11",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker12",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker13",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker14",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker15",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker16",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker17",
  "Organization1",
  "Position1",
  1,
  1,
  "speaker18",
  "Organization1",
  "Position1",
  1,
  1,
];

console.log(table.length / 5);
let camera, scene, renderer;
//   let controls;

const objects = [];
const targets = { grid: [] };

init();
animate();

function init() {
  // init starts
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 0;

  scene = new THREE.Scene();

  // table

  for (let i = 0; i < table.length; i += 5) {
    const element = document.createElement("div");
    var bgc = "rgba(185,181,181," + (Math.random() * 0.5 + 0.25) + ")";
    // 0,127,127
    // rgba(185, 181, 181, 0.2)
    element.className = "element";
    element.style.backgroundColor = bgc;

    const cardPic = document.createElement("div");
    cardPic.className = "cardPic";
    cardPic.style.background =
      "url('https://upload.wikimedia.org/wikipedia/commons/f/fe/Mark__Zuckerberg_em_setembro_de_2014.jpg')";
    element.appendChild(cardPic);

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    element.appendChild(overlay);

    const cardName = document.createElement("div");
    cardName.className = "cardName";
    cardName.textContent = table[i];
    element.appendChild(cardName);

    const details = document.createElement("div");
    details.className = "details";
    details.innerHTML = table[i + 1] + "<br>" + table[i + 2];
    element.appendChild(details);

    const objectCSS = new CSS3DObject(element);
    objectCSS.position.x = Math.random() * 4000 - 2000;
    objectCSS.position.y = Math.random() * 4000 - 2000;
    objectCSS.position.z = Math.random() * 4000 - 2000;
    scene.add(objectCSS);

    objects.push(objectCSS);
  }

  // grid MAKER

  for (let i = 0; i < objects.length; i++) {
    const object = new THREE.Object3D();
    const rows = 2;
    const cols = 3;
    const gapX = 130; //in pixels
    const gapY = 100; //in pixels
    const gapZ = 520;

    //centering logic applied
    const gridLeft =
      (innerWidth * 2 - 100) / 2 - (cols * 120 + (cols - 1) * gapX) / 2; //innerWidth * 2 -100 right edge
    const gridTop =
      (innerHeight * 2 - 35) / 2 - (rows * 160 + (rows - 1) * gapY) / 2; //innerHeight * 2 - 35 bottom edge

    object.position.x = (i % cols) * (120 + gapX) - innerWidth + 100 + gridLeft;

    object.position.y =
      -(Math.floor(i / cols) % rows) * (160 + gapY) +
      innerHeight -
      100 -
      gridTop;

    object.position.z = Math.floor(i / 6) * gapZ - 2000;

    targets.grid.push(object);
  }

  renderer = new CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("speakers").appendChild(renderer.domElement);

  //RESIZE boilerplate code
  window.addEventListener("resize", onWindowResize);

  // init ends
}

//TWEENING CARDS STARTS
function transform(targets, duration) {
  TWEEN.removeAll();

  for (let i = 0; i < objects.length; i++) {
    const object = objects[i]; //INITIAL
    const target = targets[i]; //FINAL

    //TWEENING POSITION
    new TWEEN.Tween(object.position)
      .to(
        {
          x: target.position.x,
          y: target.position.y,
          z: target.position.z,
        },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.Out)
      .start();

    //TWEENING ROTATION
    new TWEEN.Tween(object.rotation)
      .to(
        {
          x: target.rotation.x,
          y: target.rotation.y,
          z: target.rotation.z,
        },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.Out)
      .start();
  }

  new TWEEN.Tween(this)
    .to({}, duration * 2)
    .onUpdate(render)
    .start();
}
//TWEENING CARD ENDS

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update(); //calling tween.update recursively for smoother tweening
}

var c = 0;
var t = 0;
var a = setInterval(function () {
  if (SPEAKERS == "start") {
    transform(targets.grid, 1000);
  var b = setInterval(function () {
    var n = Math.floor(Math.random() * 54);
    // var n = c % objects.length;
    // var e = document.getElementsByClassName("element")[n];
    // e.className = e.className + " elementSeen";
    // setTimeout(function () {
    //   e.className = e.className.split(" ")[0];
    // }, 3000);

    new TWEEN.Tween(camera.position)
      .to(
        {
          x: targets.grid[n].position.x,
          y: targets.grid[n].position.y,
          z: targets.grid[n].position.z + 480,
        },
        1000
      )
      .easing(TWEEN.Easing.Exponential.Out)
      .onUpdate(render)
      .start();
    // c += 1;
  }, 2000);
  console.log("bye");
  clearInterval(a);
} else {console.log(SPEAKERS);}
}, 100);

function render() {
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}
