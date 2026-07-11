import { z } from "zod";

export const researchSchema = z.object({
  company: z.string(),
  recommendation: z.enum(["Invest", "Hold", "Pass"]),
  confidence: z.number().min(0).max(100),
  aiScore: z.number().min(0).max(100),
  reasoning: z.array(z.string())
});