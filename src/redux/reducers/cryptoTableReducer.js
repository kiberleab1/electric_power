import {
  CHANGE_CRYPTO_TABLE_DATA,
  DELETE_CRYPTO_TABLE_DATA,
  LOAD_CRYPTO_TABLE_DATA,
} from '../actions/cryptoTableActions';

const initialState = {
  items: [
    {
      name: 'Onion',
      market_cap: '131 131 454 444 Tones',
      price: '6 432,23 birr',
      volume: '6 432 323 455 Tones',
      supply: '6 432 323 Tones',
      change: '0,59%',
      chart: 'btc',
    },
    {
      name: 'Teff',
      market_cap: '131 131 454 444 Tones',
      price: '6 432,23 birr',
      volume: '6 432 323 455 Tones',
      supply: '6 432 323 Tones',
      change: '0,59%',
      chart: 'eth',
    },
    {
      name: 'Sorghum',
      market_cap: '131 131 454 444 Tones',
      price: '6 432,23 birr',
      volume: '6 432 323 455 Tones',
      supply: '6 432 323 Tones',
      change: '0,59%',
      chart: 'xrp',
    },
    {
      name: 'Potato',
      market_cap: '131 131 454 444 Tones',
      price: '6 432,23 birr',
      volume: '6 432 323 455 Tones',
      supply: '6 432 323 Tones',
      change: '0,59%',
      chart: 'bch',
    },
    {
      name: 'Wheat',
      market_cap: '131 131 454 444 Tones',
      price: '6 432,23 birr',
      volume: '6 432 323 455 Tones',
      supply: '6 432 323 Tones',
      change: '0,59%',
      chart: 'eos',
    },
    {
      name: 'Sunflower',
      market_cap: '131 131 454 444 Tones',
      price: '6 432,23 birr',
      volume: '6 432 323 455 Tones',
      supply: '6 432 323 Tones',
      change: '0,59%',
      chart: 'ltc',
    },
    {
      name: 'Sesame Seed',
      market_cap: '131 131 454 444 Tones',
      price: '6 432,23 birr',
      volume: '6 432 323 455 Tones',
      supply: '6 432 323 Tones',
      change: '0,59%',
      chart: 'ada',
    },
    {
      name: 'Buna',
      market_cap: '131 131 454 444 Tones',
      price: '6 432,23 birr',
      volume: '6 432 323 455 Tones',
      supply: '6 432 323 Tones',
      change: '0,59%',
      chart: 'xlm',
    },
    {
      name: 'Tea',
      market_cap: '131 131 454 444 Tones',
      price: '6 432,23 birr',
      volume: '6 432 323 455 Tones',
      supply: '6 432 323 Tones',
      change: '0,59%',
      chart: 'iota',
    },
    {
      name: 'Chat',
      market_cap: '131 131 454 444 Tones',
      price: '6 432,23 birr',
      volume: '6 432 323 455 Tones',
      supply: '6 432 323 Tones',
      change: '0,59%',
      chart: 'neo',
    },
  ],
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CRYPTO_TABLE_DATA: {
      const loadData = state.items[action.index];
      return { ...state, data: loadData };
    }
    case CHANGE_CRYPTO_TABLE_DATA: {
      const updatedItems = [...state.items];
      updatedItems[action.index] = action.data;
      return { ...state, items: updatedItems };
    }
    case DELETE_CRYPTO_TABLE_DATA:
      return { ...state, items: action.items };
    default:
      return state;
  }
}
