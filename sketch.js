var movingRect,fixedRect;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,0,60,100)
  movingRect=createSprite(200,400,100,60)

  fixedRect.velocityY=5;
  movingRect.velocityY=-5;

  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
}

function draw() {
  background(255,255,255);
  

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    ){
      fixedRect.velocityX=fixedRect.velocityX*(-1);
      movingRect.velocityX=movingRect.velocityX*(-1);
  } if( movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2) {
      fixedRect.velocityY=fixedRect.velocityY*(-1);
      movingRect.velocityY=movingRect.velocityY*(-1);
  }
  drawSprites();
}