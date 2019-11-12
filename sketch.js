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

  flag = loadImage("./assets/flag.png");




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


  //Great Pyramid of Giza
  var pyramid = myMap.latLngToPixel(29.584503, 31.080369)
    image(flag, pyramid.x - 5, pyramid.y - 5, 90, 90)
    imageMode(CENTER)
  	fill('black');
  	text('Great Pyramid of Giza', pyramid.x + 40, pyramid.y);

    //Hanging Gardens of Babylon
    var garden = myMap.latLngToPixel(32.5355, 44.4275)
    image(flag, garden.x - 5, garden.y - 5, 90, 90)
    imageMode(CENTER)
  	fill('black');
  	text('Hanging Gardens of Babylon', garden.x + 40, garden.y);

    //Temple of Artemis at Ephesus
    var temple = myMap.latLngToPixel(37.5659, 27.2150)
    image(flag, temple.x - 5, temple.y - 5, 90, 90);
    imageMode(CENTER);
  	fill('black');
  	text('Temple of Artemis at Ephesus', temple.x + 40, temple.y);

    //Statue of Zeus at Olympia
    var statue = myMap.latLngToPixel(37.38163, 21.3748);
    image(flag, statue.x - 5, statue.y - 5, 90, 90);
    imageMode(CENTER);
    fill('black');
    text('Statue of Zeus at Olympia', statue.x + 40, statue.y);

    //Mausoleum at Halicarnassus
    var mausoleum = myMap.latLngToPixel(37.0379, 27.4241);
    image(flag, mausoleum .x - 5, mausoleum .y - 5, 90, 90);
    imageMode(CENTER);
    fill('black');
    text('Mausoleum at Halicarnassus', mausoleum.x + 40, mausoleum.y);


}
