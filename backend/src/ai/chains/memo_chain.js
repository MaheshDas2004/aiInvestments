import llm from "../llm.js";
import { memoPrompt } from "../prompts/memo_prompt.js";
import { memoSchema } from "../schemas/memo_schema.js";

export const memoChain = memoPrompt.pipe(
  llm.withStructuredOutput(memoSchema)
);