const { createGoogleGenerativeAI } = require('@ai-sdk/google');
try {
  createGoogleGenerativeAI({ apiKey: undefined });
  console.log("No error!");
} catch (e) {
  console.log("ERROR THROWN:", e.message);
}
