let shot = false;
let basket = false;
let Basketball = function () {
  this.x = 370;
  this.y = 160;
  this.vx = 0;
  this.vy = 0;
  this.acceleration = 0;

  this.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.acceleration;
    this.acceleration = 0.5;
    shot = true;
  };

  this.draw = function () {
    image(basketball, this.x, this.y, 20, 20);
  };
};
function preload() {
  Rim = loadImage("Rim.jpg");
  basketball = loadImage("Basketball.png");
}

let ball;
let bg;
function setup() {
  createCanvas(400, 300);
  ball = new Basketball();
  bg = loadImage("Background3.jpg");
  bg.resize(400,400);
}

function draw() {
  background(bg);
  
  if (shot) {
    ball.update();
  }
  ball.draw();
let makedistance = Math.sqrt((290 - ball.x) ** 2 + (100 - ball.y) ** 2);
  if (makedistance <= 15) {
    basket = true;
  } else {
  }
   if (shot && basket) {
     
  
  }
    let rimdistance1 = Math.sqrt((203 - ball.x) ** 2 + (70 - ball.y) ** 2);
  if (rimdistance1 <= 5) {
    ball.vx = -ball.vx;
  }
  //circle(290, 100, 23);
  circle(203, 70, 5);
}
function mousePressed() {
  if (shot == false) {
    ball.vx = (mouseX-ball.x)/15;
    ball.vy = (mouseY-ball.y)/15;
    shot = true; 
   
  } else {
ball.update();
    acceleration = 0;
    shot = false;
  ball.x = 370;
  ball.y = 160;
  ball.vx = 0;
  ball.vy = 0;
    
  }
}
//Add ellipses in background to add fan movement
//Get net to move
//Fix rim bounce
//Add fading line behind ball
//Get level to link to next once finished
//Get backboard and back rim to bounce
