var contador = 0;
var dato = 1;
var rodatnoc = 0;
var otad = 1;
let hue = 0;

// noise field -

var ruido_inc = 0.004;
var density = 30;
var znoise = 0.0;

// offset

var angle = 0.0;
var speed = 0.0002;
var radius = 500.0;

var sx = 3.0;
var sy = 1.5;

function setup() {

    createCanvas(windowWidth, windowHeight);

}

function draw() {

noiseField();

}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function noiseField() {
    // noise field _
    push();

    var xnoise = 0.0;
    var ynoise = 0.0;

    for (var y = 0; y < height; y += density) {
        for (var x = 0; x < width; x += density) {
            var n = noise(xnoise, ynoise, znoise) * 255;
            noStroke();
            //fill(contador, n, contador);
            //fill(50, n, 200);
            fill(contador, 158, n, 200);
            //fill(255, 178, n);

            rect(x, y, density, density);
            xnoise += ruido_inc;
        }
        xnoise += ruido_inc;
        ynoise += ruido_inc;
    }
    znoise += ruido_inc;
}