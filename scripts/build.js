import { cp, mkdir, readFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { memeDefinitions } from '../src/data/memes.js';

const outputDirectory = resolve('dist');
if (outputDirectory !== resolve(process.cwd(), 'dist')) throw new Error('Invalid build directory');
await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp('public', outputDirectory, { recursive: true });
await cp('src', resolve(outputDirectory, 'src'), { recursive: true });
await cp('index.html', resolve(outputDirectory, 'index.html'));
const page = await readFile('index.html', 'utf8');
await mkdir(resolve(outputDirectory, 'memes'), { recursive: true });
for (const meme of memeDefinitions) {
  await cp('index.html', resolve(outputDirectory, 'memes', `${meme.id}.html`));
}
await cp('index.html', resolve(outputDirectory, '404.html'));
if (!page.includes('charset="UTF-8"')) throw new Error('UTF-8 charset is required');
console.log(`Built gallery and ${memeDefinitions.length} standalone meme pages in dist/`);
