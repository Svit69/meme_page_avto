const paths = {
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  back: '<path d="m12 5-7 7 7 7M5 12h14"/>',
  expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  rotate: '<path d="M20 7v5h-5M4 17v-5h5M6 7a7 7 0 0 1 12-2l2 2M4 17l2 2a7 7 0 0 0 12-2"/>',
  mark: '<path d="M4 17V7l8 7 8-7v10"/>',
};

export function renderIcon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
}
