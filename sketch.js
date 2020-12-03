const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box3,box2,box4,box5,box6,box7,box8,box9,bird,slingShot;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    // level-1
    box1 = new Box(590,470,30,40);
    box2 = new Box(560,470,30,40);
    box3 = new Box(530,470,30,40);
    box4 = new Box(620,470,30,40);
    box5 = new Box(650,470,30,40);
    // level-2
    box6 = new Box1(530,440,30,40);
    box7 = new Box1(560,440,30,40);
    box8 = new Box1(590,440,30,40);
    //level-1 stand 2
    box9 = new Box2(840,95,30,40);
    box19 = new Box1(900,95,30,40);
    //level-2 stand2
    box10 = new Box(900,135,30,40);
    box11 = new Box(930,135,30,40);
    box12 = new Box(960,135,30,40);
    
    //level-3 stand2
    box13 = new Box2(840,175,30,40);
    box14 = new Box2(900,175,30,40);
    box15 = new Box2(930,175,30,40);
    box16 = new Box2(960,175,30,40);
    box17 = new Box2(990,175,30,40);
    box18 = new Box2(870,175,30,40);
    
   
//polygon
    bird = new Bird(100,200);

   
    ground = new Ground(590,500,250,10);
    ground1 = new Ground(600,height,1200,30);
    ground2 = new Ground(900,200,200,10);
    

    slingShot= new SlingShot(bird.body,{x:150,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
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
   
    bird.display();
    ground.display();
    ground1.display();
    ground2.display();
    slingShot.display(); 

}


function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
    
    function mouseReleased(){
        slingShot.fly();
    }

    function keyPressed(){
        if(keyCode===32){
         slingShot.attach(bird.body);  
         Matter.Body.setPosition(bird.body,{x:100,y:200})
        }
    }
    