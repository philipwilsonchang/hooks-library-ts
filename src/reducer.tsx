import { Book, IState } from './Store';

export type ReducerAction = {
  type: 'ADD' | 'DELETE',
  payload: Book,
};

function reducer(state: IState, action: ReducerAction): IState {
  console.log(action);
  let newState = {...state};
  switch (action.type) {
    case 'ADD':
      newState.books.push(action.payload);
      console.log(Object.is(newState, state));
      return newState;
    case 'DELETE':
      newState.books = newState.books.filter((book: Book) => {
        if (book !== action.payload) {
          return true
        }
        return false
      });
      console.log(newState);
      return newState;
    default:
      console.log("ERROR ON ACTION:", action)
      return state;      
  }
}

export default reducer;