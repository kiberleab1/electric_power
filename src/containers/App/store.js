import { combineReducers, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  cryptoTableReducer,
  newOrderTableReducer,
  sidebarReducer,
  themeReducer,
  customizerReducer,
  newCommoditiesTableReducer,
  todoReducer,
  rtlReducer,
  authReducer,
  newOilTableReducer,
} from '../../redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  rtl: rtlReducer,
  sidebar: sidebarReducer,
  cryptoTable: cryptoTableReducer,
  newOrder: newOrderTableReducer,
  newCommodities: newCommoditiesTableReducer,
  newOil: newOilTableReducer,
  customizer: customizerReducer,
  todos: todoReducer,
  user: authReducer,
});
const store = createStore(reducer);

export default store;
