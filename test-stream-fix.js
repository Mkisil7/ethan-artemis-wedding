const { createGoogleGenerativeAI } = require('@ai-sdk/google');
const { streamText } = require('ai');
const google = createGoogleGenerativeAI({ apiKey: "test" });
try {
  const result = streamText({ model: google('gemini-1.5-flash'), messages: [{ role: 'user', content: 'Say hello' }] });
  console.log("Without await, keys are:", Object.keys(result));
  console.log("has toDataStreamResponse:", typeof result.toDataStreamResponse);
} catch(e) { console.error(e) }
