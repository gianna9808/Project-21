
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 550);

	engine = Engine.create();
	world = engine.world;
     
	ball_options={
     isStatic:false,
     restitution:0.3,
	 friction:0,
	 density:1.2
	}

    groundObj = new Ground (width/2,670,width,20);
	leftSide = new Ground (1100,600,120,20);
	rightSide = new Ground (1200,600,120,20);

	//Create the Bodies Here.
    Bodies.circle(625,275,40)

	Engine.run(engine);

	World.add(world, ball);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  groundObj.display();
  rightSide.display();
  leftSide.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(1);
	}
}