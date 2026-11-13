import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateImageLayout } from '../src/services/imageLayout.js';
import { MemeCatalog } from '../src/models/MemeCatalog.js';
import { memeDefinitions } from '../src/data/memes.js';
import { Meme } from '../src/models/Meme.js';

const catalog = new MemeCatalog(memeDefinitions);
const landscape = catalog.findById('horizontal');
const portrait = catalog.findById('vertical-1');
test('landscape rotates on a portrait screen when it increases visible size', () => {
  assert.equal(landscape.shouldRotate({ width: 375, height: 720 }, { width: 1920, height: 1080 }), true);
  assert.equal(landscape.shouldRotate({ width: 1200, height: 700 }, { width: 1920, height: 1080 }), false);
  assert.equal(portrait.shouldRotate(), false);
  assert.equal(catalog.findById('horizontal-2').shouldRotate({ width: 375, height: 720 }, { width: 1920, height: 1080 }), true);
});
test('image stays inside viewport for phone, tablet and desktop in both orientations', () => {
  for (const viewport of [{ width: 320, height: 480 }, { width: 768, height: 940 }, { width: 1440, height: 750 }, { width: 800, height: 260 }]) {
    for (const image of [{ width: 1920, height: 1080 }, { width: 900, height: 1600 }, { width: 4000, height: 300 }]) {
      for (const rotated of [false, true]) {
        const layout = calculateImageLayout(viewport, image, rotated);
        assert.ok((rotated ? layout.height : layout.width) <= viewport.width + .001);
        assert.ok((rotated ? layout.width : layout.height) <= viewport.height + .001);
        assert.ok(Math.abs(layout.width / layout.height - image.width / image.height) < .001);
      }
    }
  }
});
test('catalog encapsulates its collection and models expose immutable data', () => {
  catalog.getAll().pop();
  assert.equal(catalog.getAll().length, 3);
  assert.equal(catalog.findById('missing'), undefined);
  assert.throws(() => new Meme({}), TypeError);
  assert.throws(() => { landscape.details.id = 'changed'; }, TypeError);
});
