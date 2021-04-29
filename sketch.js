//Create variables here
var dog2, happyDog, database, foodS, foodStock
function preload()
{
	//load images here
  dog=loadImage("images/dogImg.png")
 dog1=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  database =firebase.database()
  dog2=createSprite(300,200,20,20)
  dog2.addImage(dog)
  dog2.scale=0.3
  
  foodStock=database.ref("Food")
  foodStock.on("value", readStock)



}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog2.addImage(dog1)
  }
  fill("white")
  textSize(15)
  text("Note:Press UP_ARROW To Feed Drago Milk!", 15,20)
  
  text("Food Available: "+ foodS,30,100)
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0
}
else{
 x=x-1
}
 
database.ref("/").update({
  Food:x   
})

}



