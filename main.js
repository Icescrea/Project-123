function setup(){

  canvas = createCanvas(550,550);
  canvas.position(550,150);
  video = createCapture(VIDEO);
  video.size (550,550)
  posenet = ml5.poseNet (video,modelLoaded)
posenet.on('pose',gotposes)

}

function modelLoaded(){

    console.log("posenet is inisalised")
    
}

function gotposes(results){

if (results.length > 0 ) {

    console.log(results)

}

}

function draw() {

background ("gray")

}