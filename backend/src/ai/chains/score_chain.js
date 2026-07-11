import llm from "../llm.js";
import { scorePrompt } from "../prompts/score_prompt.js";
import { scoreSchema } from "../schemas/score_schema.js";

export const scoreChain = scorePrompt.pipe(
    llm.withStructuredOutput(scoreSchema)
);