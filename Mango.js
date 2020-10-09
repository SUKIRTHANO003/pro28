class Mango{
  constructor(x,y,r){
    var options={
      isStatic :true,
      restitution :0,
      friction :1,
    }
    this.body = Bodies.circle(x,y,r,options);
    this.x = this.body.position.x;
    this.y = this.body.position.y;
    this.r = r;
    this.image = loadImage("Plucking mangoes/mango.png");
    this.image.scale = 0.9;
    World.add(world,this.body);
  }

  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r);
    image.scale = 0.9;
    pop();
  }
}