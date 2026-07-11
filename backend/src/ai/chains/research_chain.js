
import llm from "../llm.js";
import { researchSchema } from "../schemas/research_schema.js";

export const structuredLLM = llm.withStructuredOutput(researchSchema);