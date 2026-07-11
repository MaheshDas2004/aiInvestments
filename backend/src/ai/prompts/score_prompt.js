import { PromptTemplate } from "@langchain/core/prompts";

export const scorePrompt = PromptTemplate.fromTemplate(`
You are a Senior Equity Analyst.

Based on the financial data below, score the company from 0–100.

Company:
{company}

Financial Data:
{financials}

Judge Decision:
{judge}

Rules:

Financial Health
0-100

Valuation
0-100

Growth Potential
0-100

Risk Level
0-100

Explain every score in one sentence.

Return structured data only.
`);