const screens = {
  screen1: document.getElementById("screen1"),
  screen2: document.getElementById("screen2"),
  screen3: document.getElementById("screen3"),
  screen4: document.getElementById("screen4"),
  screen5: document.getElementById("screen5"),
};

function showScreen(id) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[id].classList.add("active");
}

document.getElementById("toScreen2").onclick = () => showScreen("screen2");
document.getElementById("toScreen3").onclick = () => showScreen("screen3");
document.getElementById("toScreen4").onclick = () => showScreen("screen4");

const avatar = document.getElementById("avatar");
document.getElementById("noBtn").onmouseenter = () => {
  avatar.src = "assets/avatar-no.png";
};

document.getElementById("yesBtn").onclick = () => {
  avatar.src = "assets/avatar-yes.png";
  setTimeout(() => showScreen("screen5"), 1500);
};
