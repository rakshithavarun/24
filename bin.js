class Bin{
    constructor(x,y,height,angle){
        var options={
         'isStatic':true,
         'restitution':0.8,
         'friction':0.3,
         'density':1
        }
        this.body=Bodies.rectangle(x,y,20,height,options);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        this.angle=angle;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("white");
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        pop();
        rect(pos.x,pos.y,this.width,this.height);
    }
}