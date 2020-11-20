const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var bird;
var box, box1;

function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    var g = {
        isStatic: true
    }
    ground = Bodies.rectangle(400, 392, 800, 20, g);
    World.add(world, ground);

    var b = {
        restitution: 1
    }
    bird = Bodies.circle(100, 0, 50, b);
    World.add(world, bird);

    box = Bodies.rectangle(310, 10, 20, 20, b);
    World.add(world, box);
    box1 = Bodies.rectangle(300, 100, 20, 20, b);
    World.add(world, box1);
    console.log(box);
    console.log(box.type);
}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 800, 20);
    rect(box.position.x, box.position.y, 20, 20);
    rect(box1.position.x, box1.position.y, 20, 20);
    ellipseMode(RADIUS);
    ellipse(bird.position.x, bird.position.y, 50, 50);

}