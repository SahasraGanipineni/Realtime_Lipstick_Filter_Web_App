noseX = 0;
noseY = 0;

function preload(){
    lipstick = loadImage('https://i.postimg.cc/tJyz483b/lipstick.png')
}

function setup(){
    createCanvas(400 , 300);
    video = createCapture(VIDEO);
    video.size(400 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    image(video , 0 , 0 , 400 , 300);
    image(lipstick , noseX , noseY , 55 , 20);
}

function modelLoaded(){
    console.log('PoseNet is Initialized')
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x - 25;
        noseY = results[0].pose.nose.y + 22;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function take_spanshot(){
    save('lipstick.png')
}