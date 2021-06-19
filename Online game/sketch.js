var climber, climberImg, climberG ;
var door, doorImg, doorG, tower,towerImg;
var ghost, ghostImg;
var invisiblieG, invisibleBlock;

var gameState="PLAY";

function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
  
  
  
}

function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage("Tower",towerImg);
  tower.velocityY = 2;
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage("GhostRunner", ghostImg);
  ghost.scale=0.3;
  ghost.velocityY=5;
  
  invisibleG=new Group();
  doorG= new Group();
  climberG= new Group();
  
}

function draw(){
  if(tower.y>400){
    tower.y=300;
  }
  if(keyDown("space")){
    ghost.velocityY = -3;
  }
  
  if(gameState=="PLAY"){
  
  if(keyDown("left_arrow")){
    ghost.x = ghost.x-3;
  }
  
  if(keyDown("right_arrow")){
    ghost.x = ghost.x+3;
  }
  
  if(climberG.isTouching(ghost)){
    ghost.velocityY=0;
    
  }
    
    if(invisibleG.isTouching(ghost)||ghost.y>600){
      ghost.destroy();
      gameState= "END";
    }
   
  spawnDoors();
   
  
  
  drawSprites();
 }
  if(gameState=="END"){
    textSize(30)
    fill("red");
    text("Game Over",300,300);
    tower.velocityY=0;
    door.velocityY=0;
    climber.velocityY=0;
  }
}

function spawnDoors(){
  if(frameCount % 240 == 0){
    door = createSprite(200,-50);
    door.addImage("door", doorImg);
    door.velocityY = 2;
    
    door.x=Math.round(random(100,400));
    door.lifetime=800;
    doorG.add(door);
    
    climber = createSprite(200,-10);
    climber.addImage(climberImg);
    climber.velocityY = 2;
    climber.lifetime=800;
    climber.x=door.x;
    climberG.add(climber);
    
    invisibleBlock = createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.x = door.x;
    invisibleBlock.velocityY=1;
    invisibleBlock.lifetime=800;
    invisibleG.add(invisibleBlock);
    
  }
  
  
  
}


