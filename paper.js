class Paper{
    constructor(x,y,r){
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
       this.paper=Bodies.circle(x,y,r,options);
	   World.add(world,this.paper);
    }
    display(){
        push();
        translate(this.paper.position.x,this.paper.position.y);
        rotate(this.paper.angle);
        fill("violet");
        ellipse(this.paper.position.x,this.paper.position.y,20,20);
        pop();
    }
}