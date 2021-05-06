// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from '../Carousel';

test('renders correctly', () => {
  const tree = renderer.create(<Carousel itemsPerInterval={1} />).toJSON();
  expect(tree).toMatchSnapshot();
});
