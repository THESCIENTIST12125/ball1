const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var option = {
        restitution:1,
        friction:2
        
    }
    ball=Bodies.circle(280,200,30,option);

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
  
World.add(world,ball);
    console.log(ball);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball.position.x,ball.position.y,30,30);
    
    
}