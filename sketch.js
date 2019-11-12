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
  pushpin = loadImage("./assets/pushpin.png");




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

    //title
    fill('black');
  	textFont('Alegreya');
    textSize(40);
    stroke("beige") //text stroke
    text('Seven Wonders of the Ancient World', 40, 40);

  coordinates = myMap.latLngToPixel(position.latitude, position.longitude);
  imageMode(CORNER)
  image(pin, coordinates.x, coordinates.y, 120, 110)
  noStroke()


  fill('black');
  textFont('Alegreya');
  textSize(15);
  text('YOU!', coordinates.x + 20, coordinates.y - 20);

  stroke("beige") //text stroke


  //Great Pyramid of Giza
  var pyramid = myMap.latLngToPixel(29.944503, 31.140369)
    image(pushpin, pyramid.x, pyramid.y, 70, 70)
    
  	fill('black');
    textFont('Alegreya');
    textSize(15);
  	text('Great Pyramid of Giza', pyramid.x + 40, pyramid.y);

    //Hanging Gardens of Babylon
    var garden = myMap.latLngToPixel(32.5355, 44.4275)
    image(pushpin, garden.x, garden.y, 70, 70)

  	fill('black');
    textFont('Alegreya');
    textSize(15);
  	text('Hanging Gardens of Babylon', garden.x + 40, garden.y);

    //Temple of Artemis at Ephesus
    var temple = myMap.latLngToPixel(37.5659, 27.2150);
    image(pushpin, temple.x, temple.y , 70, 70);

  	fill('black');
    textFont('Alegreya');
    textSize(15);
  	text('Temple of Artemis at Ephesus', temple.x + 40, temple.y);

    //Statue of Zeus at Olympia
    var statue = myMap.latLngToPixel(37.38163, 21.3748);
    image(pushpin, statue.x, statue.y, 70, 70);

    fill('black');
    textFont('Alegreya');
    textSize(15);
    text('Statue of Zeus at Olympia', statue.x + 40, statue.y);

    //Mausoleum at Halicarnassus
    var mausoleum = myMap.latLngToPixel(37.0379, 27.4241);
    image(pushpin, mausoleum.x, mausoleum.y, 70, 70);

    fill('black');
    textFont('Alegreya');
    textSize(15);
    text('Mausoleum at Halicarnassus', mausoleum.x + 40, mausoleum.y);

    //Colossus of Rhodes
    var colossus = myMap.latLngToPixel(36.2704, 28.1340);
    image(pushpin, colossus.x, colossus.y, 70, 70);

    fill('black');
    textFont('Alegreya');
    textSize(15);
    text('Colossus of Rhodes', colossus.x + 40, colossus.y);

    //Lighthouse of Alexandria
    var light = myMap.latLngToPixel(31.2145675,29.8916889);
    image(pushpin, light.x, light.y, 70, 70);

    fill('black');
    textFont('Alegreya');
    textSize(15);
    text('Lighthouse of Alexandria', light.x + 40, light.y);







}
