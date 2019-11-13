var myMap;
var canvas;

var position;

//loading map from mapbox
var mappa = new Mappa('MapboxGL',
  'pk.eyJ1Ijoic25vd2RpbjE2IiwiYSI6ImNrMm4yeDF1NTBtZWEzaW41bndlcDZtazQifQ.qaidFM19qHeTtXx0ClItmg');


var options = {
  lat: 0,
  lng: 0,
  zoom: 7,
  studio: true,
  style: "mapbox://styles/snowdin16/ck2uwvo9007kq1co6mephjjhg"
}


 var coordinates; //mycoordinates

function preload() {
  position = getCurrentPosition();
  console.log(position); //i'm here!!

  pin = loadImage("./assets/pin.png"); //pointer
  flag = loadImage("./assets/flag.png");
  pushpin = loadImage("./assets/pushpin.png");

  compass = loadImage("./assets/compass.png")

  giza = loadImage("./assets/giza.png");
  babylon = loadImage("./assets/babylon.png");
  artemis = loadImage("./assets/artemis.png");
  zeus = loadImage("./assets/zeus.png");
  hali = loadImage("./assets/halicarnassus.png");
  rodi = loadImage("./assets/rodi.png");
  alexandria = loadImage("./assets/alexandria.png");
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
  strokeWeight(5);
  stroke("beige") //text stroke
  text('Seven Wonders of the Ancient World', 40, 140);
  //compass
  imageMode(CENTER)
  image(compass, 300, 150, 250, 250)
  //another title
  fill('black');
  textFont('Alegreya');
  textSize(25);
  strokeWeight(5);
  stroke("beige") //text stroke
  text('Start from your location and go explore!', 120, 180);


  //user location + hand pin image
  coordinates = myMap.latLngToPixel(position.latitude, position.longitude);
  imageMode(CORNER)
  ellipse(coordinates.x, coordinates.y, 10, 10);
  image(pin, coordinates.x, coordinates.y, 120, 110);
  fill('black');
  textFont('Alegreya');
  textSize(25);
  strokeWeight(5);
  text('YOU!', coordinates.x + 20, coordinates.y - 10);
  stroke("beige") //text stroke


  //THE 7 WONDERS

  //Great Pyramid of Giza
  var pyramid = myMap.latLngToPixel(29.944503, 31.140369)
  image(giza, pyramid.x - 50, pyramid.y + 20, 140, 90)
  image(pushpin, pyramid.x, pyramid.y, 70, 70)

  fill('black');
  textFont('Alegreya');
  textSize(15);
  strokeWeight(5);
  stroke("beige") //text stroke
  text('Great Pyramid of Giza', pyramid.x + 40, pyramid.y);

  //connecting line Giza
  var gizaLat = 29.944503;
  var gizaLon = 31.140369;
  stroke("SteelBlue")
  strokeWeight(0.5)
  var distGiza = calcGeoDistance(position.latitude, position.longitude, gizaLat, gizaLon, "km");
  var pointGiza = myMap.latLngToPixel(gizaLat, gizaLon);
  line(coordinates.x, coordinates.y, pointGiza.x, pointGiza.y);

  //distance number Giza
  textFont('Alegreya');
  textSize(18);
  text('Distrance from Great Pyramid of Giza:  ' + Math.round(distGiza) + 'km', 40, 600);

  //Hanging Gardens of Babylon
  var garden = myMap.latLngToPixel(32.5355, 44.4275);
  image(babylon, garden.x - 50, garden.y + 20, 120, 70);
  image(pushpin, garden.x, garden.y, 70, 70);

  fill('black');
  textFont('Alegreya');
  textSize(15);
  strokeWeight(5);
  stroke("beige") //text stroke
  text('Hanging Gardens of Babylon', garden.x + 40, garden.y);

  //connecting line Babylon
  var babylonLat = 32.5355;
  var babylonLon = 44.4275;
  stroke("SteelBlue")
  strokeWeight(0.5)
  var distBabylon = calcGeoDistance(position.latitude, position.longitude, babylonLat, babylonLon, "km");
  var pointBabylon = myMap.latLngToPixel(babylonLat, babylonLon);
  line(coordinates.x, coordinates.y, pointBabylon.x, pointBabylon.y);

  //distance number Babylon
  textFont('Alegreya');
  textSize(18);
  text('Distrance from Hanging Gardens of Babylon:  ' + Math.round(distBabylon) + 'km', 40, 620);

  //Temple of Artemis at Ephesus
  var temple = myMap.latLngToPixel(37.9494454, 27.3639686);
  image(artemis, temple.x - 60, temple.y + 20, 130, 90);
  image(pushpin, temple.x, temple.y, 70, 70);

  fill('black');
  textFont('Alegreya');
  textSize(15);
  strokeWeight(5);
  stroke("beige") //text stroke
  text('Temple of Artemis at Ephesus', temple.x + 40, temple.y);

  //connecting line Ephesus
  var ephesusLat = 37.9494454;
  var ephesusLon = 27.3639686;
  stroke("SteelBlue")
  strokeWeight(0.5)
  var distEphesus = calcGeoDistance(position.latitude, position.longitude, ephesusLat, ephesusLon, "km");
  var pointEphesus = myMap.latLngToPixel(ephesusLat, ephesusLon);
  line(coordinates.x, coordinates.y, pointEphesus.x, pointEphesus.y);

  //distance number Ephesus
  textFont('Alegreya');
  textSize(18);
  text('Distrance from Temple of Artemis at Ephesus:  ' + Math.round(distEphesus) + 'km', 40, 640);

  //Statue of Zeus at Olympia
  var statue = myMap.latLngToPixel(37.6385388, 21.6298566);
  image(zeus, statue.x - 30, statue.y, 70, 120);
  image(pushpin, statue.x, statue.y, 70, 70);

  fill('black');
  textFont('Alegreya');
  textSize(15);
  strokeWeight(5);
  stroke("beige") //text stroke
  text('Statue of Zeus at Olympia', statue.x + 40, statue.y);

  //connecting line Olympia
  var olympiaLat = 37.6385388;
  var olympiaLon = 21.6298566;
  stroke("SteelBlue")
  strokeWeight(0.5)
  var distOlympia = calcGeoDistance(position.latitude, position.longitude, olympiaLat, olympiaLon, "km");
  var pointOlympia = myMap.latLngToPixel(olympiaLat, olympiaLon);
  line(coordinates.x, coordinates.y, pointOlympia.x, pointOlympia.y);

  //distance number Olympia
  textFont('Alegreya');
  textSize(18);
  text('Distrance from Statue of Zeus at Olympia:  ' + Math.round(distOlympia) + 'km', 40, 660);

  //Mausoleum at Halicarnassus
  var mausoleum = myMap.latLngToPixel(37.0377878, 27.4240785);
  image(hali, mausoleum.x - 30, mausoleum.y, 90, 130);
  image(pushpin, mausoleum.x, mausoleum.y, 70, 70);

  fill('black');
  textFont('Alegreya');
  textSize(15);
  strokeWeight(5);
  stroke("beige") //text stroke
  text('Mausoleum at Halicarnassus', mausoleum.x + 40, mausoleum.y);

  //connecting line Halicarnassus
  var halicarnassusLat = 37.0377878;
  var halicarnassusLon = 27.4240785;
  stroke("SteelBlue")
  strokeWeight(0.5)
  var distHalicarnassus = calcGeoDistance(position.latitude, position.longitude, halicarnassusLat, halicarnassusLon, "km");
  var pointHalicarnassus = myMap.latLngToPixel(halicarnassusLat, halicarnassusLon);
  line(coordinates.x, coordinates.y, pointHalicarnassus.x, pointHalicarnassus.y);

  //distance number Halicarnassus
  textFont('Alegreya');
  textSize(18);
  text('Distrance from Mausoleum at Halicarnassus:  ' + Math.round(distHalicarnassus) + 'km', 40, 680);

  //Colossus of Rhodes
  var colossus = myMap.latLngToPixel(36.451316, 28.2261151);
  image(rodi, colossus.x - 30, colossus.y, 70, 140);
  image(pushpin, colossus.x, colossus.y, 70, 70);

  fill('black');
  textFont('Alegreya');
  textSize(15);
  strokeWeight(5);
  stroke("beige") //text stroke
  text('Colossus of Rhodes', colossus.x + 40, colossus.y);

  //connecting line Rhodes
  var rhodesLat = 36.451316;
  var rhodesLon = 28.2261151;
  stroke("SteelBlue")
  strokeWeight(0.5)
  var distRhodes = calcGeoDistance(position.latitude, position.longitude, rhodesLat, rhodesLon, "km");
  var pointRhodes = myMap.latLngToPixel(rhodesLat, rhodesLon);
  line(coordinates.x, coordinates.y, pointRhodes.x, pointRhodes.y);

  //distance number Rhodes
  textFont('Alegreya');
  textSize(18);
  text('Distrance from Colossus of Rhodes:  ' + Math.round(distRhodes) + 'km', 40, 700);

  //Lighthouse of Alexandria
  var light = myMap.latLngToPixel(31.2145675, 29.8916889);
  image(alexandria, light.x - 40, light.y, 100, 120);
  image(pushpin, light.x, light.y, 70, 70);

  fill('black');
  textFont('Alegreya');
  textSize(15);
  strokeWeight(5);
  stroke("beige") //text stroke
  text('Lighthouse of Alexandria', light.x + 40, light.y);

  //connecting line Alexandria
  var alexandriaLat = 31.2145675;
  var alexandriaLon = 29.8916889;
  stroke("SteelBlue")
  strokeWeight(0.5)
  var distAlexandria = calcGeoDistance(position.latitude, position.longitude, alexandriaLat, alexandriaLon, "km");
  var pointAlexandria = myMap.latLngToPixel(alexandriaLat, alexandriaLon);
  line(coordinates.x, coordinates.y, pointAlexandria.x, pointAlexandria.y);

  //distance number Alexandria
  textFont('Alegreya');
  textSize(18);
  text('Distrance from Lighthouse of Alexandria:  ' + Math.round(distAlexandria) + 'km', 40, 720);

}
