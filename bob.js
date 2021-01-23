class Bob{
    constructor(x,y,r){
        var opitions={
            isStatic:false,
            restitution:1.2,
            density:0.8,
            friction:0
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,opitions)
        World.add(world,this.body)
    }
  display(){
      fill("red")
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
  }
}