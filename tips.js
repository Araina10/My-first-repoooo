// ===== CLICK TO COMPLETE TIPS =====
const tips = document.querySelectorAll(".tips-box li");

tips.forEach(tip => {
    tip.addEventListener("click", () => {
        tip.classList.toggle("done");
    });
});


// ===== RANDOM TIP GENERATOR =====
function giveTip() {
  const tipsList = [
    "Turn off lights when leaving a room 💡",
    "Bring a reusable water bottle 🥤",
    "Take shorter showers 🚿",
    "Recycle properly ♻️",
    "Walk for short trips 🚶",
    "Unplug electronics when not in use 🔌",
    "Don’t waste food 🍽️",
    "Use both sides of paper 📄"
  ];

  const randomTip = tipsList[Math.floor(Math.random() * tipsList.length)];
  document.getElementById("tipText").textContent = randomTip;
}
