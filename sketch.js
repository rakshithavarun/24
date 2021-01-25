
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1Body,side2Body,baseBody;
var side1,side2,base;
var paper;
var ground,groundBody;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	side1=new Bin(500,350,100,PI/2);
	side2=new Bin(700,350,100,PI/2);
	//base=new Bin(600,400,200,PI);
	groundBody=Bodies.rectangle(width/2,410,width,20,{isStatic:true});
	World.add(world,groundBody);
	/*side1Body=Bodies.rectangle(500,350,20,100,{isStatic:true});
	World.add(world,side1Body);
	side2Body=Bodies.rectangle(700,350,20,100,{isStatic:true});
	World.add(world,side2Body);*/
	baseBody=Bodies.rectangle(600,400,200,20,{isStatic:true});
	World.add(world,baseBody);
    
    paper = new Paper(50,350,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  noStroke();
  rectMode(CENTER);
  fill("blue");
  ground=rect(groundBody.position.x,groundBody.position.y,width,20);
  
  fill("white"); 
  /*side1=rect(side1Body.position.x,side1Body.position.y,20,100);
  side2=rect(side2Body.position.x,side2Body.position.y,20,100);*/
  base=rect(baseBody.position.x,baseBody.position.y,200,20);
  side1.display();
  side2.display();
  //base.display();
 paper.display();
  //paper.x=paper.x+2;
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		//Matter.Body.setStatic(paperBody,false);
		Matter.Body.applyForce(paperBody,paperBody.position,{x:5,y:-1});
	}	
}

