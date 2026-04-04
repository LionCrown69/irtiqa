const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const PID_FILE = path.join(ROOT, '.devserver.pid');
const LOG_FILE = path.join(ROOT, '.devserver.log');
const HOST = 'localhost';
const PORT = 5173;
const VITE_BIN = path.join(ROOT, 'node_modules', 'vite', 'bin', 'vite.js');
const VITE_ARGS = [VITE_BIN, '--host', HOST, '--port', String(PORT), '--strictPort'];

const action = process.argv[2] || 'start';

function isAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readPid() {
  try {
    const pid = Number(fs.readFileSync(PID_FILE, 'utf8').trim());
    return Number.isFinite(pid) ? pid : null;
  } catch {
    return null;
  }
}

function writePid(pid) {
  fs.writeFileSync(PID_FILE, `${pid}\n`, 'utf8');
}

function clearPid() {
  try {
    fs.unlinkSync(PID_FILE);
  } catch {}
}

function checkHealth(timeout = 900) {
  return new Promise((resolve) => {
    const req = http.get(
      {
        host: HOST,
        port: PORT,
        path: '/',
        timeout,
      },
      (res) => {
        res.resume();
        resolve(res.statusCode && res.statusCode < 500);
      }
    );
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function waitUntilHealthy(maxMs = 45000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < maxMs) {
    if (await checkHealth()) return true;
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

async function start() {
  const existingPid = readPid();
  if (existingPid && isAlive(existingPid) && (await checkHealth())) {
    console.log(`Dev server already running at http://${HOST}:${PORT} (pid ${existingPid})`);
    return;
  }

  if (existingPid && !isAlive(existingPid)) {
    clearPid();
  }

  const out = fs.openSync(LOG_FILE, 'a');
  const child = spawn(process.execPath, VITE_ARGS, {
    cwd: ROOT,
    detached: true,
    stdio: ['ignore', out, out],
  });
  child.unref();
  writePid(child.pid);

  const ok = await waitUntilHealthy();
  if (ok) {
    console.log(`Dev server started at http://${HOST}:${PORT} (pid ${child.pid})`);
    console.log(`Log file: ${LOG_FILE}`);
  } else {
    console.log('Dev server did not become healthy in time.');
    console.log(`Check log file for errors: ${LOG_FILE}`);
    fs.tail ? console.log(fs.readFileSync(LOG_FILE, 'utf8').slice(-500)) : null;
    console.log(`Check logs: ${LOG_FILE}`);
  }
}

async function stop() {
  const pid = readPid();
  if (!pid) {
    console.log('No dev server PID file found.');
    return;
  }
  if (!isAlive(pid)) {
    clearPid();
    console.log('Stale PID removed.');
    return;
  }
  try {
    process.kill(pid, 'SIGTERM');
  } catch (err) {
    console.log(`Failed to stop PID ${pid}: ${err.message}`);
    return;
  }

  const startedAt = Date.now();
  while (Date.now() - startedAt < 5000) {
    if (!isAlive(pid)) break;
    await new Promise((r) => setTimeout(r, 250));
  }

  clearPid();
  console.log(`Stopped dev server (pid ${pid}).`);
}

async function status() {
  const pid = readPid();
  const healthy = await checkHealth();
  if (!pid) {
    console.log(healthy ? `Healthy at http://${HOST}:${PORT}, but no PID file.` : 'Not running.');
    return;
  }
  if (isAlive(pid) && healthy) {
    console.log(`Running at http://${HOST}:${PORT} (pid ${pid})`);
    return;
  }
  if (isAlive(pid) && !healthy) {
    console.log(`Process exists (pid ${pid}) but endpoint is not healthy.`);
    return;
  }
  console.log('PID file exists but process is not alive.');
}

async function main() {
  if (action === 'start') return start();
  if (action === 'stop') return stop();
  if (action === 'status') return status();
  console.log('Usage: node scripts/dev-server.cjs <start|stop|status>');
}

main();
