class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 30
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display() {
        if (this.sling.bodyA) {
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(0);
           
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach(body) {

        this.sling.bodyA = body;

    }
}