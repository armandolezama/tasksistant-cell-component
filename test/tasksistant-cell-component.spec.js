/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";
import '../tasksistant-cell-component';
import mocks from './mocks';


describe('Suite cases', () => {
  it('Node property set', async () => {
    const element = await fixture('<tasksistant-cell-component></tasksistant-cell-component>');
    element.setNodeContent(mocks.nodeContentForTest);
    assert.deepEqual(element._nodeContent, mocks.nodeContentForTest);
  });
  it('Inner html validation', async () => {
    const element = await fixture('<tasksistant-cell-component></tasksistant-cell-component>');
    element.setNodeInnerHTML(mocks.innerHTMLMock);
    assert.strictEqual(element._nodeInnerHTML, mocks.innerHTMLMock);
  })
})