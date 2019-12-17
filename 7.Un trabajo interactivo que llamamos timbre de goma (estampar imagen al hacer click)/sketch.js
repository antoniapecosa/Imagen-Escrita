
function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(5)
  noFill()
  
}

function draw() {
  
 
}

function mousePressed(){
stamp(mouseX,mouseY);
}

function stamp(x,y) {
  if(mouseX % 2 == 0 && mouseY % 2==0){
  stroke(224,60,49,150)
  rect(x,y,40,40) 
  }else if(mouseX % 2 == 0) {
    stroke(0, 150, 94,150)   
    ellipse(x,y,40,40)
  }else if( mouseY % 2==0){
      stroke(58, 93, 174,150)
   arc(x,y, 40, 40, 0, PI + QUARTER_PI);
  }else{
      stroke(234, 115, 61,150)
    triangle(x, y, x+25, y-50,x+50, y)
}}