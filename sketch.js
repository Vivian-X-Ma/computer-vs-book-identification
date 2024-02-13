let classifier;
let video
let lable 

function preload() {
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NwJbobdR/model.json");  
  
}

function setup() {
  createCanvas(640, 520);
  video = createCapture(VIDEO);
  label = "waiting...";
  video.hide();
  classifyVideo();
}

function classifyVideo() {
    classifier.classify(video,gotResults);
}
  
function draw() {
  background(0);
  image(video, 0, 0);
  textSize(35);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height -18);
}
  

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}   
  