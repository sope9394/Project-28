const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boyImage, boy, rope;

function preload()
{
	boyImage = loadImage("images/boy.png");
	treeImage = loadImage("images/tree.png");
	mango1 = loadImage("images/mango.png");
	stoneImage = loadImage("images/stone.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200, 650, 7000, 20);

	
	mango1 = new Mango(730, 250, 20);
	mango2 = new Mango(800, 330, 20);
	mango3 = new Mango(800, 250, 20);
	mango4 = new Mango(730, 330, 20);
	mango5 = new Mango(650, 330, 20);
	mango6 = new Mango(860, 330, 20);

	tree = createSprite(730, 410, 380, 500);
	tree.addImage(treeImage);
	tree.scale = 0.42;

	stone = new Stone(90, 480, 30);


	boy = createSprite(160, 570, 50, 80);
	boy.addImage(boyImage);
	boy.scale = 0.13

	
	rope = new Rope(stone.body,{x: 90, y: 480});

	Engine.run(engine);
  
}


function draw() {
	
	background("lightgray");
	Engine.update(engine);

	drawSprites();
	ground.display();
	tree.display();
	stone.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	rope.display();

	detectcollison(stone, mango1);
	detectcollison(stone, mango2);
	detectcollison(stone, mango3);
	detectcollison(stone, mango4);
	detectcollison(stone, mango5);
	detectcollison(stone, mango6);

}

function detectcollison(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= lmango.radius + lstone.radius ){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
	rope.release();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone, {x: 90, y: 480});
		rope.attach(stone.body);
	}
}
