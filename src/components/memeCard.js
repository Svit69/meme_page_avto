import { renderIcon } from './icons.js';
import { renderPlaceholder } from './placeholder.js';

export function renderMemeCard(meme) {
  const { id, number, title, caption, source, label } = meme.details;
  return `<a class="meme-card" data-orientation="${meme.details.orientation}" href="/memes/${id}" aria-label="Открыть мем: ${title}">
    <div class="card-preview">
      ${renderPlaceholder(meme)}
      <img class="meme-thumbnail" src="${source}" alt="${title}" hidden>
      <span class="format-badge">${label}</span>
      <span class="card-open">${renderIcon('arrow')}</span>
    </div>
    <div class="card-description"><span class="card-number">${number}</span>
      <div><h2>${title}</h2><p>${caption}</p></div>
      <span class="card-direction">${renderIcon('arrow')}</span>
    </div>
  </a>`;
}
