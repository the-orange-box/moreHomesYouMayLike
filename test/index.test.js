import indexApp from '../client/src/index.jsx';
import React from 'react';
import {shallow} from enzyme;

describe('Top react component unit testing', () => {
  describe('Rendering test', () => {
    test('It should render react component (the whole page)', () => {
      let tester = shallow(<App />);

    });
  });
});