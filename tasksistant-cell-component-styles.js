import { css } from "lit-element";

export default css`
  :host {
    background: var(--tasksistant-cell-component-host-background, #ffffff);
    display: var(--tasksistant-cell-component-host-display, inline-flex);
    margin: var(--tasksistant-cell-component-host-margin, 0);
    padding: var(--tasksistant-cell-component-host-padding, 0);;
  }

  #main-container {
    background: var(--tasksistant-cell-component-main-container-background, #ffffff);
    display: var(--tasksistant-cell-component-main-containe-display, inline-flex);
    flex-direction: column;
    border: var(--tasksistant-cell-component-main-container-border, solid);
    width: var(--tasksistant-cell-component-main-container-width, 300px);
    height: var(--tasksistant-cell-component-main-container-height, 400px);
  }

  #node-inner-text {
    background: var(--tasksistant-cell-component-node-inner-text-background, #ffffff);
    display: var(--tasksistant-cell-component-node-inner-text-display, inline-flex);
    border: var(--tasksistant-cell-component-node-inner-text-border, solid);
    width: var(--tasksistant-cell-component-node-inner-text-width, 300px);
    height: var(--tasksistant-cell-component-node-inner-text-height, 197px);
  }

  #node-slot {
    background: var(--tasksistant-cell-component-node-slot-background, #ffffff);
    display: var(--tasksistant-cell-component-node-slot-display, inline-flex);
    border: var(--tasksistant-cell-component-node-slot-border, solid);
    width: var(--tasksistant-cell-component-node-slot-width, 300px);
    height: var(--tasksistant-cell-component-node-slot-height, 197px);
  }
`;
