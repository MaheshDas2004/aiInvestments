
import llm from "./llm.js";
import { researchSchema } from "./schema.js";

export const structuredLLM = llm.withStructuredOutput(researchSchema);