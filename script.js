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
  clickSound.play();
  showScreen("screen2");
});

document.getElementById("toScreen3").addEventListener("click", () => {
  clickSound.play();
  showScreen("screen3");
});

document.getElementById("toScreen4").addEventListener("click", () => {
  clickSound.play();
  showScreen("screen4");
});

// No button
document.getElementById("noBtn").addEventListener("click", () => {
  noSound.play();
});

// Yes button
document.getElementById("yesBtn").addEventListener("click", () => {
  yesSound.play();

  const avatar = document.getElementById("avatar");
  avatar.src = "assets/avatar-happy.png";

  setTimeout(() => {
    showScreen("screen5");
  }, 2500);
});
