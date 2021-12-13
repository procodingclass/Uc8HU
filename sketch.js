
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;


var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var world,boy;


var sling;

function preload(){
	boy=loadImage("boy.png");
  tree=loadImage("tree.png");
}

function setup() {
	createCanvas(850, 470);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(135,320,40); 
 

	mango1 = new Mango(700,100,40,40);
  mango2 = new Mango(760,130,40,40);
	mango3 = new Mango(710,140,40,40);
	mango4 = new Mango(570,70,40,40);
	mango5 = new Mango(550,50,40,40);
	mango6 = new Mango(600,130,40,40);
	mango7 = new Mango(650,130,60,60);
	mango8 = new Mango(540,150,60,60);
	mango9 = new Mango(510,130,60,60);

	//tree = new Tree(600,380);
	ground = new Ground(width/2,460,width,20);

  //create sling with stone as bodyA
  sling = new Sling(stone.body,{x:135,y:320});

  var mouseObject = Mouse.create(canvas.elt);
  let options = {
    mouse: mouseObject
  };
  var mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);  

	Engine.run(engine);
}

function draw() {

  background(230);
  Engine.update(engine);
  textSize(25);
  text("Launch the stone when mouse is released!!",30 ,50);
  text("Press space to catch the stone!!",30 ,100);
  image(boy ,100,240,200,300);
  image(tree ,440,0,350,400);
  
  stone.display();
 

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display(); 
  sling.display();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:135,y:320})
    sling.attach(stone.body);
  }
}

function mouseReleased()
{
  setTimeout(() => {
    sling.fly();
  }, 70);
	
}

