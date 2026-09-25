
#  DukaanSaathi AI

**Autonomous AI Business Partner for Indian Kirana Merchants**

*A submission for the Paytm Build for India AI Hackathon – Mumbai Edition (Merchant Growth AI Track)*



> **DukaanSaathi AI** is a smart, accessible dashboard and voice-activated AI assistant tailored for Paytm merchants. It translates complex store data into proactive, simple-language insights and autonomous actions.

---

## The Problem

India's millions of SMBs and Kirana stores form the backbone of retail, yet they lack access to affordable, data-driven business intelligence.

*  Complex retail software is too expensive and difficult to learn.
*  Manual ledgers lead to missed growth opportunities.
*  No automated way to track dormant customers and re-engage them.

##  Our Solution

Instead of just showing static graphs, DukaanSaathi acts as an **autonomous AI teammate**. It spots trends, recommends actions, and executes retention campaigns via SMS—all through natural conversational voice and chat commands.

---

##  Features & Roadmap

###  Current Prototype (Hackathon Submission)

| Feature | Description |
| --- | --- |
|  **Smart Dashboard UI** | Clean, responsive Next.js interface with daily sales & footfall analytics. |
|  **Voice & Chat Assistant** | Interactive modal to request data and execute campaigns naturally. |
|  **Simulated Action Pipeline** | Keyword-driven AI response system demonstrating the insight-to-action workflow. |
|  **Live Deployment** | Fully hosted and accessible instantly on any device via Vercel. |

###  Production Roadmap (October 3rd Sprint)

* **Live LLM Integration:** Transitioning to **Groq (Llama 3)** and **Google Gemini** APIs for dynamic reasoning.
* **Live Database:** Integrating **MongoDB / Supabase** to fetch real-time merchant transaction data.
* **Twilio SMS Execution:** Enabling the AI to autonomously dispatch real promotional SMS campaigns to actual phone numbers.

---

##  Tech Stack

* **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
* **Hosting:** Vercel
* **Upcoming Backend:** Groq API, Gemini API, Twilio API, MongoDB

---

##  Local Setup Instructions

To run this prototype on your own machine:

```bash
# 1. Clone the repository
git clone [https://github.com/tejasveepatil12/dukaansaathi-ai.git](https://github.com/tejasveepatil12/dukaansaathi-ai.git)

# 2. Navigate to the directory
cd dukaansaathi-ai

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

```

*Open [http://localhost:3000](http://localhost:3000?utm_source=gemini) in your browser to view the application.*
