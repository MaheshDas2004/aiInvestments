import { PromptTemplate } from "@langchain/core/prompts";

export const investmentPrompt = PromptTemplate.fromTemplate(`
You are a Senior Investment Research Analyst.

Your task is to analyze a company using ONLY the financial information provided below.

Company Name:
{company}

Company Profile:
{profile}

Financial Metrics:
{metrics}

Income Statement:
{income}

Instructions:
- Use only the information provided above.
- Do not make up any financial facts.
- Analyze the company's financial health, profitability, and overall business strength.
- Provide a clear investment recommendation.

Return the result in the following structure:
- company
- recommendation (Invest, Hold, or Pass)
- confidence (0-100)
- aiScore (0-100)
- reasoning (3-5 concise bullet points explaining the recommendation)
`);