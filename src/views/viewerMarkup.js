import { renderIcon } from '../components/icons.js';
import { renderPlaceholder } from '../components/placeholder.js';

export function renderViewerMarkup(meme) {
  const { title, source, number } = meme.details;
  return `<main class="viewer">
    <header class="viewer-toolbar"><a class="control" href="/">${renderIcon('back')}<span>Все мемы</span></a>
      <span class="viewer-title">${number} / ${title}</span>
      <div class="viewer-actions">
        <button class="control" id="rotate-image" aria-label="Повернуть изображение на 90 градусов">${renderIcon('rotate')}</button>
        <button class="control" id="toggle-fullscreen" aria-label="Включить полноэкранный режим">${renderIcon('expand')}</button>
      </div>
    </header>
    <div class="viewer-stage"><img class="viewer-image" src="${source}" alt="${title}" hidden>
      <div class="viewer-placeholder" hidden>${renderPlaceholder(meme)}<p>Картинка пока не добавлена</p><a href="/">Вернуться в коллекцию</a></div>
      <p class="viewer-loading" role="status">Загружаем мем…</p>
    </div>
    <p class="viewer-hint" aria-live="polite">Картинка целиком, без обрезки</p>
  </main>`;
}
