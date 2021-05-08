class Slingshot{
constructor( bodyA, pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10,
    }
    this.sling=Constraint.create(options)
    World.add(world,this.sling)
}
display(){
if(this.sling.bodyA){
    var pointA=this.sling.bodyA
    var pointB=this.sling.pointB
    line(pointA.position.x,pointA.position.y,pointB.x,pointB.y)
}

   

}
 fly(){
     this.sling.bodyA=null
 }
}