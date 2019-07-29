import React, { useReducer } from 'react';
import reducer from './reducer';

const initialState = [
  {title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '1'},
  {title: 'The Bible', author: 'Various', isbn: '2'}
]

export const StoreContext = React.createContext(initialState);

function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}

export default Store;