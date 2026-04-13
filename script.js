const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const questionBox = document.getElementById("question-box");
const resultBox = document.getElementById("result-box");

// YES click
yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
});

// NO button crazy move 😆
noBtn.addEventListener("mouseover", () => {
  moveButton();
});

noBtn.addEventListener("click", () => {
  moveButton();
});

function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // size change 😈
  let size = Math.random() * 30 + 12;
  noBtn.style.fontSize = size + "px";
}