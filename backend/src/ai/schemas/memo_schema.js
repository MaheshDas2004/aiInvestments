import { z } from "zod";

export const memoSchema = z.object({
  investmentThesis: z.string(),

  strengths: z.array(z.string()),

  risks: z.array(z.string()),

  longTermOutlook: z.string(),

  recommendation: z.enum(["Invest", "Hold", "Pass"]),
});