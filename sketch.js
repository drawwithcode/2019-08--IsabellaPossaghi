var myMap;
var canvas;

var position;

var mappa = new Mappa('MapboxGL',
'pk.eyJ1Ijoic25vd2RpbjE2IiwiYSI6ImNrMm4yeDF1NTBtZWEzaW41bndlcDZtazQifQ.qaidFM19qHeTtXx0ClItmg');


var options = {
  lat: 0,
  lng: 0,
  zoom: 10,
  studio: true,
  style: "mapbox://styles/snowdin16/ck2uwvo9007kq1co6mephjjhg"
}


var coordinates;


function preload() {
  position = getCurrentPosition();
  console.log(position); //i'm here!!
  pin = loadImage("./assets/pin.png"); //pointer


  cursor(CROSS)
}

function setup() {
  options.lat = position.latitude;
  options.lng = position.longitude;

  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas); //to make the map visible


}

function draw() {
  clear();
  coordinates = myMap.latLngToPixel(position.latitude, position.longitude);
  // ellipse(coordinates.x, coordinates.y, 20);
  // noStroke()
  // fill("red")
  image(pin, coordinates.x, coordinates.y, 120, 110)


}
