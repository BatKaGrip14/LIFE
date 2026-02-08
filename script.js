const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

document.getElementById("toScreen2").onclick = () => {
  switchScreen(screen1, screen2);
};

document.getElementById("toScreen3").onclick = () => {
  switchScreen(screen2, screen3);
};

function switchScreen(from, to) {
  from.classList.remove("active");
  to.classList.add("active");
}
const screen4 = document.getElementById("screen4");
const avatar = document.getElementById("avatar");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* Move from letter → Valentine screen */
document.getElementById("toScreen4").onclick = () => {
  switchScreen(screen3, screen4);
};

/* ❌ NO BUTTON ESCAPE + AVATAR CHANGE */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 60 - 30;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  avatar.src = "assets/avatar-no.png";
});

/* EXTRA SAFETY */
noBtn.addEventListener("click", () => {
  avatar.src = "assets/avatar-no.png";
});

/* ✅ YES BUTTON */
yesBtn.addEventListener("click", () => {
  avatar.src = "assets/avatar-yes.png";

  setTimeout(() => {
    switchScreen(screen4, screen5);
  }, 1500); // 💖 DELAY
});
