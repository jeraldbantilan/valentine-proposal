function sayYes() {
  document.getElementById("result").innerHTML =
    "🎉 Deployment successful! 💕<br>You are now officially my Valentine.<br><br>❤️ No rollbacks allowed ❤️";
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 100) - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
