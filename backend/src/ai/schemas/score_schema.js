import { z } from "zod";

export const scoreSchema = z.object({

    financialHealth: z.number().min(0).max(100),

    valuation: z.number().min(0).max(100),

    growthPotential: z.number().min(0).max(100),

    riskLevel: z.number().min(0).max(100),

    explanation: z.array(z.string()).length(4)
});