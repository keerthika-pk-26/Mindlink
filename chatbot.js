const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const suggestions = document.getElementById("suggestions");

// Send message (manual or preset)
function sendMessage(text = null) {
  const userText = text || userInput.value.trim();
  if (!userText) return;

  // Add user message
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = userText;
  chatBox.appendChild(userMessage);

  // Clear input if typed manually
  if (!text) userInput.value = "";

  // Bot typing
  const typing = document.createElement("div");
  typing.className = "bot-message typing";
  typing.textContent = "Typing...";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    typing.remove();

    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerHTML = getBotResponse(userText.toLowerCase());
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

// For preset suggestion buttons
function presetQuestion(text) {
  sendMessage(text);
}

// Bot response logic
function getBotResponse(input) {
  let reply = "";

  if (input.includes("what can you do")) {
    reply = "I can listen to you, comfort you, share calm thoughts, and help you relax 🌸";
    updateSuggestions(["Who are you?", "How do you help?"]);
  } else if (input.includes("who are you")) {
    reply = "I’m your MindLink buddy — your calm companion whenever you need peace 🌿";
    updateSuggestions(["Tell me something positive", "I feel sad"]);
  } else if (input.includes("how do you help")) {
    reply = "I guide you to reflect, breathe, and reconnect with your calm self 💫";
    updateSuggestions(["I feel lonely", "Tell me a quote"]);
  } else if (input.includes("positive")) {
    reply = "Even small steps forward count 🌼 You’re doing great.";
    updateSuggestions(["I feel tired", "I feel angry"]);
  } else if (input.includes("sad")) {
    reply = "It’s okay to feel sad 💛. Every cloud brings new light.";
    updateSuggestions(["Tell me something peaceful", "Thank you"]);
  } else if (input.includes("lonely")) {
    reply = "You’re never alone 💖 I’m here for you anytime.";
    updateSuggestions(["tell me a tamil quote", "I feel stressed"]);
  } else if (input.includes("tired")) {
    reply = "Take a deep breath and rest ☁. The world can wait while you recharge.";
    updateSuggestions(["Everything feels hard", "Tell me a quote"]);
  } else if (input.includes("angry")) {
    reply = "Breathe slowly 🌬️. Let the storm pass and calm return.";
    updateSuggestions(["I feel peaceful", "Let’s start my journey"]);
  } else if (input.includes("tell me a tamil quote")) {
    reply = "🌿 வாழ்க்கை உன்னை சோதிக்கலாம்… ஆனாலும் நீ ஒளிந்திராதே 🌟";
    updateSuggestions(["That's inspiring", "Give another quote"]);
  } else if (input.includes("thank") || input.includes("beautiful")) {
    reply = "Always here for you 💕 Would you like to begin your healing journey?";
    updateSuggestions(["Yes"]);
  } else if (input.includes("yes")) {
    reply = "🌿 Let's start your journey! <br><br><a href='level1.html' class='level-button'>Go to Level 1 ➜</a>";
    suggestions.innerHTML = "";
  } else if (input.includes("tell me something peaceful")) {
    reply = "Almost everything will work again if you unplug it for a few minutes...including you ❤️.";
    updateSuggestions(["I feel tired", "I feel lonely"]);
  } else if (input.includes("stressed") || input.includes("hard") || input.includes("everything feels hard")) {
    reply = "Just breathe for a moment..Everything will be okay 🤍";
    updateSuggestions(["Tell me something peaceful", "I feel tired"]);
  } else if (input.includes("quote") && !input.includes("tamil")) {
    reply = "Sometimes, the most important thing in the whole day is the rest you take between two deep breaths 🍃";
    updateSuggestions(["Tell me something peaceful", "I feel peaceful"]);
  } else if (input.includes("i feel peaceful")) {
    reply = "That sounds good..Always be calm 😊";
    updateSuggestions(["Tell me something positive", "Let's start my journey"]);
  } else if (input.includes("let’s start my journey") || input.includes("lets start my journey")) {
    reply = "<br><br><a href='level1.html' class='level-button'>Go to Level 1 ➜</a>";
    suggestions.innerHTML = "";
  } else {
    // Default fallback
    reply = "🌿 Let's start your journey! <br><br><a href='level1.html' class='level-button'>Go to Level 1 ➜</a>";
    updateSuggestions(["What can you do?", "Tell me something positive"]);
  }

  return reply;
}

// Update suggestion buttons
function updateSuggestions(list) {
  suggestions.innerHTML = "";
  list.forEach(text => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = () => presetQuestion(text); // safely call preset
    suggestions.appendChild(btn);
  });
}

// Event listener for pressing Enter key
userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
    e.preventDefault();
  }
});
