export class Meme {
  #definition;

  constructor(definition) {
    if (new.target === Meme) throw new TypeError('Use a concrete meme type');
    this.#definition = Object.freeze({ ...definition });
  }

  get details() { return this.#definition; }

  shouldRotate() {
    throw new Error('Concrete meme types must implement shouldRotate');
  }
}
