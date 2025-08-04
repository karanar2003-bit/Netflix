// Typing Effect for Heading
const text = "Unlimited Movies, TV Shows and More!";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// Get Started Button Function
function getStarted() {
  const email = document.getElementById("email").value;
  if (email === "") {
    alert("❌ Please enter your email address!");
  } else if (!email.includes("@")) {
    alert("⚠️ Please enter a valid email!");
  } else {
    alert("✅ Thank you! Membership started for: " + email);
  }
}
