import React, { useReducer, Dispatch } from 'react';
import reducer, { ReducerAction } from './reducer';

export type Book = {
	title: string,
	author: string,
	isbn: string
};

export interface IState {
	books: Book[]
}

interface IContextProps {
	state: IState;
	dispatch: Dispatch<ReducerAction>;
}

let initialState: IState = {
	books: [
  		{title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '1'},
  		{title: 'The Bible', author: 'Various', isbn: '2'}
	]
};

export const StoreContext = React.createContext({} as IContextProps);

function Store({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}

export default Store;