var Engine=Matter.Engine;
var World =Matter.World;
var Bodies=Matter.Bodies;
var Constraint=Matter.Constraint;
var engine, world;
var hold, ball, ground;


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var groundop = {
    isStatic: true
  }

  var holdop = {
    isStatic:true
  }

  var ballop = {
    restitution: 1.0,
    density: 1.0
  }

ground = Bodies.rectangle(200,390,400,20,groundop);
World.add(world, ground);

hold=Bodies.rectangle(200,100,200,50,holdop);
World.add(world,hold);

ball=Bodies.circle(200,250,33,ballop);
World.add(world, ball);
var options ={
  bodyA: ball,
  bodyB: hold,
  stiffness: 0.1,
  length: 90
}

var string=Constraint.create(options);
World.add(world, string);

fill("white");
}

function draw() {
  background("white");  
  Engine.update(engine);
  drawSprites();
  text("click enter to stop the swing", 200,21);
  text("click space bar to move the pendulam", 200,57);
  fill("black")
  rectMode(CENTER);
  rect(hold.position.x,hold.position.y,200,50);
  fill("red");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,33);
  strokeWeight(6);
  fill("green");
  line(ball.position.x,ball.position.y,hold.position.x,hold.position.y);
}