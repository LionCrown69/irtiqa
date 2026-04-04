const { spawn } = require('child_process');
const path = require('path');

const viteBin = path.resolve(__dirname, '..', 'node_modules', 'vite', 'bin', 'vite.js');
const viteArgs = ['--host', 'localhost', '--port', '5173', '--strictPort', '--open'];

let child = null;
let stopping = false;

const run = () => {
  child = spawn(process.execPath, [viteBin, ...viteArgs], {
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..')
  });

  child.on('exit', (code, signal) => {
    if (stopping) return;

    if (signal) {
      console.log(`\nVite stopped with signal ${signal}. Restarting in 2s...`);
    } else {
      console.log(`\nVite exited with code ${code}. Restarting in 2s...`);
    }

    setTimeout(run, 2000);
  });
};

const shutdown = () => {
  stopping = true;
  if (child && !child.killed) {
    child.kill('SIGINT');
  }
  process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

run();
