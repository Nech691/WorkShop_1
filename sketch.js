// Declaring Variables
  let x = 0;
  let y = 70;
  let Move = 10;
  let a = 100;
  let b = 200;
  let c = 300;

// Set up canvas, background and drawing function loop 
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(55, 66, 92);

// Conditioning Position 
	if (x > 360) { 
	  Move = -10;}
			
	if (x < 0) {
	  Move = 10;}
			
// Making & Colouring Circles
  // Circle 1 
	circle(x, y, 60)
    // Conditional Colour 1
      if(x > a) {fill(255, 168, 110);} 
        else {fill(255, 110, 110)}
      if(x > b) {fill(255, 243, 110);}
      if(x > c) {fill(190, 255, 110);}
  // Circle 2
    circle(x, y + 40, 70)
    // Conditional Colour 2
      if(x > a) {fill(255, 243, 110);} 
        else {fill(255, 168, 110);}
      if(x > b) {fill(190, 255, 110);}
      if(x > c) {fill(162, 255, 251);}
  // Circle 3 
    circle(x, y + 80, 80)
    // Conditional Colour 3       
      if(x > a) {fill(190, 255, 110);} 
        else {fill(255, 243, 110);}
      if(x > b) {fill(162, 255, 251);}
      if(x > c) {fill(145, 162, 255);}
  // Circle 4
    circle(x, y +120, 70)
    // Conditional Colour 4
      if(x > a) {fill(162, 255, 251);} 
        else {fill(190, 255, 110);}
      if(x > b) {fill(145, 162, 255);}
      if(x > c) {fill(180, 145, 255);}
  // Circle 5
    circle(x, y + 160, 60)
    // Conditional Colour 5
      if(x > a) {fill(145, 162, 255);} 
        else {fill(162, 255, 251);}
      if(x > b) {fill(180, 145, 255);}
      if(x > c) {fill(255, 110, 110);}
  // Circle 6
    circle(x, y + 200, 70)
    // Conditional Colour 6
      if(x > a) {fill(180, 145, 255);} 
        else {fill(145, 162, 255);}
      if(x > b) {fill(255, 110, 110);}
      if(x > c) {fill(255, 168, 110);}
  // Circle 7 
    circle(x, y + 240, 80)
    // Conditional Colour 7
      if(x > a) {fill(255, 110, 110);} 
        else {fill(180, 145, 255);}
      if(x > b) {fill(255, 168, 110);}
      if(x > c) {fill(255, 243, 110);}

// Loop Movement
	x = x + Move


// Other Functions 
  
function confetti (xPos, yPos, size, color) {
		fill(color);
		rect(xPos, yPos, size);
  }
			  
  for (xPos = 0; xPos < 10; xPos++) {
    confetti (random(0, width), random(0, height), random(0, 5), color(255, 110, 110));
  }   

  for (xPos = 0; xPos < 10; xPos++) {
    confetti (random(0, width), random(0, height), random(0, 5), color(255, 243, 110));
  } 

  for (xPos = 0; xPos < 10; xPos++) {
    confetti (random(0, width), random(0, height), random(0, 5), color(162, 255, 251));
  }

  for (xPos = 0; xPos < 10; xPos++) {
    confetti (random(0, width), random(0, height), random(0, 5), color(180, 145, 255));
  }

}


