import { z } from "zod";

export const bearSchema = z.object({
  recommendation: z.enum(["Hold", "Pass"]),
  arguments: z.array(z.string())
});