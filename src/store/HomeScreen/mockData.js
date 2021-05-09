import {TABS_NAME} from '../../utilities/constans';
export const tabsValues = [
  {
    tabType: TABS_NAME.tabWomen,
    tabLabel: 'Women',
    values: {
      fetchData: 'women',
      subcategories: [],
    },
  },
  {
    tabType: TABS_NAME.tabMen,
    tabLabel: 'Men',
    values: {
      fetchData: 'Men',
      subcategories: [],
    },
  },
  {
    tabType: TABS_NAME.tabChildren,
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
    tabType: TABS_NAME.tabShoes,
    tabLabel: 'Shoes',
    values: {
      fetchData: 'shoes',
      subcategories: [],
    },
  },
  {
    tabType: TABS_NAME.tabAccessoties,
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
];
