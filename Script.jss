const dailyQuotes = [
  "🌟 You are enough.",
  "💖 You matter more than you realize.",
  "🌈 You are doing your best, and that is more than enough.",
  "☁️ It’s okay to not have everything figured out.",
  "💪 You are stronger than you think.",
  "✨ You bring light into this world.",
  "🧘 You deserve love, joy, and rest.",
  "🤝 You don’t have to carry everything alone.",
  "🌱 You are growing, even if you can’t see it yet.",
  "🦋 You are not broken — you’re becoming."
];

const surpriseQuotes = [
  `<div class="quote-title">You are enough.</div><div class="quote-body">You are enough. 💖</div>`,
  `<div class="quote-title">You matter more than you realize.</div><div class="quote-body">You matter more than you realize. 💞</div>`,
  `<div class="quote-title">You are doing your best, and that is more than enough.</div><div class="quote-body">You are doing your best, and that is more than enough. 🌟</div>`,
  `<div class="quote-title">It’s okay to not have everything figured out.</div><div class="quote-body">It’s okay to not have everything figured out. 🌸</div>`,
  `<div class="quote-title">You are stronger than you think.</div><div class="quote-body">You are stronger than you think. 💪</div>`,
 `<div class="quote-title">You bring light into this world.</div><div class="quote-body">You bring light into this world. 💖</div>`,
  `<div class="quote-title">You deserve love, joy, and rest.</div><div class="quote-body">You deserve love, joy, and rest. 💕</div>`,
  `<div class="quote-title">You don’t have to carry everything alone.</div><div class="quote-body">You don’t have to carry everything alone. 🌈</div>`,
  `<div class="quote-title">You are growing, even if you can’t see it yet.</div><div class="quote-body">You are growing, even if you can’t see it yet. 🌱</div>`,
  `<div class="quote-title">You are not broken — you’re becoming.</div><div class="quote-body">You are not broken — you’re becoming. 🦋</div>`,
  `<div class="quote-title">You are allowed to feel.</div><div class="quote-body">You are allowed to feel. 🍃</div>`,
  `<div class="quote-title">You are unique, and that’s your magic.</div><div class="quote-body">You are unique, and that’s your magic. 🌺</div>`,
  `<div class="quote-title">You’ve made it through 100% of your hardest days.</div><div class="quote-body">You’ve made it through 100% of your hardest days. 💪</div>`,
  `<div class="quote-title">You are more than your mistakes.</div><div class="quote-body">You are more than your mistakes. 🌈</div>`,
  `<div class="quote-title">You are someone’s hope.</div><div class="quote-body">You are someone’s hope. 🌅</div>`,
  `<div class="quote-title">You’re not behind — you’re on your own path.</div><div class="quote-body">You’re not behind — you’re on your own path. 🌿</div>`,
  `<div class="quote-title">You are loved, even when you don’t feel lovable.</div><div class="quote-body">You are loved, even when you don’t feel lovable. ❤️</div>`,
  `<div class="quote-title">You bring joy without even trying.</div><div class="quote-body">You bring joy without even trying. 🌹</div>`,
  `<div class="quote-title">You have permission to rest.</div><div class="quote-body">You have permission to rest. ☁️</div>`,
  `<div class="quote-title">You are valid.</div><div class="quote-body">You are valid. 💓</div>`,
  `<div class="quote-title">You are worthy of good things.</div><div class="quote-body">You are worthy of good things. 💞</div>`,
  `<div class="quote-title">You’re more loved than you know.</div><div class="quote-body">You’re more loved than you know. 💕</div>`,
  `<div class="quote-title">You make a difference.</div><div class="quote-body">You make a difference. 🌠</div>`,
  `<div class="quote-title">You are more than enough — you are a gift.</div><div class="quote-body">You are more than enough — you are a gift. 🎁</div>`,
  `<div class="quote-title">You’re not too much.</div><div class="quote-body">You’re not too much. 💓</div>`,
  `<div class="quote-title">You are allowed to change.</div><div class="quote-body">You are allowed to change. 🌻</div>`,
  `<div class="quote-title">You’re allowed to say no.</div><div class="quote-body">You’re allowed to say no. 🍃</div>`,
  `<div class="quote-title">You’re doing better than you think.</div><div class="quote-body">You’re doing better than you think. 💪</div>`,
  `<div class="quote-title">You are someone worth fighting for.</div><div class="quote-body">You are someone worth fighting for. ❤️</div>`,
  `<div class="quote-title">You don’t have to do everything alone.</div><div class="quote-body">You don’t have to do everything alone. 🕊️</div>`,
  `<div class="quote-title">You are capable of beautiful things.</div><div class="quote-body">You are capable of beautiful things. 🌼</div>`,
  `<div class="quote-title">You’re not failing — you’re learning.</div><div class="quote-body">You’re not failing — you’re learning. 🌺</div>`,
  `<div class="quote-title">You are safe to take up space.</div><div class="quote-body">You are safe to take up space. 🌄</div>`,
  `<div class="quote-title">You are enough, even when you’re still healing.</div><div class="quote-body">You are enough, even when you’re still healing. 🌤️</div>`,
  `<div class="quote-title">You are allowed to be proud of yourself.</div><div class="quote-body">You are allowed to be proud of yourself. 🌟</div>`,
  `<div class="quote-title">You’re not lost — you’re exploring.</div><div class="quote-body">You’re not lost — you’re exploring. 🌅</div>`,
  `<div class="quote-title">You are beautiful in your becoming.</div><div class="quote-body">You are beautiful in your becoming. 🦋</div>`,
  `<div class="quote-title">You are a light, even when you feel dim.</div><div class="quote-body">You are a light, even when you feel dim. 🌄</div>`,
  `<div class="quote-title">You are lovable just as you are.</div><div class="quote-body">You are lovable just as you are. ❤️</div>`,
  `<div class="quote-title">You are still allowed to hope.</div><div class="quote-body">You are still allowed to hope. 🌈</div>`,
  `<div class="quote-title">You are a survivor.</div><div class="quote-body">You are a survivor. 💪</div>`,
  `<div class="quote-title">You are making a difference by existing.</div><div class="quote-body">You are making a difference by existing. 🌠</div>`,
  `<div class="quote-title">You deserve to feel joy.</div><div class="quote-body">You deserve to feel joy. 💖</div>`,
  `<div class="quote-title">You are not alone in how you feel.</div><div class="quote-body">You are not alone in how you feel. ☁️</div>`,
  `<div class="quote-title">You are becoming someone incredible.</div><div class="quote-body">You are becoming someone incredible. 🌼</div>`,
  `<div class="quote-title">You are not behind.</div><div class="quote-body">You are not behind. 🌿</div>`,
  `<div class="quote-title">You are brave for being here.</div><div class="quote-body">You are brave for being here. 💪</div>`,
  `<div class="quote-title">You deserve kindness — from others and from yourself.</div><div class="quote-body">You deserve kindness — from others and from yourself. 💕</div>`,
  `<div class="quote-title">You are still allowed to dream.</div><div class="quote-body">You are still allowed to dream. 🌠</div>`,
  `<div class="quote-title">You are enough, over and over again.</div><div class="quote-body">You are enough, over and over again. 💖</div>`

];

function showDailyQuote() {
  const day = new Date().getDate();
  const index = (day - 1) % dailyQuotes.length;
  document.getElementById("dailyQuote").textContent = dailyQuotes[index];
}

function showSurpriseQuote() {
  const index = Math.floor(Math.random() * surpriseQuotes.length);
  document.getElementById("surpriseMessage").innerHTML = surpriseQuotes[index];
}

function animateButterfly() {
  const butterfly = document.getElementById("butterfly");

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let targetX = x;
  let targetY = y;

  function setNewTarget() {
    targetX = Math.random() * (window.innerWidth - 60);
    targetY = Math.random() * (window.innerHeight - 60);
  }

  function fly() {
    // Move gradually toward target position
    x += (targetX - x) * 0.02;
    y += (targetY - y) * 0.02;

    butterfly.style.left = `${x}px`;
    butterfly.style.top = `${y}px`;

    // If close enough to target, pick a new one
    if (Math.abs(targetX - x) < 1 && Math.abs(targetY - y) < 1) {
      setNewTarget();
    }

    requestAnimationFrame(fly);
  }

  // Initialize
  butterfly.style.left = `${x}px`;
  butterfly.style.top = `${y}px`;
  setNewTarget();
  fly();
}

document.addEventListener("DOMContentLoaded", () => {
  showDailyQuote();
  animateButterfly();
  document.getElementById("surpriseBtn").addEventListener("click", showSurpriseQuote);
});
