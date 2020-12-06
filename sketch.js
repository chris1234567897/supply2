var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,receiver,packagerec
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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
	
	receiver = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	 World.add(world, receiver)
	 
	 receiver1 = Bodies.rectangle(300, 600, 20, 100 , {isStatic:true} );
	 World.add(world, receiver)
	 
	 receiver2 = Bodies.rectangle(500, 600, 20, 100 , {isStatic:true} );
 	World.add(world, receiver)
	
	 packagerec=createSprite(width/2, 80, 200,20);
	 packagerec.shapeColor="red"
	 packagerec1=createSprite(width/2, 80, 20,100);
	 packagerec1.shapeColor="red"
	 packagerec2=createSprite(width/2, 80, 20,100);
	 packagerec2.shapeColor="red"
    packageSprite.y=packageBody.y;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packagerec.x= receiver.position.x 
  packagerec.y= receiver.position.y 
  packagerec1.x= receiver1.position.x 
  packagerec1.y= receiver1.position.y 
  packagerec2.x= receiver2.position.x 
  packagerec2.y= receiver2.position.y 
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false); 
	} 
}
      
