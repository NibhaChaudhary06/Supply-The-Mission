var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxLine1 , boxLine2,boxLine3

function preload()   
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  boxLine1 = createSprite(220,555,20,210)
  boxLine1.shapeColor = "red"
  boxLine2 = createSprite(370,650,280,20)
  boxLine2.shapeColor = "red"
  boxLine3 = createSprite(520,555,20,210)
  boxLine3.shapeColor = "red"
    

} 

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

  Matter.Body.setStatic(packageBody,false);  
  }
  if(keyCode === LEFT_ARROW){
	  helicopterSprite.x = helicopterSprite.x - 20
	  Matter.Body.translate (packageBody,{x:-20,y : 0})
  }
  if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x + 20
	Matter.Body.translate (packageBody,{x:+20,y : 0})
}
}



