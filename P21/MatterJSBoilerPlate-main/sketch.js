const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var bottom_ground;
var left_Side;
var right_Side;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
    ball = Matter.Body.circle(1250,100,15,ball_options);
	World.add(world,ball);

	bottom_ground = new Ground(600,590,1200,15);
	left_Side = new Ground(800,565,5,50);
	right_Side = new Ground(900,565,5,50);

	
	
	
	
	
	// to show the values of the code
	let ball_options={
		isStatic = false,
     restitution:0.3,
    friction:0,
	density:0.2,
                      }


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 
 //how to show the ball

 ellipse(ball.position.x,ball.position.y,20);
 ellipseMODE(RADIUS);
 
 bottom_ground.show();
 left_Side.show();
 right_Side.show();
  drawSprites();
 
}

function keyPressed(){

	if(keyPressed(UP_ARROW)){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}


}



