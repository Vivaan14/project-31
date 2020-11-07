class Division {
    constructor(x,y,w,h){
    var options ={
    isStatic : true
    }
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);

    }
    display(){
        var groundpos = this.body.position;
        rectMode(CENTER);
        strokeWeight(3);
        fill("white");
        rect(groundpos.x,groundpos.y,this.w,this.h);
    }
}