const { createGoogleGenerativeAI } = require('@ai-sdk/google');
const { streamText } = require('ai');

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

async function main() {
  try {
    const result = await streamText({
      model: google('gemini-1.5-flash'),
      messages: [{ role: 'user', content: 'Say hello' }]
    });
    console.log("SUCCESS. toDataStreamResponse type is:", typeof result.toDataStreamResponse);
  } catch(err) {
    console.error("ERROR", err.message);
  }
}
main();
