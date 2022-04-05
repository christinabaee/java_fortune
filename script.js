
var outputParagraph;

document.addEventListener("DOMContentLoaded", function(){

  var outputParagraph = document.getElementById('outputText');
  var restylebutton = document.getElementById("restyle-button");

  document.getElementById("half-button").addEventListener("click",halfNumber);
  function halfNumber(){
    var inputContents = document.getElementById("myInput").value;
    alert("Half of " + inputContents+ " is " +inputContents/2);
  }

  var heading=document.getElementById("title");
  heading.style.color="orange";


  document.getElementById("fortune-button").addEventListener("click",fortune);
  function fortune(){
    var fortuneArray=["will be full of luck", "will not go as planned", "will have surprises"];
    randomindex= Math.floor(Math.random()*fortuneArray.length);
    var outputParagraph = document.getElementById('outputText');
    var currentInputText=fortuneinput.value;
    outputParagraph.style.fontSize="50px";
    outputParagraph.innerHTML= currentInputText+"'s day "+fortuneArray[randomindex];
  }

  restylebutton.addEventListener("click",restyle);
  function restyle(){

    var randomRed = Math.floor(Math.random()*255);
    var randomGreen = Math.floor(Math.random()*255);
    var randomBlue= Math.floor(Math.random()*255);

    var fontArray=["Georgia","Garamond","Times New Roman","Brush Script MT"];
    var randomindex1= Math.floor(Math.random()*fontArray.length);
    var randRot = (Math.random()*20)-10;

    var outputColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    outputParagraph.style.color = outputColor;
    outputParagraph.style.transform = "rotate(" + randRot + "deg)";
    outputParagraph.style.fontFamily= ""+ fontArray[randomindex1] + "";
  }

});
