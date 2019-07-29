import React, { useContext } from 'react';
import { StoreContext } from './Store';

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
        {state.map(book => (
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>
              <button className="button muted-button" onClick={() => dispatch({action: 'DELETE', payload: book.isbn})}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;