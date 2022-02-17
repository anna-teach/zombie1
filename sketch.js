var backgroundImg;
var doll,dollImg;
var bullets=70
var bullet;
//var keyIsDown=true;

function preload(){
  backgroundImg=loadImage("spooky.jpg");
   zombieImg=loadImage("zombie1.png");
   shooterImg=loadImage("shooter_3.png");
}
function setup() {
  createCanvas(1000, 1000);
  
 // zombie=createSprite(450,600,5,5);
  //zombie.addImage("zombie",zombieImg)
  //zombie.scale=0.2
  //zombie.velocityX=-2;
  zombieGroup=new Group();
  bulletGroup=new Group();
  
  
  shooter=createSprite(200,700,5,5);
  shooter.addImage("shooter",shooterImg)
  shooter.scale=0.5
  shooter.setCollider("rectangle",0,0,300,300)
  shooter.debug=true;
}
  

function draw() {
  background(backgroundImg);
  
  if (keyIsDown(UP_ARROW))
  {
    
    shooter.y-=5;
    
    
  }
  if (keyIsDown(DOWN_ARROW))
  {
    
    shooter.y+=5;
    
    
  }
  
  
 

  
 if(keyWentDown("space")){
  bullet = createSprite(200,630,20,10)
  bullet.velocityX = 20
  
  bulletGroup.add(bullet)
 // shooter.depth = bullet.depth
 // shooter.depth = shooter.depth+2
 
//  shooter.depth = shooter.depth+2
  //player.addImage(shooter_shooting)
  bullets = bullets-1
}

//if(zombie.isTouching(bulletGroup)){
  //zombie.destroy();
//}


  spawnZombies();
  
  
  if(zombieGroup.isTouching(bulletGroup)){
    zombieGroup.depth=bulletGroup.depth;
    for(var i=0;i<zombieGroup.length;i++){     
      
   if(zombieGroup[i].isTouching(bulletGroup)){
        zombieGroup[i].destroy();
        bulletGroup.destroyEach();
       
        } 
  
  }
  }
  

//destroy zombie when player touches it
if(zombieGroup.isTouching(shooter)){

 for(var i=0;i<zombieGroup.length;i++){     
      
  if(zombieGroup[i].isTouching(shooter)){
       zombieGroup[i].destroy()
       }
 }
}
  drawSprites();
}

function spawnZombies() {
 
  if (frameCount % 100 === 0) {
     zombie = createSprite(600,250,40,10);
    zombie.y = Math.round(random(600,700));
    zombie.addImage(zombieImg);
    zombie.scale = 0.2;
    zombie.velocityX = -3;
  }
}
