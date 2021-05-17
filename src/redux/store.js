import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({ contacts: contactsReducer });
const store = createStore(rootReducer, composeWithDevTools());

// const middleWare = [...getDefaultMiddleware(), logger];
// const store = configureStore({
//   reducer: { contacts: contactsReducer },
//   middleWare,
//   devTools: process.env.NODE_ENV === 'development',
// });
export default store;
