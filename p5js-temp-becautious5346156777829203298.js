var photo;
var diameter1=0;
var diameter2=20;
var diameter3=40;
var diameter4=60;
var diameter5=80;
var diameter6=100;

const MAX_DIM = 100;
const WIDTH = window.innerWidth;
const OFFSET_WP = 0.944882;
const HEIGHT = window.innerHeight;
const OFFSET_HP = 0.901962;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  photo = loadImage("data/worldmap1.png");
  frameRate(20);
}


function wave( X, Y, diameter){
  
  ellipse(X,Y,diameter,diameter);
  noFill();
  stroke(204, 102, 0);

}

function earthquake( lat, lon ) {
  
  var X=((WIDTH  * OFFSET_WP)/360.0) * (180 + lon);
  var Y=((HEIGHT * OFFSET_HP)/180.0) * ( 90 - lat);
  
  console.log((WIDTH*OFFSET_WP));
  
  wave(X,Y,diameter1);
  wave(X,Y,diameter2);
  wave(X,Y,diameter3);
  wave(X,Y,diameter4);
  wave(X,Y,diameter5);
  wave(X,Y,diameter6);
  

}

function draw() {
  
  if(diameter1<MAX_DIM )
    diameter1++;
  else
    diameter1=0;
    
  if(diameter2<MAX_DIM )
    diameter2++;
  else
    diameter2=0;
    
  if(diameter3<MAX_DIM )
    diameter3++;
  else
    diameter3=0;
    
  if(diameter4<MAX_DIM )
    diameter4++;
  else
    diameter4=0;
    
  if(diameter5<MAX_DIM )
    diameter5++;
  else
    diameter5=0;
    
  if(diameter6<MAX_DIM )
    diameter6++;
  else
    diameter6=0;
    
  photo.resize(WIDTH, HEIGHT);
  image(photo, 0, 0);
  
  earthquake (22,122);
  earthquake (46,12);
  earthquake (13, 128);
  earthquake (-10, -52);
  earthquake (36, -87);
  earthquake (26, 30);
  
}