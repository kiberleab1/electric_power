import {
    CHANGE_NEW_NEW_ORDER_TABLE_DATA,
    DELETE_NEW_NEW_ORDER_TABLE_DATA,
    LOAD_NEW_NEW_ORDER_TABLE_DATA,
  } from '../actions/newNewOrderTableActions';
  
  const initialState = {
    items: [
      {
        title: 'Ben Pic',
        quantity: 54,
        sold: 124,
        total: '4,234 Birr',
        img: `${process.env.PUBLIC_URL}/img/shoes/01.png`,
      },
      {
        title: 'Tecno C9',
        quantity: 47,
        sold: 53,
        total: '1,754 Birr',
        img: `${process.env.PUBLIC_URL}/img/shoes/02.png`,
      },
      {
        title: 'Tecno S8',
        quantity: 60,
        sold: 21,
        total: '1,572 Birr',
        img: `${process.env.PUBLIC_URL}/img/shoes/03.png`,
      },
      {
        title: 'Samsung Edge S7',
        quantity: 71,
        sold: 456,
        total: '989 Birr',
        img: `${process.env.PUBLIC_URL}/img/shoes/04.png`,
      },
      {
        title: 'Lenovo yoga 2 pro',
        quantity: 82,
        sold: 122,
        total: '542 Birr',
        img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
      },
      {
        title: 'Apple iphone 7 plus',
        quantity: 66,
        sold: 412,
        total: '512 Birr',
        img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
      },
      {
        title: 'Apple iphone 6 plus',
        quantity: 77,
        sold: 142,
        total: '152 Birr',
        img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
      },
      {
        title: 'Xiaomi Mi 6',
        quantity: 95,
        sold: 82,
        total: '542 Birr',
        img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
      },
      {
        title: 'Sony Xperia X',
        quantity: 99,
        sold: 42,
        total: '532 Birr',
        img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
      },
      
      {
        title: 'T-shirt XX',
        quantity: 91,
        sold: 22,
        total: '1542 Birr',
        img: `${process.env.PUBLIC_URL}/img/shoes/05.png`,
      },
      
    ],
    data: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOAD_NEW_NEW_ORDER_TABLE_DATA: {
        const loadData = state.items[action.index];
        return { ...state, data: loadData };
      }
      case CHANGE_NEW_NEW_ORDER_TABLE_DATA: {
        const updatedItems = [...state.items];
        updatedItems[action.index] = action.data;
        return { ...state, items: updatedItems };
      }
      case DELETE_NEW_NEW_ORDER_TABLE_DATA:
        return { ...state, items: action.items };
      default:
        return state;
    }
  }
  