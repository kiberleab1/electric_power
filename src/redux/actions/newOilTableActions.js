export const LOAD_NEW_OIL_TABLE_DATA = 'LOAD_NEW_ORDER_TABLE_DATA';
export const CHANGE_NEW_OIL_TABLE_DATA = 'CHANGE_NEW_ORDER_TABLE_DATA';
export const DELETE_NEW_OIL_TABLE_DATA = 'DELETE_NEW_ORDER_TABLE_DATA';

export function loadNewOilTableData(index) {
  return {
    type: LOAD_NEW_OIL_TABLE_DATA,
    index,
  };
}

export function changeNewOilTableData(data, index) {
  return {
    type: CHANGE_NEW_OIL_TABLE_DATA,
    data,
    index,
  };
}

export function deleteNewOilTableData(items) {
  return {
    type: DELETE_NEW_OIL_TABLE_DATA,
    items,
  };
}
