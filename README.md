# 📈 InvestIQ AI – Investment Research Agent

## Overview

InvestIQ AI is an AI-powered investment research platform that generates comprehensive equity research reports for publicly traded companies using financial data and Large Language Models (LLMs).

Instead of returning a simple buy or sell recommendation, the system simulates an investment committee workflow:

- Retrieves company financial data
- Generates a Bull Case (positive investment arguments)
- Generates a Bear Case (negative investment arguments)
- Uses an AI Judge to evaluate both perspectives and make the final recommendation
- Produces an Investment Memo
- Generates a quantitative Score Breakdown
- Displays the complete research report through a modern React dashboard.

The goal is to provide users with explainable AI-driven investment analysis rather than a single black-box recommendation.

---

# Features

- 🔐 User Authentication (JWT + HTTP-only Cookies)
- 🔍 Company Search
- 📊 Live Financial Data
- 🟢 Bull Investment Analysis
- 🔴 Bear Investment Analysis
- ⚖️ AI Judge Decision
- 📝 Investment Memo
- 📈 AI Score Breakdown
- 🎨 Modern Responsive UI
- ☁️ Full Stack Deployment on Render

---

# Tech Stack

## Frontend

- React
- React Router
- Tailwind CSS
- Framer Motion
- Axios

## Backend

- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt

## AI

- LangChain
- Groq LLM
- Zod Structured Outputs

---

# How to Run

## Clone Repository

```bash
git clone https://github.com/MaheshDas2004/aiInvestments.git
cd InvestIQ
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file

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

Run backend

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

Run frontend

```bash
npm run dev
```

---

# How it Works

## Overall Workflow

```
User

↓

Search Company

↓

Financial Data API

↓

Bull Analysis
        +
Bear Analysis

↓

AI Judge

↓

Investment Memo

↓

Score Breakdown

↓

React Dashboard
```

## AI Architecture

The project follows a multi-agent architecture.

### Bull Analyst

Generates positive investment arguments based on company financials.

### Bear Analyst

Generates risks, weaknesses and valuation concerns.

### Judge

Acts as an investment committee.

It compares Bull vs Bear arguments and produces:

- Final Recommendation
- Confidence Score
- AI Score
- Reasoning
- Financial Scores

### Investment Memo

Creates an executive summary suitable for investors.

---

# Architecture

```
React Frontend

↓

Express API

↓

Research Service

↓

Financial API

↓

Bull Chain

↓

Bear Chain

↓

Judge Chain

↓

Memo Generation

↓

Response to Frontend
```

---

# Key Decisions & Trade-offs

## Decisions

- Used LangChain to organize independent AI chains.
- Used structured JSON outputs with Zod validation.
- Bull and Bear analyses run in parallel using Promise.all() to reduce response time.
- Judge acts as an independent investment committee rather than relying on a single AI response.
- Used HTTP-only cookies for authentication.

## Trade-offs

Due to time constraints, the following features were not implemented:

- Research history storage
- Watchlists
- Portfolio management
- PDF report export
- Interactive stock charts
- Annual report RAG
- Financial caching layer

---

# Example Runs

## Tesla

Recommendation

```
Hold
```

AI Score

```
55
```

Reason

- Strong liquidity
- Premium valuation
- Weak ROE
- Long-term growth potential

---

## NVIDIA

Recommendation

```
Invest
```

AI Score

```
85
```

Reason

- Excellent profitability
- Strong liquidity
- Market leader in AI hardware
- Healthy financial performance

---

## Microsoft

Recommendation

```
Invest
```

AI Score

```
82
```

Reason

- Strong recurring revenue
- Cloud leadership
- Consistent profitability
- Stable balance sheet

---

# What I Would Improve With More Time

If additional development time were available, I would implement:

- Research History
- Company Watchlists
- Portfolio Tracking
- PDF Export
- Interactive Stock Charts
- AI Chat with Generated Research
- Annual Report RAG
- Better Financial Ratios
- Discounted Cash Flow (DCF) Valuation
- Background Job Queue
- Financial API Response Caching

---

# AI Development Process

This project was developed with assistance from modern Large Language Models.

AI was primarily used for:

- Brainstorming system architecture
- Prompt engineering
- LangChain workflow design
- UI refinement
- Debugging deployment issues
- Code review
- Improving reasoning quality

Final implementation decisions, architecture, integration, debugging, and testing were performed manually.

---

# Deployment

Frontend:
- Render Static Site

Backend:
- Render Web Service

Database:
- Render PostgreSQL

---

# Author

**Mahesh Das**

B.Tech Computer Science Engineering

Lovely Professional University