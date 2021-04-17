const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon,sling,ground2;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1200,550);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  ground2 = new Ground();

  stand1 = new Stand(420,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(330,275,30,40);
  block2 = new Block(360,275,30,40);
  block3 = new Block(390,275,30,40);
  block4 = new Block(420,275,30,40);
  block5 = new Block(450,275,30,40);
  block6 = new Block(480,275,30,40);
  block7 = new Block(510,275,30,40);
  //level two
  block8 = new Block(360,235,30,40);
  block9 = new Block(390,235,30,40);
  block10 = new Block(420,235,30,40);
  block11 = new Block(450,235,30,40);
  block12 = new Block(480,235,30,40);
  //level three
  block13 = new Block(390,195,30,40);
  block14 = new Block(420,195,30,40);
  block15 = new Block(450,195,30,40);
  //top
  block16 = new Block(420,155,30,40);
  //l1
  block17 = new Block(630,170,30,40);
  block18 = new Block(660,170,30,40);
  block19 = new Block(690,170,30,40);
  block20 = new Block(720,170,30,40);
  block21 = new Block(750,170,30,40);
  block22 = new Block(780,170,30,40);

  //l2
  block23 = new Block(660,130,30,40);
  block24 = new Block(690,130,30,40);
  block25 = new Block(720,130,30,40);
  block26 = new Block(750,130,30,40);

  //l3
  block27 = new Block(690,90,30,40);
  block28 = new Block(720,90,30,40);

  //l4
  block29 = new Block(705,50,30,40);
 

 
  polygon = new Polygon(120,250,25);
  sling = new Sling(polygon.body,{x:120, y:250});
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();

  ground2.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block20.display();
  block21.display();
  block22.display();
  block17.display();
  block18.display();
  block19.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block27.display();
  block28.display();
  fill("grey");
  block16.display();
  block29.display();
  sling.display();
  polygon.display();
  

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:120,y:250});
    sling.attach(polygon.body);
    }
  }

