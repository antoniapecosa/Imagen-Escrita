function setup() {
  createCanvas(450, 450);
  fill(163, 163, 255, 95);
  noStroke();
}

function draw() {
  background(245);
  let niveles = round(map(mouseY, 0, width, 0, 8));
  recursiveCircle(width / 2, height / 2, 450, niveles);
}

function recursiveCircle(x, y, diam, levels) {
  ellipse(x, y, diam);
  if (levels > 2) {
    recursiveCircle(x, y - diam / 4, diam / 2.5, levels - 2);
    recursiveCircle(x, y + diam / 4, diam / 2.5, levels - 2);
    recursiveCircle(x - diam / 4, y, diam / 2, levels - 2);
    recursiveCircle(x + diam / 4, y, diam / 2, levels - 2);

  }
}