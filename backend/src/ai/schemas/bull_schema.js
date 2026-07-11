import { z } from "zod";

export const bullSchema = z.object({
  recommendation: z.enum(["Invest", "Hold"]),
  arguments: z.array(z.string())
});