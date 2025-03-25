# AI-Fun-Bot
AI Fun Bot is a simple chatbot that responds with fun jokes, motivational quotes, and witty replies. It consists of a backend built with Node.js &amp; Express and a frontend using React &amp; Vite.

Features
Simple chat interface
Random fun responses
Backend API for processing messages
Modern UI with React & Tailwind CSS

Installation & Setup

Clone the Repository

git clone (https://github.com/Mutwiri-Mwenda/AI-Fun-Bot.git)
cd ai-fun-bot

Backend Setup

cd backend
npm install
node index.js

Backend will start on http://localhost:5000.

3. Frontend Setup

cd ../frontend
npm install
npm run dev

Frontend will be available at http://localhost:5173.
API Endpoints

POST /chat Sends a message and gets a random fun response.

Request:
{ "message": "Tell me a joke!" }

Response:
{ "reply": "Why don’t skeletons fight each other? Because they don’t have the guts!" }
