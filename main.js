x = 0;
y = 0;

screen_width = 0;
screen_height = 0;
draw_apple = "";
speak_data = "";
to_number = "";

function preload(){
  apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
to_number = Numer(content);

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    if(Number.isInteger)
    {
      document.getElementById("status").innerHTML = "Started drawing apple ";
      draw_apple = "set";
    }
    else
    {
      document.getElementById("status").innerHTML = "The speech has not recognised a number ";
    }

}

function setup(){
  canvas = createCanvas(1000, 350);
  canvas.center();

}
function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
