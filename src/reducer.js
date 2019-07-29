function reducer(state, action) {
  console.log(action);
  switch (action.action) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(book => {
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