import { z } from "zod";

export const judgeSchema = z.object({
  recommendation: z.enum(["Invest", "Hold", "Pass"]),
  confidence: z.number(),
  aiScore: z.number(),
  reasoning: z.array(z.string())
});