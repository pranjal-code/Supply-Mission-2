class redBox {
    constructor(x, y, width, height) 
    {
        var options = {
            //default
            isStatic: true,
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0
        }


        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        //addin body to world
        World.add(world, this.body);
    }
    display() 
    {
        //position
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        rectMode(CENTER);

        fill(231, 76, 60);
        //looks like one box
        stroke(231, 76, 60);
        
        rect(0, 0, this.width, this.height);
        pop();
    }
}
