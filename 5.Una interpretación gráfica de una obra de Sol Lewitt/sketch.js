//Sol lewitt Wall Drawing #630
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  let y = 200;
  let spacing = 45;
  let len = 200;
  let len2 = 400
  let q = 1

  for (let x = 10; x < 400; x += spacing) {//lineas verticales
    strokeWeight(22.22)
    line(x, y, x, y + len);
    for (let r = 5; r <= 210; r += spacing) {//lineas horizontales
      strokeWeight(22.22);
      line(q, r, q + len2, r)
    }
  }
}