import test from 'node:test';
import assert from 'node:assert/strict';
import { enterFullscreen } from '../src/services/fullscreen.js';

test('fullscreen handles supported, denied and unavailable browser APIs', async () => {
  const originalDocument = globalThis.document;
  globalThis.document = { fullscreenElement: null };
  try {
    let requests = 0;
    const container = { requestFullscreen: async () => { requests += 1; } };
    assert.equal(await enterFullscreen(container), true);
    assert.equal(requests, 1);
    assert.equal(await enterFullscreen({}), false);
    assert.equal(await enterFullscreen({
      requestFullscreen: async () => { throw new Error('User activation required'); },
    }), false);
    globalThis.document.fullscreenElement = container;
    assert.equal(await enterFullscreen(container), false);
    assert.equal(requests, 1);
  } finally {
    if (originalDocument === undefined) delete globalThis.document;
    else globalThis.document = originalDocument;
  }
});
