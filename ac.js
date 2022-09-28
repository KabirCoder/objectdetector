var img= "";
var object_detected= "";
var object=[]
var object_status= "";

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    object_detected=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}





function preload() {
    img= loadImage("Ac.jpeg");
}

function draw(){
image(img,0,0,640,420);
// fill("#400080");
// text("AC", 45,75);
// noFill();
// stroke("#400080");
// rect(30, 60, 300, 350);


    if (object_status!="") {
    
        for(var t= 0; t<object.length;t++)
        {
            fill("blue");
            percentage= floor(object[t].confidence*100);
            text(object[t].label+"  "+percentage+"%",object[t].x+15, object[t].y+15);
         noFill();
         rect(object[t].x, object[t].y, object[t].width, object[t].height);
        }
}


}    

function modelloaded(){

    console.log("Model Loaded");
   object_status= true;
   document.getElementById("status").innerHTML="Status:Objects Detected";
   object_detected.detect(img, gotResults);

}

function gotResults(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        object= results;

    }
}