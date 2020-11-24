const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;
var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;
var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon;

function preload(){

  backplayImg = loadImage("back.jpg")
}
function setup() {
    createCanvas(1200, 600);

    engine = Engine.create();
    world = engine.world;
 
    ground = new Ground(600,580,1800,50);
    plain1 = new Ground(1000, 260, 280, 20);
    plain2 = new Ground(150, 450, 280, 20);

    box1 = new BoxBlue(100, 400, 50, 40);
    box2 = new BoxBlue(200, 400, 50, 40);
    box4 = new BoxBlue(150, 300, 50, 40);
    box5 = new BoxBlue(150, 200, 50, 40);
    box6 = new BoxBlue(950, 220, 50, 40);
    box7 = new BoxBlue(1100, 230,50, 40);
    box8 = new BoxBlue(1000, 70, 50, 40);

    box9 = new BoxPink(250, 400, 50, 40);
    box10 = new BoxPink(50, 400, 50, 40);
    box11 = new BoxPink(130, 230, 50, 40);
    box12 = new BoxPink(180, 230,50, 40);
    box13 = new BoxPink(1000, 220, 50,40);
    box14 = new BoxPink(1050, 220,50,40);
    box15 = new BoxPink(1000, 170, 50, 40);
    box16 = new BoxPink(975, 120, 50, 40);
    
    box17 = new BoxGreen(950,170,50,40);
    box18 = new BoxGreen(900,220,50,40);
    box19 = new BoxGreen(1025,120,50,40);
    box20 = new BoxGreen(150,400,50,40);
    box21 = new BoxGreen(1050,170,50,40);
    box22 = new BoxGreen(200,350,50,40);
    box23 = new BoxGreen(100,350,50,40);

    polygon = new Polygon(615,250,25, 25);

    sling = new Slingshot(polygon.body,{x:615,y:250});

}
 
function draw() { 
  background(backplayImg);
   Engine.update(engine);

   ground.display();

   plain1.display();
   plain2.display();

   box1.display();
   box2.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();

   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();

   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();

   sling.display();

   polygon.display();
   
    fill(255);
    textSize(20);
    text(" Drag the Hexagonal Stone and Released it, to Launch it Towards the Boxes", 230, 50);
}
 
function mouseDragged() {
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
  
  }
  
  function mouseReleased() {
    sling.fly(); 
  }

  function keyPressed(){
    if(keyCode === 32 ){
        sling.attach(polygon.body);
    }
}
