const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let cx = canvas.width / 2;
let cy = canvas.height / 2;

let gravity = 2;

let vx = (Math.random() - 0.5) * 50;
let vy = (Math.random() - 0.5) * 50;
let wallBounciness = 0.4;
let bounciness = 0; // Bounciness value between 0 (no bounce) and 1 (no loss of energy when bouncing)

let spacebarDown = false;
let leftDown = false;
let rightDown = false;

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

function update() {
  cx += vx; // Apply horizontal velocity
  cy += vy; // Apply vertical velocity
  vy += gravity; // Apply gravity to vercital velocity

  if (cy > canvas.height) {
    cy = canvas.height;
    vy *= - bounciness;
  }
  if (cy < 0) {
    cy = 0;
    vy *= - bounciness;
  }
  if (cx > canvas.width) {
    cx = canvas.width;
    vx *= - wallBounciness;
  }
  if (cx < 0) {
    cx = 0;
    vx *= - wallBounciness;
  }

  if (leftDown) {
    vx -= 1;
  }
  if (rightDown) {
    vx += 1;
  }
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

  circle(cx,cy,50,'red');
}

window.addEventListener('resize', resize);
resize(); // Do initial resize to initialize to window dimensions

// for keyCode reference: http://keycode.info/

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 32) {
    spacebarDown = true;
    if (cy === canvas.height) {
      vy -= 50;
    }
  }
  if (event.keyCode === 37) {
    leftDown = true;
  }
  if (event.keyCode === 39) {
    rightDown = true;
  }
});

window.addEventListener('keyup', (event) => {
  if (event.keyCode === 32) {
    spacebarDown = false;
  }
  if (event.keyCode === 37) {
    leftDown = false;
  }
  if (event.keyCode === 39) {
    rightDown = false;
  }
});



// API: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
