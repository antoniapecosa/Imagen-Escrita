function setup() {
  createCanvas(400, 400, WEBGL);
  sliderZ = createSlider(0, 10, 1, 1);
  sliderX = createSlider(1, 110, 1, 1);

}

function draw() {
  background(4, 21, 48);
  strokeWeight(3);
  stroke(209, 137, 21);
  let nz = sliderZ.value();
  let xi = sliderX.value();



  for (var x = 0; x <= width; x += 100) {
    for (var y = 0; y <= height; y += 50) {
      for (var z = 0; z <= nz; z++) {
        fill(4, 21, 48, 20);
        rotateZ(z)
        rotateX(xi)
        plane(x, y);
      }
    }
  }
}