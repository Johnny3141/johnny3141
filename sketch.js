function setup() {
  leinwand = createCanvas(windowWidth, windowHeight);
  leinwand.position(0,0); //Links oben
  leinwand.style("z-index","-1");
  fill (0,225,0,20);
  noStroke ();
  background(220);

}

function draw() {
  circle (mouseX,mouseY,20);
  color (0,125,0);
}