const screens = document.querySelectorAll(".screen");
const clickSound = document.getElementById("clickSound");
const yesSound = document.getElementById("yesSound");
const noSound = document.getElementById("noSound");

function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

document.getElementById("toScreen2").onclick = () => {
  clickSound.play();
  showScreen("screen2");
};

document.getElementById("toScreen3").onclick = () => {
  clickSound.play();
  showScreen("screen3");
};

document.getElementById("toScreen4").onclick = () => {
  clickSound.play();
  showScreen("screen4");
};

document.getElementById("noBtn").onclick = () => {
  noSound.play();
};

document.getElementById("yesBtn").onclick = () => {
  yesSound.play();

  const avatar = document.getElementById("avatar");
  avatar.src = "assets/avatar-happy.png";

  setTimeout(() => {
    showScreen("screen5");
  }, 2500);
};
