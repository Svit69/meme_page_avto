import { memeDefinitions } from './data/memes.js';
import { MemeCatalog } from './models/MemeCatalog.js';
import { GalleryView } from './views/GalleryView.js';
import { MemeViewer } from './views/MemeViewer.js';

const root = document.querySelector('#app');
const catalog = new MemeCatalog(memeDefinitions);
const pathname = window.location.pathname.replace(/\/$/, '');
const meme = catalog.findById(pathname.split('/')[2]);

if (!pathname) new GalleryView(root, catalog).render();
else if (/^\/memes\/[^/]+$/.test(pathname) && meme) new MemeViewer(root, meme).render();
else {
  document.title = 'Страница не найдена — Мемотека';
  root.innerHTML = '<main class="not-found"><span class="eyebrow">404 / НЕ ТОТ МЕМ</span><h1>Здесь пока пусто.</h1><a class="control" href="/">Вернуться к мемам →</a></main>';
}
