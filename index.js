let audioAppended = false;

function appendAudio() {
  // Create the audio element
  const audio = document.createElement("audio");
  audio.preload = "auto";
  audio.controls = true;
  audio.autoplay = true;
  audio.currentTime = 43;

  const source2 = document.createElement("source");
  source2.src = "./audios/Ed_Sheeran_Thinking_Out_Loud.mp3";
  source2.type = "audio/mpeg";

  audio.appendChild(source2);

  // Append a fallback text for browsers that do not support the audio element
  audio.appendChild(
    document.createTextNode("Your browser does not support the audio element.")
  );

  // Append the audio element to the body or any other container
  document.querySelector("main").appendChild(audio);
  audioAppended = true;
}

function accepted() {
  if (!audioAppended) {
    this.appendAudio();
  }

  document.querySelector("main").classList.add("active");

  setTimeout(() => {
    alert("Hoje sim Faro! 😍");
  }, 250);
}

function newPosition(min, max) {
  return Math.random() * (max - min) + min + "%";
}

function declined(btn) {
  btn.style.position = "absolute";
  btn.style.bottom = newPosition(10, 90);
  btn.style.left = newPosition(10, 90);
}
