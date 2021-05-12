import React from 'react';
import {FlatList} from 'react-native';
import ListHeaderComponent from './ListHeaderComponentStyle';
import Item from './ListItem';
const mockItems = [
  {
    id: 1,
    price: 34,
  },
  {
    id: 2,
    price: 34,
  },
  {
    id: 3,
    price: 34,
  },
];

const ProductList = (props) => {
  const {values} = props.data;
  const renderItem = ({item}) => <Item item={item} />;
  const getKey = (item) => `key ${item.id}`;
  return (
    <FlatList
      data={mockItems}
      ListHeaderComponent={
        <ListHeaderComponent values={values.subcategories} />
      }
      renderItem={renderItem}
      keyExtractor={getKey}
    />
  );
};

export default ProductList;
