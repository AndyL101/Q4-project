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
level = 1;
function draw() {
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
  let makedistance = Math.sqrt((364 - ball.x) ** 2 + (190 - ball.y) ** 2);
  if (makedistance <= 8) {
    if (basket == false) {
      level = level + 1;
    }
    basket = true;
  } else {
  }
  let makedistance2 = Math.sqrt((371 - ball.x) ** 2 + (190 - ball.y) ** 2);
  if (makedistance2 <= 9) {
    if (basket == false) {
      level = level + 1;
    }
    basket = true;
  } else {
  }
  let makedistance3 = Math.sqrt((364 - ball.x) ** 2 + (197 - ball.y) ** 2);
  if (makedistance3 <= 9) {
    if (basket == false) {
      level = level + 1;
    }
    basket = true;
  } else {
  }
  if (basket == true) {
  }
  if (basket) {
  }
  if (shot && basket) {
    text("MADE", 200, 170);
  }
  let rimdistance1 = Math.sqrt((355 - ball.x) ** 2 + (178 - ball.y) ** 2);
  if (rimdistance1 <= 6) {
    ball.vx = 0.3 * (ball.x - 375);
    ball.vy = 0.3 * (ball.y - 175);
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
  let rimdistance3 = Math.sqrt((378 - ball.x) ** 2 + (183 - ball.y) ** 2);
  if (rimdistance3 <= 10) {
    ball.vx = 0.3 * (ball.x - 375);
    ball.vy = 0.3 * (ball.y - 175);
  }
  let BBdistance2 = Math.sqrt((392 - ball.x) ** 2 + (144 - ball.y) ** 2);
  if (BBdistance2 <= 19) {
    ball.vx = 0.3 * (ball.x - 375);
    ball.vy = 0.3 * (ball.y - 175);
  }

  //let rimdistance4 = Math.sqrt((394 - ball.x) ** 2 + (148 - ball.y) ** 2);
  //if (rimdistance4 <= 10) {
  //ball.vx = 0.3 * (ball.x - 375);
  //ball.vy = 0.3 * (ball.y - 175);
  //}
  let netbounce1 = Math.sqrt((354 - ball.x) ** 2 + (190 - ball.y) ** 2);
  if (netbounce1 <= 10) {
    ball.vx = -ball.vx;
  }
  let netbounce2 = Math.sqrt((376 - ball.x) ** 2 + (190 - ball.y) ** 2);
  if (netbounce2 <= 10) {
    ball.vx = -ball.vx;
  }
  let netbounce3 = Math.sqrt((354 - ball.x) ** 2 + (199 - ball.y) ** 2);
  if (netbounce3 <= 10) {
    ball.vx = -ball.vx;
  }
  let netbounce4 = Math.sqrt((376 - ball.x) ** 2 + (199 - ball.y) ** 2);
  if (netbounce4 <= 10) {
    ball.vx = -ball.vx;
  }
  let netbounce5 = Math.sqrt((376 - ball.x) ** 2 + (193 - ball.y) ** 2);
  if (netbounce5 <= 10) {
    ball.vx = -ball.vx;
  }
  let netbounce6 = Math.sqrt((355 - ball.x) ** 2 + (193 - ball.y) ** 2);
  if (netbounce6 <= 10) {
    ball.vx = -ball.vx;
  }
  let netbounce7 = Math.sqrt((376 - ball.x) ** 2 + (204 - ball.y) ** 2);
  if (netbounce7 <= 10) {
    ball.vx = -ball.vx;
  }
  let netbounce8 = Math.sqrt((355 - ball.x) ** 2 + (204 - ball.y) ** 2);
  if (netbounce8 <= 10) {
    ball.vx = -ball.vx;
  }
  let netbounce9 = Math.sqrt((375 - ball.x) ** 2 + (211 - ball.y) ** 2);
  if (netbounce9 <= 10) {
    ball.vx = -ball.vx;
  }
  let netbounce10 = Math.sqrt((355 - ball.x) ** 2 + (211 - ball.y) ** 2);
  if (netbounce10 <= 10) {
    ball.vx = -ball.vx;
  }
    let netbounce11 = Math.sqrt((354 - ball.x) ** 2 + (183 - ball.y) ** 2);
  if (netbounce11 <= 10) {
    ball.vx = -ball.vx;
  }
  circle(364, 190, 10);
  circle(364, 197, 10);
  //circle(350, 178, 5);
  circle(386, 166, 23);
  circle(386, 162, 23);
  //circle(382, 182, 10);
  circle(390, 148, 20);
  circle(394, 148, 10);
  circle(354, 190, 10);
  circle(376, 190, 10);
  circle(354, 199, 10);
  circle(376, 199, 10);
  circle(376, 193, 10);
  circle(355, 193, 10);
  circle(376, 204, 10);
  circle(355, 204, 10);
  circle(375, 211, 10);
  circle(355, 211, 10);
  circle(354, 183, 10);
  //stroke("red");
  //circle(378, 183, 7);
  if (level == 1) {
    level1();
  } else if (level == 2) {
    level2();
  } else if (level == 3) {
    level3();
  } else if (level == 4) {
    level4();
  }
}
function mousePressed() {
  if (shot == false) {
    ball.vx = (mouseX - ball.x) / 15;
    ball.vy = (mouseY - ball.y) / 15;
    shot = true;
  } else {
    ball.update();
    if (level == 1) {
      level1();
    } else if (level == 2) {
      level2();
    } else if (level == 3) {
      level3();
    } else if (level == 4) {
      level4();
    }

    acceleration = 0;
    shot = false;
    ball.x = 0;
    ball.y = 100 + 200 * Math.random();
    ball.vx = 0;
    ball.vy = 0;
    basket = false;
    ball.history = [];
  }
}
function level1() {}
function level2() {
  stroke("white");
  circle(200, 135, 30);

  let bounce1 = Math.sqrt((200 - ball.x) ** 2 + (135 - ball.y) ** 2);
  if (bounce1 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
let level3obstacley = 0;
let speed = 10;
function level3() { 
   level3obstacley += speed;
  circle (200, level3obstacley, 30);
    if (level3obstacley > 390 || level3obstacley < 10) {
      
    	speed = -1 * speed;
  }
 let level3obstaclebounce1 =  Math.sqrt((200 - ball.x) ** 2 + (level3obstacley - ball.y) ** 2);
  if (level3obstaclebounce1 <= 20) {
     ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
}
}
function level4() {
  circle(100, 140, 30);
  let bounce2 = Math.sqrt((100 - ball.x) ** 2 + (140 - ball.y) ** 2);
  if (bounce2 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
//Add ellipses in background to add fan movement
//Get level to link to next once finished
