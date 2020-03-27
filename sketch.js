let bodypix;
let video;
let segmentedImage;

function setup(){
  createCanvas(500,350);
  video = createCapture(VIDEO, videoready);
  video.size(320,240);
  segmentedImage = createImage(320,240);
}

function videoready(){
  bodypix = ml5.bodyPix(video, modelReady);
  console.log('videoisready');
}

function modelReady() {
  // segment the image given
  bodypix.segment(gotResults);
  console.log('modelisready');
}

function gotResults(error, result) {
  console.log(result);
  if (error) {
    console.log(error);
    return;
  }
  segmentedImage = result.personMask;
  bodypix.segment(gotResults);
  console.log(result.backgroundMask);
}

function draw(){
  //background(0,240,0);

  image(segmentedImage, 0,0 ,width,height);
}
