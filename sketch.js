var helicopterIMG, helicopterSprite; 
var packageSprite,packageIMG;
var packageBody,ground;
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

  //imp
	engine = Engine.create();
	world = engine.world;

  //bouncing 
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	var pos = packageBody.position;
	var angle = packageBody.angle;
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

  //making bodies of red boxes class
	redBox1 = new redBox(403, 650, 200, 20);

	redBox2 = new redBox(300, 610, 20, 100);

	redBox3 = new redBox(503, 610, 20, 100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  //updating engine
  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  //displaying red boxes
  redBox1.display();
	redBox2.display();
	redBox3.display();

  drawSprites();
  

}
//box falling down when key pressed
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
  }
}

