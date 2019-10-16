// import indexApp from '../client/src/index.jsx';
// import React from 'react';
// import {shallow} from enzyme;
const indexApp = require('../client/src/index.jsx');
const React = require('react');
const {shallow} = require('enzyme');

describe('Top react component unit testing', () => {
  describe('Rendering test', () => {
    test('It should render react component (the whole page)', () => {
      const wrapper = shallow(<App />);
    });
  });
});