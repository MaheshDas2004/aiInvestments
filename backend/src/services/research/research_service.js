import { structuredLLM } from "../../ai/chain.js";
import { investmentPrompt } from "../../ai/prompts.js";
import {
  searchCompany,
  getFinancialData,
} from "./financial_service.js";

export const generateResearchService = async (companyName) => {

  const symbol = await searchCompany(companyName);

  const financialData = await getFinancialData(symbol);

  const prompt = await investmentPrompt.format({
    company: companyName,

    profile: JSON.stringify({
      companyName: financialData.profile.companyName,
      sector: financialData.profile.sector,
      industry: financialData.profile.industry,
      ceo: financialData.profile.ceo,
      marketCap: financialData.profile.marketCap,
    }),

    metrics: JSON.stringify({
      currentRatio: financialData.metrics.currentRatio,
      returnOnEquity: financialData.metrics.returnOnEquity,
      enterpriseValue: financialData.metrics.enterpriseValue,
    }),

    income: JSON.stringify({
      revenue: financialData.income.revenue,
      grossProfit: financialData.income.grossProfit,
      netIncome: financialData.income.netIncome,
      eps: financialData.income.eps,
    }),
  });

  const result = await structuredLLM.invoke(prompt);

  return result;
};