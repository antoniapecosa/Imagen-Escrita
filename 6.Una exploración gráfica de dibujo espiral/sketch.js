 let a = 0;
 let r = 5;

 function setup() {
   createCanvas(400, 400);
   background(255);
   
   frameRate(30); //velocidad
   sliderA = createSlider(0.1, 50, 0.1, 5); //slider para a
 }


 function draw() {
   noStroke();
   // formula espiral:
   let x = r * cos(a);
   let y = r * sin(a);

   a += sliderA.value(); // cambio de la distancia entre puntos
   r += 0.5 //cambio de la amplitud del espiral

   translate(width / 2, height / 2); //trasladar la figura al centro
   fill(r % 255); //relleno en escala de grises
   ellipse(x, y, 10, 10);

   //if(x>width){ //mmm no funcionó?
   //r -= 0.5;
   // }

 }