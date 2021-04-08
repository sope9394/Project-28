class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length: 1,
            stiffness: 0.04
        }
        this.bodyA=bodyA;
        this.pointB = pointB;
        this.rope = Constraint.create(options);
       
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    release(){
        this.rope.bodyA = null;
    }
    display(){
        if (this.rope.bodyA){
            var posA = this.bodyA.position;
            var posB = this.pointB;
            //push();
            strokeWeight(5);
            stroke("beige");
            line(posA.x, posA.y, posB.x, posB.y);
           // pop();
        }  
    }
}