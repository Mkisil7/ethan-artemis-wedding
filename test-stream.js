require('dotenv').config({ path: '.env.local' });
const { createGoogleGenerativeAI } = require('@ai-sdk/google');
const { streamText, createDataStreamResponse } = require('ai');

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

async function main() {
  try {
    const result = streamText({
      model: google('gemini-1.5-flash'),
      messages: [{ role: 'user', content: 'Say hello in 1 word' }]
    });
    console.log("Functions on result:", Object.keys(result));
    const awaitedResult = await streamText({
      model: google('gemini-1.5-flash'),
      messages: [{ role: 'user', content: 'Say hello in 1 word' }]
    });
    console.log("Functions on awaitedResult:", Object.keys(awaitedResult));
  } catch(err) {
    console.error("ERROR", err.message);
  }
}
main();
