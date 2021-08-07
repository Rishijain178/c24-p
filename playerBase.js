constructor();
class playerBase {
    constructor(x,y,Width,height){
        var options={
            isStatic:true
        };
        this.body=Bodies.rectangle(x,y,Width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("./assets/base2.png");

    }
}

Display();{
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
 translate(pos.x,pos.y);
 DeviceRotationRate(angle);
 ImageMode(CENTER);
 image(this.image,0,0,this.Width,this.height)

 Pop();
}
        
            
