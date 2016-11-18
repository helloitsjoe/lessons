const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
}

function circle(cx, cy, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx,cy,radius,0,Math.PI*2,true);
  ctx.fill();
}

let world = new World();
// world.addEntity(new Particle(50, 50, 0, 0, 50, canvas, world));
world.addEntity(new Player(30, 30, 0, 0, canvas, world));

function update() {
    world.update();
}

function loop() {
  update();
  render();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

function render() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  world.render(ctx);
}

window.addEventListener('resize', resize);
resize(); // Do initial resize to initialize to window dimensions


let lastX = null;
let lastY = null;
let counter = 0;

window.addEventListener('mousemove', (event) => {
    // if (event.buttons &1) {
    //     if (!(counter++ % 8)) {
    //         if (lastX !== null) {
    //             world.addEntity(new Particle(
    //                 event.clientX,
    //                 event.clientY,
    //                 ((event.clientX - lastX) / 10),
    //                 ((event.clientY - lastY) / 10),
    //                 // 1,
    //                 // 1,
    //                 Math.random() * 100 + 10,
    //                 canvas,
    //                 world
    //             ));
    //         }
    //         lastX = event.clientX;
    //         lastY = event.clientY;
    //     }
    // }
});

// for keyCode reference: http://keycode.info/
window.addEventListener('keydown', (event) => {
  // if (event.keyCode === 32) {
  //   spacebarDown = true;
  //   if (cy === canvas.height) {
  //     vy -= 50;
  //   }
  // }
  // if (event.keyCode === 37) {
  //   leftDown = true;
  // }
  // if (event.keyCode === 39) {
  //   rightDown = true;
  // }
});

window.addEventListener('keyup', (event) => {
  // if (event.keyCode === 32) {
  //   spacebarDown = false;
  // }
  // if (event.keyCode === 37) {
  //   leftDown = false;
  // }
  // if (event.keyCode === 39) {
  //   rightDown = false;
  // }
});



// API: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
