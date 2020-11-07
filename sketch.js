const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var particle = [];
var division = [];
var plinko = [];
var divisionheight = 300;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
  ground1 = new grounds(500,400,1500,20);
  for (var k = 0; k<= width;k = k+80 ){
    division.push(new Division(k,height-divisionheight/2,10,divisionheight) )
    }
}
function draw() {
  background(255,255,255);  
  drawSprites();
  ground1.display();
  for(var k = 0;k<division.length; k++){
  division[k].display();
  
  }
}