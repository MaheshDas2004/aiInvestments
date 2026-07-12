# 📈 InvestIQ AI – AI-Powered Investment Research Agent

An AI-powered multi-agent investment research platform that simulates how an investment committee evaluates publicly traded companies. Instead of providing a simple Buy or Sell recommendation, the system generates Bull and Bear analyses, lets an AI Judge evaluate both perspectives, and produces a structured investment report with an AI score and investment memo.

---

# 🚀 Live Demo

### Live Application

https://aiinvestments-2.onrender.com

### Backend API

https://aiinvestments.onrender.com

### GitHub Repository

https://github.com/MaheshDas2004/aiInvestments

---

# 📖 Overview

InvestIQ AI helps users analyze publicly traded companies using financial data and Large Language Models (LLMs).

When a user searches for a company, the application:

* Retrieves the latest financial information.
* Generates a Bull Case (positive investment arguments).
* Generates a Bear Case (risks and concerns).
* Uses an AI Judge to compare both analyses.
* Produces a final investment recommendation.
* Generates an Investment Memo.
* Creates a quantitative Score Breakdown.
* Displays the entire report through a modern interactive dashboard.

The objective is to make AI-generated investment research transparent and explainable instead of producing a black-box recommendation.

---

# ✨ Features

* 🔐 JWT Authentication
* 🍪 HTTP-only Cookie-based Login
* 🔍 Company Search
* 📊 Live Financial Data
* 🟢 Bull Investment Analysis
* 🔴 Bear Investment Analysis
* ⚖️ AI Judge Decision
* 📈 AI Investment Score
* 📝 Investment Memo
* 📊 Financial Score Breakdown
* 🎨 Modern Responsive UI
* ☁️ Full Stack Deployment on Render

---

# 🛠 Tech Stack

## Frontend

* React
* React Router
* Tailwind CSS
* Framer Motion
* Axios

## Backend

* Node.js
* Express.js
* PostgreSQL
* JWT Authentication
* bcrypt

## AI

* LangChain
* Groq (Llama 3)
* Prompt Engineering
* Zod Structured Outputs
* Multi-Agent Workflow

## Deployment

* Render Static Site
* Render Web Service
* Render PostgreSQL

---

# ⚙️ How to Run

## Clone Repository

```bash
git clone https://github.com/MaheshDas2004/aiInvestments.git
cd aiInvestments
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file.

```env
PORT=5000

DB_HOST=your_database_host
DB_PORT=5432
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

JWT_SECRET=your_secret

FMP_API_KEY=your_financial_modeling_prep_key

GROQ_API_KEY=your_groq_api_key

CLIENT_URL=http://localhost:5173

NODE_ENV=development
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env`

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

# 🧠 How It Works

## Overall Workflow

```
User

↓

Search Company

↓

Resolve Stock Symbol

↓

Fetch Financial Data

↓

Bull Analyst
        +
Bear Analyst

↓

AI Judge

↓

Investment Memo

↓

Score Breakdown

↓

React Dashboard
```

---

## AI Workflow

The application follows a multi-agent architecture.

### Step 1 – Financial Data

The backend searches the company and fetches financial information such as:

* Revenue
* Net Income
* EPS
* Market Capitalization
* Return on Equity
* Current Ratio
* Enterprise Value

---

### Step 2 – Bull Analyst

The Bull agent analyzes the financial data and generates positive investment arguments explaining why the company could be a good investment.

---

### Step 3 – Bear Analyst

The Bear agent independently analyzes the same financial data and generates risks, weaknesses, valuation concerns, and potential downside.

---

### Step 4 – AI Judge

The Judge compares both analyses and acts as an investment committee.

It generates:

* Final Recommendation
* Confidence Score
* AI Score
* Financial Scores
* Reasoning

---

### Step 5 – Investment Memo

Finally, an Investment Memo summarizes:

* Investment Thesis
* Company Strengths
* Key Risks
* Long-Term Outlook

The complete report is then displayed on the frontend.

---

# 🏗 Architecture

```
React Frontend

        │

        ▼

Express Backend

        │

        ▼

Research Service

        │

        ▼

Financial Data API

        │

        ▼

Bull Chain

        │

Bear Chain

        │

        ▼

Judge Chain

        │

        ▼

Investment Memo

        │

        ▼

React Dashboard
```

---

# ⚖️ Key Decisions & Trade-offs

## Design Decisions

* Used LangChain to organize multiple AI chains.
* Implemented Bull and Bear agents independently.
* Used Promise.all() to execute Bull and Bear analyses in parallel for better performance.
* The Judge makes the final decision after evaluating both sides.
* Structured outputs are validated using Zod.
* JWT Authentication is implemented using HTTP-only cookies.

## Trade-offs

Due to project scope and time constraints, the following features were not implemented:

* Research History
* Portfolio Tracking
* Watchlists
* PDF Export
* Stock Price Charts
* RAG using Annual Reports
* Financial API Caching
* Real-time Market Data Streaming

---

# 📊 Example Runs

## NVIDIA

Recommendation

**Invest**

AI Score

**85**

Confidence

**80%**

Summary

* Strong profitability
* Excellent liquidity
* AI market leader
* Strong long-term growth potential

---

## Tesla

Recommendation

**Hold**

AI Score

**55**

Confidence

**75%**

Summary

* Strong liquidity
* Premium valuation
* Weak Return on Equity
* Long-term EV opportunity

---

## Microsoft

Recommendation

**Invest**

AI Score

**82**

Confidence

**78%**

Summary

* Strong recurring revenue
* Cloud leadership
* Stable profitability
* Healthy balance sheet

---

# 🚀 What I Would Improve With More Time

If given more development time, I would add:

* Research History
* Portfolio Tracking
* Company Watchlists
* Interactive Stock Charts
* PDF Report Export
* Annual Report RAG
* AI Chat with Generated Research
* More Financial Ratios
* Discounted Cash Flow (DCF) Valuation
* Background Job Processing
* Financial API Caching

---

# 🤖 AI Development Process

This project was developed with assistance from modern Large Language Models (LLMs).

AI tools were used to:

* Brainstorm the overall system architecture.
* Design the multi-agent workflow.
* Refine prompt engineering.
* Improve LangChain implementation.
* Review code structure.
* Debug backend issues.
* Resolve deployment and authentication problems.
* Improve frontend design and user experience.

The final architecture, implementation, debugging, testing, deployment, and integration were completed manually.

---

# ☁️ Deployment

| Component | Platform           |
| --------- | ------------------ |
| Frontend  | Render Static Site |
| Backend   | Render Web Service |
| Database  | Render PostgreSQL  |

## Live URLs

Frontend

https://aiinvestments-2.onrender.com

Backend

https://aiinvestments.onrender.com

---

# 👨‍💻 Author

**Mahesh Das**

B.Tech – Computer Science & Engineering

Lovely Professional University

GitHub: https://github.com/MaheshDas2004
