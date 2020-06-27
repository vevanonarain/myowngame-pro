var canvas;
var wall1, wall2;
var obstacle1, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, 
obstacle5, obstacle6, obstacle7, obstacle8, obstacle9, obstacle10, 
obstacle11, obstacle12, obstacle13, obstacle14, obstacle15, obstacle16, 
obstacle17, obstacle18, obstacle19, obstacle20, obstacle21, obstacle22, 
obstacle23, obstacle24, obstacle25, obstacle26, obstacle27, obstacle28, 
obstacle29, obstacle30, obstacle31, obstacle32, obstacle33, obstacle34, 
obstacle35, obstacle36, obstacle37, obstacle38, obstacle39, obstacle40;

var dustbin;

var player;

function setup() {
canvas = createCanvas(400,400);
obstacle1 = createSprite(250, 25,350,5);
obstacle2 = createSprite(100, 55,350,5);
obstacle3 = createSprite(320, 85,300,5);
obstacle4 = createSprite(120, 115,350,5);
obstacle5 = createSprite(195, 145,300,5);
obstacle6 = createSprite(100, 175,100,5);
obstacle7 = createSprite(180,205,300,5);
obstacle8 = createSprite(420, 235,350,5);
obstacle9 = createSprite(110,265,100,5);
obstacle10 = createSprite(275, 295,250,5);
obstacle11 = createSprite(105, 325,390,5);
obstacle12 = createSprite(245, 355,350,5);
obstacle13 = createSprite(150, 385,320,5);
obstacle14 = createSprite(95,160,5,40);
obstacle15 = createSprite(25,190,5,40);
obstacle16 = createSprite(50,85,170,5);
obstacle17 = createSprite(100,235,200,5);
obstacle18 = createSprite(350,130,5,40);
obstacle19 = createSprite(350,115,50,5);
obstacle20 = createSprite(320,40,5,40);
obstacle21 = createSprite(370,55,60,5);
obstacle22 = createSprite(200,220,5,40);
obstacle23 = createSprite(150,190,5,40);
obstacle24 = createSprite(230,160,5,40);
obstacle25 = createSprite(330,190,5,40);
obstacle26 = createSprite(170,175,50,5);
obstacle27 = createSprite(250,175,50,5);
obstacle28 = createSprite(330,175,50,5);
obstacle29 = createSprite(370,325,70,5);
obstacle30 = createSprite(20,355,50,5);
obstacle31 = createSprite(370,265,100,5);
obstacle32 = createSprite(350,375,5,40);
obstacle33 = createSprite(55,255,5,30);
obstacle34 = createSprite(240,265,100,5);
obstacle35 = createSprite(295,280,5,40);
obstacle36 = createSprite(375,205,50,5);
obstacle37 = createSprite(385,175,30,5);
obstacle38 = createSprite(385,145,30,5);
obstacle39 = createSprite(55,295,150,5);
}

function draw() {
  background(0);

  if(World.frameCount % 500 === 0){
    obstacle8.width += 7;
    obstacle8.x-=10;
  }
  if(World.frameCount % 100 === 0){
    obstacle6.width += 10;
    obstacle6.x+=10;
  }
  if(World.frameCount % 1000 === 0){
    obstacle16.width += 10;
    obstacle16.x+=10;
  }
 
  drawSprites();

  console.log(World.frameCount);
}