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
    this.nodeContent = () => {};
    this.filled = false;
    this.sidePrototype = () => {
      status: "", (cellReference = () => {});
    };
    this.left = { ...this.sidePrototype };
    this.right = { ...this.sidePrototype };
    this.top = { ...this.sidePrototype };
    this.bottom = { ...this.sidePrototype };
    this._nodeInnerHTML = "";
  }

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
    return {
      nodeContent: { type: Object },
      filled: { type: Boolean },
      sidePrototype: { type: Object },
      left: { type: Object },
      right: { type: Object },
      top: { type: Object },
      bottom: { type: Object },
      _nodeInnerHTML: {},
    };
  }

  static get styles() {
    return styles;
  }

  setNodeInnerHTML(innerHTML) {
    if (typeof innerHTML === "string") {
      this._nodeInnerHTML = innerHTML;
    }
  }

  render() {
    return html`
      <div class="node-inner-html">${this._nodeInnerHTML}</div>
      <div>
        <slot name="node-slot"> </slot>
      </div>
    `;
  }
}
customElements.define("tasksistant-cell-component", TasksistantCellComponent);
