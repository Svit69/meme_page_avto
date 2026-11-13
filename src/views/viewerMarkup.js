import { renderIcon } from '../components/icons.js';
import { renderPlaceholder } from '../components/placeholder.js';

export function renderViewerMarkup(meme) {
  const { title, source } = meme.details;
  return `<main class="viewer">
    <header class="viewer-toolbar">
      <div class="viewer-actions">
        <button class="control" id="rotate-image" aria-label="Повернуть изображение на 90 градусов">${renderIcon('rotate')}</button>
      </div>
    </header>
    <div class="viewer-stage"><img class="viewer-image" src="${source}" alt="${title}" hidden>
      <div class="viewer-placeholder" hidden>${renderPlaceholder(meme)}<p>Картинка пока не добавлена</p></div>
      <p class="viewer-loading" role="status">Загружаем мем…</p>
    </div>
    <p class="viewer-status" role="status" aria-live="polite"></p>
  </main>`;
}
