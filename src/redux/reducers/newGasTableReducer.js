import {
    CHANGE_NEW_GAS_TABLE_DATA,
    DELETE_NEW_GAS_TABLE_DATA,
    LOAD_NEW_GAS_TABLE_DATA,
  } from '../actions/newGasTableActions.js';
  
  const initialState = {
    items: [
      {
        title: '',
        quantity: 54,
        sold: 124,
        total: ' 41 234',
        img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
      },
      {
        title: 'Silver',
        quantity: 47,
        sold: 53,
        total: '21 754',
        img: `${process.env.PUBLIC_URL}/img/shoes/02.png`,
      },
      {
        title: 'Gold',
        quantity: 60,
        sold: 21,
        total: '51 572',
        img: `${process.env.PUBLIC_URL}/img/shoes/03.png`,
      },
      {
        title: 'as',
        quantity: 54,
        sold: 124,
        total: ' 84 234',
        img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
      },
      {
        title: 'Silver',
        quantity: 47,
        sold: 53,
        total: ' 51 754',
        img: `${process.env.PUBLIC_URL}/img/shoes/02.png`,
      },
      {
        title: 'Gold',
        quantity: 60,
        sold: 21,
        total: ' 16 572',
        img: `${process.env.PUBLIC_URL}/img/shoes/03.png`,
      },
      {
        title: 'Platinium',
        quantity: 54,
        sold: 124,
        total: ' 44 234',
        img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
      },
      {
        title: 'Silver',
        quantity: 47,
        sold: 53,
        total: ' 13 754',
        img: `${process.env.PUBLIC_URL}/img/shoes/02.png`,
      },
      {
        title: 'Gold',
        quantity: 60,
        sold: 21,
        total: ' 12 572',
        img: `${process.env.PUBLIC_URL}/img/shoes/03.png`,
      },
      {
        title: 'Platinium',
        quantity: 54,
        sold: 124,
        total: ' 49 234',
        img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
      },
      {
        title: 'Silver',
        quantity: 47,
        sold: 53,
        total: ' 13 754',
        img: `${process.env.PUBLIC_URL}/img/shoes/02.png`,
      },
      
    ],
    data: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOAD_NEW_GAS_TABLE_DATA: {
        const loadData = state.items[action.index];
        return { ...state, data: loadData };
      }
      case CHANGE_NEW_GAS_TABLE_DATA: {
        const updatedItems = [...state.items];
        updatedItems[action.index] = action.data;
        return { ...state, items: updatedItems };
      }
      case DELETE_NEW_GAS_TABLE_DATA:
        return { ...state, items: action.items };
      default:
        return state;
    }
  }
  