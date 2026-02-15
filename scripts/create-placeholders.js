const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'assets', 'screens');
const b64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAJoQPWfGvLogAAAABJRU5ErkJggg==';
const names = ['home', 'learn', 'practice', 'progress', 'profile'];
fs.mkdirSync(dir, { recursive: true });
names.forEach((name) => {
  fs.writeFileSync(path.join(dir, name + '.png'), Buffer.from(b64, 'base64'));
});
console.log('Created:', names.map((n) => n + '.png').join(', '));
