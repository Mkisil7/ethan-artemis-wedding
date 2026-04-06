async function listModels() {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + process.env.GOOGLE_GENERATIVE_AI_API_KEY);
    const data = await response.json();
    console.log(data.models.map(m => m.name).filter(name => name.includes('gemini')));
  } catch (err) {
    console.error(err);
  }
}
listModels();
