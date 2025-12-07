import { LitElement, html, css, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export class LitText extends LitElement {
  static properties = {
    /**
     * @desc Tag name to be created (e.g., 'p', 'h1', 'div').
     * @type {string}
     */
    tagHtml: { type: String, attribute: 'tag-html' },
    /**
     * @desc Content to be placed inside the tag.
     * @type {string}
     */
    content: { type: String },
    /**
     * @desc Size of the text (3xs, 2xs, xs, s, m, l, xl, 2xl, 3xl)
     * @type {string}
     */
    size: { type: String }
  };

  static styles = css`
    /* Tamaños predefinidos */
    :host([size="3xs"]) {
      font-size: 0.625rem; /* 10px */
      line-height: 1.2;
    }

    :host([size="2xs"]) {
      font-size: 0.75rem; /* 12px */
      line-height: 1.3;
    }

    :host([size="xs"]) {
      font-size: 0.875rem; /* 14px */
      line-height: 1.4;
    }

    :host([size="s"]) {
      font-size: 1rem; /* 16px */
      line-height: 1.5;
    }

    :host([size="m"]) {
      font-size: 1.125rem; /* 18px */
      line-height: 1.5;
    }

    :host([size="l"]) {
      font-size: 1.25rem; /* 20px */
      line-height: 1.5;
    }

    :host([size="xl"]) {
      font-size: 1.5rem; /* 24px */
      line-height: 1.4;
    }

    :host([size="2xl"]) {
      font-size: 2rem; /* 32px */
      line-height: 1.3;
    }

    :host([size="3xl"]) {
      font-size: 2.5rem; /* 40px */
      line-height: 1.2;
    }
  `;

  constructor() {
    super();
    this.tagHtml = 'p';
    this.content = '';
    this.size = 'm';
  }

  render() {
    return html`
      ${this.tagHtml ? unsafeHTML(`<${this.tagHtml}>${this.content}</${this.tagHtml}>`) : nothing}
    `;
  }
}

customElements.define('lit-text', LitText);
