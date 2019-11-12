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

  stroke("beige") //text stroke


  //Great Pyramid of Giza
  var pyramid = myMap.latLngToPixel(29.944503, 31.140369)
    image(flag, pyramid.x, pyramid.y, 90, 90)
    imageMode(CENTER)
  	fill('black');
    textFont('Alegreya');
  	text('Great Pyramid of Giza', pyramid.x + 40, pyramid.y);

    //Hanging Gardens of Babylon
    var garden = myMap.latLngToPixel(32.5355, 44.4275)
    image(flag, garden.x, garden.y, 90, 90)
    imageMode(CENTER)
  	fill('black');
    textFont('Alegreya');
  	text('Hanging Gardens of Babylon', garden.x + 40, garden.y);

    //Temple of Artemis at Ephesus
    var temple = myMap.latLngToPixel(37.5659, 27.2150);
    image(flag, temple.x, temple.y , 90, 90);
    imageMode(CENTER);
  	fill('black');
    textFont('Alegreya');
  	text('Temple of Artemis at Ephesus', temple.x + 40, temple.y);

    //Statue of Zeus at Olympia
    var statue = myMap.latLngToPixel(37.38163, 21.3748);
    image(flag, statue.x, statue.y, 90, 90);
    imageMode(CENTER);
    fill('black');
    textFont('Alegreya');
    text('Statue of Zeus at Olympia', statue.x + 40, statue.y);

    //Mausoleum at Halicarnassus
    var mausoleum = myMap.latLngToPixel(37.0379, 27.4241);
    image(flag, mausoleum.x, mausoleum.y, 90, 90);
    imageMode(CENTER);
    fill('black');
    textFont('Alegreya');
    text('Mausoleum at Halicarnassus', mausoleum.x + 40, mausoleum.y);

    //Colossus of Rhodes
    var colossus = myMap.latLngToPixel(36.2704, 28.1340);
    image(flag, colossus.x, colossus.y, 90, 90);
    imageMode(CENTER);
    fill('black');
    textFont('Alegreya');
    text('Colossus of Rhodes', colossus.x + 40, colossus.y);

    //Lighthouse of Alexandria
    var light = myMap.latLngToPixel(31.2168129,29.885175);
    image(flag, light.x, light.y, 90, 90);
    imageMode(CENTER);
    fill('black');
    textFont('Alegreya');
    text('Lighthouse of Alexandria', light.x + 40, light.y);


}
