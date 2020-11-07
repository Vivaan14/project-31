class particle {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }

      this.radius = radius;
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(this.x,this. y, 10, options);
      this.color = color(random(0,225),random(0,225),random(0,225));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };