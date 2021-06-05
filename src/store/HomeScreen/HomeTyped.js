//@flow
type Subcategories = {
  name: string,
  image: number,
};
type ValueTab = {
  fetchData: string,
  subcategories: Array<Subcategories>,
};
type DataTabs = {
  tabType: string,
  tabLabel: string,
  values: ValueTab,
};
export type InitalState = {
  selectedCategorie: string,
  dataTabs: Array<DataTabs>,
  explorData: Array<Subcategories>,
};
