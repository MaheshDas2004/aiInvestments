import { PromptTemplate } from "@langchain/core/prompts";

export const memoPrompt = PromptTemplate.fromTemplate(`
You are a Senior Investment Analyst.

Using the final investment decision and financial information, write a professional investment memo.

Company:
{company}

Financial Summary:
{financials}

Judge Decision:
{judge}

Instructions:

- Write a concise investment thesis.
- List exactly 3 key strengths.
- List exactly 3 key risks.
- Give a long-term outlook in 2-3 sentences.
- Use the judge's recommendation as the final recommendation.

Return only structured data.
`);