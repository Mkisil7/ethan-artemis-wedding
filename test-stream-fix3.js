const { createGoogleGenerativeAI } = require('@ai-sdk/google');
const { streamText } = require('ai');
const google = createGoogleGenerativeAI({ apiKey: "test" });
async function run() {
  try {
    const result = await streamText({ model: google('gemini-2.5-flash'), messages: [{ role: 'user', content: 'Say hello' }] });
    console.log("With await, keys are:", Object.keys(result));
    console.log("has toDataStreamResponse:", typeof result.toDataStreamResponse);
    console.log("has toTextStreamResponse:", typeof result.toTextStreamResponse);
  } catch(e) { console.error(e) }
}
run();
