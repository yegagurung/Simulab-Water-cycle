var gamestate = 0;
var frontcover, table, next, one, bluesky1, cloud1, cloud2, cloud3,cloud4, sun, water, mountain, 
arrow1, arrow2, arrow3, arrow4, raindrop1, raindrop2, raindrop3, raindrop4, raindrop5, raindrop6, runoff1;
//var watercycle = createSprite(200,200);
var arrow_1, arrow_2, arrow_3, arrow_4, bluesky_1, cloud_1, front, mountain_1, rain_1, runoff_1, sun_1, 
water_1, watercycle;

function preload(){
    arrow_1=loadImage("arrow_1.png")
    arrow_2=loadImage("arrow_2.png")
    arrow_3=loadImage("arrow_3.png")
    arrow_4=loadImage("arrow_4.png")
    bluesky_1 = loadImage("bluesky_1.png")
    cloud_1 = loadImage("cloud_1.png")
    front = loadImage("frontcover.png")
    mountain_1 = loadImage("mountain_1.png")
    rain_1= loadImage("rain_1.png")
    runoff_1 = loadImage("runoff_1.png")
    sun_1 = loadImage("sun_1.png")
    water_1 = loadImage("water_1.png")
    watercycle = loadImage("watercycle.png")
}
//var clouds = [cloud1, cloud2, cloud3,cloud4]
function setup(){
    frontcover = createSprite(200,205);
frontcover.addImage("watercycle",watercycle);
 frontcover.scale= 0.69;
 frontcover.visible=true;
 
   table=createSprite(200,202);
  table.visible=false;
table.addImage("frontcover",front);
table.scale=1.23;
 
  next= createSprite(192,320,115,38);
 next.shapeColor="orange";
 
 one= createSprite(100,200,115,38);
 one.shapeColor="red";
 one.visible=false;

 bluesky1=createSprite(200,200,20,20);
bluesky1.addImage("bluesky_1",bluesky_1);
bluesky1.visible=false;

 cloud1 = createSprite(177,55,20,10);
cloud1.visible=false;
 cloud2 = createSprite(205, 55,20,10);
cloud2.visible=false;
cloud1.addImage("cloud_1",cloud_1);
cloud2.addImage("cloud_1",cloud_1);
cloud1.scale = 0.3;
cloud2.scale = 0.3;

 cloud3 = createSprite(350,55,20,10);
cloud3.visible=false;
cloud4 = createSprite(380,55,20,10);
cloud4.visible=false;
cloud3.addImage("cloud_1",cloud_1);
cloud4.addImage("cloud_1",cloud_1);
cloud3.scale = 0.3;
cloud4.scale = 0.3;

 sun= createSprite(67,150,20,25);
sun.visible=false;
sun.addImage("sun_1",sun_1);
sun.scale = 0.5;


 water = createSprite(200,360,25,400);
water.visible=false;
water.addImage("water_1",water_1);
water.scale = 0.7;


mountain = createSprite(390,305,40,45);
mountain.visible=false;
mountain.addImage("mountain_1",mountain_1);
mountain.scale = 0.6;

 arrow1 = createSprite(65,250,20,10);
arrow1.visible=false;
arrow1.addImage("arrow_1",arrow_1);
arrow1.scale = 0.06;


 arrow2 = createSprite(90,100,20,10);
arrow2.addImage("arrow_2",arrow_2);
arrow2.scale = 0.13;
arrow2.visible=false;

arrow3 = createSprite(280,50,25,15);
arrow3.addImage("arrow_3",arrow_3);
arrow3.scale = 0.055;
arrow3.visible=false;

 arrow4 = createSprite(220,310,25,15);
arrow4.addImage("arrow_4",arrow_4);
arrow4.scale = 0.12;
arrow4.visible=false;

 raindrop1 = createSprite(335,110,20,10);
raindrop1.addImage("rain_1",rain_1);
raindrop1.scale = 0.05;
raindrop1.visible=false;

raindrop2 = createSprite(380,110,20,10);
raindrop2.addImage("rain_1",rain_1);
raindrop2.scale = 0.05;
raindrop2.visible=false;

raindrop3 = createSprite(335,160,20,10);
raindrop3.addImage("rain_1",rain_1);
raindrop3.scale = 0.05;
raindrop3.visible=false;

raindrop4 = createSprite(380,160,20,10);
raindrop4.addImage("rain_1",rain_1);
raindrop4.scale = 0.05;
raindrop4.visible=false;

 raindrop5 = createSprite(335,210,20,10);
raindrop5.addImage("rain_1",rain_1);
raindrop5.scale = 0.05;
raindrop5.visible=false;

 raindrop6 = createSprite(380,210,20,10);
raindrop6.addImage("rain_1",rain_1);
raindrop6.scale = 0.05;
raindrop6.visible=false;

 runoff1 = createSprite(390,305,40,45);
runoff1.addImage("runoff_1",runoff_1);
runoff1.scale = 0.6;
runoff1.visible=false;
}
 


function draw() {
background("white");
drawSprites(); 
if (gamestate==0){
 
textSize(28);
fill("yellow");
text("Simulab: Water Cycle",60,140);



 textSize(28);
  text("Start",163,330);
  
  if (mousePressedOver(next)){
    gamestate=6;
    next.visible=false;
  }
}
if (gamestate==6){
  frontcover.visible=false;
table.visible=true; 
fill("black");
textSize(29);
text("Table of Contents", 83,120); 
one.visible=true;

 fill("black");
 textSize(22);
  text("Watercycle",46,209);
  
  if (mousePressedOver(one)){
    one.visible=false;
   table.visible=false;
   frontcover.visible=false;
   
    gamestate=1;
  }
}

  
  



if (gamestate==1){
bluesky1.visible=true;
   water.visible=true; 
   sun.visible=true;
   arrow1.visible=true;
    fill("black");
  textSize(20);
  text("Evaporation",90,260);
//gamestate=2;

if (keyDown("c")){ gamestate=2}  
} 
//if (keyDown("c")){ gamestate=2}  
if(gamestate==2){
  
  cloud1.visible=true;
  cloud2.visible=true;
  cloud3.visible=true;
  cloud4.visible=true;
    fill("black");
  textSize(20);
   text("Evaporation",90,260);
  text("Condensation",130,98);
  arrow2.visible=true;
}  
if (keyDown("p")){ gamestate=3}  
if(gamestate==3){
    fill("black");
  textSize(20);
   text("Evaporation",90,260);
  text("Condensation",130,98);
  arrow2.visible=true;
text("Precipitation",285,90);
arrow3.visible=true;
  } 
 if (keyDown("w")){ gamestate=4}  
if(gamestate==4){
    fill("black");
  textSize(20);
   text("Evaporation",90,260);
  text("Condensation",130,98);
  arrow2.visible=true;
text("Precipitation",285,90);
arrow3.visible=true;
raindrop1.visible=true;
raindrop2.visible=true;
raindrop3.visible=true;
raindrop4.visible=true;
raindrop5.visible=true;
raindrop6.visible=true;
  }  
 if (keyDown("r")){ gamestate=5}  
if(gamestate==5){
    fill("black");
  textSize(20);
text("Evaporation",90,260);
  text("Condensation",130,98);
  arrow2.visible=true;
text("Precipitation",285,90);
arrow3.visible=true;
raindrop1.visible=true;
raindrop2.visible=true;
raindrop3.visible=true;
raindrop4.visible=true;
raindrop5.visible=true;
raindrop6.visible=true;
  text("Runoff",120,350);
runoff1.visible=true;
mountain.visible=false;
arrow4.visible=true;
  }   
  
}
