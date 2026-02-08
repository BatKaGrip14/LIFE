const screens = document.querySelectorAll(".screen");

const clickSound = document.getElementById("clickSound");
const yesSound = document.getElementById("yesSound");
const noSound = document.getElementById("noSound");

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Screen navigation
document.getElementById("toScreen2").addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
  showScreen("screen2");
});

document.getElementById("toScreen3").addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
  showScreen("screen3");
});

document.getElementById("toScreen4").addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
  showScreen("screen4");
});

// NO button
document.getElementById("noBtn").addEventListener("click", () => {
  noSound.currentTime = 0;
  noSound.play();
  document.getElementById("avatar").src = "assets/avatar-no.png";
});

// YES button
document.getElementById("yesBtn").addEventListener("click", () => {
  yesSound.currentTime = 0;
  yesSound.play();

  const avatar = document.getElementById("avatar");
  avatar.src = "assets/avatar-yes.png";

  setTimeout(() => {
    showScreen("screen5");
  }, 2500);
});
