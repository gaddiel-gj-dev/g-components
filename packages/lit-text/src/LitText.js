import { LitElement, html, css } from 'lit';

export class Text extends LitElement {
  static properties = {
    text: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      padding: 1rem;
    }

    .container {
      font-family: system-ui, -apple-system, sans-serif;
    }
  `;

  constructor() {
    super();
    this.text = 'Hello from text';
  }

  render() {
    return html`
      <div class="container">
        <p>${this.text}</p>
      </div>
    `;
  }
}

customElements.define('lit-text', Text);
