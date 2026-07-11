import llm from "../llm.js";
import { researchSchema } from "../schemas/research_schema.js";

import { bullPrompt } from "../prompts/bull_prompt.js";
import { bearPrompt } from "../prompts/bear_prompt.js";
import { judgePrompt } from "../prompts/judge_prompt.js";

import { bullSchema } from "../schemas/bull_schema.js";
import { bearSchema } from "../schemas/bear_schema.js";
import { judgeSchema } from "../schemas/judge_schema.js";


export const bullChain = bullPrompt.pipe(
    llm.withStructuredOutput(bullSchema)
);

export const bearChain = bearPrompt.pipe(
    llm.withStructuredOutput(bearSchema)
);

export const judgeChain = judgePrompt.pipe(
    llm.withStructuredOutput(judgeSchema)
);