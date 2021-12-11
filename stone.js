class Stone
{
	constructor(x,y,r)
	{
		var options={
			restitution:0
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			pop();
			
	}

}