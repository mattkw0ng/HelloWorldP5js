
// Setup code goes here
function setup() {
  createCanvas(1400, 800);
  // background(2);
 }


 var size = 10;
 var clr = 0;
// Draw code goes here
function draw() {
  fill(0);
  text("Hello World", width/2, height/2);
  if (mouseIsPressed) {
    fill(clr);
    ellipse(mouseX, mouseY, size, size);
  } 
}

function keyPressed() {
  console.log("keypressed");
  if (keyCode === LEFT_ARROW) {
    clr = clr - 1;
  } else if (keyCode === RIGHT_ARROW) {
    clr = clr + 1;
  } else if (keyCode === UP_ARROW) {
    size = size + 1;
  } else if (keyCode === DOWN_ARROW) {
    size = size - 1;
  }
}



