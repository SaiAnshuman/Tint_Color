function preload(){

}

function setup(){

 canvas = createCanvas(640,460);
 canvas.position(110,250);
 video = createCapture(VIDEO);
 video.hide();

 tint_color="";

}

function draw(){

 image(video,0,0,640,460);

 tint(tint_color);

}

function take_snapshot(){

 save("avacodo.png");

}

function filter_tint(){

 tint_color = document.getElementById("color_name").value;

}