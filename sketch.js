
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var myEngine;
var myWorld;

var ball;
var groundObj;
var rightWall;
var leftWall


function setup() {
	createCanvas(800, 500);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.

	
	groundObj = new Ground(400,480,800,20);
	leftWall = new Ground(500,450,10,50);
	rightWall = new Ground(550,450,10,50);
	

	var ball_options={
		//isStatic: false,
		restitution: 0.3,
		frictionAir: 0.01,
		density: 1.2,
	};

	ball = Bodies.circle(100,100,10,ball_options);

	World.add(myWorld , ball);
	World.add(myWorld,groundObj);
	World.add(myWorld,rightWall);
	World.add(myWorld,leftWall);
	//Engine.run(myEngine);

	/*var render = Render.create({
		element: document.body,
		engine: myEngine,
		options: {
		  width: 800,
		  height: 500,
		  wireframes: false
		}
	  });
	  Render.run(render);*/
  
}


function draw() {
  
  background(51);
  Engine.update(myEngine);

	textSize(30)
  text("Use arrow keys",200,200)
  text("use the down arrow to stop the ball from flying up",100,100)
  
	
	fill("yellow")


	groundObj.display();
  leftWall.display();
  rightWall.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);
}

function keyPressed()
{
	//apply force
	if(keyCode === UP_ARROW)
	{
		Body.applyForce(ball, {x:0, y:0}, {x:0, y:-12});
	}

	if(keyCode === RIGHT_ARROW)
	{
		Body.applyForce(ball, {x:0, y:0}, {x:2, y:0});
	}
	if(keyCode === LEFT_ARROW)
	{
		Body.applyForce(ball, {x:0, y:0}, {x:-2, y:0});
	}
	if(keyCode === DOWN_ARROW)
	{
		Body.applyForce(ball, {x:0, y:0}, {x:0, y:10});
	}
}

