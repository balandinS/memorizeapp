// __tests__/Intro-test.js
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from '../Carousel';
import CarouselItem from '../CarouselComponents/CarouselItem';
import Bullets from '../CarouselComponents/Bullets';
import {View, ScrollView} from 'react-native';

test('Snapshop Carousel', () => {
  const tree = renderer.create(<Carousel itemsPerInterval={1} />).toJSON();
  expect(tree).toMatchSnapshot();
});
//mock data
const itemsPerInterval = 1;

describe('Carousel', () => {
  it('Content Carousel', () => {
    const testRenderer = renderer.create(
      <Carousel itemsPerInterval={itemsPerInterval} />,
    );
  });
});
