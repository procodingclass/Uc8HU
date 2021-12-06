
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


var launcher;

function preload(){
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(850, 470);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(135,320,30); 
 

	mango1 = new Mango(700,100,20);
  mango2 = new Mango(760,130,20);
	mango3 = new Mango(710,140,20);
	mango4 = new Mango(570,70,20);
	mango5 = new Mango(550,50,20);
	mango6 = new Mango(600,130,20);
	mango7 = new Mango(650,130,30);
	mango8 = new Mango(540,150,30);
	mango9 = new Mango(510,130,30);

	tree = new Tree(600,380);
	ground = new Ground(width/2,460,width,20);

  //create launcher with stone as bodyA
  launcher = new Launcher(stone.body,{x:135,y:320});

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
  text("Launch the stone when mouse is released!!",50 ,50);
  image(boy ,100,240,200,300);
  

  tree.display();
  stone.display();
 

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  
  stone.display();
 
  launcher.display();



}


function mouseReleased()
{
  setTimeout(() => {
    launcher.fly();
  }, 70);
	
}

