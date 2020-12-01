
var movingRect,fixedRect;
var gameO1,gameO2;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(100, 200, 80, 50);
  fixedRect.velocityX=6;

  movingRect= createSprite(600, 200, 50, 80);
  movingRect.velocityX=-6;
}

function draw() {
  background(255,255,255);  

bounceOff(movingRect,fixedRect);





  



  drawSprites();
}



