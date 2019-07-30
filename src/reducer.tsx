import { Book } from './Store';

export type ReducerAction = {
  type: string,
  payload: any,
};

function reducer(state: any, action: ReducerAction) {
  console.log(action);
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter((book: Book) => {
        if (book.isbn !== action.payload) {
          return true
        }
        return false
      });
    default:
      console.log("ERROR ON ACTION:", action)
      return state;      
  }
}

export default reducer;