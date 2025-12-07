import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

export class LitImage extends LitElement {
  static properties = {
    /**
     * @desc The path of the image
     * @type {string}
     */
    src: { type: String },
    /**
     * @desc The alt text of the image
     * @type {string}
     */
    alt: { type: String },
    /**
     * @desc Size of the image (3xs, 2xs, xs, s, m, l, xl, 2xl, 3xl)
     * @type {string}
     */
    size: { type: String },
    /**
     * @desc The object-fit property (cover, contain, fill, none, scale-down)
     * @type {string}
     */
    fit: { type: String }
  };

  static styles = css`
    :host {
      display: inline-block;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    /* Tamaños predefinidos */
    :host([size="3xs"]) {
      width: 48px;
      height: 48px;
    }

    :host([size="2xs"]) {
      width: 64px;
      height: 64px;
    }

    :host([size="xs"]) {
      width: 96px;
      height: 96px;
    }

    :host([size="s"]) {
      width: 128px;
      height: 128px;
    }

    :host([size="m"]) {
      width: 192px;
      height: 192px;
    }

    :host([size="l"]) {
      width: 256px;
      height: 256px;
    }

    :host([size="xl"]) {
      width: 320px;
      height: 320px;
    }

    :host([size="2xl"]) {
      width: 384px;
      height: 384px;
    }

    :host([size="3xl"]) {
      width: 512px;
      height: 512px;
    }

    img.fit-cover {
      object-fit: cover;
    }

    img.fit-contain {
      object-fit: contain;
    }

    img.fit-fill {
      object-fit: fill;
    }

    img.fit-none {
      object-fit: none;
    }

    img.fit-scale-down {
      object-fit: scale-down;
    }
  `;

  constructor() {
    super();
    this.src = null;
    this.alt = '';
    this.size = 'm';
    this.fit = 'cover';
  }

  render() {
    const fitClass = this.fit ? `fit-${this.fit}` : '';
    
    return html`
      <img 
        src="${ifDefined(this.src)}" 
        alt="${this.alt}"
        class="${fitClass}"
      />
    `;
  }
}

customElements.define('lit-image', LitImage);
