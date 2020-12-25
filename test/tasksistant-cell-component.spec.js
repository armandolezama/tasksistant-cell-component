/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import '../tasksistant-cell-component';
import nodeContentForTest from './mocks';


describe('Suite cases', () => {
  it('Node property set', async () => {
    const element = await fixture('<tasksistant-cell-component></tasksistant-cell-component>');
    element.setNodeContent(nodeContentForTest);
    assert.deepEqual(element._nodeContent, nodeContentForTest);
  });
})