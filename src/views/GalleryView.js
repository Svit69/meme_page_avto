import { renderMemeCard } from '../components/memeCard.js';
import { renderIcon } from '../components/icons.js';
import { connectImageFallbacks } from '../services/imageFallbacks.js';

export class GalleryView {
  constructor(root, catalog) { this.root = root; this.catalog = catalog; }

  render() {
    document.title = 'Мемотека — выбери настроение';
    this.root.innerHTML = `<div class="gallery-shell">
      <header class="site-header">
        <a class="brand" href="/">${renderIcon('mark')}<span>мемотека<span class="brand-dot">.</span></span></a>
        <span class="header-note"><span class="status-dot"></span> Маленькая коллекция, большие эмоции</span>
        <span class="edition">VOL. 001 / 2026</span>
      </header>
      <main id="main-content">
        <section class="introduction" aria-labelledby="gallery-title">
          <span class="eyebrow">КОЛЛЕКЦИЯ ХОРОШЕГО НАСТРОЕНИЯ</span>
          <h1 id="gallery-title">Меньше слов.<br>Больше <span>мемов.</span><sup>↗</sup></h1>
          <div class="intro-bottom"><p>Три картинки. Три настроения.<br>Выбирай своё — и открывай на весь экран.</p>
          <span class="collection-count"><b>03</b> МЕМА В КОЛЛЕКЦИИ</span></div>
        </section>
        <section class="collection" aria-label="Выбор мема">
          <div class="collection-heading"><span>ВЫБЕРИ НАСТРОЕНИЕ</span><span>01 — 03</span></div>
          <div class="meme-grid">${this.catalog.getAll().map(renderMemeCard).join('')}</div>
        </section>
      </main>
      <footer class="site-footer"><span>Просто мемы. Ничего лишнего.</span><span>Открывай. Улыбайся. Повторяй. ${renderIcon('arrow')}</span></footer>
    </div>`;
    connectImageFallbacks(this.root);
  }
}
