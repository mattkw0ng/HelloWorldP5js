
// Setup code goes here
function setup() {
  createCanvas(1400, 800);
  textSize(24);
 }


 var size = 10;
 var clr = 0;
// Draw code goes here
function draw() {
  text("Hello World", width/2, height/2);
  if (mouseIsPressed) {
    fill(clr);
    ellipse(mouseX, mouseY, size, size);
  } 
}

function keyPressed() {
  if (keyCode === ENTER) {
    redraw();
  } else if (keyCode === UP_ARROW) {
    size = size + 1;
  } else if (keyCode === DOWN_ARROW) {
    size = size - 1;
  }
  console.log("color: " + clr + "\nsize: " + size);
}



