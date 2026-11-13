import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { contentTypes } from './serverTypes.js';

const rootDirectory = resolve(process.argv[2] || '.');
const port = Number(process.env.PORT || 5173);
async function serveRequest(request, response) {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
    let target = resolve(rootDirectory, relative);
    if (!target.startsWith(`${rootDirectory}${sep}`)) {
      response.writeHead(403).end();
      return;
    }
    if (rootDirectory === resolve('.') && (pathname.startsWith('/memes/') || pathname === '/favicon.svg')) {
      target = resolve(rootDirectory, 'public', relative);
    }
    if (/^\/memes\/(horizontal|vertical-[12])\/?$/.test(pathname)) {
      target = resolve(rootDirectory, 'index.html');
    }
    if (!(await stat(target)).isFile()) throw new Error('Not a file');
    response.writeHead(200, { 'Content-Type': contentTypes[extname(target)] || 'application/octet-stream' });
    response.end(await readFile(target));
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Файл не найден');
  }
}
createServer(serveRequest).listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`));
