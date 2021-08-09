var road,roadImage
var boy,runnerboy
var side1,side2

function preload(){
//pre-load images
   roadImage = loadImage("path.png")
   runnerboy = loadAnimation("runner-1.png","runner-2.png");
   
   
}

function setup(){
  createCanvas(400,600);
  
//creating invisiblesides
 side1= createSprite(370,300,40,600)
 side1.visible=false
 side2= createSprite(10,300,20,600)
 side2.visible=false
//creating road 
  road =createSprite(175,300,350,600);
  road.addImage(roadImage)
   road.velocityY=+5;
  road.scale=1.2

//creating sprite boy
   boy = createSprite(170,500,80,100);
   boy.addAnimation("running",runnerboy);
   boy.scale = 0.05  
   
  


}

function draw() {
  //background(180);
 
  
if(road.y > 600){
   road.y=road.width/2
 }
// to move boy
  boy.x=World.mouseX;
//  to collide
    
edges= createEdgeSprites();
  boy.collide(edges);

  boy.collide(side1)
 boy.collide(side2)
  
  drawSprites();
}


