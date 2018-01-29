var photo; // Variabile che salva la foto
var diameter1=0;
var diameter2=20;
var diameter3=40;
var diameter4=60;
var diameter5=80;
var diameter6=100;

const MAX_DIM = 100; // E il max diameter del cerchio

const WIDTH = window.innerWidth;// Il calcolo del largezza del pagina Web
const OFFSET_WP = 0.944882;// fatto delle prove
const HEIGHT = window.innerHeight;
const OFFSET_HP = 0.901962;

var earthquakes = [];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  photo = loadImage("data/worldmap1.png");
  frameRate(20);
  const URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";//website of earthquake data
  loadJSON(URL, initArray); //function to load data
  
}

function initArray(data) {
  for(var i=0; i<data.features.length; i++) {
    const item = data.features[i];
    var   coords = {
              x: item.geometry.coordinates[0],
              y: item.geometry.coordinates[1]
          };
    
    earthquakes.push(coords);
  }
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
  
  for(var i=0; i<earthquakes.length; i++) {
    const item = earthquakes[i];
    earthquake(item.y, item.x);
  }

  
}