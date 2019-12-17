function setup() {
  createCanvas(350, 350);
}

function draw() {
  background(255);
  noStroke();
  
  for(var x = 30; x <= width; x+=70){
     for(var y = 30; y <= height; y+=70){
    fill(random(255), 255, random(255));
    ellipse(x, y, 25, 25);
    }
  }
} 