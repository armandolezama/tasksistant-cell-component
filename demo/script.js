import mocks from './mocks';

customElements.whenDefined('tasksistant-cell-component').then(() => {
    const tasksistantCellsComponent = document.querySelector('tasksistant-cell-component');
    
    tasksistantCellsComponent.setNodeInnerText(mocks.innerHTMLMock);
})