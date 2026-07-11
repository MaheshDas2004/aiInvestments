import { bullChain, bearChain, judgeChain } from "../../ai/chains/debate_chain.js";
import {
  searchCompany,
  getFinancialData,
} from "./financial_service.js";

export const generateResearchService = async (companyName) => {
  const symbol = await searchCompany(companyName);

  const financialData = await getFinancialData(symbol);

  const input = {
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
  };

 const [bull, bear] = await Promise.all([
  bullChain.invoke(input),
  bearChain.invoke(input),
]);

console.log("Bull:", bull);
console.log("Bear:", bear);

const judge = await judgeChain.invoke({
  bull: JSON.stringify(bull),
  bear: JSON.stringify(bear),
});

console.log("Judge:", judge);

return {
  bull,
  bear,
  judge,
};
};