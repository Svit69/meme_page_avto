export function renderPlaceholder(meme) {
  const { number, orientation } = meme.details;
  return `<div class="placeholder-art art-${number}" aria-hidden="true">
    <span class="art-label">MEME / ${number}</span>
    <div class="art-face"><i></i><i></i><b></b></div>
    <span class="art-word">${orientation === 'landscape' ? 'ПОШИРЕ.' : number === '02' ? 'БЫВАЕТ.' : 'ЖИЗА.'}</span>
    <span class="art-note">Место для вашего мема</span>
  </div>`;
}
