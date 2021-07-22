noseX=0;
noseY=0;
function preload() {
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("poseNet is Initialized");
}

function draw() {
    image(video ,0 ,0 ,400 ,400);
    image(mustache,noseX-22,noseY,40,20);
}

function take_snapsot() {
    save('Filter_img.png');
}

function gotPoses(results) {
    
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}