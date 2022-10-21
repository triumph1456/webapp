function preload() {    
}

function setup()  {
  canvas = createCanvas(300,300);
  canvas.center(); 
  video = creatCapture(VIDEO);
  vidoe.size(300,300);
  video.hide();


  posNet = ml5.posNet(video, modelLoaded)
  posNet.on('pose', gotPoses)
} 

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw() {
   background(255)
   image(video, 0,0,300,300);
   filter(INVERT);
}

function take_snapshot() {
save ('myFilterImage.png')    
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("nose x = "+ results[0].pose.nose.x);
    console.log("nose y = "+ results[0].pose.nose.y);
  }
}