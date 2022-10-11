let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {

    const audio = new Audio();
    audio.src = "./timer_beep.mp3";
    audio.play();
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else if(buttonText=="Sin"){
      screen.value = Math.sin(screenValue)
    }
    else if(buttonText=="Cos"){
      screen.value = Math.cos(screenValue)
    }
    else if(buttonText=="Tan"){
      screen.value = Math.tan(screenValue)
    }
    else if(buttonText=="Pi"){
      screen.value = Math.PI
    }
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
