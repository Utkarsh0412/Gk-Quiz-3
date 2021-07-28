var bg,form,system,code,security;
var score=0
function preload(){
bg=loadImage("images/congratulations.jpg")
}

function setup() {

  createCanvas(3000,500);
  security = new Security();
  system = new System();
}

function draw() {
  background("red");
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
   
  if(score === 7) {
    clear()
    background(bg)
    
  }

}
