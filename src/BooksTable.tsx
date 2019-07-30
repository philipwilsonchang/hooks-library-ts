import React, { useContext } from 'react';
import { Book, StoreContext } from './Store';

const BooksTable = () => {
  const {state, dispatch} = useContext(StoreContext);
  console.log("BooksTable State:", state);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {state.books.map((book: Book) => (
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>
              <button className="button muted-button" onClick={() => dispatch({type: 'DELETE', payload: book})}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;