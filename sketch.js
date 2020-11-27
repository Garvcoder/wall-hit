var bullet,wall,thickness;
var speed, weight;

function setup() 
{
  createCanvas(1600,400);
  bullet = createSprite(200,200,100,20);
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  
}

function draw() 
{
  background(0,0,0);
  
  bullet.shapeColor="white";
  wall.shapeColor = color(80,80,80);

  thickness = random(22,83);

  if (bullet.isTouching(wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    text(damage,10,10);
    
    if(damage < 10 ) 
    {
     bullet.shapeColor = "green"
    }
    
    if(damage > 10 ) {
      bullet.shapeColor = "red"
     }
    
  }
  drawSprites();
}


 