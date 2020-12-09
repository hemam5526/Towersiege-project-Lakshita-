const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,platform1,platform2
var cont,stone,stoneimg,sling
var box1,box2,box3,box4,box5,box6,box7,box8
var box9,box10,box11,box12,box13,bpx14,bpx15,box16
var dibba1,dibba2,dibba3,dibba4,dibba5,dibba6,dibba7,dibba8,dibba9

function preload()
{
	polygon_img=loadImage("polygon.png");
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

	//Create the Bodies Here.

    ground = new Ground ();

    //platform
    platform1 = new Stand(390,300,250,10);
    platform2 = new Stand(700,200,200,10);

    
    //line1,platform1
  box1 = new Box(300,275,30,40);
  console.log(box1);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);

    //line2,platform1
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);

    //line3,platform1
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);

    //line4,platform1
    box16 = new Box (390,155,30,40);

    //line1,platform2
    dibba1 = new Box (640,175,30,40)
    dibba2 = new Box (670,1750,30,40)
    dibba3 = new Box (700,175,30,40)
    dibba4 = new Box (730,175,30,40)
    dibba5 = new Box (760,175,30,40)

    //line2,platform2
    dibba6 = new Box (670,135,30,40)
    dibba7 = new Box (700,135,30,40)
    dibba8 = new Box (730,135,30,40)

    //line3,platform2
    dibba9 = new Box (700,95,30,40);


    
    
    //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

  
}


function draw() {

    background("#382C2C");
 //Engine.update(engine);

 textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  platform1.display();
  platform2.display();

  rectMode(CENTER);
 
  strokeWeight(2);
  stroke(15);
  fill ("#87CEEA")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  fill("#FFC0CB")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
  
  fill("#3FE0D0")
  box13.display();
  box14.display(); 
  box15.display();

  fill("#808080")
  box16.display();

  fill("#87CEEA")
  dibba1.display();
  dibba2.display();
  dibba3.display();
  dibba4.display();
  dibba5.display();

  fill("#FFC0CB")
  dibba6.display();
  dibba7.display();
  dibba8.display();

  fill("#3FE0D0")
  dibba9.display();
  

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  
  
  

  slingShot.display();
 
 
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}


