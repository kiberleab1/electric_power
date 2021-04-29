import {
    CHANGE_NEW_OIL_TABLE_DATA,
    DELETE_NEW_OIL_TABLE_DATA,
    LOAD_NEW_OIL_TABLE_DATA,
  } from '../actions/newOilTableActions.js';
  
  const initialState = {
    items: [
      {
        title: 'Jet Fuel',
        quantity: 54,
        sold: 124,
        total: ' 41 234',
        img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
      },
      {
        title: 'Gasoline',
        quantity: 47,
        sold: 53,
        total: '21 754',
        img: `${process.env.PUBLIC_URL}/img/shoes/02.png`,
      },
      {
        title: 'Kerosene',
        quantity: 60,
        sold: 21,
        total: '51 572',
        img: `${process.env.PUBLIC_URL}/img/shoes/03.png`,
      },
      {
        title: 'Petroleum Sprit',
        quantity: 54,
        sold: 124,
        total: ' 84 234',
        img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
      },
      {
        title: 'Petroleum Naphtha',
        quantity: 47,
        sold: 53,
        total: ' 51 754',
        img: `${process.env.PUBLIC_URL}/img/shoes/02.png`,
      }, 
    ],
    data: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOAD_NEW_OIL_TABLE_DATA: {
        const loadData = state.items[action.index];
        return { ...state, data: loadData };
      }
      case CHANGE_NEW_OIL_TABLE_DATA: {
        const updatedItems = [...state.items];
        updatedItems[action.index] = action.data;
        return { ...state, items: updatedItems };
      }
      case DELETE_NEW_OIL_TABLE_DATA:
        return { ...state, items: action.items };
      default:
        return state;
    }
  }
  