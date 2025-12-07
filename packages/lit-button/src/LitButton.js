import { LitElement, html, css } from 'lit';

export class LitButton extends LitElement {
  static properties = {
    /**
     * @desc The text to display inside the button
     * @type {string}
     */
    text: { type: String },
    /**
     * @desc variant of the button
     * @type {string}
     */
    variant: { type: String },
    /**
     * @desc disabled state of the button
     * @type {boolean}
     */
    disabled: { type: Boolean }
  };

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-family: system-ui, sans-serif;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    button:hover:not(:disabled) {
      opacity: 0.8;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .primary {
      background: #3b82f6;
      color: white;
    }

    .secondary {
      background: #6b7280;
      color: white;
    }

    .danger {
      background: #ef4444;
      color: white;
    }
  `;

  constructor() {
    super();
    this.text = '';
    this.variant = 'primary';
    this.disabled = false;
  }

  _handleClick() {    
    this.dispatchEvent(new CustomEvent('button-click', {
      bubbles: true,
      composed: true,
      detail: {
        variant: this.variant,
      }
    }));
  }

  render() {
    return html`
        <button 
        ?disabled=${this.disabled}
        class=${this.variant}
        @click=${this._handleClick}
        >
          ${this.text}
        </button>
    `;
  }
}

customElements.define('lit-button', LitButton);
