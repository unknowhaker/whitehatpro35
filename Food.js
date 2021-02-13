class Food{
    constructor(x,y,foodStock,lastfeed){
        this.body = Matter.Bodies.restitution(x,y,radius,{restitution:0.3, friction: 0.5, density:1.2});
        World.add(world,this.body);
        this.width = width;
        this.hight = hight
        this.image = loadImage("images/Milk.png");
    }
    display(){
        //fill("red"),
        food=createButton("feed the dog");
        feed.position(700,95);
        feed.mousePresed(feedDog);

        addFood = createButton("add food");
        addFood.position(800,95);
        addFood.mousePresed(addfoods);
        //if ( ) {
            
        //}
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,20,20);
    }
    getFoodStock(){

    } 
    updateFoodStock(){

    } 
    deductFood(){

    }
}