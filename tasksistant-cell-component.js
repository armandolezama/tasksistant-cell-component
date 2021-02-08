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
    this.nodeContent = {};
    this.isNodeContentFilled = false;
    this.sidePrototype = {
      reference: {},
      status: "empty"
    }
    this.sides = {
      left: {...this.sidePrototype},
      right: {...this.sidePrototype},
      top: {...this.sidePrototype},
      bottom: {...this.sidePrototype}
    };
    this.nodeInnerText = '';
  };

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
    return {
      nodeContent: { type: Object },
      isNodeContentFilled: { type: Boolean },
      sidePrototype: { type: Object },
      left: { type: Object },
      right: { type: Object },
      top: { type: Object },
      bottom: { type: Object },
      nodeInnerText: {type: String},
    };
  };

  static get styles() {
    return styles;
  };

  setNodeInnerText(innerText) {
    if (typeof innerText === "string") {
      this.nodeInnerText = innerText;
    };
  };

  setNodeContent(nodeNewContent = {}) {
    this.nodeContent = {...nodeNewContent};
    this.isNodeContentFilled = true;
    this.dispatchEvent(new CustomEvent('tasksistant-cell-component-node-content-added', {
      detail: {
        nodeContent: this.nodeContent,
        isNodeFilled: this.isNodeContentFilled
      }
    }));
  };

  setNewReference(direction, reference){
    this.sides[`${direction}`].reference = reference;
    this.sides[`${direction}`].status = "filled";
    this.dispatchEvent(new CustomEvent('tasksistant-cell-component-new-reference-added', {
      detail: { side: direction }
    }));
  };

  cleanNodeContent(){
    this.nodeContent = {};
    this.isNodeContentFilled = false;
    this.dispatchEvent(new CustomEvent('tasksistant-cell-component-node-content-deleted', {
      detail: {
        nodeContent: this.nodeContent,
        isNodeFilled: this.isNodeContentFilled
      }
    }));
  };

  render() {
    return html`
      <div id="main-container">
        <div id="node-inner-text">${this.nodeInnerText}</div>
        <div id="node-slot">
          <slot name="node-slot"> </slot>
        </div>
      </div>
    `;
  };
}
customElements.define("tasksistant-cell-component", TasksistantCellComponent);
