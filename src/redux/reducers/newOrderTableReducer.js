import {
  CHANGE_NEW_ORDER_TABLE_DATA,
  DELETE_NEW_ORDER_TABLE_DATA,
  LOAD_NEW_ORDER_TABLE_DATA,
} from '../actions/newOrderTableActions';

const initialState = {
  items: [
    {
      title: '15',
      quantity: 54,
      sold: 124,
      total: ' 4 234',
      img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
    },
    {
      title: '14',
      quantity: 47,
      sold: 53,
      total: ' 1 754',
      img: `${process.env.PUBLIC_URL}/img/shoes/02.png`,
    },
    {
      title: '16',
      quantity: 60,
      sold: 21,
      total: ' 1 572',
      img: `${process.env.PUBLIC_URL}/img/shoes/03.png`,
    },
    {
      title: '18',
      quantity: 71,
      sold: 456,
      total: '989',
      img: `${process.env.PUBLIC_URL}/img/shoes/04.png`,
    },
    {
      title: '20',
      quantity: 82,
      sold: 42,
      total: '542',
      img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
    },
    {
      title: '17',
      quantity: 66,
      sold: 42,
      total: '542',
      img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
    },
    {
      title: '19',
      quantity: 77,
      sold: 42,
      total: '542',
      img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
    },
    {
      title: '23',
      quantity: 95,
      sold: 42,
      total: '542',
      img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
    },
    {
      title: '24',
      quantity: 99,
      sold: 42,
      total: '542',
      img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
    },
    
    {
      title: '22',
      quantity: 91,
      sold: 42,
      total: '542',
      img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
    },
    
    {
      title: '21',
      quantity: 86,
      sold: 42,
      total: '542',
      img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
    },
  ],
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_NEW_ORDER_TABLE_DATA: {
      const loadData = state.items[action.index];
      return { ...state, data: loadData };
    }
    case CHANGE_NEW_ORDER_TABLE_DATA: {
      const updatedItems = [...state.items];
      updatedItems[action.index] = action.data;
      return { ...state, items: updatedItems };
    }
    case DELETE_NEW_ORDER_TABLE_DATA:
      return { ...state, items: action.items };
    default:
      return state;
  }
}
