# Chatbot Project Setup Guide

## Live Demo

Try the chatbot online: **[Live Demo](https://chatbot-ten-red-65.vercel.app/)**

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

## Important Information

This chatbot uses the Gemini model `gemini-2.5-flash`, which is fast and works well for chatbots. Google shut down `gemini-2.0-flash` in June 2026, so make sure your `API_URL` uses a current model name.

If you need greater reliability for complex answers, you can switch to the stable model `gemini-2.5-pro`. While the free version of this model has stricter request limits, upgrading to a paid plan will remove these restrictions.

To switch to the gemini-2.5-pro stable model, update the model name in `api/chat.js` (for Vercel) or in `script.js` (for local use).

If you still get an error or get stuck, feel free to message me on LinkedIn: www.linkedin.com/in/francis-natus-mugisha-66415529a

---

Happy coding!
