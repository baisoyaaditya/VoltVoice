# ⚡ VoltVoice – AI Voice Assistant Powered by Gemini

VoltVoice is a real-time voice assistant web app built using Node.js, WebSockets, and Google’s Gemini AI streaming API. It allows users to have smooth, conversational voice interactions directly from the browser — now accessible from any device, anywhere.

---

## 📽️ Demo Video

🎬 Watch the assistant in action :  
🔗 [VoltVoice Demo Video](https://drive.google.com/file/d/INSERT_YOUR_VIDEO_LINK_HERE/view)

---

## 💡 Features

- 🎙️ Real-time voice interaction using the mic  
- ⚡ Fast AI responses via Gemini Live API  
- 🛑 Interrupt AI mid-response with your voice  
- 🔘 Start / Stop Speaking controls  
- 🌓 Dark/Light Theme toggle  
- 💬 Open-topic conversations (not limited to Revolt Motors)  
- 🌍 Works on any browser or device

---

## 🛠️ Tech Stack

| Layer        | Tools / Frameworks |
|--------------|--------------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend**  | Node.js, Express.js |
| **Voice AI** | Google Gemini API (`gemini-2.5-flash-preview-native-audio-dialog`) |
| **Streaming**| WebSocket (client ↔ server audio) |
| **Speech**   | Web Speech API (text-to-speech) |
| **Hosting**  | GitHub + Render (Free Tier) |

---

## 🧾 Environment Variables

Create a `.env` file in the root of your project and add:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
MODEL=gemini-2.5-flash-preview-native-audio-dialog
