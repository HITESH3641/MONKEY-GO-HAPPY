
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

var ground,survivaltime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceleImage = loadImage("obstacle.png");
 bImage = loadImage("sprite_0.png");

  
  FoodGroup=createGroup();
obstacleGroup=createGroup();

}



function setup() {
  createCanvas(400,300);
   monkey = createSprite(50,280,200,200); 
  monkey.addAnimation("hk", monkey_running);
 monkey.addAnimation("a", bImage);
  monkey.scale=0.1

 ground=createSprite(300,280,1200,10);
 
ground.velocityX=-2


}


function draw() {
background("white");

if(ground.x<0){
  ground.x=ground.width/2
   }
monkey.collide(ground)
  if (keyDown("space")&&monkey.y>242){
  monkey.velocityY = -13;
   
  }
 
  monkey.velocityY = monkey.velocityY + 0.8

  
  
  if(monkey.isTouching(obstacleGroup)){
  obstacleGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  
  obstacleGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
  monkey.changeAnimation("a", bImage);
  survivaltime=0
  }
 
  
  survivaltime=Math.ceil(frameCount/frameRate());
  text("survivaltime:"+survivaltime,100,50);
  
  
  banana();
 obstacles();
  drawSprites();
}

function banana(){

if(frameCount%80===0){
  var banana = createSprite(600,120,200,200); 
   banana.addImage("k",bananaImage );
   banana.scale=0.1
   banana.velocityX=-4
    banana.y=Math.round(random(120,200))
   banana.lifetime=200;
   FoodGroup.add(banana);
  
   
   
   
   
   
} }
function  obstacles(){
if(frameCount%300===0){
  var obstacle  = createSprite(600,260,200,200); 
   obstacle.addImage("a",obstaceleImage );
   obstacle.scale=0.1
   obstacle.velocityX=-7
    
   obstacle.lifetime=100;
   obstacleGroup.add(obstacle);
}
}






