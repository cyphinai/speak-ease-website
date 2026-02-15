/**
 * Start script so Railway's PORT is always used (fixes "Application failed to respond").
 */
const { spawn } = require('child_process');
const path = require('path');

const port = process.env.PORT || 3000;
const cwd = path.resolve(__dirname);

const child = spawn('npx', ['serve', '-s', cwd, '-l', String(port), '--no-clipboard'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, PORT: String(port), BROWSER: 'none' },
});

child.on('exit', (code) => process.exit(code ?? 0));
