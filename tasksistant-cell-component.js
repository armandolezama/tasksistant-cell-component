import { LitElement, html } from "lit-element";
import styles from "./tasksistant-cell-component-styles";

export class TasksistantCellComponent extends LitElement {
  /**
   * Instance of the element is created/upgraded. Useful for initializing
   * state, set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    this._nodeContent = {};
    this.filled = false;
    this.sidePrototype = {
      status: "", 
      cellReference : {}
    };
    this.left = { ...this.sidePrototype };
    this.right = { ...this.sidePrototype };
    this.top = { ...this.sidePrototype };
    this.bottom = { ...this.sidePrototype };
    this._nodeInnerText = '';
  }

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
    return {
      _nodeContent: { type: Object },
      filled: { type: Boolean },
      sidePrototype: { type: Object },
      left: { type: Object },
      right: { type: Object },
      top: { type: Object },
      bottom: { type: Object },
      _nodeInnerText: {type: String},
    };
  }

  static get styles() {
    return styles;
  }

  setNodeInnerText(innerText) {
    if (typeof innerText === "string") {
      this._nodeInnerText = innerText;
    };
  };

  setNodeContent(nodeNewContent = {}) {
    this._nodeContent = {...nodeNewContent};
  }

  render() {
    return html`
      <div id="main-container">
        <div id="node-inner-text">${this._nodeInnerText}</div>
        <div id="node-slot">
          <slot name="node-slot"> </slot>
        </div>
      </div>
    `;
  }
}
customElements.define("tasksistant-cell-component", TasksistantCellComponent);
