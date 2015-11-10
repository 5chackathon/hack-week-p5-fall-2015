var x; // declare x

var clicked;

function setup() {
 //coding!
 createCanvas(windowWidth, windowHeight);
 background(0, 0, 255); // r, g, b
 x = 0; // initiate to zero
 clicked = false;
}

function draw() {
  background(0, 0, 255); 
  noStroke();

  // create the ground
  rectMode(CENTER);
  fill(125, 0, 88, 20);
  rect(width/2, height - 10, width, 50);

  // add arms
  fill(0, 9, 125);
  rectMode(CENTER);
  rect(width/2, height/2 + 100, 300, 10);


  // add single ball
  ellipseMode(CENTER);
  fill(255);


  // add 3 circles to be the body
  fill(0);
  ellipse(width/2, height/2, 100, 100);
  fill(255);
  ellipse(width/2, height/2 + 100, 150, 150);
  fill(0);
  ellipse(width/2, height/2 + 250, 250, 250);

  // create snowball!
  fill(255);
  ellipse(mouseX, mouseY, 20, 20);
  // update x plus one
  x = x + 5;

  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), 15, 15);

  if (clicked) {
    textAlign(CENTER);
    textSize(32);
    text("hello world!", width/2, 100);
  }

}

function mouseClicked() {
  // if (clicked) {
  //   clicked = false;
  // } else {
  //   clicked = true;
  // }

  clicked = !clicked;
}
