var fixedRect,movingRect,rec1,rec2,shape1,shape2




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400,200,50,100);
  movingRect=createSprite(600,300,50,100);
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  fixedRect.debug=true;
  movingRect.debug=true;
  rec1=createSprite(0,200,50,100);
  rec2=createSprite(800,200,50,100);
  rec1.shapeColor="white";
  rec2.shapeColor="white";
  rec1.debug=true;
  rec2.debug=true;
  rec2.velocityX=-4;
  rec1.velocityX=4;
  shape1=createSprite(600,320,50,100);
  shape2=createSprite(700,320,50,100);
  shape2.shapeColor="skyblue";
  shape1.shapeColor="skyblue";
  shape1.debug=true;
  shape2.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  
      if ( isTouching(shape2,movingRect)){
       shape2.shapeColor="green";
        movingRect.shapeColor="green";
      }else { 
         shape2.shapeColor="skyblue";
         movingRect.shapeColor="red";}
  drawSprites();
  bounceOff(rec2,rec1);
}
