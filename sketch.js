
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var bobObject1,bobObject2,bobObject3 ,bobObject4,bobObject5;
var ground;
var roofObject ; 

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bobObject1=new Bob(300,350,50);
    bobObject2=new Bob(350,350,50);
    bobObject3=new Bob(400,350,50);
    bobObject4=new Bob(450,350,50);
    bobObject5=new Bob(500,350,50);

	ground = new Roof(700,200,600,20);
	sling1= new Rope(bobObject1.body,ground.body,-50*2,0);
    sling2= new Rope(bobObject2.body,ground.body,-25*2,0);
    sling3= new Rope(bobObject3.body,ground.body,-0*2,0);
    sling4= new Rope(bobObject4.body,ground.body,25*2,0);
    sling5= new Rope(bobObject5.body,ground.body,50*2,0);

}


function draw() {
  rectMode(CENTER);
  background(230);
  
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  ground.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === 37) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100}); 

} 

if (keyCode === 39) 
	{ Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-100,y:-100}); 
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100}); 

} 
if (keyCode === 40) 
	{ Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-100,y:-100}); 
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100}); 
  Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-100,y:-100}); 

} 
f (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-100,y:-100}); 
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100}); 
  Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-100,y:-100}); 
  Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-100,y:-100}); 

} 
}







