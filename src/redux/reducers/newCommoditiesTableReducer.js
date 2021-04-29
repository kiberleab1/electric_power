import {
    CHANGE_NEW_COMMODITIES_TABLE_DATA,
    DELETE_NEW_COMMODITIES_TABLE_DATA,
    LOAD_NEW_COMMODITIES_TABLE_DATA,
  } from '../actions/newCommoditiesTableActions';
  
  const initialState = {
    items: [
      {
        title: 'Biodiessel',
        quantity: 54,
        sold: 124,
        total: ' 41 234',
        img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
      },
      {
        title: 'CNG',
        quantity: 47,
        sold: 53,
        total: '21 754',
        img: `${process.env.PUBLIC_URL}/img/shoes/02.png`,
      },
      {
        title: 'Ethanol',
        quantity: 60,
        sold: 21,
        total: '51 572',
        img: `${process.env.PUBLIC_URL}/img/shoes/03.png`,
      },
      {
        title: 'Propane',
        quantity: 54,
        sold: 124,
        total: ' 84 234',
        img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
      },
      
    ],
    data: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOAD_NEW_COMMODITIES_TABLE_DATA: {
        const loadData = state.items[action.index];
        return { ...state, data: loadData };
      }
      case CHANGE_NEW_COMMODITIES_TABLE_DATA: {
        const updatedItems = [...state.items];
        updatedItems[action.index] = action.data;
        return { ...state, items: updatedItems };
      }
      case DELETE_NEW_COMMODITIES_TABLE_DATA:
        return { ...state, items: action.items };
      default:
        return state;
    }
  }
  