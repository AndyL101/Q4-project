let shot = false;
let basket = false;
let Crowd;
let Ball_image;
let stopwatch = 0;
let timerisrunning = true;
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
  textAlign(TOP, TOP);
  textSize(20);

  if (frameCount % 60 == 0 && stopwatch >= 0 && timerisrunning) {
    stopwatch++;
    console.log(frameCount, stopwatch);
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
  let makedistance = Math.sqrt((364 - ball.x) ** 2 + (190 - ball.y) ** 2);
  if (makedistance <= 9.3) {
    if (basket == false) {
      level = level + 1;
    }
    basket = true;
  } else {
  }
  //circle(364, 190, 8);
  let makedistance2 = Math.sqrt((371 - ball.x) ** 2 + (191 - ball.y) ** 2);
  if (makedistance2 <= 9) {
    if (basket == false) {
      level = level + 1;
    }
    basket = true;
  } else {
  }
  //circle(371, 191, 9);
  let makedistance3 = Math.sqrt((361 - ball.x) ** 2 + (190 - ball.y) ** 2);
  if (makedistance3 <= 5) {
    if (basket == false) {
      level = level + 1;
    }
    basket = true;
  } else {
  }
  //circle(361,190, 7);
  //let makedistance4 = Math.sqrt((200 - ball.x) ** 2 + (200 - ball.y) ** 2);
  //if (makedistance4 <= 50) {
  //if (basket == false) {
  //level = level + 1;
  // }
  //circle(200,200, 50);
  //basket = true;
  //} else {
  //}
  if (basket == true) {
  }
  if (basket) {
  }
  if (shot && basket) {
    text("MADE", 200, 170);
  }
  let rimdistance1 = Math.sqrt((352 - ball.x) ** 2 + (178 - ball.y) ** 2);
  if (rimdistance1 <= 8) {
    ball.vx = -ball.vx;
  }

  let BBdistance1 = Math.sqrt((386 - ball.x) ** 2 + (166 - ball.y) ** 2);
  if (BBdistance1 <= 20) {
    ball.vx = -0.7 * ball.vx;
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
    //ball.vx = -0.7*ball.vx;
    ball.vy = -0.7 * ball.vy;
    //ball.vx = 0.3 * (ball.x - 375);
    //ball.vy = 0.3 * (ball.y - 175);
  }
  //circle(392,144, 20);
  //let rimdistance4 = Math.sqrt((394 - ball.x) ** 2 + (148 - ball.y) ** 2);
  //if (rimdistance4 <= 10) {
  //ball.vx = 0.3 * (ball.x - 375);
  //ball.vy = 0.3 * (ball.y - 175);
  //}
  let netbounce1 = Math.sqrt((354 - ball.x) ** 2 + (190 - ball.y) ** 2);
  if (netbounce1 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce2 = Math.sqrt((376 - ball.x) ** 2 + (190 - ball.y) ** 2);
  if (netbounce2 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce3 = Math.sqrt((354 - ball.x) ** 2 + (199 - ball.y) ** 2);
  if (netbounce3 <= 15) {
    ball.vx = -ball.vx;
  }
  let netbounce4 = Math.sqrt((376 - ball.x) ** 2 + (199 - ball.y) ** 2);
  if (netbounce4 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce5 = Math.sqrt((376 - ball.x) ** 2 + (193 - ball.y) ** 2);
  if (netbounce5 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce6 = Math.sqrt((355 - ball.x) ** 2 + (193 - ball.y) ** 2);
  if (netbounce6 <= 15) {
    ball.vx = -ball.vx;
  }
  let netbounce7 = Math.sqrt((376 - ball.x) ** 2 + (204 - ball.y) ** 2);
  if (netbounce7 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce8 = Math.sqrt((355 - ball.x) ** 2 + (204 - ball.y) ** 2);
  if (netbounce8 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce9 = Math.sqrt((375 - ball.x) ** 2 + (211 - ball.y) ** 2);
  if (netbounce9 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce10 = Math.sqrt((355 - ball.x) ** 2 + (211 - ball.y) ** 2);
  if (netbounce10 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce11 = Math.sqrt((354 - ball.x) ** 2 + (183 - ball.y) ** 2);
  if (netbounce11 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce12 = Math.sqrt((354 - ball.x) ** 2 + (192 - ball.y) ** 2);
  if (netbounce12 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce13 = Math.sqrt((343 - ball.x) ** 2 + (193 - ball.y) ** 2);
  if (netbounce13 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce14 = Math.sqrt((343 - ball.x) ** 2 + (190 - ball.y) ** 2);
  if (netbounce14 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce15 = Math.sqrt((343 - ball.x) ** 2 + (187 - ball.y) ** 2);
  if (netbounce15 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce16 = Math.sqrt((344 - ball.x) ** 2 + (183 - ball.y) ** 2);
  if (netbounce16 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce17 = Math.sqrt((343 - ball.x) ** 2 + (179 - ball.y) ** 2);
  if (netbounce17 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce18 = Math.sqrt((343 - ball.x) ** 2 + (175 - ball.y) ** 2);
  if (netbounce18 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce19 = Math.sqrt((343 - ball.x) ** 2 + (199 - ball.y) ** 2);
  if (netbounce19 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce20 = Math.sqrt((343 - ball.x) ** 2 + (204 - ball.y) ** 2);
  if (netbounce20 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce21 = Math.sqrt((343 - ball.x) ** 2 + (209 - ball.y) ** 2);
  if (netbounce21 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce22 = Math.sqrt((343 - ball.x) ** 2 + (213 - ball.y) ** 2);
  if (netbounce22 <= 13) {
    ball.vx = -ball.vx;
  }
  let netbounce23 = Math.sqrt((345 - ball.x) ** 2 + (184 - ball.y) ** 2);
  if (netbounce23 <= 15) {
    ball.vx = -ball.vx;
  }
  let netbounce24 = Math.sqrt((353 - ball.x) ** 2 + (182 - ball.y) ** 2);
  if (netbounce24 <= 15) {
    ball.vx = -ball.vx;
  }
  //circle(345, 184, 15);
  //circle(364, 190, 10);
  //circle(367, 195, 10);
  //circle(350, 178, 5);
  //circle(386, 166, 23);
  //circle(386, 162, 23);
  //circle(382, 182, 10);
  //circle(390, 148, 20);
  //circle(394, 148, 10);
  //circle(354, 190, 10);
  //circle(376, 190, 10);
  //circle(354, 199, 10);
  //circle(376, 199, 10);
  //circle(376, 193, 10);
  //circle(355, 193, 10);
  //circle(376, 204, 10);
  //circle(355, 204, 10);
  //circle(375, 211, 10);
  //circle(355, 211, 10);
  //circle(354, 183, 10);
  //stroke("red");
  //circle(378, 183, 7);
  //circle(343, 193, 13);
  //circle(343, 193, 13);
  //circle(343, 187, 13);
  //circle(343, 183, 13);
  //circle(343, 179, 13);
  //circle(343, 175, 13);
  //circle(343, 199, 13);
  //circle(343, 204, 13);
  //circle(343, 209, 13);
  //circle(343, 213, 13);
  if (level == 1) {
    level1();
  } else if (level == 2) {
    level2();
  } else if (level == 3) {
    level3();
  } else if (level == 4) {
    level4();
  } else if (level == 5) {
    level5();
  } else if (level == 6) {
    level6();
  } else if (level == 7) {
    level7();
  } else if (level == 8) {
    level8();
  } else if (level == 9) {
    level9();
  } else if (level == 10) {
    level10();
  } else if (level == 11) {
    level11();
  } else if (level == 12) {
    leveldone();
  }

  text("Timer : ", 240, 5);
  text(stopwatch, 320, 5);
} // End of draw()

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
    } else if (level == 5) {
      level5();
    } else if (level == 6) {
      level6();
    } else if (level == 7) {
      level7();
    } else if (level == 8) {
      level8();
    } else if (level == 9) {
      level9();
    } else if (level == 10) {
      level10();
    } else if (level == 11) {
      level11();
    } else if (level == 12) {
      leveldone();
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
function level1() {
  text("Level:" + level, 105, 5);
  console.log(level);
}
function level2() {
  text("Level:" + level, 105, 5);
  console.log(level);
  stroke("white");
  circle(200, 135, 30);

  let bounce1 = Math.sqrt((200 - ball.x) ** 2 + (135 - ball.y) ** 2);
  if (bounce1 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
let level3obstacley = 0;
let level5obstacley = 0;
let level6obstacley = 0;
let level7obstacley = 0;
let level8obstacley = 0;
let level9obstacley = 0;
let level10obstacley1 = 30;
let level10obstacley2 = 350;
let level11obstacley1 = 30;
let level11obstacley2 = 350;
let level11obstacley3 = 190;
let speedlevel3 = 10;
let speedlevel5 = 13;
let speedlevel6 = 16;
let speedlevel7 = 16;
let speedlevel8 = 16;
let speedlevel9 = 16;
let speedlevel10a = 16;
let speedlevel10b = 16;
let speedlevel11a = 18;
let speedlevel11b = 18;
let speedlevel11c = 18;
function level3() {
  text("Level:" + level, 105, 5);
  console.log(level);
  level3obstacley += speedlevel3;
  circle(200, level3obstacley, 30);
  if (level3obstacley > 380 || level3obstacley < 10) {
    speedlevel3 = -1 * speedlevel3;
  }
  let level3obstaclebounce1 = Math.sqrt(
    (200 - ball.x) ** 2 + (level3obstacley - ball.y) ** 2
  );
  if (level3obstaclebounce1 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
function level4() {
  text("Level:" + level, 105, 5);
  console.log(level);
  circle(100, 140, 30);
  let bounce2 = Math.sqrt((100 - ball.x) ** 2 + (140 - ball.y) ** 2);
  if (bounce2 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
function level5() {
  text("Level:" + level, 105, 5);
  console.log(level);
  level5obstacley += speedlevel5;
  circle(100, level5obstacley, 30);
  if (level5obstacley > 380 || level5obstacley < 10) {
    speedlevel5 = -1 * speedlevel5;
  }
  let level5obstaclebounce1 = Math.sqrt(
    (100 - ball.x) ** 2 + (level5obstacley - ball.y) ** 2
  );
  if (level5obstaclebounce1 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
function level6() {
  text("Level:" + level, 105, 5);
  console.log(level);
  level6obstacley += speedlevel6;
  circle(200, level6obstacley, 30);
  if (level6obstacley > 380 || level6obstacley < 10) {
    speedlevel6 = -1 * speedlevel6;
  }
  circle(100, 140, 30);
  let bounce2 = Math.sqrt((100 - ball.x) ** 2 + (140 - ball.y) ** 2);
  if (bounce2 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
  let level6obstaclebounce1 = Math.sqrt(
    (200 - ball.x) ** 2 + (level6obstacley - ball.y) ** 2
  );
  if (level6obstaclebounce1 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
function level7() {
  text("Level:" + level, 105, 5);
  console.log(level);
  level7obstacley += speedlevel7;
  circle(200, level7obstacley, 30);
  if (level7obstacley > 380 || level7obstacley < 10) {
    speedlevel7 = -1 * speedlevel7;
  }
  circle(100, level7obstacley, 30);

  let level7obstaclebounce1 = Math.sqrt(
    (200 - ball.x) ** 2 + (level7obstacley - ball.y) ** 2
  );
  if (level7obstaclebounce1 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
  let level7obstaclebounce2 = Math.sqrt(
    (100 - ball.x) ** 2 + (level7obstacley - ball.y) ** 2
  );
  if (level7obstaclebounce2 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
function level8() {
  text("Level:" + level, 105, 5);
  console.log(level);
  level8obstacley += speedlevel8;
  circle(70, 94, 20);
  circle(120, 214, 20);
  circle(95, 154, 20);
  let level8obstaclebounce1 = Math.sqrt(
    (70 - ball.x) ** 2 + (94 - ball.y) ** 2
  );
  if (level8obstaclebounce1 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
  let level8obstaclebounce2 = Math.sqrt(
    (120 - ball.x) ** 2 + (214 - ball.y) ** 2
  );
  if (level8obstaclebounce2 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
  let level8obstaclebounce3 = Math.sqrt(
    (95 - ball.x) ** 2 + (154 - ball.y) ** 2
  );
  if (level8obstaclebounce3 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
function level9() {
  text("Level:" + level, 105, 5);
  console.log(level);
  level9obstacley += speedlevel9;
  circle(80, level9obstacley, 20);
  circle(130, 210, 20);
  circle(105, 150, 20);
  if (level9obstacley > 380 || level9obstacley < 10) {
    speedlevel9 = -1 * speedlevel9;
  }
  let level9obstaclebounce1 = Math.sqrt(
    (80 - ball.x) ** 2 + (level9obstacley - ball.y) ** 2
  );
  if (level9obstaclebounce1 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
  let level9obstaclebounce2 = Math.sqrt(
    (130 - ball.x) ** 2 + (210 - ball.y) ** 2
  );
  if (level9obstaclebounce2 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
  let level9obstaclebounce3 = Math.sqrt(
    (105 - ball.x) ** 2 + (150 - ball.y) ** 2
  );
  if (level9obstaclebounce3 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
function level10() {
  text("Level:" + level, 105, 5);
  console.log(level);
  level10obstacley1 += speedlevel10a;
  level10obstacley2 += speedlevel10b;
  circle(80, level10obstacley1, 20);
  circle(130, level10obstacley2, 20);
  circle(105, 150, 20);
  if (level10obstacley1 > 380) {
    speedlevel10a = -1 * speedlevel10a;
    level10obstacley1 = 380;
  }
  if (level10obstacley1 < 10) {
    speedlevel10a = -1 * speedlevel10a;
    level10obstacley1 = 10;
  }
  if (level10obstacley2 > 380) {
    speedlevel10b = -1 * speedlevel10b;
    level10obstacley2 = 380;
  }
  if (level10obstacley2 < 10) {
    speedlevel10b = -1 * speedlevel10b;
    level10obstacley2 = 10;
  }
  let level10obstaclebounce1 = Math.sqrt(
    (80 - ball.x) ** 2 + (level10obstacley1 - ball.y) ** 2
  );
  if (level10obstaclebounce1 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
  let level10obstaclebounce2 = Math.sqrt(
    (130 - ball.x) ** 2 + (level10obstacley2 - ball.y) ** 2
  );
  if (level10obstaclebounce2 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
  let level10obstaclebounce3 = Math.sqrt(
    (105 - ball.x) ** 2 + (150 - ball.y) ** 2
  );
  if (level10obstaclebounce3 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
function level11() {
  text("Level:" + level, 105, 5);
  console.log(level);
  level11obstacley1 += speedlevel11a;
  level11obstacley2 += speedlevel11b;
  level11obstacley3 += speedlevel11c;
  circle(80, level11obstacley1, 20);
  circle(130, level11obstacley2, 20);
  circle(105, level11obstacley3, 20);
  if (level11obstacley1 > 380) {
    speedlevel11a = -1 * speedlevel11a;
    level11obstacley1 = 380;
  }
  if (level11obstacley1 < 10) {
    speedlevel11a = -1 * speedlevel11a;
    level11obstacley1 = 10;
  }
  if (level11obstacley2 > 380) {
    speedlevel11b = -1 * speedlevel11b;
    level11obstacley2 = 380;
  }
  if (level11obstacley2 < 10) {
    speedlevel11b = -1 * speedlevel11b;
    level11obstacley2 = 10;
  }
  if (level11obstacley3 > 380) {
    speedlevel11c = -1 * speedlevel11c;
    level11obstacley3 = 380;
  }
  if (level11obstacley3 < 10) {
    speedlevel11c = -1 * speedlevel11c;
    level11obstacley3 = 10;
  }
  let level11obstaclebounce1 = Math.sqrt(
    (80 - ball.x) ** 2 + (level11obstacley1 - ball.y) ** 2
  );
  if (level11obstaclebounce1 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
  let level11obstaclebounce2 = Math.sqrt(
    (80 - ball.x) ** 2 + (level11obstacley2 - ball.y) ** 2
  );
  if (level11obstaclebounce2 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
  let level11obstaclebounce3 = Math.sqrt(
    (130 - ball.x) ** 2 + (level11obstacley3 - ball.y) ** 2
  );
  if (level11obstaclebounce3 <= 20) {
    ball.vx = 0.1 * (ball.x - 375);
    ball.vy = 0.1 * (ball.y - 175);
  }
}
function leveldone() {
  timerisrunning = false;
  textSize(25);
  text(stopwatch + " seconds is your time!", 60, 200);
}
