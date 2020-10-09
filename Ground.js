class Ground  {
  constructor(x, y, width, height) {
    var options = {
        isStatic:true,
        restitution:0.8,
        friction:1.0,
        density:1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.x = this.body.position.x
    this.y = this.body.position.y
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    fill("brown");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}