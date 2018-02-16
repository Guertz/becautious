// Shared variables
var photo;      
var diameter1=0;  
var diameter2=20;
var diameter3=40;
var diameter4=60;
var diameter5=80;
var diameter6=100;// Using 6 diameters is optional

const MAX_DIM = 100; // Max dimension of how much each diameters can grow up to

const WIDTH = window.innerWidth;

const OFFSET_WP = 0.944882; // In this case:
                            //    1016 => fixed widow width
                            //    960  => custom map size with point ok
                            //
                            //    constant = 960/1016
                            //

const HEIGHT = window.innerHeight; 
const OFFSET_HP = 0.901962; // In this case:
                            //    510 => fixed window height
                            //    460 => custom map height with point ok
                            //
                            //  constant 460/510

var earthquakes = [];

function setup() {
  createCanvas(WIDTH, HEIGHT); 
  photo = loadImage("data/worldmap1.png");
  frameRate(20);  //the velocita about how the draw function is called
                  //  20 times per second

  const URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

  loadJSON(URL, initArray); 
  
}

// JSON is a notation to share data between computer in a user readable text format
function initArray(data) {

  for(var i=0; i<data.features.length; i++) {

    const item = data.features[i];

    var   coords = {
              lon: item.geometry.coordinates[0],
              lat: item.geometry.coordinates[1]
          };

    earthquakes.push(coords);
  }
}

function draw() {
  
  background(255,255,255);
    
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
    const earthquake = earthquakes[i];

    drawEarthquake(earthquake.lat, earthquake.lon); 
  }

  
}

function drawEarthquake( lat, lon ) {
  
  var X=((WIDTH  * OFFSET_WP)/360.0) * (180 + lon);
  var Y=((HEIGHT * OFFSET_HP)/180.0) * ( 90 - lat);
  
  drawWave(X,Y,diameter1);
  drawWave(X,Y,diameter2);
  drawWave(X,Y,diameter3);
  drawWave(X,Y,diameter4);
  drawWave(X,Y,diameter5);
  drawWave(X,Y,diameter6);
  

}

function drawWave( X, Y, diameter){

  ellipse(X,Y,diameter,diameter);
  noFill();
  stroke(204, 102, 0);

}

