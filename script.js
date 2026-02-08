document.addEventListener("DOMContentLoaded", () => {

  const screens = document.querySelectorAll(".screen");

  const clickSound = document.getElementById("clickSound");
  const yesSound = document.getElementById("yesSound");
  const noSound = document.getElementById("noSound");

  function showScreen(id) {
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  document.getElementById("toScreen2").onclick = () => {
    clickSound.currentTime = 0;
    clickSound.play();
    showScreen("screen2");
  };

  document.getElementById("toScreen3").onclick = () => {
    clickSound.currentTime = 0;
    clickSound.play();
    showScreen("screen3");
  };

  document.getElementById("toScreen4").onclick = () => {
    clickSound.currentTime = 0;
    clickSound.play();
    showScreen("screen4");
  };

  const noBtn = document.getElementById("noBtn");
  const avatar = document.getElementById("avatar");

  noBtn.addEventListener("mouseenter", () => {
    noSound.currentTime = 0;
    noSound.play();
    avatar.src = "assets/avatar-no.png";

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  document.getElementById("yesBtn").onclick = () => {
    yesSound.currentTime = 0;
    yesSound.play();
    avatar.src = "assets/avatar-yes.png";
    setTimeout(() => showScreen("screen5"), 1200);
  };

});
