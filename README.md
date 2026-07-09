# Chatbot Project Setup Guide

## Live Demo

After you deploy to Vercel, add your live link here:

**[Live Demo](https://your-vercel-url.vercel.app)** ← replace with your real Vercel URL

## Get Your API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Navigate to the API key section and create a new API key.

**Note:** The API is free but has a limited number of usage requests.

## Run Locally

1. Clone the repository:
	```bash
	git clone https://github.com/francisnatusm/Chatbot.git
	cd Chatbot
	```
2. Open `script.js` and replace `PASTE-YOUR-API-KEY` with your actual API key.
3. Open `index.html` in your browser.

## Deploy to Vercel

The live demo uses a Vercel serverless function so your API key stays on the server.

1. Push this repo to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import the `francisnatusm/Chatbot` repository.
3. Add an environment variable:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** your Gemini API key
4. Click **Deploy**.

After deployment, add your live URL to the **Live Demo** link at the top of this README.

## Important Information

This chatbot uses the Gemini model `gemini-2.5-flash`, which is fast and works well for chatbots. Google shut down `gemini-2.0-flash` in June 2026, so make sure your `API_URL` uses a current model name.

If you need greater reliability for complex answers, you can switch to the stable model `gemini-2.5-pro`. While the free version of this model has stricter request limits, upgrading to a paid plan will remove these restrictions.

To switch to the gemini-2.5-pro stable model, update the model name in `api/chat.js` (for Vercel) or in `script.js` (for local use).

If you still get an error or get stuck, feel free to message me on LinkedIn: www.linkedin.com/in/francis-natus-mugisha-66415529a

---

Happy coding!
