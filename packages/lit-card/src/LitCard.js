import { LitElement, html, css } from 'lit';

export class LitCard extends LitElement {
  static properties = {
    /**
     * @desc Layout direction: 'vertical', 'horizontal'
     * @type {string}
     */
    layout: { type: String },
    /**
     * @desc Image position: 'top', 'bottom', 'left', 'right', 'none'
     * @type {string}
     */
    imagePosition: { type: String, attribute: 'image-position' },
    /**
     * @desc Show or hide footer (actions/buttons area)
     * @type {boolean}
     */
    showFooter: { type: Boolean, attribute: 'show-footer' },
    /**
     * @desc Footer alignment: 'left', 'center', 'right', 'space-between'
     * @type {string}
     */
    footerAlign: { type: String, attribute: 'footer-align' },
    /**
     * @desc Card size (width): 'xs', 's', 'm', 'l', 'xl'
     * @type {string}
     */
    size: { type: String },
    /**
     * @desc Card padding size: 's', 'm', 'l'
     * @type {string}
     */
    padding: { type: String },
    /**
     * @desc Card elevation/shadow: 'none', 'low', 'medium', 'high'
     * @type {string}
     */
    elevation: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      width: 100%;
      max-width: 100%;
    }

    .card-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }

    .card-container {
      display: flex;
      width: 100%;
      flex: 1;
    }
    
    /* En móviles, todas las cards son verticales */
    @media (max-width: 767px) {
      .card-container {
        flex-direction: column !important;
      }
    }
    
    /* Layout vertical (default) */
    :host([layout="vertical"]) .card-container {
      flex-direction: column;
    }

    /* Layout horizontal - solo en pantallas grandes */
    @media (min-width: 768px) {
      :host([layout="horizontal"]) .card-container {
        flex-direction: row;
      }
    }

    /* Tamaños de Card - responsivos */
    :host([size="xs"]) {
      max-width: 100%;
    }

    :host([size="s"]) {
      max-width: 100%;
    }

    :host([size="m"]) {
      max-width: 100%;
    }

    :host([size="l"]) {
      max-width: 100%;
    }

    :host([size="xl"]) {
      max-width: 100%;
    }

    /* Tamaños específicos solo en pantallas grandes */
    @media (min-width: 768px) {
      :host([size="xs"]) {
        max-width: 240px;
      }

      :host([size="s"]) {
        max-width: 320px;
      }

      :host([size="m"]) {
        max-width: 400px;
      }

      :host([size="l"]) {
        max-width: 600px;
      }

      :host([size="xl"]) {
        max-width: 800px;
      }
    }

    /* Elevaciones */
    :host([elevation="none"]) {
      box-shadow: none;
      border: 1px solid #e0e0e0;
    }

    :host([elevation="low"]) {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    :host([elevation="medium"]) {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
    }

    :host([elevation="high"]) {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .card-container {
      display: flex;
      width: 100%;
      height: 100%;
    }

    /* Layout vertical (default) */
    :host([layout="vertical"]) .card-container {
      flex-direction: column;
    }

    /* Layout horizontal */
    :host([layout="horizontal"]) .card-container {
      flex-direction: row;
    }

    /* Image position: top (vertical) */
    :host([layout="vertical"][image-position="top"]) .card-container {
      flex-direction: column;
    }

    /* Image position: bottom (vertical) */
    :host([layout="vertical"][image-position="bottom"]) .card-container {
      flex-direction: column-reverse;
    }

    /* Image position: left (horizontal) */
    :host([layout="horizontal"][image-position="left"]) .card-container {
      flex-direction: row;
    }

    /* Image position: right (horizontal) */
    :host([layout="horizontal"][image-position="right"]) .card-container {
      flex-direction: row-reverse;
    }

    /* Slots */
    .image-slot {
      flex-shrink: 0;
      display: flex;
      overflow: hidden;
    }

    :host([image-position="none"]) .image-slot {
      display: none;
    }

    /* Image size en layout horizontal */
    :host([layout="horizontal"]) .image-slot {
      width: 40%;
      min-width: 200px;
      height: 100%;
      min-height: 300px;
    }

    /* En móviles, todas las imágenes como en vertical */
    @media (max-width: 767px) {
      :host([layout="horizontal"]) .image-slot {
        width: 100% !important;
        height: 160px !important;
        max-height: 160px !important;
        min-height: 160px !important;
      }
    }

    /* Image size en layout vertical */
    :host([layout="vertical"]) .image-slot {
      width: 100%;
      height: 160px;
      max-height: 160px;
    }

    /* Image sizes según el tamaño de la card */
    :host([size="xs"][layout="vertical"]) .image-slot {
      height: 80px;
      max-height: 80px;
    }

    :host([size="s"][layout="vertical"]) .image-slot {
      height: 120px;
      max-height: 120px;
    }

    :host([size="m"][layout="vertical"]) .image-slot {
      height: 160px;
      max-height: 160px;
    }

    :host([size="l"][layout="vertical"]) .image-slot {
      height: 200px;
      max-height: 200px;
    }

    :host([size="xl"][layout="vertical"]) .image-slot {
      height: 240px;
      max-height: 240px;
    }

    .content-slot {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 1.25rem;
    }

    /* Padding extra cuando hay imagen arriba/abajo */
    :host([layout="vertical"]:not([image-position="none"])) .content-slot {
      padding-top: 0.5rem;
    }

    /* Padding extra cuando hay imagen izquierda/derecha */
    :host([layout="horizontal"]:not([image-position="none"])) .content-slot {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    /* Padding sizes - sobrescriben el padding base */
    :host([padding="s"]) .content-slot {
      padding: 0.75rem !important;
    }

    :host([padding="m"]) .content-slot {
      padding: 1.25rem !important;
    }

    :host([padding="l"]) .content-slot {
      padding: 1.75rem !important;
    }

    .footer-slot {
      border-top: 1px solid #e0e0e0;
      background: white;
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: stretch;
      padding: 1rem 1.25rem;
    }

    /* En móviles, footer con menos padding y botones más espaciados */
    @media (max-width: 767px) {
      .footer-slot {
        padding: 1rem;
        gap: 0.75rem;
        justify-content: flex-start;
      }

      .footer-slot ::slotted(button),
      .footer-slot ::slotted(lit-button) {
        flex: 1 1 auto;
        min-width: calc(50% - 0.375rem);
      }
    }

    /* Footer gap según el tamaño de la card - solo en pantallas grandes */
    @media (min-width: 768px) {
      :host([size="xs"]) .footer-slot {
        gap: 1rem;
        padding: 1.25rem 1.5rem;
      }

      :host([size="s"]) .footer-slot {
        gap: 1rem;
        padding: 1.375rem 1.625rem;
      }

      :host([size="m"]) .footer-slot {
        gap: 1.25rem;
        padding: 1.5rem 1.75rem;
      }

      :host([size="l"]) .footer-slot,
      :host([size="xl"]) .footer-slot {
        gap: 1.5rem;
        padding: 1.75rem 2rem;
      }
    }

    /* Footer alignment */
    :host([footer-align="left"]) .footer-slot {
      justify-content: flex-start;
    }

    :host([footer-align="center"]) .footer-slot {
      justify-content: center;
    }

    :host([footer-align="right"]) .footer-slot {
      justify-content: flex-end;
    }

    :host([footer-align="space-between"]) .footer-slot {
      justify-content: space-between;
    }

    :host([show-footer="false"]) .footer-slot {
      display: none;
    }

    /* Estilos por defecto para slots */
    ::slotted(h1), ::slotted(h2), ::slotted(h3) {
      margin: 0 0 0.75rem 0;
      line-height: 1.3;
    }

    ::slotted(p) {
      margin: 0;
      color: #666;
      line-height: 1.6;
    }

    ::slotted(h1) + ::slotted(p),
    ::slotted(h2) + ::slotted(p),
    ::slotted(h3) + ::slotted(p) {
      margin-top: 0.5rem;
    }

    ::slotted(img), ::slotted(lit-image) {
      width: 100%;
      height: 100%;
      min-height: 100%;
      object-fit: cover;
      display: block;
      flex-shrink: 0;
    }

    /* Estilos para botones en el footer */
    .footer-slot ::slotted(button),
    .footer-slot ::slotted(lit-button) {
      margin: 0;
      box-sizing: border-box;
    }

    /* Slot de acciones fuera de la card */
    .actions-slot {
      display: flex;
      gap: 1rem;
      padding: 1rem 1.25rem 0 1.25rem;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    .actions-slot ::slotted(button),
    .actions-slot ::slotted(lit-button) {
      margin: 0;
      flex: 0 0 auto;
    }

    :host([show-footer="false"]) .actions-slot {
      display: none;
    }
  `;

  constructor() {
    super();
    this.layout = 'vertical';
    this.imagePosition = 'top';
    this.showFooter = true;
    this.footerAlign = 'left';
    this.size = 'm';
    this.padding = 'm';
    this.elevation = 'medium';
  }

  render() {
    return html`
      <div class="card-wrapper">
        <div class="card-container">
          <div class="image-slot">
            <slot name="image"></slot>
          </div>
          
          <div class="content-slot">
            <slot></slot>
          </div>
        </div>
        
        <div class="footer-slot">
          <slot name="footer"></slot>
        </div>
      </div>
      
      <div class="actions-slot">
        <slot name="actions"></slot>
      </div>
    `;
  }
}

customElements.define('lit-card', LitCard);
