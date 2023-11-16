export interface ICart {
  selectedItemsIds: number[];
  selectItem: (id: number) => void;
}
