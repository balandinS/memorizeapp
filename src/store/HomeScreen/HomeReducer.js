import * as TYPES from './HomeTypes';

const TAB_WOMEM = 'WOMEM';
const TAB_MEN = 'MEM';
const TAB_CHILDREN = 'CHILDREN';
const TAB_SHOES = 'SHOES';
const TAB_ACCESSORIES = 'ACCESSORIES';

const INITAIL_STATE = {
  selectedCategorie: 'Women',
  dataTabs: [
    {
      tabType: TAB_WOMEM,
      tabLabel: 'Women',
      values: {
        fetchData: 'women',
        subcategories: [],
      },
    },
    {
      tabType: TAB_MEN,
      tabLabel: 'Men',
      values: {
        fetchData: 'Men',
        subcategories: [],
      },
    },
    {
      tabType: TAB_CHILDREN,
      tabLabel: 'Children',
      values: {
        fetchData: 'children',
        subcategories: [
          {
            name: 'Childrens',
            image: require('../../assessts/images/subcategories_children.jpg'),
          },
          {
            name: 'Babys',
            image: require('../../assessts/images/subcategories_baby.jpg'),
          },
        ],
      },
    },
    {
      tabType: TAB_SHOES,
      tabLabel: 'Shoes',
      values: {
        fetchData: 'shoes',
        subcategories: [],
      },
    },
    {
      tabType: TAB_ACCESSORIES,
      tabLabel: 'Accessories',
      values: {
        fetchData: 'accessories',
        subcategories: [
          {
            name: 'Accessories',
            image: require('../../assessts/images/subcategoties_accessories.jpg'),
          },
          {
            name: 'Watches',
            image: require('../../assessts/images/subcategorie_watches.jpg'),
          },
          {
            name: 'Bags',
            image: require('../../assessts/images/subcategories_bags.jpg'),
          },
          {
            name: 'Jewelerys',
            image: require('../../assessts/images/subcategories_jewelery.jpg'),
          },
        ],
      },
    },
  ],
  dataFetched: [],
};

export default (state = INITAIL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case TYPES.FETCH_CATEGORIES:
      return {
        ...state,
        selectedCategorie: payload,
      };

    default:
      return state;
  }
};
