
let shot = false;
let basket = false;
let Crowd;
let Ball_image;

let Basketball = function () {
  this.x = 0;
  this.y = 160;
  this.vx = 0;
  this.vy = 0;
  this.acceleration = 0;

  this.history = [];
  this.update = function () {
    this.history.push([this.x, this.y]);
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.acceleration;
    this.acceleration = 0.5;
    shot = true;
  };
  var v = createVector(this.x, this.y);
  this.history.push(v);
  console.log(this.history.length);
  this.draw = function () {
    this.show();
    image(Ball_image, this.x, this.y, 20, 20);
  };
  this.show = function () {
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      strokeWeight(0);
      fill("orange");
      circle(pos[0], pos[1], 15);
      noFill();
      strokeWeight(1);
    }
  };
};
function preload() {
  Rim = loadImage("Rim.jpg");
  Crowd = loadImage("Crowd2.jpg");
  Ball_image = loadImage("Basketball.png");
  Wood = loadImage("Wood2.jpg");
}

let ball;
let bg;
function setup() {
  createCanvas(400, 350);
  ball = new Basketball();
  //bg = loadImage("Background3.jpg");
  //bg.resize(400,400);
}
let level = 1;
function draw() {
  if (level == 1){
    level1();
  }else if (level == 2){
      level2();
  } else if(level == 3){
    level3();
  } else if(level == 4){
    level4();
  } else if(level ==5){
    level5();
  }
  background("green");
  image(Wood, 0, 123, 400, 400);
  stroke("white");
  line(353, 182, 360, 220);
  line(379, 182, 372, 220);
  line(360, 185, 367, 220);
  line(373, 185, 366, 220);
  line(355, 192, 378, 192);
  line(357, 199, 376, 199);
  line(359, 206, 374, 207);
  line(361, 213, 372, 214);
  rect(380, 150, 23, 40);

  image(Crowd, 0, 0, 400, 123);
  stroke("red");
  rect(380, 159, 13, 20);
  noFill();
  ellipse(366, 178, 30, 13);

  if (shot) {
    ball.update();
  }

  ball.draw();
  stroke("white");
  line(353, 182, 360, 220);
  line(379, 182, 372, 220);
  line(360, 185, 367, 220);
  line(373, 185, 366, 220);
  line(355, 192, 378, 192);
  line(357, 199, 376, 199);
  line(359, 206, 374, 207);
  line(361, 213, 372, 214);
  curve(2800, 100, 370, 190, 400, 240, 330, 180);
  line(265, 198, 265, 228);
  curve(3110, 50, 400, 150, 400, 330, 350, 200);
  line(40, 124, 40, 400);
  circle(40, 220, 100, 20);
  fill("white");
  let makedistance = Math.sqrt((364 - ball.x) ** 2 + (185 - ball.y) ** 2);
  if (makedistance <= 10) {
    basket = true;
    text("MADE", 200, 170);
  } else {
  }
  let makedistance2 = Math.sqrt((371 - ball.x) ** 2 + (185 - ball.y) ** 2);
  if (makedistance <= 10) {
    basket = true;
    text("MADE", 200, 170);
  } else {
  }
  if (basket) {
    text("MADE", 200, 170);
    level = level + 1;
  }
  if (shot && basket) {
  }
  let rimdistance1 = Math.sqrt((350 - ball.x) ** 2 + (178 - ball.y) ** 2);
  if (rimdistance1 <= 5) {
    ball.vx = -ball.vx;
  }

  let BBdistance1 = Math.sqrt((386 - ball.x) ** 2 + (166 - ball.y) ** 2);
  if (BBdistance1 <= 20) {
    ball.vx = -ball.vx;
  }
  let rimdistance2 = Math.sqrt((382 - ball.x) ** 2 + (182 - ball.y) ** 2);
  if (rimdistance2 <= 10) {
    ball.vx = 0.3 * (ball.x - 375);
    ball.vy = 0.3 * (ball.y - 175);
  }
  let rimdistance3 = Math.sqrt((390 - ball.x) ** 2 + (148 - ball.y) ** 2);
  if (rimdistance1 <= 20) {
    ball.vx = -ball.vx;
  }
  let rimdistance4 = Math.sqrt((394 - ball.x) ** 2 + (148 - ball.y) ** 2);
  if (rimdistance4 <= 10) {
    ball.vx = 0.3 * (ball.x - 375);
    ball.vy = 0.3 * (ball.y - 175);
  }
  //circle(364, 185, 10);
  //circle(371, 185, 10);
  //circle(390, 148, 20);
  //circle(350, 178, 7);
  //circle(386, 166, 23);
  //circle(382, 182, 10);
  //circle(390, 148, 20);
  //circle(394, 148, 10);
  if (level == 1) {
  }
}
function mousePressed() {
  if (shot == false) {
    ball.vx = (mouseX - ball.x) / 15;
    ball.vy = (mouseY - ball.y) / 15;
    shot = true;
  } else {
    ball.update();  
    acceleration = 0;
    shot = false;
    ball.x = 0;
    ball.y = 160;
    ball.vx = 0;
    ball.vy = 0;
    basket = false;
    ball.history = [];

  }
}
function level1(){
  stroke("white");
  circle(300, 300, 40);
    let bounce1 = Math.sqrt((200 - ball.x) ** 2 + (200 - ball.y) ** 2);
  if (bounce1 <= 40) {
    ball.vx = 0.3 * (ball.x - 375);
    ball.vy = 0.3 * (ball.y - 175);
  }
}
//Add ellipses in background to add fan movement
//Add lines to net so ball appears to go in
//Fix rim bounce
//Add fading line behind ball
//Get level to link to next once finished
