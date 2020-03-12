import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component test', () => {
  const wrapper = shallow(<App />);
  test('defined value assignation', () => {
    expect(wrapper).toBeDefined();
  });
});
