/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Text, View } from 'react-native';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';
import { shallow } from "enzyme";

it('renders correctly', () => {
  //renderer.create(<App />);
  const wrapper = shallow(<App/>);
  expect(wrapper.find(Text).length).toBe(1);
  expect(wrapper.find(View).length).toBe(1);
});

