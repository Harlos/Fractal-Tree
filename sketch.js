var sentence = "F";
var tree = [];
var len = 10;
var angle;
var slider;
var xoff = 0;
var weight;

var rule = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

function setup() {
  createCanvas(500, 500);
  background(52);
  for (var i = 0; i < 4; i++)
    newSentense();
  angle = radians(20);
  turtle();
  weight = 5;
}

function newSentense() {
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    if (current == rule.a)
      current = rule.b;
    else
      current = current;
    nextSentence += current;
  }
  sentence = nextSentence;
  turtle();
}

function turtle(dif) {
  background(52);
  resetMatrix();
  translate(width / 3, height);
  for (var i = 0; i < sentence.length; i++)
    switch (sentence.charAt(i)) {
      case "F":
        strokeWeight(weight/3);
        line(0, 0, 0, -len);
        translate(0, -len);
        break;
      case "-":
        rotate(-angle + dif * weight);
        break;
      case "+":
        rotate(angle + dif * weight);
        break;
      case "[":
        push();
        weight -= 1;
        break;
      case "]":
        pop();
        weight += 1;
        break;
    }
}

function draw() {
  var dif = 0.001 * map(noise(xoff), 0, 1, 0, PI);
  xoff += 0.1;
  turtle(dif);
}