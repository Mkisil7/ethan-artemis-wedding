const { createGoogleGenerativeAI } = require('@ai-sdk/google');
const { streamText } = require('ai');
const google = createGoogleGenerativeAI({ apiKey: "test" });
try {
  const result = streamText({ model: google('gemini-1.5-flash'), messages: [{ role: 'user', content: 'Say hello' }] });
  console.log("has toDataStreamResponse:", typeof result.toDataStreamResponse);
  console.log("has toTextStreamResponse:", typeof result.toTextStreamResponse);
  console.log("has toUIMessageStreamResponse:", typeof result.toUIMessageStreamResponse);
} catch(e) {}
