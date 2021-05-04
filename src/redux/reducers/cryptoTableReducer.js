import {
  CHANGE_CRYPTO_TABLE_DATA,
  DELETE_CRYPTO_TABLE_DATA,
  LOAD_CRYPTO_TABLE_DATA,
} from '../actions/cryptoTableActions';

const initialState = {
  items: [
    {
      name: 'Onion',
      market_cap: '231 131 454 444 Tones',
      price: '7 432,23 birr',
      volume: '12 432 323 455 Tones',
      supply: '8 432 323 Tones',
      change: '0,59%',
      chart: 'btc',
    },
    {
      name: 'Teff',
      market_cap: '31 131 454 444 Tones',
      price: '1 432,23 birr',
      volume: '5 432 323 455 Tones',
      supply: '8 432 323 Tones',
      change: '0,45%',
      chart: 'eth',
    },
    {
      name: 'Sorghum',
      market_cap: '181 131 454 444 Tones',
      price: '9 482,23 birr',
      volume: '34 432 323 455 Tones',
      supply: '45 432 323 Tones',
      change: '0,79%',
      chart: 'xrp',
    },
    {
      name: 'Potato',
      market_cap: '231 131 454 444 Tones',
      price: '8 652,23 birr',
      volume: '432 323 455 Tones',
      supply: '78 482 323 Tones',
      change: '0,49%',
      chart: 'bch',
    },
    {
      name: 'Wheat',
      market_cap: '234 131 434 664 Tones',
      price: '632,23 birr',
      volume: '32 323 455 Tones',
      supply: '332 323 Tones',
      change: '0,23%',
      chart: 'eos',
    },
    {
      name: 'Sunflower',
      market_cap: '11 278 444 Tones',
      price: '1 892,23 birr',
      volume: '11 2 323 455 Tones',
      supply: '11 2 323 Tones',
      change: '0,99%',
      chart: 'ltc',
    },
    {
      name: 'Sesame Seed',
      market_cap: '178 131 544 244 Tones',
      price: '16 423,23 birr',
      volume: '162 323 435 Tones',
      supply: '162 323 Tones',
      change: '0,19%',
      chart: 'ada',
    },
    {
      name: 'Buna',
      market_cap: '176 131 334 444 Tones',
      price: '26 422,223 birr',
      volume: '26 422 333 455 Tones',
      supply: '26 422 323 Tones',
      change: '0,09%',
      chart: 'xlm',
    },
    {
      name: 'Tea',
      market_cap: '431 231 494 444 Tones',
      price: '61 432,23 birr',
      volume: '16 322 323 455 Tones',
      supply: '16 732 323 Tones',
      change: '0,39%',
      chart: 'iota',
    },
    {
      name: 'Chat',
      market_cap: '181 191 454 444 Tones',
      price: '9 132,23 birr',
      volume: '19 932 323 455 Tones',
      supply: '26 832 323 Tones',
      change: '0,23%',
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
