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
    content: { type: String }
  };


  constructor() {
    super();
    this.tagHtml = '';
    this.content = '';
  }

  render() {
    return html`
      ${this.tagHtml ? unsafeHTML(`<${this.tagHtml}>${this.content}</${this.tagHtml}>`) : nothing}
    `;
  }
}

customElements.define('lit-text', LitText);
