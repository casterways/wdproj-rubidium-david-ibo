//creates new audio
let starClick = new Audio();
//sets and plays randomly selected audio
function audio() {

  starClick.src = randAudio(randNum());
  starClick.play();
}

//funtion for randomly generating an integer
function randNum() {
  return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
}

//randomizes audio
function randAudio(x) {
  switch (x){
    case 1:
      return "https://cdn.glitch.global/4526fff3-f81b-4a69-852a-05c552df4c13/clickb1.mp3?v=1734880352485";
      break;
    case 2:
      return "https://cdn.glitch.global/4526fff3-f81b-4a69-852a-05c552df4c13/clickb2.mp3?v=1734880367102";
      break;
    case 3:
      return "https://cdn.glitch.global/4526fff3-f81b-4a69-852a-05c552df4c13/clickb3.mp3?v=1734880791578";
      break;
    case 4:
      return "https://cdn.glitch.global/4526fff3-f81b-4a69-852a-05c552df4c13/clickb4.mp3?v=1734880810381";
      break;
    case 5:
      return "https://cdn.glitch.global/4526fff3-f81b-4a69-852a-05c552df4c13/clickb5.mp3?v=1734880825594";
      break;
    case 6:
      return "https://cdn.glitch.global/4526fff3-f81b-4a69-852a-05c552df4c13/clickb6.mp3?v=1734880836745";
      break;
    case 7:
      return "https://cdn.glitch.global/4526fff3-f81b-4a69-852a-05c552df4c13/clickb7.mp3?v=1734880846836";
      break;
  }
}