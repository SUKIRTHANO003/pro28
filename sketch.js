
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImg, stone, ground, tree, treeImg;
var mango1;

function preload() {
	boyImg = loadImage("Plucking mangoes/boy.png");
	treeImg = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1024, 640);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(100,325);
	boy.addImage(boyImg);
	boy.scale = 0.09;
	
	tree = createSprite(750,320);
	tree.addImage(treeImg);
	tree.scale = 0.5;

	mango1 = new Mango(740,320,500);
	mango1.scale = 0.9;

	ground = new Ground(511,635,1300,10);

	Engine.run(engine);
  
}


function draw() {
	background("white");
  rectMode(CENTER);
  
  drawSprites();
	ground.display();
	mango1.display();
}



