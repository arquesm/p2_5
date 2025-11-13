let canvas;
let input_txt;
let slider_value;
let value = 0;
let value_r = 255;
let value_g = 255;
let value_b = 255;
let w_r = 20;
let h_r = 20;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  input_txt = createInput("shake 🤪 me");
  slider_value = createSlider(1, 100, 40);
  slider_value.position(20, 60);
  // Check for iOS 13+ and create a button if needed
  if (typeof(DeviceMotionEvent) !== "undefined" && typeof(DeviceMotionEvent.requestPermission) === "function") {
    let button = createButton('click to allow access to sensors');
    button.style('font-size', '28px');
    button.mousePressed(DeviceMotionEvent.requestPermission);
  }
}

function draw() {
  background(value);
  input_txt.position(w_r, h_r);
  fill(value_r, value_g, value_b);
  textSize(slider_value.value());
  text(input_txt.value(), 20, height / 2);
}
function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
  w_r = random(width);
  h_r = random(height);
  value_r = random(255);
  value_g = random(255);
  value_b = random(255);
}
