document.addEventListener("DOMContentLoaded", () => {
  // Create floating scrapbook decorations
  const page = document.querySelector(".page");
  if (!page) return;

  const decorations = ["♡", "☆", "✦", "○", "✿"];

  for (let i = 0; i < 18; i++) {
    const decoration = document.createElement("span");
    decoration.className = "floating-decoration";
    decoration.textContent =
      decorations[Math.floor(Math.random() * decorations.length)];

    decoration.style.left = Math.random() * 95 + "%";
    decoration.style.top = Math.random() * 95 + "%";
    decoration.style.animationDelay = Math.random() * 5 + "s";
    decoration.style.fontSize = 18 + Math.random() * 30 + "px";

    page.appendChild(decoration);
  }

  // Make little stars appear when clicking the page
  document.addEventListener("click", (event) => {
    const sparkle = document.createElement("span");
    sparkle.className = "click-sparkle";
    sparkle.textContent = "✦";
    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 700);
  });
});
