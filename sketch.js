var bg,bgImg
var gameState="START"
var zombierandomcount
var zombie
var zombieGroup
var score=0;

function preload()
{
bgImg = loadImage("bg.jpg")
logoImg = loadImage("logoImg.png")
buttonImg = loadImage("buttonImg.png")
bg1Img = loadImage("bg1.jpeg")
plyr1Img = loadImage("plyr1.png")
zombieImg = loadAnimation("zombie.gif")
bullet1Img = loadImage("bullet1.png")
zombie1Img = loadAnimation("zombie1.gif")
zombie2Img = loadAnimation("zombie2.gif")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
 logoimg = createSprite(954,431,40,40)
 logoimg.addImage(logoImg)
 logoimg.scale=1.5
PlaybuttonImg = createSprite(961,775,40,40)
PlaybuttonImg.addImage(buttonImg)
PlaybuttonImg.scale=0.1
logoimg.visible=false;  
PlaybuttonImg.visible=false;
plyr1 = createSprite(246,511,40,40)
plyr1.addImage(plyr1Img)
plyr1.scale=0.7
bullet1 = createSprite(332,457,40,40)
bullet1.addImage(bullet1Img)
bullet1.scale=0.2
bullet1.visible=false;
zombieGroup=new Group()

}

function draw() {
 if(gameState === "START"){
  background(bgImg)
  logoimg.visible=true;
  PlaybuttonImg.visible=true;
 plyr1.visible=false;
 bullet1.visible=false;
  if(mousePressedOver(PlaybuttonImg)){
gameState = "level1"
  }
 }
 else if(gameState === "level1"){
   background(bg1Img)
   logoimg.visible=false; 
   PlaybuttonImg.visible=false;
   plyr1.visible=true;
   
   Zombie()
   

   if (keyDown("left")) {
    plyr1.x = plyr1.x-5;
      }

      if (keyDown("right")){
        plyr1.x = plyr1.x+5
      }

      if (keyWentDown("space")){
        bullet1.visible=true;
          bullet1.x= plyr1.x;
          bullet1.x= plyr1.x+40;
         bullet1.velocityX=+9;
      }
for(var i=0;i<zombieGroup.length;i++){


      if(bullet1.isTouching(zombieGroup.get(i))){
            zombieGroup.get(i).destroy()
      }
    }
 }
 textSize(40)
 text(mouseX+":"+mouseY, 200,200)
  drawSprites();
}
function Zombie(){
  if(World.frameCount%150 === 0){
    zombie = createSprite(1511,513,40,40)
zombierandomcount=Math.round(random(1,3))
switch(zombierandomcount){
  case 1 :  zombie.addAnimation("zombieAnimation",zombieImg) 
  break;
  case 2 : zombie.addAnimation("zombie1Animation",zombie1Img)
  break;
  case 3 :  zombie.addAnimation("zombie2Animation",zombie2Img)
  break;
  default:break;
}
   
    zombie.scale=0.8
    zombie.velocityX=-1.5
    zombieGroup.add(zombie)
  }
}