
var dog,dogimg,happydogimg,database,foods,foodstock
var database
function preload()
{
  happydogimg = loadImage("dogImg.png")
  dogimg = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(700, 600);
  database = firebase.database()
  dog = createSprite(300,300)
  dog.addImage("dog",dogimg)
  dog.scale = 0.5
  foodstock = database.ref('Food')
  foodstock.on("value",readStock)
}

function readStock(data){
  foods = data.val(10)
}

function writeStock(xz){
  if(x <= 20){
    x = 50
  }
  else{
    x = x - 1 
  }
  database.ref('2').update(
    {
      Food:x
    }
  )
}

function draw() {  
  background(49,140,90);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dog.addImage("dog",happydogimg)
  } 
  fill("black")
  textSize(30)
  text("Food Available:" + foods,600,800)
  drawSprites();
  fill("black")
  textSize(30)
  text("Press the Up arrow to feed the Dog",100,100)
}