var myMap;
var canvas;
var position;

var p = [];
var places = [{
    lat: 39.958708,
    lng: -101.969122
  }, //USA
  {
    lat: 40.6684411,
    lng: 140.6004403
  }, //Japan
  {
    lat: 50.882066,
    lng: 10.583800
  }, //Germany
  {
    lat: 52.944811,
    lng: -1.569400
  }, //G. Britain
  {
    lat: 23.839849,
    lng: 120.879713
  }, //Taiwan
];


//map style
var mappa = new Mappa('MapboxGL',
  'pk.eyJ1Ijoic2FtYW4iLCJhIjoiS1ptdnd0VSJ9.19qza-F_vXkgpnh80oZJww')

var options = {
  lat: 0,
  lng: 0,
  zoom: 2, //starting zoom
  studio: true,
  style: 'mapbox://styles/saman/ciql4uao1000xbkm7knq5qf52',
}


var coordinates;


function preload() {
  position = getCurrentPosition();
  console.log(position); //i'm here!!
  pin = loadImage("./assets/pin.png"); //pointer
  prof = loadImage("./assets/prof.png");
  berry = loadImage("./assets/rare.png");

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

  //my position - pokeball
  clear();
  imageMode(CORNER);
  coordinates = myMap.latLngToPixel(position.latitude, position.longitude);
  fill(30, 144, 255);
  noStroke();
  ellipse(coordinates.x, coordinates.y, 10);
  image(pin, coordinates.x, coordinates.y, 65, 65);

  //places
  imageMode(CENTER);
  for (var i = 0; i < places.length; i++) {
    p[i] = myMap.latLngToPixel(places[i].lat, places[i].lng);
    image(berry, p[i].x, p[i].y, 65, 60);
  }


  //connecting line Kanto Region
  stroke(30, 144, 255)
  strokeWeight(2)
  var gizaLat = 36.460122;
  var gizaLon = 139.691163;
  var distGiza = calcGeoDistance(position.latitude, position.longitude, gizaLat, gizaLon, "km");
  var pointGiza = myMap.latLngToPixel(gizaLat, gizaLon);
  line(coordinates.x, coordinates.y, pointGiza.x, pointGiza.y);

  //Prof Oak - Kanto Region
  var pyramid = myMap.latLngToPixel(36.460122, 139.691163)
  image(prof, pyramid.x, pyramid.y, 50,50)


  //distance Kanto Region
  textFont('Share Tech Mono');
  fill(0)
  textSize(25);
  stroke("white")
  strokeWeight(2)
  text('Distrance from Kanto Region:' + Math.round(distGiza) + 'km', 50, 50);
  text('Berries: countries where Pokémon Go is played the most  ', 50, 90);


}
