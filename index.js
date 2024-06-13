let audioAppended = false;

function appendAudio() {
  // Create the audio element
  const audio = document.createElement("audio");
  audio.preload = "auto";
  audio.controls = true;
  audio.autoplay = true;
  audio.currentTime = 58.4;

  const source2 = document.createElement("source");
  source2.src = "./audios/bryan_adams_heaven.mp3";
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
  document.querySelector("main").classList.add("active");

  if (!audioAppended) {
    this.appendAudio();
  }

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
