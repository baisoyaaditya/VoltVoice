document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  const themeToggle = document.getElementById("theme-toggle");
  const transcriptText = document.getElementById("transcript");
  const outputText = document.getElementById("output");

  const synth = window.speechSynthesis;
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;

  let speaking = false;
  let speakingUtterance = null;

  startBtn.onclick = () => {
    recognition.start();
    transcriptText.innerText = "Listening...";
  };

  stopBtn.onclick = () => {
    recognition.stop();
    if (speakingUtterance) synth.cancel();
  };
  
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
  }

  toggleBtn.onclick = () => {
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
  };

  recognition.onresult = async (event) => {
    const userInput = event.results[0][0].transcript;
    transcriptText.innerText = "You: " + userInput;
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();
      const reply = data.reply;
      outputText.innerText = "VoltVoice: " + reply;

      if (speakingUtterance) synth.cancel();

      speakingUtterance = new SpeechSynthesisUtterance(reply);
      synth.speak(speakingUtterance);
    } catch (err) {
      outputText.innerText = "Error: " + err.message;
    }
  };

  recognition.onerror = (event) => {
    outputText.innerText = "Recognition Error: " + event.error;
  };

});
