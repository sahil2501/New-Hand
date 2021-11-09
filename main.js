Webcam.set({
    width:350,
    height:300,
    png:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'camera_display' src = " + data_uri + ">";
    });
}

function modelLoaded() {
    console.log("Model Loaded!");
}

//https://teachablemachine.withgoogle.com/models/1a1-2-4B_/