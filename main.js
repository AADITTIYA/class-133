img = "";
status = "";
objects = [];


function preload() {
    img = loadImage("dog_cat.jpg");

}

function setup() {
    canvas = createCanvas(700, 400);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", model_loaded);
    document.getElementById("status").innerHTML = "Is detecting objects";

}



function model_loaded() {
    console.log("Model loaded");
    object_detector.detect(img, gotResult);
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);

    } else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(img, 0, 0, 700, 400);

    if(status != ""){

    
    for(i=0;i<objects.lenght;i++){
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        nofill();
        stroke("black");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        percent = floor(objects[i].confidence*100);
        text(objects[i].lable+ " "+percent+"%" ,objects[i].x,objects[i].y)
        

    }
}

}