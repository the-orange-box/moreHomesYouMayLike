import App from '../client/src/App.jsx';
import React from 'react';
import {shallow} from 'enzyme';

describe('Top react component unit testing', () => {
  describe('Rendering test', () => {
    test('It should render react component (the whole page)', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBe(true);
    });
  });
});