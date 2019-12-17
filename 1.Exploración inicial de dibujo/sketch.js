function setup() {
  createCanvas(280, 350);
  noStroke();
}

function draw() {
  push()
  if ((mouseX > 90) && (mouseX < 100 + 40) &&
    (mouseY > 200) && (mouseY < 200 + 40)) {
    background(239, 191, 242);
  } else {
    background(245);
  }
  pop()
  fill(0);
  rect(90, 20, 125, 125);
  fill(255, 208, 66);
  rect(20, 155, 40, 70);
  fill(140, 73, 1);
  rect(45, 225, 30, 25);
  fill(140, 73, 1);
  ellipse(100, 200, 40, 40);
  fill(245);
  ellipse(mouseX, mouseY, 28, 28);
  fill(9, 34, 125);
  quad(215, 200, 120, 245, 175, 305, 230, 280);
  fill(0);
  quad(253, 270, 198, 295, 205, 310, 265, 282);


}