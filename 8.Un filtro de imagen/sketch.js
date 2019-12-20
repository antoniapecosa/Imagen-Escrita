let imagen;


function preload() {
  imagen = loadImage ("buscemi1.jpg");
  }

function setup() {
  createCanvas(250, 180);
  rectMode (CENTER);
  noLoop ();

}

let sp = 4

function draw() {
  background(220);
  noStroke();
  
  for (let y = 0; y < height; y += sp) {
    for (let x =0; x < width; x += sp) {
      let col = imagen.get(x,y);
     Trazo (x,y, col);
    }
  }
}


function Trazo (x,y, col) {
  let l = brightness (col);
  let n = round(map(l, 0, 255, 77, 90)); 
  let r = red(col);
  let g = green(col);
  let b = blue(col);
  for(let i = 0; i < n; i++){
    let nx = random(-sp, sp);
      let ny = random(-sp, sp);
  let c = color( r, g,  b);  
  fill(c);
    
  ellipse (x + nx, y + ny, 0.5, 0.1);
    
  }
}