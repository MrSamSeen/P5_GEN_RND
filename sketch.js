let startD = false;
let drawX;
let drawY;
let drawR, drawG, drawB, drawT, drawS, drawST;
let type = 0;
let ifStroke;
let ifRotate;

function setup() {
  startD = false;
  ifStroke = random(0, 10)
  ifRotate = random(0, 10)
  type = round(random(0, 2));
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth / 2, windowHeight / 2);

  background(30);
  frameRate(60);
  drawX = windowWidth / 2;
  drawY = windowHeight / 2;
  drawR = drawG = drawB = drawT = drawST = 100;
  drawS = getS();
  setTimeout(() => {
    startD = true;
  }, 1500);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(30);
}
function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
  setup();
}

function draw() {

  if (startD) {

    drawR = insideCol(drawR + getCol());
    drawG = insideCol(drawG + getCol());
    drawB = insideCol(drawB + getCol());
    drawST = insideCol(drawST + getCol());
    drawT = getT();
    drawS = getS();

    if (ifStroke > 5) {
      stroke(drawST);
    } else {
      noStroke();

    }
    fill(drawR, drawG, drawB, drawT);

    if (ifRotate > 5) {
      rotate(getR());
    }

    drawX = drawX + getX();
    drawY = drawY + getY();
    drawX = insideX(drawX);
    drawY = insideY(drawY);

    if (type == 0) {
      if (random(1, 10) > 5) {
        rect(drawX, drawY, drawS, drawS, round(random(2, drawS / 4)));
      } else {
        ellipse(drawX, drawY, drawS, drawS);
      }
    }

    if (type == 1) {
      rect(drawX, drawY, drawS, drawS, round(random(2, drawS / 4)));
    }
    if (type == 2) {
      ellipse(drawX, drawY, drawS, drawS);
    }
  }
}
function insideCol(col) {
  let r = col;
  if (col > 255) {
    r = 255;
  }
  if (col < 10) {
    r = 10;
  }
  return r;
}

function insideX(cord) {
  let r = cord;
  if (cord > windowWidth) {
    r = windowWidth;
  }
  if (cord < 0) {
    r = 0;
  }
  return r;
}
function insideY(cord) {
  let r = cord;

  if (cord > windowHeight) {
    r = windowHeight;
  }
  if (cord < 0) {
    r = 0;
  }
  return r;
}

function getX() {
  return (round(random(-4, 4)) * drawS) / 2;
}

function getY() {
  return (round(random(-4, 4)) * drawS) / 2;
}
function getS() {
  return round(random(2, 5)) * windowWidth / 100;
}

function getCol() {
  return round(random(-5, 5)) * 2;
}
function getT() {
  return round(random(1, 25)) * 10;
}
function getR() {
  return round(random(-5, 5)) * 5;
}
