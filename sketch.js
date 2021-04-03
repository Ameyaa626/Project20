var tom,t_sitImg,tImg,tImg1;
var jerry,jImg1,jImg2,jImg3;
var garden,gImg;

function preload() {
    //load the images here
    t_sitImg = loadImage("images/cat1.png");
    tImg = loadAnimation("images/cat2.png","images/cat3.png");
    tImg1 = loadImage("images/cat4.png");

    jImg1 = loadImage("images/mouse1.png");
    jImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jImg3 = loadImage("images/mouse4.png");

    gImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,2000,1000);
    garden.addImage(gImg);
    //garden.scale = 1;
   
    tom = createSprite(700,570);
    tom.addAnimation("cat_sitting",t_sitImg); 
    tom.scale = 0.2;
    tom.velocityX = 0;

    jerry = createSprite(420,630);
    jerry.addAnimation("standing",jImg1);
    jerry.scale = 0.1;
}

function draw() {

    background(255);
   
    tom.debug = true;
    tom.setCollider("rectangle",0,0,600,850);
    jerry.debug = true;
    jerry.setCollider("rectangle",0,0,500,590);

    //Write condition here to evalute if tom and jerry collide
    if( tom.x-jerry.x<tom.width/2 + jerry.width/2 && 
        jerry.x-tom.x<tom.width/2 + jerry.width/2 && 
        tom.y-jerry.y<tom.height/2 + jerry.height/2 &&
        jerry.y-tom.y<tom.height/2 + jerry.height/2){
               
            tom.addAnimation("last_Img",tImg1);
            tom.changeAnimation("last_Img",tImg1);
            jerry.addAnimation("lastImg",jImg3);
            jerry.changeAnimation("lastImg",jImg3);
         } else {
            jerry.addAnimation("j_teasing",jImg2); 
            jerry.changeAnimation("j_teasing",jImg2);
            tom.addAnimation("running",tImg1); 
            tom.changeAnimation("running",tImg1);
         }   
         
    keyPressed();

    text(mouseX + ',' + mouseY,10,45);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("catrunning", tImg);
        tom.changeAnimation("catrunning",tImg);
        jerry.addAnimation("j_teasing",jImg2);
    }

}
