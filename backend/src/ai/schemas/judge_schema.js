import { z } from "zod";

export const judgeSchema = z.object({
  recommendation: z.enum(["Invest", "Hold", "Pass"]),

  confidence: z.number().min(0).max(100),

  aiScore: z.number().min(0).max(100),

  reasoning: z.array(z.string()).min(3).max(5),

  scores: z.object({
    financialHealth: z.number().min(0).max(100),

    valuation: z.number().min(0).max(100),

    growthPotential: z.number().min(0).max(100),

    riskLevel: z.number().min(0).max(100),

    explanation: z.array(z.string()).length(4),
  }),
});