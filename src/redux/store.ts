import { combineReducers, createStore, Store } from 'redux';
import categoriesReducer from './categoriesReducer';

const reducers = combineReducers({
  categories: categoriesReducer,
});

const store: Store<RootState> = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export default store;
