class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);

      this.image = loadImage("polygon.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //pos.x=mouseX;
      //pos.y=mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      //rectMode(CENTER);
      //fill("red");
      //rect(0, 0, this.width, this.height);
      pop();
    }
  };
  