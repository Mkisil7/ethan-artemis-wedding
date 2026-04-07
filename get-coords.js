const https = require('https');

const queries = [
  "The Margi, Vouliagmeni, Greece",
  "Four Seasons Astir Palace, Vouliagmeni, Greece",
  "Grand Resort Lagonissi, Greece",
  "The Roc Club, Vouliagmeni, Greece",
  "Azur Hotel, Vouliagmeni, Greece",
  "Somewhere Boutique, Vouliagmeni, Greece",
  "Divani Escape, Vouliagmeni, Greece",
  "One&Only Aesthesis, Glyfada, Greece"
];

async function geocode(q) {
  return new Promise((resolve) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`;
    https.get(url, { headers: { 'User-Agent': 'Antigravity/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.length > 0) resolve({ lat: parseFloat(json[0].lat), lon: parseFloat(json[0].lon) });
          else resolve(null);
        } catch { resolve(null); }
      });
    });
  });
}

(async () => {
  for (const q of queries) {
    const res = await geocode(q);
    console.log(q, ":", res);
    await new Promise(r => setTimeout(r, 1500)); // Respect nominatim limits
  }
})();
