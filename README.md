# ⚡ VoltVoice – AI Voice Assistant Powered by Cohere

VoltVoice is a real-time voice assistant web app built using Node.js and Cohere’s language API. It allows users to have smooth, conversational voice interactions directly from the browser.

---

## 📽️ Demo Video

🎬 Watch the assistant in action :  
🔗 [VoltVoice Demo Video](https://drive.google.com/file/d/1f1p4mYbAhIFcH_US6PTaOrg9zEW70v5D/view?usp=drivesdk)


---

## 💡 Features

- 🎙️ Real-time voice interaction using the mic  
- ⚡ Fast AI responses via Cohere API  
- 🛑 Interrupt AI mid-response with your voice  
- 🔘 Start / Stop Speaking controls  
- 🌓 Dark/Light Theme toggle  
- 💬 Open-topic conversations  
- 🌍 Works on any browser or device

---

## 🛠️ Tech Stack

| Layer        | Tools / Frameworks |
|--------------|--------------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend**  | Node.js, Express.js |
| **Voice AI** | Cohere Generate API |
| **Streaming**| WebSocket (client ↔ server audio) |
| **Speech**   | Web Speech API (text-to-speech) |

---

## ⚙️ Flexibility

You can easily swap out the AI backend — VoltVoice supports integration with any web-compatible AI API, including Cohere, OpenAI, Gemini, or other RESTful services. Simply update the backend logic accordingly.

---

## 🧾 Environment Variables

Create a `.env` file in the root of your project and add:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here

