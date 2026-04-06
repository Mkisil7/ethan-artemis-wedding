const ai = require('ai');
console.log(Object.keys(ai).filter(x => x.toLowerCase().includes('data') || x.toLowerCase().includes('ui') || x.toLowerCase().includes('stream')));
