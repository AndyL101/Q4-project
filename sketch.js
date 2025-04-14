var x = 10;
var y = 100 + 200 * Math.random();
let vx = 0;
let vy = 0;
let acceleration = 0;
let shot = false;

function preload() {
  rim = loadImage(
    "https://media.istockphoto.com/id/1409969841/vector/basketball-basket-hoop-and-net-on-the-side-3x3-basketball-sport-equipment-summer-games.jpg?s=612x612&w=0&k=20&c=tAhTbRaPmwSMXOvjIfY-im07NHvOA-4EXfWgKXrd0Tk="
  );
  basketball = loadImage("basketball.jpg");
}
function setup() {
  createCanvas(400, 400);
  text("Level 1", 200, 20);
}

function draw() {
  background("white");
  if (x > 355 && vx > 0 && y < 200) {
    vx = -vx;
  }

  x = x + vx;
  y = y + vy;
  vy += acceleration;
  let makedistance = Math.sqrt((315 - x) ** 2 + (190 - y) ** 2);
  if (makedistance <= 23) {
    text("Congratulations you passed level 1!", 50, 200);
  } else {
  }
  image(rim, 275, 150, 130, 120);
  image(basketball, x, y, 40, 40);
  fill("green");
  let rimdistance1 = Math.sqrt((285 - x) ** 2 + (170 - y) ** 2);
  if (rimdistance1 <= 20) {
    vx = -vx;
  }
  let rimdistance2 = Math.sqrt((375 - x) ** 2 + (180 - y) ** 2);
  if (rimdistance2 <= 33) {
    vx = 0.5*(x-375);
    vy = 0.5*(y - 175);
  }
  circle(375, 175, 30);
  circle(285, 170, 10);
  circle(315, 190, 23);
}
function mousePressed() {
  if (!shot) {
    acceleration = 0.5;
    vx = mouseX / 15;
    vy = (mouseY - 200) / 15;
    shot = true;
  } else {
    vx = 0;
    vy = 0;
    x = 20;
    y = 100 + 200 * Math.random();
    acceleration = 0;
    shot = false;
  }
}
//Get letters to stay
//Get rim to bounce and not vibrate and use trig to point distance and get back rim working
//Add interesting background with crowd
